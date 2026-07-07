/* Renders the masonry gallery with category filters and optional ?tag= filtering. */
(function () {
  var gallery = document.getElementById("gallery");
  var filtersEl = document.getElementById("filters");
  var tagNotice = document.getElementById("tag-notice");
  document.getElementById("year").textContent = new Date().getFullYear();

  var params = new URLSearchParams(location.search);
  var activeTag = params.get("tag");
  var activeCat = params.get("cat") || "Όλα";

  // --- Filter buttons -------------------------------------------------
  var cats = ["Όλα"].concat(CATEGORIES);
  cats.forEach(function (cat) {
    var btn = document.createElement("button");
    btn.textContent = cat;
    btn.dataset.cat = cat;
    if (cat === activeCat) btn.classList.add("active");
    btn.addEventListener("click", function () {
      activeCat = cat;
      filtersEl.querySelectorAll("button").forEach(function (b) {
        b.classList.toggle("active", b === btn);
      });
      // Picking a category clears any tag filter.
      if (activeTag) {
        activeTag = null;
        tagNotice.hidden = true;
        history.replaceState(null, "", location.pathname);
      }
      applyFilter();
    });
    filtersEl.appendChild(btn);
  });

  // --- Tag notice ------------------------------------------------------
  if (activeTag) {
    tagNotice.hidden = false;
    tagNotice.innerHTML =
      'Εμφανίζονται έργα με ετικέτα «' + escapeHtml(activeTag) +
      '» — <a href="index.html">εμφάνιση όλων ×</a>';
  }

  // --- Build the grid --------------------------------------------------
  ARTWORKS.forEach(function (art) {
    var fig = document.createElement("figure");
    fig.dataset.category = art.category || "";
    fig.dataset.tags = (art.tags || []).join("|");

    var a = document.createElement("a");
    a.href = "artwork.html?id=" + encodeURIComponent(art.id);

    var img = document.createElement("img");
    img.src = "images/erga/" + art.image;
    img.alt = art.title || "";
    img.loading = "lazy";

    var cap = document.createElement("figcaption");
    cap.textContent = art.title || "";

    a.appendChild(img);
    a.appendChild(cap);
    fig.appendChild(a);
    gallery.appendChild(fig);
  });

  function applyFilter() {
    gallery.querySelectorAll("figure").forEach(function (fig) {
      var show = true;
      if (activeTag) {
        show = fig.dataset.tags.split("|").indexOf(activeTag) !== -1;
      } else if (activeCat !== "Όλα") {
        show = fig.dataset.category === activeCat;
      }
      fig.style.display = show ? "" : "none";
    });
  }

  function escapeHtml(s) {
    var div = document.createElement("div");
    div.textContent = s;
    return div.innerHTML;
  }

  applyFilter();
})();
