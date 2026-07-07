---
name: process-content
description: Process new artwork photos the user dropped into the content/ folder of the sotiriadromou.gr gallery — auto-rotate, dedupe, resize/compress, decide title/category/tags/story by looking at each image, add them to data/artworks.js, and preview. Use whenever the user says they added/put images in content/, or asks to import/process new artworks for this gallery.
---

# Process new gallery content

Import new artwork photos from `content/` into the Σοφία Δημητροπούλου
portfolio site. The photos come straight from a phone/Viber and usually have
**no EXIF orientation**, so many are sideways and must be checked by eye. The
artist also **paints the title, date and signature onto the canvas** (often
vertically along an edge) — read those to title the work correctly.

## Steps

1. **Stage the new images.** From the repo root:
   ```
   python .claude/skills/process-content/process.py scan
   ```
   This auto-rotates (EXIF), drops duplicates, resizes to ≤1400px, and writes
   web-ready copies to `content/.staging/`. It prints a JSON manifest — each
   `"status":"new"` row has a `staged` path and `md5`. Already-imported photos
   (tracked in `content/.processed.json`) are skipped automatically.

2. **Look at every staged image.** Use the Read tool on each `staged` path.
   For each one decide:
   - **rotation** so the art is upright: `none` / `90_cw` / `90_ccw` / `180`.
     Clues: faces sideways, horizon vertical, a signature running vertically.
     When unsure, rotate and Read again to confirm — do not guess.
   - **is it usable art?** Skip pure studio/room shots (a photo of the whole
     workshop is not an artwork). The studio photo already lives at
     `images/ergastirio.jpg`.
   - **title** — read any inscription on the canvas and use the artist's own
     title; otherwise write a short, tasteful Greek one (2–5 words).
   - **category** — exactly one of: `Πρόσωπα`, `Καθημερινότητα`, `Τοπία`, `Φύση`.
     (Add a new one to `CATEGORIES` in `data/artworks.js` only if truly needed.)
   - **tags** — 2–4 short lowercase Greek tags (medium + subject), e.g.
     `ελαιογραφία`, `πορτρέτο`, `μολύβι`, `γάτα`.
   - **story** — optional; a sentence about the work or its inscription. Blank
     is fine.
   - **slug** — unique, latin, kebab-case (e.g. `neos-me-kleista-matia`).

   Never crop — the user wants the natural photographed/easel look.

3. **Apply.** Write a `plan.json` (array of objects with at least
   `staged`, `slug`, `rotation`, `md5`, `original`) to the scratchpad, then:
   ```
   python .claude/skills/process-content/process.py apply <path-to-plan.json>
   ```
   This rotates each image, saves it to `images/erga/<slug>.jpg`, records the
   original as processed, and clears the staging folder.

4. **Add to the gallery.** Edit `data/artworks.js`: add one block per new
   image at the **top** of the `ARTWORKS` array (newest first), using the
   title/category/tags/story you chose and `image: "<slug>.jpg"`. Match the
   existing block format.

5. **Preview & offer to publish.** Optionally serve locally
   (`python -m http.server`) and screenshot to confirm rotations render
   upright. Then offer to commit and push (`git add -A && git commit && git push`).
   Note: `content/` is gitignored, so only `images/erga/*` and `data/artworks.js`
   get committed.

## Notes
- Requires Pillow (`pip install Pillow`); it is already installed in this env.
- The script derives all paths from the repo root, so it works regardless of
  the current directory.
- See project memory `artgallery-sofia-site`, `user-prefers-uncropped-photos`,
  and `sofia-artist-titles` for background.
