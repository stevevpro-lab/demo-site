const partnerBody = (platform) => `
  <p class="intro">Chers partenaires, nous avons le plaisir de confirmer le lancement de notre partenariat avec la plateforme ${platform}.</p>
  <h2 id="gamme">Ce que vous y retrouvez</h2>
  <p>Notre gamme de transmissions neuves RCA France est désormais disponible sur cette plateforme, avec les engagements qui la caractérisent :</p>
  <ul>
    <li><strong>Garantie 5 ans</strong></li>
    <li><strong>Sans consigne</strong></li>
    <li><strong>Qualité premium</strong></li>
    <li><strong>Disponibilité rapide</strong></li>
  </ul>
  <h2 id="objectif">Pourquoi ce partenariat</h2>
  <p>Cette collaboration s'inscrit dans notre volonté d'être toujours plus proches des professionnels et de renforcer notre qualité de service. Notre équipe reste à votre entière disposition.</p>`;

const ARTICLES = {
  "rca-france-x-nps": { body: partnerBody("NPS Fretin") },
  "rca-x-pap-gennevilliers": { body: partnerBody("PAP Gennevilliers") },
  "transmission-neuve-ou-echange-standard": {
    body: `
  <p class="intro">Devant une transmission à remplacer, le bon choix dépend du véhicule, du budget du client et du délai de l'atelier. Voici comment comparer les deux solutions.</p>
  <div class="key">
    <h2 id="essentiel">L'essentiel</h2>
    <p>La transmission neuve convient quand vous cherchez la tranquillité sur la durée. L'échange standard répond bien aux réparations économiques et aux besoins de dépannage rapide.</p>
  </div>
  <h2 id="comparatif">Les deux solutions en un coup d'œil</h2>
  <div class="table-wrap" tabindex="0" role="region" aria-label="Comparatif transmission neuve et échange standard">
    <table>
      <thead><tr><th scope="col">Critère</th><th scope="col">Neuve RCA Titanium</th><th scope="col">Échange standard</th></tr></thead>
      <tbody>
        <tr><th scope="row">Origine</th><td>Pièce neuve</td><td>Pièce reconditionnée et contrôlée</td></tr>
        <tr><th scope="row">Point fort</th><td>Garantie 5 ans, sans consigne</td><td>Solution économique et durable</td></tr>
        <tr><th scope="row">Contrôles</th><td>Dimensions, équilibrage dynamique, étanchéité</td><td>Dimensions, joints, soufflets, cannelures, jeux, fixations</td></tr>
        <tr><th scope="row">Usage type</th><td>Réparation pensée pour durer</td><td>Dépannage et maîtrise du budget</td></tr>
      </tbody>
    </table>
  </div>
  <h2 id="neuve">Quand privilégier le neuf</h2>
  <p>Le neuf est un choix simple lorsque le client garde son véhicule longtemps ou roule beaucoup. Sans consigne, vous n'avez pas à gérer le retour de l'ancienne pièce et aucune somme ne reste immobilisée.</p>
  <h2 id="echange">Quand choisir l'échange standard</h2>
  <p>Chaque transmission reconditionnée est démontée, nettoyée, contrôlée, puis assemblée avec les pièces nécessaires. C'est une alternative fiable pour un besoin urgent ou un budget serré.</p>
  <h2 id="reference">Vérifier avant de commander</h2>
  <ul>
    <li>Le type de véhicule, sa motorisation et sa boîte de vitesses.</li>
    <li>Le côté de la transmission et la référence d'origine.</li>
    <li>Les conditions de garantie et de reprise applicables à la pièce choisie.</li>
    <li>Le délai souhaité : livraison ou retrait à l'usine d'Aulnay-sous-Bois.</li>
  </ul>
  <p>En cas de doute, notre support technique vous aide à retrouver la bonne référence.</p>`,
  },
  "etrier-neuf-sans-consigne": {
    body: `
  <p class="intro">Sur un étrier reconditionné, la consigne ajoute une étape après la réparation : récupérer l'ancienne pièce, la renvoyer, puis attendre le remboursement. Avec un étrier neuf sans consigne, ce suivi disparaît.</p>
  <div class="key">
    <h2 id="essentiel">L'essentiel</h2>
    <p>Nos étriers neufs sont garantis 2 ans, prêts à monter et ne demandent aucun retour de l'ancienne pièce.</p>
  </div>
  <h2 id="tresorerie">Moins de trésorerie immobilisée</h2>
  <p>Sans consigne, aucune somme ne reste en attente pour chaque pièce commandée. Le coût de la réparation est connu dès l'achat, ce qui simplifie aussi le devis présenté au client.</p>
  <h2 id="atelier">Moins de gestion à l'atelier</h2>
  <ul>
    <li>Pas d'ancien étrier à vidanger, emballer et stocker avant retour.</li>
    <li>Pas de suivi d'avoir à effectuer.</li>
    <li>Pas de risque de refus lié à l'état de la pièce rendue.</li>
  </ul>
  <h2 id="qualite">Une pièce contrôlée avant livraison</h2>
  <p>Nous vérifions l'étanchéité, le piston, le coulissement, les filetages et les points de fixation. Le montage est adaptable à la pièce d'origine, sans opération de reprise.</p>`,
  },
  "turbo-neuf-kit-de-joints": {
    body: `
  <p class="intro">Un turbo neuf ne fonctionne bien que si ses raccordements sont parfaitement étanches. Réutiliser d'anciens joints expose à des fuites et à un retour en atelier.</p>
  <h2 id="role">À quoi servent ces joints</h2>
  <p>Ils assurent l'étanchéité des circuits d'huile et des raccords du turbo. Une fois serrés et chauffés, ils se déforment : leur réemploi n'offre plus la même garantie de tenue.</p>
  <h2 id="avantages">Ce que le kit simplifie</h2>
  <ul>
    <li>Les joints nécessaires arrivent avec la pièce.</li>
    <li>Vous évitez une commande complémentaire et l'attente qu'elle entraîne.</li>
    <li>Le montage suit un déroulé plus simple pour le technicien.</li>
  </ul>
  <h2 id="gamme">Avec nos turbos neufs</h2>
  <p>Nos turbocompresseurs sont neufs, sans consigne et garantis 2 ans, avec kit de joints inclus. Chaque modèle bénéficie d'un contrôle d'équilibrage dynamique à haute vitesse et d'étanchéité.</p>
  <h2 id="reflexe">Le bon réflexe au déballage</h2>
  <p>Comparez le contenu du kit aux pièces déposées avant de commencer. Respectez ensuite le sens de montage et les couples de serrage indiqués par le constructeur du véhicule.</p>`,
  },
  "bruit-de-roulement": {
    body: `
  <p class="intro">Un roulement usé se manifeste souvent par un bruit qui évolue avec la vitesse. Un essai méthodique évite de le confondre avec un pneu ou un élément de transmission.</p>
  <h2 id="signes">Ce que l'on peut constater</h2>
  <div class="table-wrap" tabindex="0" role="region" aria-label="Signes d'usure d'un roulement">
    <table>
      <thead><tr><th scope="col">Signe</th><th scope="col">Piste à vérifier</th></tr></thead>
      <tbody>
        <tr><th scope="row">Grondement qui augmente avec la vitesse</th><td>Roulement de roue, sans écarter l'état des pneus</td></tr>
        <tr><th scope="row">Bruit qui change en virage</th><td>Roulement du côté le plus chargé</td></tr>
        <tr><th scope="row">Jeu perceptible à la roue</th><td>Roulement, mais aussi rotules et biellettes</td></tr>
        <tr><th scope="row">Voyant ABS allumé</th><td>Capteur et cible magnétique du moyeu</td></tr>
      </tbody>
    </table>
  </div>
  <h2 id="essai">Pendant l'essai routier</h2>
  <p>Sur une route sûre et à vitesse stable, observez si le bruit varie quand la charge passe d'un côté à l'autre du véhicule. S'il reste identique, regardez aussi du côté des pneumatiques.</p>
  <h2 id="pont">Sur le pont</h2>
  <p>Roue levée, faites-la tourner à la main pour sentir un point dur ou une rugosité, puis contrôlez le jeu en la saisissant en haut et en bas. Remplacez ensuite la pièce selon les préconisations du constructeur.</p>`,
  },
  "vanne-egr-diagnostic": {
    body: `
  <p class="intro">Les symptômes d'une vanne EGR défaillante ressemblent à ceux d'autres pannes moteur. Quelques contrôles simples évitent de remplacer une pièce encore fonctionnelle.</p>
  <h2 id="symptomes">Les symptômes fréquents</h2>
  <ul>
    <li>Voyant moteur allumé.</li>
    <li>Perte de puissance ou passage en mode dégradé.</li>
    <li>Ralenti instable, voire calage.</li>
    <li>Fumées ou à-coups à l'accélération.</li>
  </ul>
  <h2 id="controles">Les vérifications à faire d'abord</h2>
  <ol>
    <li>Lisez les codes défaut et notez les conditions de leur apparition.</li>
    <li>Contrôlez le connecteur et le faisceau de la vanne.</li>
    <li>Sur une commande pneumatique, vérifiez les durites et la dépression.</li>
    <li>Observez l'encrassement de la vanne et des conduits voisins.</li>
    <li>Testez son fonctionnement avec l'outil de diagnostic quand c'est possible.</li>
  </ol>
  <h2 id="remplacement">Si le remplacement est confirmé</h2>
  <p>Traitez aussi l'encrassement des conduits concernés, puis effacez les défauts. Certains véhicules demandent une procédure d'apprentissage après le montage.</p>
  <p>Nos vannes EGR neuves sont vérifiées sur leurs mécanismes internes, leurs actionneurs et leur étanchéité.</p>`,
  },
  "soufflet-abime-joint-ou-transmission": {
    body: `
  <p class="intro">Un soufflet déchiré laisse sortir la graisse et entrer l'eau et les poussières. La bonne réparation dépend surtout de l'état du joint qu'il protégeait.</p>
  <div class="key">
    <h2 id="essentiel">L'essentiel</h2>
    <p>Plus la déchirure est détectée tôt, plus la réparation peut rester limitée. Dès que le joint est marqué ou bruyant, le soufflet seul ne suffit plus.</p>
  </div>
  <h2 id="inspection">Ce qu'il faut inspecter</h2>
  <ul>
    <li>La graisse : propre, ou chargée d'eau et de particules.</li>
    <li>Les billes, les cages et les pistes du joint.</li>
    <li>Les cannelures et les points de fixation.</li>
    <li>Un claquement en braquage, signe fréquent d'un joint usé.</li>
  </ul>
  <h2 id="decision">Comment décider</h2>
  <div class="table-wrap" tabindex="0" role="region" aria-label="Choix de la réparation selon l'état constaté">
    <table>
      <thead><tr><th scope="col">État constaté</th><th scope="col">Réparation à envisager</th></tr></thead>
      <tbody>
        <tr><th scope="row">Graisse saine, joint sans jeu ni marque</th><td>Remplacement du soufflet</td></tr>
        <tr><th scope="row">Graisse polluée ou joint usé</th><td>Joint homocinétique neuf</td></tr>
        <tr><th scope="row">Usure sur plusieurs éléments</th><td>Transmission complète</td></tr>
      </tbody>
    </table>
  </div>
  <h2 id="kit">Le contenu des kits</h2>
  <p>Selon la référence, nos joints homocinétiques sont fournis avec soufflet, graisse, colliers, écrou et accessoires de montage.</p>`,
  },
  "livraison-j1-retrait-usine": {
    body: `
  <p class="intro">Un véhicule immobilisé occupe un pont et retarde le planning. Choisir le bon mode de réception permet d'organiser l'intervention avec plus de visibilité.</p>
  <h2 id="options">Les solutions disponibles</h2>
  <div class="table-wrap" tabindex="0" role="region" aria-label="Solutions de livraison RCA France">
    <table>
      <thead><tr><th scope="col">Solution</th><th scope="col">À privilégier pour</th></tr></thead>
      <tbody>
        <tr><th scope="row">Livraison express en région parisienne</th><td>Un besoin rapide à proximité</td></tr>
        <tr><th scope="row">France entière en J+1</th><td>Une intervention à planifier le lendemain</td></tr>
        <tr><th scope="row">Messagerie express</th><td>Un envoi prioritaire</td></tr>
        <tr><th scope="row">Retrait à l'usine, de 8 h à 17 h 30</th><td>Une pièce à récupérer directement à Aulnay-sous-Bois</td></tr>
      </tbody>
    </table>
  </div>
  <h2 id="preparer">Bien préparer votre commande</h2>
  <ul>
    <li>Confirmez la référence avant de valider.</li>
    <li>Vérifiez la disponibilité si le rendez-vous client est déjà fixé.</li>
    <li>Regroupez les pièces d'une même réparation lorsque c'est possible.</li>
    <li>Indiquez le bon contact pour la réception.</li>
  </ul>
  <h2 id="aide">Un doute sur le délai ?</h2>
  <p>Appelez notre équipe avant de commander : elle vous indiquera la solution la mieux adaptée à votre pièce et à votre localisation.</p>`,
  },
  "controles-qualite-transmission": {
    body: `
  <p class="intro">Une transmission subit des efforts importants à chaque accélération et à chaque braquage. Nos contrôles visent à livrer une pièce précise, équilibrée et étanche.</p>
  <h2 id="dimensions">Le contrôle dimensionnel</h2>
  <p>Il vérifie que la pièce correspond à son application. Une cote juste facilite le montage et assure un bon engagement dans les éléments voisins.</p>
  <h2 id="equilibrage">L'équilibrage dynamique</h2>
  <p>La transmission tourne à grande vitesse sur la route. L'équilibrage limite les vibrations qui nuiraient au confort et solliciteraient les composants.</p>
  <h2 id="etancheite">Les tests d'étanchéité</h2>
  <p>La graisse doit rester dans le joint, et l'eau comme les poussières doivent rester dehors. Ces tests protègent directement la durée de vie de l'ensemble.</p>
  <h2 id="materiaux">Des composants choisis pour durer</h2>
  <p>Nos transmissions RCA Titanium associent acier haute résistance, soufflets renforcés et composants durables. Elles sont neuves, sans consigne et garanties 5 ans.</p>`,
  },
  "avant-de-monter-un-turbo": {
    body: `
  <p class="intro">Un turbo neuf peut être endommagé en quelques instants si la cause de la panne précédente subsiste. Ces vérifications se font avant la première mise en route.</p>
  <div class="key">
    <h2 id="essentiel">L'essentiel</h2>
    <p>Identifiez toujours pourquoi l'ancien turbo a lâché. Remplacer la pièce sans traiter la cause expose à la même panne.</p>
  </div>
  <h2 id="huile">Le circuit d'huile</h2>
  <ul>
    <li>Huile et filtre conformes aux préconisations, remplacés si nécessaire.</li>
    <li>Conduite d'arrivée propre, sans restriction.</li>
    <li>Retour d'huile libre, sans pli ni obstruction.</li>
  </ul>
  <h2 id="air">Les circuits d'air</h2>
  <ul>
    <li>Filtre à air en bon état.</li>
    <li>Admission et échangeur exempts d'huile et de corps étrangers.</li>
    <li>Durites et colliers étanches.</li>
    <li>Échappement libre et sans débris.</li>
  </ul>
  <h2 id="demarrage">Au premier démarrage</h2>
  <p>Amorcez le graissage selon la procédure du constructeur, puis laissez le moteur tourner au ralenti sans accélérer. Contrôlez l'absence de fuite et de bruit anormal avant l'essai routier.</p>`,
  },
  "etrier-points-a-verifier": {
    body: `
  <p class="intro">Le freinage ne tolère pas l'approximation. Remplacer l'étrier demande aussi de contrôler les éléments qui l'entourent, puis de valider le résultat avant de rendre le véhicule.</p>
  <h2 id="avant">Avant le montage</h2>
  <ul>
    <li>Comparez l'étrier neuf à l'ancien : côté, fixations et raccord.</li>
    <li>Contrôlez les disques, les plaquettes et le flexible.</li>
    <li>Nettoyez le support et les surfaces d'appui.</li>
  </ul>
  <h2 id="montage">Pendant le montage</h2>
  <ul>
    <li>Vérifiez le libre coulissement.</li>
    <li>Utilisez des joints de raccord neufs lorsque le montage le prévoit.</li>
    <li>Serrez au couple indiqué par le constructeur.</li>
  </ul>
  <h2 id="apres">Après le montage</h2>
  <ol>
    <li>Purgez le circuit selon la procédure du véhicule.</li>
    <li>Contrôlez le niveau de liquide et l'absence de fuite.</li>
    <li>Actionnez la pédale jusqu'à obtenir une course normale.</li>
    <li>Réalisez un essai prudent et vérifiez l'équilibre du freinage.</li>
  </ol>
  <h2 id="gamme">Notre gamme</h2>
  <p>Nos étriers neufs sont garantis 2 ans, sans consigne et contrôlés sur l'étanchéité, le piston, le coulissement, les filetages et les fixations.</p>`,
  },
  "controles-kit-roulement": {
    body: `
  <p class="intro">Un roulement travaille sous charge, en rotation permanente. Avant sa commercialisation, nos contrôles portent sur ce qui influence sa précision, son silence et sa durée de vie.</p>
  <h2 id="controles">Quatre points vérifiés</h2>
  <div class="table-wrap" tabindex="0" role="region" aria-label="Contrôles réalisés sur les kits roulements">
    <table>
      <thead><tr><th scope="col">Contrôle</th><th scope="col">Ce qu'il garantit</th></tr></thead>
      <tbody>
        <tr><th scope="row">Dimensions</th><td>Un ajustement conforme à l'application</td></tr>
        <tr><th scope="row">Rotation</th><td>Un fonctionnement régulier</td></tr>
        <tr><th scope="row">Bruit</th><td>Un confort préservé sur la route</td></tr>
        <tr><th scope="row">Jeu interne</th><td>Une bonne stabilité de l'ensemble</td></tr>
      </tbody>
    </table>
  </div>
  <h2 id="materiaux">Matériaux et lubrification</h2>
  <p>Nous retenons des aciers résistants, des traitements adaptés et une lubrification optimisée pour limiter l'usure et les frottements.</p>
  <h2 id="atelier">À l'atelier</h2>
  <p>La qualité de la pièce doit être préservée au montage. Utilisez un outillage adapté, n'appuyez pas sur les éléments en rotation, vérifiez le sens de la cible ABS et respectez le couple de serrage du constructeur.</p>`,
  },
  "renovation-au-modele": {
    body: `
  <p class="intro">Certaines références sont difficiles à trouver, surtout sur des véhicules anciens ou peu diffusés. La rénovation au modèle peut alors offrir une solution à partir de votre propre pièce.</p>
  <h2 id="principe">Le principe</h2>
  <p>Nous étudions la pièce que vous nous confiez, puis nous indiquons si sa réparation est réalisable. Le service dépend donc de son état et de sa faisabilité technique.</p>
  <h2 id="etapes">Comment se déroule une demande</h2>
  <ol>
    <li>Vous nous présentez la pièce et le véhicule concerné.</li>
    <li>Vous la déposez sur site, ou nous organisons son enlèvement.</li>
    <li>Nous évaluons la réparation possible.</li>
    <li>La pièce vous est rendue ou livrée rapidement.</li>
  </ol>
  <h2 id="preparer">Les informations à préparer</h2>
  <ul>
    <li>Marque, modèle et motorisation du véhicule.</li>
    <li>Numéro d'identification du véhicule.</li>
    <li>Référence gravée ou étiquette de la pièce, si elle est lisible.</li>
    <li>Description du défaut constaté.</li>
  </ul>`,
  },
  "trouver-la-bonne-reference": {
    body: `
  <p class="intro">Une erreur de référence peut immobiliser un véhicule plus longtemps que prévu. Quelques informations préparées avant l'appel permettent d'aller droit au but.</p>
  <div class="key">
    <h2 id="essentiel">L'essentiel</h2>
    <p>Gardez la carte grise à portée de main et, si possible, une photo de la pièce déposée.</p>
  </div>
  <h2 id="infos">Ce qu'il faut réunir</h2>
  <ul>
    <li>Numéro d'identification du véhicule et date de mise en circulation.</li>
    <li>Motorisation et type de boîte de vitesses.</li>
    <li>Position de la pièce : avant, arrière, gauche ou droite.</li>
    <li>Référence relevée sur la pièce d'origine.</li>
  </ul>
  <h2 id="photos">Les photos qui aident</h2>
  <p>Une vue d'ensemble, l'étiquette et les zones de raccordement suffisent souvent à lever un doute entre deux versions proches.</p>
  <h2 id="support">Ce que le support peut faire pour vous</h2>
  <p>Notre équipe vous accompagne pour la recherche de références, l'assistance au montage, les recommandations techniques et le suivi SAV.</p>`,
  },
};

