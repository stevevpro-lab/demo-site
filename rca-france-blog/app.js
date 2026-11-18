const SITE = "https://www.rcafrance.com";
const UP = `${SITE}/wp-content/uploads`;
const IMG = {
  transmissionBanner: `${UP}/2026/05/transmissions_rca_titanium_200kb.jpg`,
  turboBanner: `${UP}/2017/01/turbos_neufs_banner_200kb.jpg`,
  bearingBanner: `${UP}/2026/05/roulements_banner_200kb.jpg`,
  caliperBanner: `${UP}/2026/05/etriers_frein_banner_200kb.jpg`,
  transmission: `${UP}/2017/01/transmissions_370x240_33ko.jpg`,
  exchange: `${UP}/2017/01/transmissions_echange_standard_370x240_28ko_v2.jpg`,
  bearing: `${UP}/2017/01/roulements_370x240_100ko.jpg`,
  turbo: `${UP}/2017/01/turbos_370x240_100ko.jpg`,
  egr: `${UP}/2017/01/vannes_egr_370x240_100ko.jpg`,
  caliper: `${UP}/2026/01/etriers_frein_370x240_100ko.jpg`,
  dashboard: `${SITE}/wp-content/themes/rca/images/services-fond.jpg`,
};
const PAGE = {
  transmissions: `${SITE}/produits/transmissions-neuves/`,
  exchange: `${SITE}/produits/transmissions-renovees/`,
  joints: `${SITE}/produits/joints-homocinetiques-neufs/`,
  turbos: `${SITE}/produits/turbocompresseurs/`,
  etriers: `${SITE}/produits/etriers-de-frein/`,
  roulements: `${SITE}/produits/kits-de-roulements/`,
  egr: `${SITE}/produits/vannes-egr-neuves/`,
  services: `${SITE}/services-rca-france/`,
};
const RANGES = {
  transmissions: "Transmissions",
  joints: "Joints homocinétiques",
  turbos: "Turbos",
  etriers: "Étriers",
  roulements: "Roulements",
  egr: "Vannes EGR",
  services: "Services",
};

const TEAM = "Équipe RCA France";
const TECH = "Support technique RCA";

