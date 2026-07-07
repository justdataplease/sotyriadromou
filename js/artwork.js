/* Renders a single artwork page (image, title, category, tags, optional story). */
(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  var main = document.getElementById("artwork-main");
  var params = new URLSearchParams(location.search);
  var id = params.get("id");

  var index = -1;
  for (var i = 0; i < ARTWORKS.length; i++) {
    if (ARTWORKS[i].id === id) { index = i; break; }
  }

  if (index === -1) {
    main.innerHTML =
      '<p style="text-align:center">Το έργο δεν βρέθηκε. ' +
      '<a href="index.html">Επιστροφή στα έργα</a></p>';
    return;
  }

  var art = ARTWORKS[index];
  document.title = art.title + " — Σοφία Δημητροπούλου";

  var fig = document.createElement("figure");
  fig.className = "artwork-figure";
  var img = document.createElement("img");
  img.src = "images/erga/" + art.image;
  img.alt = art.title || "";
  fig.appendChild(img);
  main.appendChild(fig);

  var h = document.createElement("h2");
  h.className = "artwork-title";
  h.textContent = art.title || "";
  main.appendChild(h);

  if (art.category) {
    var meta = document.createElement("p");
    meta.className = "artwork-meta";
    var catLink = document.createElement("a");
    catLink.href = "index.html?cat=" + encodeURIComponent(art.category);
    catLink.textContent = art.category;
    meta.appendChild(catLink);
    main.appendChild(meta);
  }

  if (art.tags && art.tags.length) {
    var tagsEl = document.createElement("p");
    tagsEl.className = "artwork-tags";
    art.tags.forEach(function (tag) {
      var a = document.createElement("a");
      a.href = "index.html?tag=" + encodeURIComponent(tag);
      a.textContent = "#" + tag;
      tagsEl.appendChild(a);
    });
    main.appendChild(tagsEl);
  }

  // Story: optional. Blank line = new paragraph.
  var story = (art.story || "").trim();
  if (story) {
    var storyEl = document.createElement("div");
    storyEl.className = "artwork-story";
    story.split(/\n\s*\n/).forEach(function (par) {
      var p = document.createElement("p");
      p.textContent = par.replace(/\s*\n\s*/g, " ").trim();
      storyEl.appendChild(p);
    });
    main.appendChild(storyEl);
  }

  // Prev / back / next navigation
  var nav = document.createElement("nav");
  nav.className = "artwork-nav";
  var prev = ARTWORKS[(index - 1 + ARTWORKS.length) % ARTWORKS.length];
  var next = ARTWORKS[(index + 1) % ARTWORKS.length];
  nav.innerHTML =
    '<a href="artwork.html?id=' + encodeURIComponent(prev.id) + '">← Προηγούμενο</a>' +
    '<a href="index.html">Όλα τα έργα</a>' +
    '<a href="artwork.html?id=' + encodeURIComponent(next.id) + '">Επόμενο →</a>';
  main.appendChild(nav);
})();
