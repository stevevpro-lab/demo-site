(function () {
  // Menu mobile (le menu reste visible si JavaScript est désactivé)
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu-principal');
  if (toggle && nav) {
    var header = toggle.closest('.site-header') || document;
    var mq = window.matchMedia('(max-width: 1020px)');
    function isOpen() { return toggle.getAttribute('aria-expanded') === 'true'; }
    function setOpen(open, returnFocus) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('is-open', open);
      if (!open && returnFocus) toggle.focus();
    }
    setOpen(false, false);
    toggle.addEventListener('click', function () {
      var open = !isOpen();
      setOpen(open, false);
      if (open) { var first = nav.querySelector('a'); if (first) first.focus(); }
    });
    // Échap ferme le menu et rend le focus au bouton
    document.addEventListener('keydown', function (e) {
      if ((e.key === 'Escape' || e.key === 'Esc') && isOpen()) {
        e.preventDefault();
        setOpen(false, nav.contains(document.activeElement) || document.activeElement === toggle);
      }
    });
    // Le menu se ferme quand le focus sort de l'en-tête (Tab après le dernier lien)
    header.addEventListener('focusout', function (e) {
      if (isOpen() && e.relatedTarget && !header.contains(e.relatedTarget)) setOpen(false, false);
    });
    // Clic en dehors : fermeture sans voler le focus
    document.addEventListener('click', function (e) {
      if (isOpen() && !header.contains(e.target)) setOpen(false, false);
    });
    // Retour en affichage bureau : on réinitialise l'état
    var onChange = function () { if (!mq.matches && isOpen()) setOpen(false, false); };
    if (mq.addEventListener) mq.addEventListener('change', onChange); else if (mq.addListener) mq.addListener(onChange);
  }

  // Formulaire de devis : aucun envoi, message invitant à appeler ou écrire
  var form = document.getElementById('devis-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('devis-message');
      msg.hidden = false;
      msg.focus();
    });
  }

  // Carte de la zone d'intervention
  var el = document.getElementById('zone-map');
  if (!el) return;
  function fail() { el.classList.add('map-failed'); }
  if (typeof window.L === 'undefined') { fail(); return; }
  try {
    var center = [48.9938791, 2.0949768]; // centre-ville de Conflans-Sainte-Honorine (Nominatim)
    var communes = [
      ['Poissy (78)', 48.9274192, 2.0426301],
      ['Andrésy (78)', 48.9821445, 2.0610573],
      ['Achères (78)', 48.9606321, 2.0698106],
      ['Maisons-Laffitte (78)', 48.9461437, 2.1450951],
      ['Saint-Germain-en-Laye (78)', 48.8990413, 2.0942792],
      ['Herblay-sur-Seine (95)', 48.9898588, 2.166162],
      ['Cergy (95)', 49.0527528, 2.0388736],
      ['Éragny (95)', 49.0192178, 2.0910817]
    ];
    var map = L.map(el, { scrollWheelZoom: false, zoomSnap: 0.25 });
    var zone = L.circle(center, { radius: 11500, color: '#16181c', weight: 2, fillColor: '#0f6b75', fillOpacity: 0.16 });
    map.fitBounds(L.latLng(center).toBounds(23000), { padding: [10, 10] });
    zone.addTo(map);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).on('tileerror', function () { el.classList.add('tiles-warning'); }).addTo(map);
    L.marker(center, { title: 'Conflans-Sainte-Honorine' }).addTo(map)
      .bindPopup('<strong>Sport Garage 78</strong><br>Conflans-Sainte-Honorine (78)');
    communes.forEach(function (c) {
      L.circleMarker([c[1], c[2]], { radius: 6, color: '#16181c', weight: 2, fillColor: '#0f6b75', fillOpacity: 1 })
        .bindTooltip(c[0]).addTo(map);
    });
    map.on('click focus', function () { map.scrollWheelZoom.enable(); });
    map.on('mouseout blur', function () { map.scrollWheelZoom.disable(); });
    el.classList.add('map-ready');
  } catch (err) { fail(); }
})();