const POSTS = [
  { title: "RCA France x NPS : nos transmissions neuves arrivent chez NPS Fretin", text: "Un nouveau partenariat pour retrouver notre gamme garantie 5 ans, sans consigne, avec une disponibilité rapide.", by: TEAM, date: "1er juillet 2026", range: "transmissions", kind: "Partenariat", img: IMG.transmissionBanner, alt: "Deux transmissions RCA Titanium sur fond carbone", slug: "rca-france-x-nps", href: "article.html?a=rca-france-x-nps" },
  { title: "Partenariat logistique avec PAP Gennevilliers", text: "Notre gamme de transmissions neuves est désormais disponible sur la plateforme PAP Gennevilliers.", by: TEAM, date: "26 mai 2026", range: "transmissions", kind: "Partenariat", img: IMG.transmission, alt: "Transmissions neuves dans un atelier de production", slug: "rca-x-pap-gennevilliers", href: "article.html?a=rca-x-pap-gennevilliers" },
  { title: "Étrier neuf sans consigne : ce que ça change", text: "Pas d'ancien étrier à retourner, pas de trésorerie bloquée et une pièce prête à monter.", by: TECH, date: "14 avril 2026", range: "etriers", kind: "Conseil atelier", img: IMG.caliperBanner, pos: "left center", alt: "Étriers de frein neufs RCA Titanium", slug: "etrier-neuf-sans-consigne" },
  { title: "Transmission neuve ou échange standard : que choisir ?", text: "Budget, délai, référence disponible : les critères pour décider selon la réparation à réaliser.", by: TECH, date: "31 mars 2026", range: "transmissions", kind: "Guide d'achat", img: IMG.exchange, alt: "Transmissions reconditionnées et composants en bacs", slug: "transmission-neuve-ou-echange-standard", href: "article.html?a=transmission-neuve-ou-echange-standard" },
  { title: "Turbo neuf : pourquoi le kit de joints compte", text: "Un montage complet dès la réception limite les oublis et les risques de fuite à la remise en route.", by: TECH, date: "17 mars 2026", range: "turbos", kind: "Montage", img: IMG.turboBanner, pos: "left center", alt: "Turbocompresseurs neufs RCA Titanium", slug: "turbo-neuf-kit-de-joints" },
  { title: "Bruit de roulement : les signes à repérer à l'essai", text: "Grondement, variation en virage, jeu à la roue : comment orienter le diagnostic avant le démontage.", by: TECH, date: "3 mars 2026", range: "roulements", kind: "Diagnostic", img: IMG.bearingBanner, pos: "left center", alt: "Moyeux et kits de roulements", slug: "bruit-de-roulement" },
  { title: "Vanne EGR : reconnaître une panne avant de remplacer", text: "Perte de puissance, ralenti instable, voyant moteur : les vérifications à faire en premier.", by: TECH, date: "17 février 2026", range: "egr", kind: "Diagnostic", img: IMG.egr, alt: "Vannes EGR neuves en atelier", slug: "vanne-egr-diagnostic" },
  { title: "Soufflet abîmé : joint seul ou transmission complète ?", text: "L'état de la graisse, des cannelures et du joint permet de choisir la réparation la plus juste.", by: TECH, date: "5 février 2026", range: "joints", kind: "Conseil atelier", img: IMG.transmissionBanner, pos: "right center", alt: "Joints et soufflets de transmissions", slug: "soufflet-abime-joint-ou-transmission" },
  { title: "Livraison J+1 et retrait usine : organiser vos commandes", text: "Express en région parisienne, France entière en J+1, retrait à Aulnay de 8 h à 17 h 30.", by: TEAM, date: "22 janvier 2026", range: "services", kind: "Logistique", img: IMG.dashboard, alt: "Tableau de bord d'un véhicule", slug: "livraison-j1-retrait-usine" },
  { title: "Dans les contrôles qualité d'une transmission", text: "Contrôle dimensionnel, équilibrage dynamique et tests d'étanchéité, étape par étape.", by: TEAM, date: "8 janvier 2026", range: "transmissions", kind: "Qualité", img: IMG.transmission, alt: "Transmissions neuves alignées en usine", slug: "controles-qualite-transmission" },
  { title: "Avant de monter un turbo : la liste de vérifications", text: "Huile, arrivée, retour et admission : les points à contrôler pour protéger la pièce neuve.", by: TECH, date: "11 décembre 2025", range: "turbos", kind: "Montage", img: IMG.turbo, alt: "Turbocompresseurs neufs en atelier", slug: "avant-de-monter-un-turbo" },
  { title: "Étrier de frein : les points à vérifier au remplacement", text: "Piston, coulissement, étanchéité et fixations pour un freinage régulier après l'intervention.", by: TECH, date: "27 novembre 2025", range: "etriers", kind: "Montage", img: IMG.caliper, alt: "Étriers de frein neufs en atelier", slug: "etrier-points-a-verifier" },
  { title: "Kit roulement : ce que nous contrôlons avant expédition", text: "Dimensions, rotation, bruit et jeu interne : les contrôles qui précèdent la commercialisation.", by: TEAM, date: "13 novembre 2025", range: "roulements", kind: "Qualité", img: IMG.bearing, alt: "Roulements présentés en atelier", slug: "controles-kit-roulement" },
  { title: "Rénovation au modèle : une solution pour les pièces rares", text: "Quand la référence manque, nous étudions la réparation de votre pièce selon sa faisabilité.", by: TEAM, date: "30 octobre 2025", range: "services", kind: "Service", img: IMG.exchange, alt: "Pièces de transmission en cours de rénovation", slug: "renovation-au-modele" },
  { title: "Trouver la bonne référence avec le support technique", text: "Les informations à préparer pour obtenir une réponse rapide et commander la bonne pièce.", by: TECH, date: "16 octobre 2025", range: "services", kind: "Service", img: IMG.transmissionBanner, pos: "left center", alt: "Transmissions RCA Titanium", slug: "trouver-la-bonne-reference" },
];
POSTS.forEach((post) => { post.href = `article.html?a=${post.slug}`; });

