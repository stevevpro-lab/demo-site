(function () {
  // Formulaire de devis : aucun envoi, message invitant à appeler
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
    var zone = L.circle(center, { radius: 11500, color: '#163a34', weight: 2, fillColor: '#b8d63a', fillOpacity: 0.18 });
    map.fitBounds(L.latLng(center).toBounds(23000), { padding: [10, 10] });
    zone.addTo(map);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).on('tileerror', function () { el.classList.add('tiles-warning'); }).addTo(map);
    L.marker(center, { title: 'Conflans-Sainte-Honorine' }).addTo(map)
      .bindPopup('<strong>Sport Garage 78</strong><br>Conflans-Sainte-Honorine (78)');
    communes.forEach(function (c) {
      L.circleMarker([c[1], c[2]], { radius: 6, color: '#0f2a26', weight: 2, fillColor: '#d4f04a', fillOpacity: 1 })
        .bindTooltip(c[0]).addTo(map);
    });
    map.on('click focus', function () { map.scrollWheelZoom.enable(); });
    map.on('mouseout blur', function () { map.scrollWheelZoom.disable(); });
    el.classList.add('map-ready');
  } catch (err) { fail(); }
})();
