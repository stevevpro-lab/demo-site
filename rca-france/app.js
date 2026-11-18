(function () {
  'use strict';

  /* Photos : servies depuis le site actuel de RCA France */
  var UP = 'https://www.rcafrance.com/wp-content/uploads/';
  var SETS = {
    tr: { u: UP + '2026/05/transmissions_rca_titanium_200kb.jpg', r: 3.077, s: [[.25, .34, 3], [.62, .3, 3], [.38, .66, 3], [.84, .62, 3]] },
    jo: { u: UP + '2026/05/transmissions_rca_titanium_200kb.jpg', r: 3.077, s: [[.37, .64, 4.6], [.15, .74, 4.6], [.84, .6, 4.6], [.24, .33, 4.6]] },
    tu: { u: UP + '2017/01/turbos_neufs_banner_200kb.jpg', r: 3.077, s: [[.2, .55, 3], [.535, .55, 3], [.86, .28, 5], [.86, .74, 5]] },
    et: { u: UP + '2026/05/etriers_frein_banner_200kb.jpg', r: 3.077, s: [[.16, .6, 3.2], [.4, .44, 3.2], [.59, .6, 3.2], [.87, .27, 5], [.87, .75, 5]] },
    ro: { u: UP + '2026/05/roulements_banner_200kb.jpg', r: 3.077, s: [[.15, .6, 3.2], [.37, .55, 3.2], [.585, .55, 3.2], [.87, .25, 5], [.87, .75, 5]] },
    es: { u: UP + '2017/01/transmissions_echange_standard_370x240_28ko_v2.jpg', r: 1.542, s: [[.5, .6, 1.2], [.3, .75, 1.8], [.72, .75, 1.8]] },
    eg: { u: UP + '2017/01/vannes_egr_370x240_100ko.jpg', r: 1.542, s: [[.5, .6, 1.2], [.4, .72, 1.8], [.72, .55, 1.8]] }
  };

  var CATS = [
    { id: 'tr', code: 'TR', nav: 'Transmissions', name: 'Transmissions neuves', set: 'tr', spot: 2, warranty: 'Garantie 5 ans', noDeposit: true, cond: 'Neuf',
      intro: 'Pièces neuves, sans consigne, pour véhicules particuliers et utilitaires légers.',
      points: ['Contrôle dimensionnel, équilibrage dynamique et tests d’étanchéité', 'Acier haute résistance et soufflets renforcés', 'SAV et support en France'] },
    { id: 'es', code: 'ES', nav: 'Reconditionnées', name: 'Transmissions reconditionnées', set: 'es', spot: 0, cond: 'Reconditionné',
      intro: 'Une solution technique et économique, contrôlée et assemblée avec rigueur pour les réparations rapides.',
      points: ['Chaque pièce est vérifiée avant expédition', 'Remplacement des composants critiques', 'Usine en France'] },
    { id: 'ro', code: 'RO', nav: 'Roulements', name: 'Kits roulements', set: 'ro', spot: 1, cond: 'Neuf',
      intro: 'Roulements et moyeux fiables, silencieux et précis, pour les systèmes en rotation.',
      points: ['Contrôle de la rotation, du bruit et du jeu interne', 'Aciers résistants et lubrification optimisée', 'SAV en France'] },
    { id: 'tu', code: 'TU', nav: 'Turbos', name: 'Turbocompresseurs', set: 'tu', spot: 0, warranty: 'Garantie 2 ans', noDeposit: true, kit: 'Kit joints inclus', cond: 'Neuf',
      intro: 'Turbos neufs, sans consigne, livrés avec leur kit de montage.',
      points: ['Équilibrage dynamique haute vitesse', 'Contrôle d’étanchéité et des composants critiques', 'Support technique en France'] },
    { id: 'eg', code: 'EG', nav: 'Vannes EGR', name: 'Vannes EGR', set: 'eg', spot: 0, cond: 'Neuf',
      intro: 'Vannes neuves, prêtes à monter, pour un contrôle précis des gaz recyclés.',
      points: ['Vérification des actionneurs et de l’étanchéité', 'Montage simplifié en atelier', 'Support technique en France'] },
    { id: 'et', code: 'ET', nav: 'Étriers', name: 'Étriers de frein', set: 'et', spot: 1, warranty: 'Garantie 2 ans', noDeposit: true, cond: 'Neuf',
      intro: 'Étriers 100 % neufs : aucun ancien étrier à rendre, aucune trésorerie bloquée.',
      points: ['Contrôle du piston, du coulissement et de l’étanchéité', 'Prêt à monter, sans opération de reprise', 'Support technico-commercial en France'] },
    { id: 'jo', code: 'JO', nav: 'Joints', name: 'Joints homocinétiques', set: 'jo', spot: 0, cond: 'Neuf',
      intro: 'Joints neufs, précis et durables, pour une transmission fluide.',
      points: ['Cannelures, cages, billes et pistes contrôlées', 'Kit complet selon application', 'Support technique en France'] }
  ];
  var catById = {}; CATS.forEach(function (c) { catById[c.id] = c; });

  var VEHICLES = [
    ['Citroën', 'Berlingo II', '1.6 HDi 90'], ['Citroën', 'C3 III', '1.2 PureTech 82'],
    ['Dacia', 'Duster', '1.5 dCi 110'], ['Ford', 'Transit Custom', '2.0 TDCi 130'],
    ['Nissan', 'Qashqai II', '1.5 dCi 110'], ['Peugeot', '208', '1.6 BlueHDi 100'],
    ['Peugeot', '308 II', '1.6 BlueHDi 120'], ['Renault', 'Clio IV', '1.5 dCi 90'],
    ['Renault', 'Mégane III', '1.5 dCi 110'], ['Toyota', 'Yaris III', '1.33 VVT-i'],
    ['Volkswagen', 'Golf VII', '2.0 TDI 150'], ['Volkswagen', 'Polo V', '1.2 TSI 90']
  ];
  var vName = function (i) { return VEHICLES[i].join(' '); };

  /* [réf, gamme, désignation, prix HT, visuel, véhicules, stock, nouveauté] */
  var PRODUCTS = [
    [1001, 'tr', 'Transmission avant gauche', 189, 2, [7, 8, 2], 42, 1], [1002, 'tr', 'Transmission avant droite', 214, 3, [7, 8, 2], 31],
    [1003, 'tr', 'Transmission avant gauche', 196, 0, [5, 6, 0], 18], [1004, 'tr', 'Transmission avant droite', 228, 1, [5, 6, 0], 12, 1],
    [1005, 'tr', 'Transmission avant droite', 259, 3, [10, 4], 7],
    [2001, 'es', 'Transmission reconditionnée gauche', 118, 0, [7, 8], 16], [2002, 'es', 'Transmission reconditionnée droite', 132, 1, [5, 6, 0], 9],
    [2003, 'es', 'Transmission reconditionnée droite', 164, 2, [3], 0],
    [3001, 'ro', 'Kit roulement de roue avant', 46, 0, [7, 8, 2], 64], [3002, 'ro', 'Moyeu de roue arrière avec roulement', 72, 1, [5, 1, 6], 38, 1],
    [3003, 'ro', 'Kit roulement de roue avant', 58, 2, [10, 11], 27], [3004, 'ro', 'Moyeu de roue avant', 89, 3, [4, 9], 14],
    [4001, 'tu', 'Turbocompresseur neuf', 449, 0, [7, 8, 2, 4], 11], [4002, 'tu', 'Turbocompresseur neuf', 489, 1, [5, 6, 0], 8, 1],
    [4003, 'tu', 'Turbocompresseur neuf', 629, 2, [10], 4], [4004, 'tu', 'Turbocompresseur neuf', 689, 3, [3], 0],
    [5001, 'eg', 'Vanne EGR neuve', 138, 0, [7, 8, 2], 22], [5002, 'eg', 'Vanne EGR neuve', 154, 1, [5, 6, 0], 17, 1], [5003, 'eg', 'Vanne EGR neuve', 192, 2, [10, 3], 6],
    [6001, 'et', 'Étrier de frein avant gauche', 94, 0, [7, 8, 2], 26], [6002, 'et', 'Étrier de frein avant droit', 94, 1, [7, 8, 2], 24],
    [6003, 'et', 'Étrier de frein avant gauche', 102, 2, [5, 1, 6], 33, 1], [6004, 'et', 'Étrier arrière avec frein de parking', 148, 3, [10, 4], 10],
    [7001, 'jo', 'Joint homocinétique côté roue', 52, 0, [7, 8, 2], 45], [7002, 'jo', 'Joint homocinétique côté boîte', 68, 1, [5, 6], 29, 1], [7003, 'jo', 'Joint homocinétique côté roue', 61, 2, [10, 11, 9], 20]
  ].map(function (p) {
    var c = catById[p[1]];
    return { id: 'RT-' + c.code + '-' + p[0], cat: p[1], name: p[2], price: p[3], spot: p[4], veh: p[5], stock: p[6], isNew: !!p[7] };
  });
  var byId = {}; PRODUCTS.forEach(function (p) { byId[p.id] = p; });

  var SLIDES = [
    { set: 'tr', pos: '62% 50%', title: 'Transmissions neuves, garanties 5 ans', sub: 'RCA Titanium, le premium accessible', pts: ['Sans consigne', 'Véhicules particuliers et utilitaires légers'], cat: 'tr', cta: 'Voir les transmissions' },
    { set: 'tu', pos: '32% 50%', title: 'Turbos neufs, kit joints inclus', sub: 'Garantie 2 ans', pts: ['Sans consigne', 'Équilibrage haute précision'], cat: 'tu', cta: 'Voir les turbos' },
    { set: 'et', pos: '32% 50%', title: 'Étriers neufs, rien à rendre', sub: 'Garantie 2 ans', pts: ['Aucun ancien étrier à retourner', 'Prêts à monter'], cat: 'et', cta: 'Voir les étriers' },
    { set: 'ro', pos: '32% 50%', title: 'Kits roulements et moyeux', sub: 'Précis, silencieux, durables', pts: ['Tolérances maîtrisées', 'Hybrides et électriques inclus'], cat: 'ro', cta: 'Voir les roulements' }
  ];

  var SHIPPING = {
    retrait: { label: 'Retrait à l’usine d’Aulnay-sous-Bois', note: 'De 08h00 à 17h30', price: 0 },
    j1: { label: 'Livraison France entière J+1', note: 'Messagerie express', price: 14.9 },
    express: { label: 'Livraison express région parisienne', note: 'Pour les besoins urgents', price: 29 }
  };

  /* Utilitaires */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var ico = function (n, c) { return '<svg class="i ' + (c || '') + '" aria-hidden="true"><use href="#i-' + n + '"/></svg>'; };
  var norm = function (s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem('rca-demo-' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem('rca-demo-' + k, JSON.stringify(v)); } catch (e) { /* stockage indisponible */ } }
  };

  var state = {
    cart: store.get('cart', {}), favs: store.get('favs', []), vehicle: store.get('vehicle', null), tax: store.get('tax', 'ht'),
    filters: { neuf: false, rec: false, noDeposit: false, inStock: false, sort: 'pop' }, ship: 'j1', pay: 'compte'
  };
  if (state.vehicle !== null && !VEHICLES[state.vehicle]) state.vehicle = null;
  Object.keys(state.cart).forEach(function (id) { if (!byId[id]) delete state.cart[id]; });

  var eur = function (n) { return n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' }); };
  var taxed = function (n) { return state.tax === 'ttc' ? n * 1.2 : n; };
  var money = function (n) { return eur(n) + '<small>HT</small>'; };
  var pdpMoney = function (n) { return eur(taxed(n)) + '<small>' + state.tax.toUpperCase() + '</small>'; };
  var taxBtn = function (k) { return '<button type="button" data-action="tax" data-tax="' + k + '" aria-pressed="' + (state.tax === k) + '">' + k.toUpperCase() + '</button>'; };

  function crop(setKey, i) {
    var S = SETS[setKey], q = S.s[i % S.s.length], box = 4 / 3, z = Math.max(q[2], S.r / box);
    var vx = 1 / z, vy = S.r / (box * z);
    var at = function (c, v) { return v >= 1 ? 50 : Math.min(100, Math.max(0, (c - v / 2) / (1 - v) * 100)); };
    return 'background-image:url(\'' + S.u + '\');background-size:' + (z * 100).toFixed(1) + '% auto;background-position:' + at(q[0], vx).toFixed(1) + '% ' + at(q[1], vy).toFixed(1) + '%';
  }
  var pCrop = function (p, n) { var c = catById[p.cat]; return crop(c.set, p.spot + (n || 0)); };
  var pTitle = function (p) { return p.name + ' ' + VEHICLES[p.veh[0]][0] + ' ' + VEHICLES[p.veh[0]][1]; };
  var chev = '<span class="chev" aria-hidden="true">' + '<svg viewBox="0 0 12 18"><path d="m2 2 7 7-7 7"/></svg>'.repeat(3) + '</span>';

  function stockHtml(p) {
    return p.stock > 0 ? '<span class="stock">En stock, expédié sous 24 h</span>' : '<span class="stock out">Sur commande</span>';
  }

  function card(p) {
    var fav = state.favs.indexOf(p.id) > -1, fit = state.vehicle !== null && p.veh.indexOf(state.vehicle) > -1, t = pTitle(p);
    return '<article class="card"><a class="media" href="#/produit/' + p.id + '" style="' + pCrop(p) + '" aria-label="' + esc(t) + '"></a>' +
      (fit ? '<span class="badge">Compatible</span>' : p.isNew ? '<span class="badge fit">Nouveau</span>' : '') +
      '<button type="button" class="fav" data-action="fav" data-id="' + p.id + '" aria-pressed="' + fav + '" aria-label="Ajouter aux favoris : ' + esc(t) + '">' + ico('heart') + '</button>' +
      '<h3><a href="#/produit/' + p.id + '">' + esc(t) + '</a></h3><span class="ref">Réf. ' + p.id + '</span>' + stockHtml(p) +
      '<div class="card-foot"><span class="price">' + money(p.price) + '</span><button type="button" class="btn add" data-action="add" data-id="' + p.id + '" aria-label="Ajouter au panier : ' + esc(t) + '">Ajouter</button></div></article>';
  }

  function head(title, railId) {
    return '<div class="sec-head"><h2>' + chev + esc(title) + '</h2>' + (railId ? '<div class="arrows"><button type="button" class="icon-btn" data-action="rail" data-rail="' + railId + '" data-dir="-1" aria-label="Précédent">' + ico('left') + '</button><button type="button" class="icon-btn" data-action="rail" data-rail="' + railId + '" data-dir="1" aria-label="Suivant">' + ico('right') + '</button></div>' : '') + '</div>';
  }
  var crumbs = function (items) {
    return '<nav class="crumbs" aria-label="Fil d’Ariane"><a href="#/">Accueil</a>' + items.map(function (x) { return '<span aria-hidden="true">/</span>' + (x[1] ? '<a href="' + x[1] + '">' + esc(x[0]) + '</a>' : '<span>' + esc(x[0]) + '</span>'); }).join('') + '</nav>';
  };

  /* Accueil */
  function finder() {
    var brands = VEHICLES.map(function (v) { return v[0]; }).filter(function (b, i, a) { return a.indexOf(b) === i; });
    return '<form class="finder" id="finder"><h2>Trouvez la pièce adaptée au véhicule</h2><div class="finder-row">' +
      '<div><label for="fB">Marque</label><select id="fB" required><option value="">Choisir</option>' + brands.map(function (b) { return '<option>' + esc(b) + '</option>'; }).join('') + '</select></div>' +
      '<div><label for="fM">Modèle</label><select id="fM" required disabled><option value="">Choisir</option></select></div>' +
      '<div><label for="fE">Motorisation</label><select id="fE" required disabled><option value="">Choisir</option></select></div>' +
      '<button class="btn" type="submit">Voir les pièces compatibles</button></div></form>';
  }

  function viewHome() {
    var slides = SLIDES.map(function (s, i) {
      var T = i === 0 ? 'h1' : 'h2';
      return '<div class="slide' + (i === 0 ? ' on' : '') + '" data-slide="' + i + '"' + (i ? ' aria-hidden="true"' : '') + '><div class="slide-img" style="background-image:url(\'' + SETS[s.set].u + '\');background-position:' + s.pos + '"></div><div class="slide-txt"><' + T + '>' + esc(s.title) + '</' + T + '><div class="slide-rule"></div><p class="sub">' + esc(s.sub) + '</p><ul>' + s.pts.map(function (p) { return '<li>' + ico('check') + esc(p) + '</li>'; }).join('') + '</ul><a class="btn" href="#/catalogue/' + s.cat + '">' + esc(s.cta) + '</a></div></div>';
    }).join('');
    var thumbs = SLIDES.map(function (s, i) { return '<button type="button" class="th" data-action="slide" data-i="' + i + '" style="' + crop(s.set, 0) + '" aria-label="Afficher : ' + esc(s.title) + '"' + (i === 0 ? ' aria-current="true"' : '') + '></button>'; }).join('');
    var cats = CATS.map(function (c) {
      var n = PRODUCTS.filter(function (p) { return p.cat === c.id; }).length;
      return '<a class="cat-card" href="#/catalogue/' + c.id + '"><div class="media" style="' + crop(c.set, c.spot) + '"></div><b>' + esc(c.name) + '</b><small>' + n + ' références</small></a>';
    }).join('');
    var news = PRODUCTS.filter(function (p) { return p.isNew; });
    var best = [PRODUCTS[0], PRODUCTS[12], PRODUCTS[19], PRODUCTS[8], PRODUCTS[16], PRODUCTS[23]];
    return '<div class="wrap home-top"><section class="hero" aria-label="À la une">' + slides + '<div class="hero-ctl">' + thumbs + '<button type="button" class="pause" data-action="pause" aria-label="Mettre le défilement en pause">' + ico('pause') + '</button></div></section>' + finder() +
      '<section class="section">' + head('Nos gammes', 'railCats') + '<div class="rail rail-cats" id="railCats">' + cats + '</div></section>' +
      '<section class="section promos" aria-label="Offres">' +
      '<div class="promo"><div class="promo-img" style="background-image:url(\'' + SETS.tr.u + '\');background-position:60% 50%"></div><div><h3>Zéro consigne, zéro trésorerie bloquée</h3><p>Transmissions, turbos et étriers neufs.</p><a class="btn" href="#/catalogue/tr">Voir les pièces</a></div></div>' +
      '<div class="promo"><div class="promo-img" style="background-image:url(\'' + SETS.es.u + '\');background-position:50% 60%"></div><div><h3>Rénovation au modèle</h3><p>Une solution pour vos références spécifiques.</p><a class="btn" href="#/services">Découvrir le service</a></div></div></section>' +
      '<section class="section">' + head('Nouveautés', 'railNew') + '<div class="rail rail-prods" id="railNew">' + news.map(card).join('') + '</div></section>' +
      '<section class="section">' + head('Les plus commandées', 'railBest') + '<div class="rail rail-prods" id="railBest">' + best.map(card).join('') + '</div></section>' +
      '<section class="section duo" aria-label="La marque"><div class="brand-panel"><img src="assets/logos/logo-rca-titanium-hd.jpg" alt="RCA Titanium, Automotive Solutions" width="2048" height="1536"><div><h3>60 ans de savoir-faire</h3><p>L’un des leaders français de la rechange indépendante, au service des garages et des distributeurs.</p></div></div>' +
      '<div class="news-list"><article class="news-item"><time datetime="2026-07-01">1er juillet 2026</time><h3>RCA France x NPS</h3><a href="https://www.rcafrance.com/actualites/rca-france-x-nps/" target="_blank" rel="noopener">Lire l’actualité</a></article><article class="news-item"><time datetime="2026-05-26">26 mai 2026</time><h3>RCA x PAP Gennevilliers</h3><a href="https://www.rcafrance.com/actualites/rca-x-pap-gennevilliers/" target="_blank" rel="noopener">Lire l’actualité</a></article></div></section>' +
      '<section class="trust" aria-label="Nos engagements"><div>' + ico('truck') + '<p><b>France entière J+1</b><span>Express en région parisienne</span></p></div><div>' + ico('pin') + '<p><b>Retrait usine</b><span>De 08h00 à 17h30</span></p></div><div>' + ico('wrench') + '<p><b>Support technique</b><span>Montage et recherche de références</span></p></div><div>' + ico('shield') + '<p><b>Sans consigne</b><span>Sur les gammes neuves concernées</span></p></div></section></div>';
  }

  /* Catalogue */
  function listProducts(catId, q) {
    var f = state.filters, n = norm(q || '');
    var r = PRODUCTS.filter(function (p) {
      var c = catById[p.cat];
      if (catId !== 'tout' && p.cat !== catId) return false;
      if (state.vehicle !== null && p.veh.indexOf(state.vehicle) < 0) return false;
      if (f.neuf !== f.rec && (c.cond === 'Neuf') !== f.neuf) return false;
      if (f.noDeposit && !c.noDeposit) return false;
      if (f.inStock && !p.stock) return false;
      if (n) {
        var hay = norm([p.id, p.name, c.name].concat(p.veh.map(vName)).join(' '));
        if (!n.split(/\s+/).every(function (w) { return hay.indexOf(w) > -1; })) return false;
      }
      return true;
    });
    if (f.sort === 'asc') r.sort(function (a, b) { return a.price - b.price; });
    if (f.sort === 'desc') r.sort(function (a, b) { return b.price - a.price; });
    return r;
  }
  function renderList(catId, q) {
    var r = listProducts(catId, q);
    $('#resCount').textContent = r.length + (r.length > 1 ? ' références' : ' référence');
    $('#resGrid').innerHTML = r.length ? '<div class="grid">' + r.map(card).join('') + '</div>' :
      '<div class="empty"><h2>Aucune pièce avec ces critères</h2><p>Retirez un filtre, ou demandez à notre équipe de rechercher la référence.</p><button type="button" class="btn" data-action="reset-filters">Retirer les filtres</button></div>';
  }
  function viewCatalog(catId, q) {
    if (catId !== 'tout' && !catById[catId]) catId = 'tout';
    var c = catById[catId], f = state.filters;
    var links = [{ id: 'tout', name: 'Toutes les pièces' }].concat(CATS).map(function (x) {
      var n = x.id === 'tout' ? PRODUCTS.length : PRODUCTS.filter(function (p) { return p.cat === x.id; }).length;
      return '<a href="#/catalogue/' + x.id + '"' + (x.id === catId ? ' aria-current="true"' : '') + '>' + esc(x.name) + '<small>' + n + '</small></a>';
    }).join('');
    var chk = function (k, l) { return '<label class="check"><input type="checkbox" data-filter="' + k + '"' + (f[k] ? ' checked' : '') + '>' + l + '</label>'; };
    var title = q ? 'Résultats pour « ' + q + ' »' : c ? c.name : 'Toutes les pièces';
    setTimeout(function () { renderList(catId, q); });
    return '<div class="wrap" data-cat="' + catId + '" data-q="' + esc(q || '') + '" id="catalog">' + crumbs([[c ? c.name : 'Catalogue']]) + '<h1 class="page-title">' + esc(title) + '</h1>' + (c && !q ? '<p class="page-intro">' + esc(c.intro) + '</p>' : '<p class="page-intro">Pièces RCA Titanium pour véhicules particuliers et utilitaires légers.</p>') +
      (state.vehicle !== null ? '<div class="veh-bar"><span>Pièces compatibles avec <b>' + esc(vName(state.vehicle)) + '</b></span><button type="button" data-action="clear-vehicle">Changer de véhicule</button></div>' : '') +
      '<div class="shop"><aside class="filters" aria-label="Filtres"><section><h2>Gammes</h2>' + links + '</section><section><h2>Filtrer</h2>' + chk('neuf', 'Pièces neuves') + chk('rec', 'Reconditionnées') + chk('noDeposit', 'Sans consigne') + chk('inStock', 'En stock') + '</section></aside>' +
      '<div><div class="shop-bar"><span id="resCount" role="status"></span><label><span class="sr">Trier</span><select id="sort"><option value="pop">Pertinence</option><option value="asc"' + (f.sort === 'asc' ? ' selected' : '') + '>Prix croissant</option><option value="desc"' + (f.sort === 'desc' ? ' selected' : '') + '>Prix décroissant</option></select></label></div><div id="resGrid"></div></div></div></div>';
  }

  /* Fiche produit */
  function viewProduct(id) {
    var p = byId[id];
    if (!p) return notFound();
    var c = catById[p.cat], fav = state.favs.indexOf(p.id) > -1, t = pTitle(p);
    var n = Math.min(4, SETS[c.set].s.length);
    var th = ''; for (var i = 0; i < n; i++) th += '<button type="button" data-action="thumb" data-n="' + i + '" data-id="' + p.id + '" aria-pressed="' + (i === 0) + '" aria-label="Vue ' + (i + 1) + '"><div class="media" style="' + pCrop(p, i) + '"></div></button>';
    var chips = [c.cond, c.warranty, c.noDeposit && 'Sans consigne', c.kit].filter(Boolean).map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('');
    var rel = PRODUCTS.filter(function (x) { return x.id !== p.id && (x.cat === p.cat || x.veh.some(function (v) { return p.veh.indexOf(v) > -1; })); }).slice(0, 5);
    return '<div class="wrap">' + crumbs([[c.name, '#/catalogue/' + c.id], [p.id]]) + '<div class="pdp"><div class="gallery"><div class="media main" id="pdpMain" role="img" aria-label="' + esc(t) + '" style="' + pCrop(p) + '"></div><div class="thumbs">' + th + '</div></div>' +
      '<div><span class="ref">Réf. ' + p.id + '</span><h1>' + esc(t) + '</h1>' + stockHtml(p) + '<div class="chips">' + chips + '</div><p>' + esc(c.intro) + '</p><div class="price-row"><p class="price" id="pdpPrice" data-price="' + p.price + '">' + pdpMoney(p.price) + '</p><div class="tax" role="group" aria-label="Afficher le prix">' + taxBtn('ht') + taxBtn('ttc') + '</div></div>' +
      '<div class="buy"><div class="qty"><button type="button" data-action="pdp-qty" data-d="-1" aria-label="Diminuer la quantité">−</button><output id="pdpQty">1</output><button type="button" data-action="pdp-qty" data-d="1" aria-label="Augmenter la quantité">+</button></div><button type="button" class="btn" data-action="add-qty" data-id="' + p.id + '">Ajouter au panier</button><button type="button" class="icon-btn fav-inline" style="width:44px;height:44px" data-action="fav" data-id="' + p.id + '" aria-pressed="' + fav + '" aria-label="Ajouter aux favoris">' + ico('heart') + '</button></div>' +
      '<ul class="ticks">' + c.points.map(function (x) { return '<li>' + ico('check') + esc(x) + '</li>'; }).join('') + '</ul>' +
      '<div class="fits"><h2>Véhicules compatibles</h2><ul>' + p.veh.map(function (v) { return '<li' + (v === state.vehicle ? ' class="me"' : '') + '>' + esc(vName(v)) + (v === state.vehicle ? ' (votre véhicule)' : '') + '</li>'; }).join('') + '</ul></div></div></div>' +
      '<section class="section">' + head('À commander avec', 'railRel') + '<div class="rail rail-prods" id="railRel">' + rel.map(card).join('') + '</div></section></div>';
  }

  /* Panier */
  function cartLines() { return Object.keys(state.cart).map(function (id) { return { p: byId[id], q: state.cart[id] }; }); }
  var cartTotal = function () { return cartLines().reduce(function (s, l) { return s + l.p.price * l.q; }, 0); };
  var cartCount = function () { return cartLines().reduce(function (s, l) { return s + l.q; }, 0); };
  function lineHtml(l) {
    var t = pTitle(l.p);
    return '<div class="line"><div class="media" style="' + pCrop(l.p) + '"></div><div><b><a href="#/produit/' + l.p.id + '">' + esc(t) + '</a></b><span class="ref">Réf. ' + l.p.id + '</span></div><div class="line-end"><span class="price">' + money(l.p.price * l.q) + '</span><div class="line-meta"><div class="qty sm"><button type="button" data-action="qty" data-id="' + l.p.id + '" data-d="-1" aria-label="Retirer une unité">−</button><span>' + l.q + '</span><button type="button" data-action="qty" data-id="' + l.p.id + '" data-d="1" aria-label="Ajouter une unité">+</button></div><button type="button" class="rm" data-action="rm" data-id="' + l.p.id + '" aria-label="Supprimer ' + esc(t) + '">Supprimer</button></div></div></div>';
  }
  function sums(ship) {
    var ht = cartTotal() + (ship || 0), tva = ht * .2;
    return '<div class="sum"><span>Sous-total HT</span><span>' + eur(cartTotal()) + '</span></div>' + (ship !== undefined ? '<div class="sum"><span>Livraison HT</span><span>' + (ship ? eur(ship) : 'Offerte') + '</span></div>' : '') + '<div class="sum"><span>TVA 20 %</span><span>' + eur(tva) + '</span></div><div class="sum total"><span>Total TTC</span><span>' + eur(ht + tva) + '</span></div>';
  }
  var emptyCart = '<div class="empty"><h2>Votre panier est vide</h2><p>Cherchez par véhicule ou saisissez vos références.</p><a class="btn" href="#/catalogue/tout">Voir le catalogue</a></div>';
  function viewCart() {
    var L = cartLines();
    return '<div class="wrap">' + crumbs([['Panier']]) + '<h1 class="page-title">Panier</h1>' + (L.length ? '<div class="cart-layout"><div>' + L.map(lineHtml).join('') + '</div><aside class="summary"><h2>Récapitulatif</h2>' + sums() + '<a class="btn btn-wide" href="#/commande">Passer la commande</a></aside></div>' : emptyCart) + '</div>';
  }
  function renderDrawer() {
    var L = cartLines();
    $('#cartDrawerBody').innerHTML = '<div class="modal-head"><h2 id="cartTitle">Panier (' + cartCount() + ')</h2><button type="button" class="icon-btn" data-action="close-dialog" aria-label="Fermer">' + ico('x') + '</button></div>' +
      (L.length ? '<div class="drawer-lines">' + L.map(lineHtml).join('') + '</div><div class="drawer-foot">' + sums() + '<a class="btn btn-wide" href="#/commande" data-close>Passer la commande</a><a class="btn btn-ghost btn-wide" href="#/panier" data-close>Voir le panier</a></div>' : emptyCart.replace('class="btn"', 'class="btn" data-close'));
  }

  /* Commande */
  function viewCheckout() {
    if (!cartLines().length) return '<div class="wrap">' + crumbs([['Commande']]) + '<h1 class="page-title">Commande</h1>' + emptyCart + '</div>';
    var f = function (id, l, type, extra, ac) { return '<div class="field ' + (extra || '') + '"><label for="' + id + '">' + l + '</label><input id="' + id + '" type="' + type + '" autocomplete="' + ac + '" required></div>'; };
    var ship = Object.keys(SHIPPING).map(function (k) { var s = SHIPPING[k]; return '<label class="radio"><input type="radio" name="ship" value="' + k + '"' + (state.ship === k ? ' checked' : '') + '><span><b>' + esc(s.label) + '</b><small>' + esc(s.note) + '</small></span><em>' + (s.price ? eur(s.price) + ' HT' : 'Offert') + '</em></label>'; }).join('');
    var pays = [['compte', 'Paiement sur compte client', 'Selon vos conditions habituelles'], ['virement', 'Virement bancaire', 'Coordonnées envoyées avec la confirmation'], ['carte', 'Carte bancaire', 'Étape simulée dans cette démonstration']];
    return '<div class="wrap">' + crumbs([['Panier', '#/panier'], ['Commande']]) + '<h1 class="page-title">Commande</h1><form class="cart-layout" id="checkout"><div><section class="form-sec"><h2>Votre société</h2><div class="form-grid">' + f('coCompany', 'Société', 'text', 'full', 'organization') + f('coName', 'Contact', 'text', '', 'name') + f('coTel', 'Téléphone', 'tel', '', 'tel') + f('coMail', 'E-mail', 'email', 'full', 'email') + f('coAddr', 'Adresse', 'text', 'full', 'street-address') + f('coZip', 'Code postal', 'text', '', 'postal-code') + f('coCity', 'Ville', 'text', '', 'address-level2') + '</div></section><section class="form-sec"><h2>Livraison</h2>' + ship + '</section><section class="form-sec"><h2>Paiement</h2>' + pays.map(function (x) { return '<label class="radio"><input type="radio" name="pay" value="' + x[0] + '"' + (state.pay === x[0] ? ' checked' : '') + '><span><b>' + x[1] + '</b><small>' + x[2] + '</small></span></label>'; }).join('') + '</section></div><aside class="summary"><h2>Récapitulatif</h2><div id="coSums">' + sums(SHIPPING[state.ship].price) + '</div><button class="btn btn-wide" type="submit">Valider la commande de démonstration</button></aside></form></div>';
  }
  function viewDone(n) {
    return '<div class="wrap"><div class="done">' + ico('check') + '<h1 class="page-title">Commande de démonstration validée</h1><p>Numéro ' + esc(n || 'DEMO') + '. Sur le site final, le client recevrait ici sa confirmation, et la commande partirait vers votre gestion. Rien n’a été transmis.</p><a class="btn" href="#/">Revenir à l’accueil</a></div></div>';
  }

  function viewFavs() {
    var L = state.favs.map(function (id) { return byId[id]; }).filter(Boolean);
    return '<div class="wrap">' + crumbs([['Favoris']]) + '<h1 class="page-title">Favoris</h1>' + (L.length ? '<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(210px,1fr))">' + L.map(card).join('') + '</div>' : '<div class="empty"><h2>Aucun favori</h2><p>Gardez ici les références que vous commandez souvent.</p><a class="btn" href="#/catalogue/tout">Voir le catalogue</a></div>') + '</div>';
  }
  function viewServices() {
    var col = function (t, l) { return '<article><h2>' + t + '</h2><ul class="ticks">' + l.map(function (x) { return '<li>' + ico('check') + esc(x) + '</li>'; }).join('') + '</ul></article>'; };
    return '<div class="wrap">' + crumbs([['Services']]) + '<h1 class="page-title">Plus qu’un fournisseur, un partenaire au quotidien</h1><p class="page-intro">La réactivité, l’accompagnement technique et la qualité de service comptent autant que la pièce.</p><div class="svc">' + col('Rénovation au modèle', ['Réparation selon faisabilité', 'Dépôt sur site ou enlèvement possible', 'Retour ou livraison rapide', 'Solution pour références spécifiques']) + col('Livraison optimisée', ['Express en région parisienne', 'France entière J+1', 'Messagerie express', 'Retrait usine de 08h00 à 17h30']) + col('Support technique dédié', ['Assistance au montage', 'Recherche de références', 'Recommandations techniques', 'Accompagnement SAV']) + '</div></div>';
  }
  function viewAccount() {
    var rows = [['DEMO-2841', '12/11/2026', ['RT-TR-1001', 'RT-ET-6003'], 'Livrée'], ['DEMO-2796', '04/11/2026', ['RT-TU-4002'], 'Livrée'], ['DEMO-2733', '21/10/2026', ['RT-RO-3001', 'RT-JO-7001', 'RT-EG-5001'], 'Facturée']];
    return '<div class="wrap">' + crumbs([['Mon compte']]) + '<h1 class="page-title">Espace professionnel</h1><p class="page-intro">Aperçu de ce que verrait un garage connecté : ses commandes, ses factures et le renouvellement en un clic. Les données sont fictives.</p><div class="table-wrap"><table><thead><tr><th scope="col">Commande</th><th scope="col">Date</th><th scope="col">Pièces</th><th scope="col">Montant HT</th><th scope="col">Statut</th><th scope="col"><span class="sr">Action</span></th></tr></thead><tbody>' + rows.map(function (r) { var t = r[2].reduce(function (s, id) { return s + byId[id].price; }, 0); return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2].length + '</td><td>' + eur(t) + '</td><td>' + r[3] + '</td><td><button type="button" class="btn" data-action="reorder" data-ids="' + r[2].join(',') + '">Commander à nouveau</button></td></tr>'; }).join('') + '</tbody></table></div></div>';
  }
  var notFound = function () { return '<div class="wrap"><div class="done"><h1 class="page-title">Page introuvable</h1><p>Cette page n’existe pas dans la démonstration.</p><a class="btn" href="#/">Revenir à l’accueil</a></div></div>'; };

  /* Diaporama */
  var timer = null, slideI = 0, paused = false;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function stopHero() { clearInterval(timer); timer = null; }
  function showSlide(i) {
    slideI = (i + SLIDES.length) % SLIDES.length;
    $$('.slide').forEach(function (s, n) { s.classList.toggle('on', n === slideI); if (n === slideI) s.removeAttribute('aria-hidden'); else s.setAttribute('aria-hidden', 'true'); });
    $$('.hero-ctl .th').forEach(function (b, n) { if (n === slideI) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
  }
  function startHero() { stopHero(); if (!paused && !reduce && $('.hero')) timer = setInterval(function () { showSlide(slideI + 1); }, 6000); }

  /* Routeur */
  function render() {
    stopHero();
    var raw = location.hash.replace(/^#\/?/, ''), parts = raw.split('?'), seg = parts[0].split('/').filter(Boolean), params = new URLSearchParams(parts[1] || '');
    var r = seg[0] || '', html, nav = '';
    if (!r) { html = viewHome(); nav = 'home'; }
    else if (r === 'catalogue') { html = viewCatalog(seg[1] || 'tout', params.get('q') || ''); nav = seg[1] || 'tout'; }
    else if (r === 'produit') { html = viewProduct(seg[1]); nav = byId[seg[1]] ? byId[seg[1]].cat : ''; }
    else if (r === 'panier') html = viewCart();
    else if (r === 'commande') html = viewCheckout();
    else if (r === 'merci') html = viewDone(seg[1]);
    else if (r === 'favoris') html = viewFavs();
    else if (r === 'services') { html = viewServices(); nav = 'services'; }
    else if (r === 'compte') html = viewAccount();
    else html = notFound();
    $('#main').innerHTML = html;
    $$('#mainNav a').forEach(function (a) { if (a.dataset.nav === nav) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    if (!r) { slideI = 0; startHero(); }
    window.scrollTo(0, 0);
    if (render.ready) $('#main').focus({ preventScroll: true });
    render.ready = true;
  }

  /* Mutations */
  function saveCart() {
    store.set('cart', state.cart);
    $$('[data-cart-count]').forEach(function (e) { e.textContent = cartCount(); });
    if ($('#cartDrawer').open) renderDrawer();
    var r = location.hash;
    if (r.indexOf('#/panier') === 0) $('#main').innerHTML = viewCart();
    if (r.indexOf('#/commande') === 0 && !cartLines().length) $('#main').innerHTML = viewCheckout();
    if (r.indexOf('#/commande') === 0 && $('#coSums')) $('#coSums').innerHTML = sums(SHIPPING[state.ship].price);
  }
  function addItem(id, q) { state.cart[id] = Math.min(999, (state.cart[id] || 0) + q); }
  var toastT;
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('on'); }, 2600); }
  function syncTax() { $$('.tax button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.tax === state.tax); }); }
  function openCart() { renderDrawer(); $('#cartDrawer').showModal(); }

  /* Actions */
  var actions = {
    add: function (b) { addItem(b.dataset.id, 1); saveCart(); toast('Ajouté au panier'); },
    'add-qty': function (b) { addItem(b.dataset.id, +$('#pdpQty').textContent); saveCart(); openCart(); },
    'pdp-qty': function (b) { var o = $('#pdpQty'); o.textContent = Math.max(1, Math.min(999, +o.textContent + +b.dataset.d)); },
    qty: function (b) { var id = b.dataset.id, n = state.cart[id] + +b.dataset.d; if (n < 1) delete state.cart[id]; else state.cart[id] = Math.min(999, n); saveCart(); },
    rm: function (b) { delete state.cart[b.dataset.id]; saveCart(); toast('Pièce retirée du panier'); },
    fav: function (b) {
      var id = b.dataset.id, i = state.favs.indexOf(id), on = i < 0;
      if (on) state.favs.push(id); else state.favs.splice(i, 1);
      store.set('favs', state.favs); syncFav();
      $$('[data-action=fav][data-id="' + id + '"]').forEach(function (x) { x.setAttribute('aria-pressed', on); });
      toast(on ? 'Ajouté aux favoris' : 'Retiré des favoris');
      if (location.hash.indexOf('#/favoris') === 0) $('#main').innerHTML = viewFavs();
    },
    tax: function (b) {
      state.tax = b.dataset.tax; store.set('tax', state.tax); syncTax();
      var el = $('#pdpPrice'); el.innerHTML = pdpMoney(+el.dataset.price);
    },
    'open-cart': openCart,
    quick: function () { $('#quickResult').textContent = ''; $('#quickModal').showModal(); },
    'close-dialog': function (b) { b.closest('dialog').close(); },
    rail: function (b) { var r = document.getElementById(b.dataset.rail); r.scrollBy({ left: +b.dataset.dir * r.clientWidth * .8, behavior: reduce ? 'auto' : 'smooth' }); },
    slide: function (b) { showSlide(+b.dataset.i); startHero(); },
    pause: function (b) { paused = !paused; b.innerHTML = ico(paused ? 'play' : 'pause'); b.setAttribute('aria-label', paused ? 'Reprendre le défilement' : 'Mettre le défilement en pause'); startHero(); },
    thumb: function (b) { $('#pdpMain').setAttribute('style', pCrop(byId[b.dataset.id], +b.dataset.n)); $$('.thumbs button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); },
    'clear-vehicle': function () { state.vehicle = null; store.set('vehicle', null); location.hash = '#/'; },
    'reset-filters': function () { state.filters = { neuf: false, rec: false, noDeposit: false, inStock: false, sort: 'pop' }; state.vehicle = null; store.set('vehicle', null); render(); },
    reorder: function (b) { b.dataset.ids.split(',').forEach(function (id) { addItem(id, 1); }); saveCart(); openCart(); }
  };
  function syncFav() { $$('[data-fav-count]').forEach(function (e) { e.textContent = state.favs.length; }); }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-action]');
    if (a && actions[a.dataset.action]) { actions[a.dataset.action](a); return; }
    var dlg = e.target.closest('dialog');
    if (dlg && (e.target === dlg || e.target.closest('a[href^="#/"]'))) dlg.close();
  });

  document.addEventListener('change', function (e) {
    var t = e.target, cat = $('#catalog');
    if (t.dataset.filter && cat) { state.filters[t.dataset.filter] = t.checked; renderList(cat.dataset.cat, cat.dataset.q); }
    if (t.id === 'sort' && cat) { state.filters.sort = t.value; renderList(cat.dataset.cat, cat.dataset.q); }
    if (t.name === 'ship') { state.ship = t.value; $('#coSums').innerHTML = sums(SHIPPING[t.value].price); }
    if (t.name === 'pay') state.pay = t.value;
    var opts = function (sel, list) { sel.innerHTML = '<option value="">Choisir</option>' + list.map(function (x) { return '<option>' + esc(x) + '</option>'; }).join(''); sel.disabled = !list.length; };
    if (t.id === 'fB') { opts($('#fM'), VEHICLES.filter(function (v) { return v[0] === t.value; }).map(function (v) { return v[1]; }).filter(function (m, i, a) { return a.indexOf(m) === i; })); opts($('#fE'), []); }
    if (t.id === 'fM') opts($('#fE'), VEHICLES.filter(function (v) { return v[0] === $('#fB').value && v[1] === t.value; }).map(function (v) { return v[2]; }));
  });

  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (f.id === 'finder') {
      e.preventDefault();
      var b = $('#fB').value, m = $('#fM').value, x = $('#fE').value;
      state.vehicle = VEHICLES.findIndex(function (v) { return v[0] === b && v[1] === m && v[2] === x; });
      store.set('vehicle', state.vehicle); location.hash = '#/catalogue/tout';
    }
    if (f.id === 'searchForm') {
      e.preventDefault();
      var q = $('#searchInput').value.trim(), h = '#/catalogue/' + ($('#searchCat').value || 'tout') + (q ? '?q=' + encodeURIComponent(q) : '');
      if (location.hash === h) render(); else location.hash = h;
    }
    if (f.id === 'newsForm') { e.preventDefault(); f.reset(); toast('Inscription simulée : aucune adresse n’est enregistrée'); }
    if (f.id === 'checkout') {
      e.preventDefault();
      var n = 'DEMO-' + Math.floor(1000 + Math.random() * 9000);
      state.cart = {}; saveCart(); location.hash = '#/merci/' + n;
    }
    if (f.id === 'quickForm') {
      e.preventDefault();
      var ok = 0, bad = [];
      $('#quickInput').value.split('\n').map(function (l) { return l.trim(); }).filter(Boolean).forEach(function (l) {
        var m2 = l.match(/^(\S+)(?:[\s;,x]+(\d+))?$/i), id = m2 && m2[1].toUpperCase(), q2 = m2 && m2[2] ? +m2[2] : 1;
        if (id && byId[id] && q2 > 0) { addItem(id, q2); ok += q2; } else bad.push(l);
      });
      saveCart();
      if (bad.length) { $('#quickResult').textContent = 'Non reconnu : ' + bad.join(', ') + '. Corrigez la ligne, le reste a été ajouté.'; $('#quickInput').value = bad.join('\n'); }
      else if (ok) { $('#quickModal').close(); openCart(); }
      else $('#quickResult').textContent = 'Saisissez au moins une référence, par exemple RT-TR-1001 2.';
    }
  });

  /* Démarrage */
  $('#searchCat').innerHTML = '<option value="">Toutes les gammes</option>' + CATS.map(function (c) { return '<option value="' + c.id + '">' + esc(c.name) + '</option>'; }).join('');
  $('#mainNav').innerHTML = '<a href="#/" data-nav="home">Accueil</a>' + CATS.map(function (c) { return '<a href="#/catalogue/' + c.id + '" data-nav="' + c.id + '">' + esc(c.nav) + '</a>'; }).join('') + '<a href="#/services" data-nav="services">Services</a>';
  $('#footCats').innerHTML = CATS.map(function (c) { return '<li><a href="#/catalogue/' + c.id + '">' + esc(c.name) + '</a></li>'; }).join('');
  syncFav(); saveCart();
  window.addEventListener('hashchange', render);
  render();
})();