const PER_PAGE = 6;
const RECENT = 3;
const state = { range: "all", page: 1 };
const $ = (selector) => document.querySelector(selector);
const esc = (value) => value
  .replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]))
  .replace(/ ([:;?!])/g, " $1");

function card(post, variant, eager) {
  const position = post.pos ? ` style="object-position:${post.pos}"` : "";
  const loading = eager ? "eager" : "lazy";
  const body = `<p class="meta">${esc(post.by)} • ${esc(post.date)}</p>
    <h3><a href="${post.href}">${esc(post.title)}</a><svg class="i" aria-hidden="true"><use href="#i-out"/></svg></h3>
    <p class="excerpt">${esc(post.text)}</p>
    <ul class="tags"><li class="tag t-${post.range}">${RANGES[post.range]}</li><li class="tag">${esc(post.kind)}</li></ul>`;
  return `<article class="post ${variant}">
    <span class="media"><img src="${post.img}" alt="${esc(post.alt)}" loading="${loading}"${position}></span>
    ${variant === "post-side" ? `<div>${body}</div>` : body}
  </article>`;
}

function renderRecent() {
  $("#recent").innerHTML = POSTS.slice(0, RECENT)
    .map((post, i) => card(post, i === 0 ? "post-lead" : "post-side", true))
    .join("");
}

function renderFilters() {
  const options = [["all", "Toutes les gammes"], ...Object.entries(RANGES)];
  $("#filters").innerHTML = options
    .map(([id, label]) => `<button type="button" data-range="${id}" aria-pressed="${state.range === id}">${label}</button>`)
    .join("");
}

function currentPosts() {
  return state.range === "all" ? POSTS.slice(RECENT) : POSTS.filter((post) => post.range === state.range);
}

function renderPager(pages) {
  const pager = $("#pager");
  pager.hidden = pages < 2;
  if (pages < 2) { pager.innerHTML = ""; return; }
  const numbers = Array.from({ length: pages }, (_, i) => i + 1)
    .map((n) => `<button type="button" data-page="${n}" aria-label="Page ${n}"${n === state.page ? ' aria-current="page"' : ""}>${n}</button>`)
    .join("");
  pager.innerHTML = `<button class="step" type="button" data-page="${state.page - 1}"${state.page === 1 ? " disabled" : ""}><svg class="i" aria-hidden="true"><use href="#i-left"/></svg><span>Précédent</span></button>
    <div class="pages">${numbers}</div>
    <button class="step" type="button" data-page="${state.page + 1}"${state.page === pages ? " disabled" : ""}><span>Suivant</span><svg class="i" aria-hidden="true"><use href="#i-right"/></svg></button>`;
}

function renderGrid() {
  const posts = currentPosts();
  const pages = Math.max(1, Math.ceil(posts.length / PER_PAGE));
  state.page = Math.min(state.page, pages);
  const start = (state.page - 1) * PER_PAGE;
  $("#grid").innerHTML = posts.slice(start, start + PER_PAGE).map((post) => card(post, "post-card")).join("");
  $("#count").textContent = `${posts.length} article${posts.length > 1 ? "s" : ""}`;
  renderPager(pages);
}

function initBlog() {
$("#filters").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-range]");
  if (!button) return;
  state.range = button.dataset.range;
  state.page = 1;
  $("#filters").querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
  renderGrid();
});

$("#pager").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-page]");
  if (!button || button.disabled) return;
  state.page = Number(button.dataset.page);
  renderGrid();
  $("#all").scrollIntoView({ block: "start" });
});

$("#subscribeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#email");
  const message = $("#subscribeMsg");
  const valid = input.value.trim() !== "" && input.checkValidity();
  input.setAttribute("aria-invalid", String(!valid));
  message.classList.toggle("is-error", !valid);
  message.classList.toggle("is-ok", valid);
  message.textContent = valid
    ? "Adresse valide. Dans cette maquette, aucune inscription n'est enregistrée."
    : "Saisissez une adresse e-mail complète, par exemple nom@garage.fr.";
  if (valid) event.target.reset(); else input.focus();
});

renderRecent();
renderFilters();
renderGrid();
}

$(".menu-btn").addEventListener("click", (event) => {
  const open = $("#mainNav").classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

if ($("#grid")) initBlog();