const typo = (html) => html.replace(/ ([:;?!])/g, " $1");

function renderMissing() {
  document.title = "Article introuvable, blog RCA France";
  $("#main").innerHTML = `<section class="wrap missing">
    <h1>Cet article n'est pas disponible</h1>
    <p>Le lien est incomplet ou l'article n'a pas encore été rédigé.</p>
    <a class="btn-link" href="index.html">Voir tous les articles</a>
  </section>`;
}

function setupToc() {
  const links = [...document.querySelectorAll(".toc a")];
  if (!links.length || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
      links.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "0px 0px -70% 0px" });
  document.querySelectorAll(".prose h2[id]").forEach((heading) => observer.observe(heading));
}

function setupShare() {
  const button = $("#copyLink");
  button.addEventListener("click", async () => {
    let copied = false;
    try {
      await navigator.clipboard.writeText(location.href);
      copied = true;
    } catch (error) {
      copied = false;
    }
    button.textContent = copied ? "Lien copié" : "Copie impossible, utilisez la barre d'adresse";
    setTimeout(() => { button.textContent = "Copier le lien"; }, 2500);
  });
}

function renderArticle() {
  const slug = new URLSearchParams(location.search).get("a");
  const post = POSTS.find((item) => item.slug === slug);
  const article = ARTICLES[slug];
  if (!post || !article) { renderMissing(); return; }

  document.title = `${post.title}, blog RCA France`;
  const words = article.body.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  const position = post.pos ? ` style="object-position:${post.pos}"` : "";
  const related = POSTS
    .filter((item) => item !== post)
    .sort((a, b) => Number(b.range === post.range) - Number(a.range === post.range))
    .slice(0, 3);

  $("#main").innerHTML = `
    <article>
      <header class="wrap art-head">
        <div>
          <nav class="crumbs" aria-label="Fil d'Ariane"><a href="index.html">Blog</a><span aria-hidden="true">/</span><span>${RANGES[post.range]}</span></nav>
          <h1>${esc(post.title)}</h1>
          <p class="art-lede">${esc(post.text)}</p>
          <p class="meta">${esc(post.by)} • ${esc(post.date)} • ${minutes} min de lecture</p>
          <ul class="tags"><li class="tag t-${post.range}">${RANGES[post.range]}</li><li class="tag">${esc(post.kind)}</li></ul>
        </div>
        <span class="media art-img"><img src="${post.img}" alt="${esc(post.alt)}"${position}></span>
      </header>
      <div class="wrap art-layout">
        <div class="prose">
          ${typo(article.body)}
          <p class="more"><a href="${PAGE[post.range]}">${post.range === "services" ? "Voir tous nos services" : `Voir la gamme ${RANGES[post.range].toLowerCase().replace("egr", "EGR")}`}</a></p>
        </div>
        <aside class="art-side" aria-label="Autour de cet article">
          <nav class="toc" aria-labelledby="tocTitle">
            <h2 id="tocTitle">Dans cet article</h2>
            <ul id="tocList"></ul>
          </nav>
          <div class="help">
            <h2>Une question sur une référence ?</h2>
            <p>Notre support technique vous répond.</p>
            <a href="tel:+33148667340">01 48 66 73 40</a>
          </div>
          <button class="copy" id="copyLink" type="button" aria-live="polite">Copier le lien</button>
        </aside>
      </div>
    </article>
    <section class="wrap block related" aria-labelledby="relatedTitle">
      <div class="all-head"><h2 id="relatedTitle">À lire aussi</h2><a class="back" href="index.html">Tous les articles</a></div>
      <div class="grid">${related.map((item) => card(item, "post-card")).join("")}</div>
    </section>`;

  $("#tocList").innerHTML = [...document.querySelectorAll(".prose h2[id]")]
    .map((heading) => `<li><a href="#${heading.id}">${heading.textContent}</a></li>`)
    .join("");
  setupToc();
  setupShare();
}

renderArticle();
