#!/usr/bin/env python3
"""
process.py — image pipeline for the sotiriadromou.gr gallery.

Two subcommands:

  scan
      Finds images in  content/  that have NOT been processed before,
      EXIF auto-rotates them, drops duplicates, resizes/compresses, and
      writes web-ready previews to  content/.staging/ .
      Prints a JSON manifest (one row per new image) for the agent to
      inspect and title.

  apply <plan.json>
      Takes a plan the agent wrote (list of objects: staged, slug,
      rotation, ...), applies the chosen rotation, and copies each image
      to  images/erga/<slug>.jpg . Records processed originals so they
      are never re-imported. Rotation is one of:
      "none" | "90_cw" | "90_ccw" | "180".

The agent edits data/artworks.js itself (add one block per new image);
this script never touches that file.

Nothing here is specific to a machine — paths are derived from the repo
root (three levels up from this file). Requires Pillow: pip install Pillow
"""
import hashlib
import json
import shutil
import sys
from pathlib import Path

from PIL import Image, ImageOps

REPO = Path(__file__).resolve().parents[3]
CONTENT = REPO / "content"
STAGING = CONTENT / ".staging"
MANIFEST = CONTENT / ".processed.json"
ERGA = REPO / "images" / "erga"

MAX_EDGE = 1400
QUALITY = 85
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".heic", ".bmp", ".tif", ".tiff"}
ROT = {"90_cw": Image.ROTATE_270, "90_ccw": Image.ROTATE_90, "180": Image.ROTATE_180}


def md5(path: Path) -> str:
    return hashlib.md5(path.read_bytes()).hexdigest()


def load_manifest() -> dict:
    if MANIFEST.exists():
        return json.loads(MANIFEST.read_text(encoding="utf-8"))
    return {}


def save_manifest(m: dict) -> None:
    MANIFEST.write_text(json.dumps(m, ensure_ascii=False, indent=1), encoding="utf-8")


def normalize(img: Image.Image) -> Image.Image:
    img = ImageOps.exif_transpose(img)            # honor any EXIF orientation
    if img.mode != "RGB":
        img = img.convert("RGB")
    w, h = img.size
    scale = MAX_EDGE / max(w, h)
    if scale < 1:
        img = img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    return img


def cmd_scan() -> None:
    manifest = load_manifest()
    seen = set(manifest.keys())                    # md5s already in the gallery
    if STAGING.exists():
        shutil.rmtree(STAGING)
    STAGING.mkdir(parents=True, exist_ok=True)

    rows, batch_seen = [], set()
    files = sorted(
        (p for p in CONTENT.iterdir()
         if p.is_file() and p.suffix.lower() in EXTS and not p.name.startswith(".")),
        key=lambda p: p.name.lower(),
    )
    for f in files:
        h = md5(f)
        if h in seen:
            continue                               # already imported in a past run
        if h in batch_seen:
            rows.append({"original": f.name, "status": "duplicate_in_batch"})
            continue
        batch_seen.add(h)
        try:
            img = normalize(Image.open(f))
        except Exception as e:                      # noqa: BLE001
            rows.append({"original": f.name, "status": f"error: {e}"})
            continue
        staged_name = f"{len(rows):02d}_{f.stem.lower()}.jpg"
        staged = STAGING / staged_name
        img.save(staged, "JPEG", quality=QUALITY, optimize=True, progressive=True)
        rows.append({
            "original": f.name,
            "md5": h,
            "staged": str(staged),
            "size": list(img.size),
            "status": "new",
        })

    new = [r for r in rows if r["status"] == "new"]
    print(json.dumps(rows, ensure_ascii=False, indent=1))
    print(
        f"\n{len(new)} new image(s) staged in {STAGING}. "
        f"Read each 'staged' file, decide rotation/title/category/tags/story, "
        f"then write a plan and run: python process.py apply plan.json",
        file=sys.stderr,
    )


def cmd_apply(plan_path: str) -> None:
    plan = json.loads(Path(plan_path).read_text(encoding="utf-8"))
    manifest = load_manifest()
    ERGA.mkdir(parents=True, exist_ok=True)
    done = []
    for item in plan:
        staged = Path(item["staged"])
        slug = item["slug"]
        rot = item.get("rotation", "none")
        dst = ERGA / f"{slug}.jpg"
        img = Image.open(staged)
        if rot in ROT:
            img = img.transpose(ROT[rot])
        img.save(dst, "JPEG", quality=88, optimize=True, progressive=True)
        if item.get("md5"):
            manifest[item["md5"]] = {"original": item.get("original", ""), "slug": slug}
        done.append(f"{slug}.jpg ({rot})")
    save_manifest(manifest)
    if STAGING.exists():
        shutil.rmtree(STAGING)
    print("\n".join(done))
    print(f"\n{len(done)} image(s) written to images/erga/. "
          f"Now add matching blocks to data/artworks.js.", file=sys.stderr)


if __name__ == "__main__":
    if len(sys.argv) >= 2 and sys.argv[1] == "scan":
        cmd_scan()
    elif len(sys.argv) >= 3 and sys.argv[1] == "apply":
        cmd_apply(sys.argv[2])
    else:
        print(__doc__)
        sys.exit(1)
