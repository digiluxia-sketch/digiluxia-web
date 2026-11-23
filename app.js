const topics = [
  {
    id: "misterios", title: "Misterios", image: "misterios.jpg",
    alt: "Collage cinematográfico con una tormenta en el mar, el SR-71, un OVNI, figuras bailando y ruinas antiguas.",
    description: "Episodios históricos y casos enigmáticos contados a partir de lo que se sabe, lo que se relata y lo que sigue abierto.",
    series: [
      { title: "Misterios históricos", videos: [
        { title: "La epidemia del baile", description: "Una mirada a los relatos del episodio y a las explicaciones que se han propuesto." },
        { title: "Las brujas de Salem", description: "El contexto de las acusaciones y los juicios que marcaron a la comunidad." },
      ] },
      { title: "Casos y leyendas", videos: [
        { title: "El Triángulo de las Bermudas", description: "Los relatos de desapariciones que dieron origen a la fama de esta región del Atlántico." },
        { title: "El caso Roswell de 1947", description: "Una cronología del caso y de las versiones que circularon después del hallazgo." },
      ] },
    ],
  },
  {
    id: "geografia", title: "Geografía - MapasToon", menuTitle: "Geografía", image: "geografia-tarjeta.jpg",
    alt: "Mapa animado en 3D de una isla con montañas, un marcador y un globo aerostático.",
    description: "Descubre curiosidades de la geografía mundial con mapas animados. ¿Cuántas conocías?",
    series: [{ title: "Curiosidades geográficas", videos: [
      { title: "Fronteras que sorprenden", description: "Recorremos enclaves y límites poco comunes con ayuda de mapas animados." },
      { title: "Cómo el relieve cambia un mapa", description: "Montañas, ríos y costas ayudan a explicar dónde se conectan o se separan los territorios." },
    ] }],
  },
  {
    id: "nuestro-cuerpo", title: "Nuestro cuerpo", image: "cuerpo.jpg",
    alt: "Ilustración de un torso humano con las costillas y el corazón visibles.",
    description: "Del latido a los reflejos, descubre cómo trabajan los órganos, los sentidos y los sistemas del cuerpo humano.",
    series: [{ title: "El cuerpo en acción", videos: [
      { title: "¿Por qué tenemos hipo?", description: "Qué sucede en el diafragma cuando aparece el hipo." },
      { title: "El recorrido de un latido", description: "Una introducción a cómo el corazón mueve la sangre por el cuerpo." },
    ] }],
  },
  {
    id: "datos-de-gatos", title: "Datos de gatos", image: "gatos.jpg",
    alt: "Retrato de un gato atigrado de ojos ámbar.",
    description: "Descubre qué pueden revelar los maullidos, las orejas, los bigotes y otros gestos de los gatos.",
    series: [{ title: "Comportamiento y sentidos", videos: [
      { title: "¿Por qué los gatos amasan?", description: "Exploramos las posibles razones detrás de ese movimiento con las patas." },
      { title: "¿Para qué sirven los bigotes?", description: "Cómo usan los gatos sus bigotes para percibir el entorno." },
    ] }],
  },
  {
    id: "psicologia", title: "Psicología", image: "psicologia.jpg",
    alt: "Dos perfiles humanos superpuestos en una escultura translúcida.",
    description: "Emociones, hábitos y formas de pensar explicados con ejemplos de la vida cotidiana.",
    series: [{ title: "Psicología fácil", videos: [
      { title: "¿Por qué cuesta cambiar un hábito?", description: "Una introducción a las señales y rutinas que influyen en lo que repetimos." },
      { title: "Cómo ponemos nombre a lo que sentimos", description: "Una mirada a cómo reconocemos y describimos nuestras emociones." },
    ] }],
  },
  {
    id: "finanzas-personales", title: "Finanzas personales", image: "finanzas.jpg",
    alt: "Cuaderno, lápiz y monedas en un escritorio iluminado con luz cálida.",
    description: "Conceptos de presupuesto, ahorro, crédito y deuda para entender mejor las decisiones cotidianas sobre el dinero.",
    series: [{ title: "Fundamentos del dinero", videos: [
      { title: "Cómo se organiza un presupuesto", description: "Qué información reúne un presupuesto y cómo ayuda a ver ingresos y gastos." },
      { title: "Ahorro, crédito y deuda", description: "Qué significa cada concepto y por qué conviene distinguirlos." },
    ] }],
  },
];

const params = new URLSearchParams(location.search);
const isEnglish = params.get("lang") === "en";
const t = (text) => isEnglish ? (english.get(text) ?? text) : text;
document.documentElement.lang = isEnglish ? "en" : "es";

const isHome = document.body.classList.contains("home");
const home = isHome ? "" : "index.html" + (isEnglish ? "?lang=en" : "");
const homeLink = (id) => home + "#" + id;
const libraryLink = (id) => "videos.html?tema=" + id + (isEnglish ? "&lang=en" : "");
const navigation = [
  { id: "canales", title: "Nuestros canales" },
  { id: "nosotros", title: "Nosotros" },
  { id: "contacto", title: "Contacto" },
];

function languageLink(code) {
  const current = code === document.documentElement.lang ? ' aria-current="true"' : "";
  const label = code === "en" ? "English" : "Español";
  return `<a lang="${code}" hreflang="${code}" aria-label="${label}"${current}>${code.toUpperCase()}</a>`;
}

function navigationLinks(items) {
  return items.map(({ id, title, menuTitle }) => `<a href="${homeLink(id)}">${menuTitle ?? title}</a>`).join("");
}

document.querySelector("site-header").innerHTML = `
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <header>
    <a class="brand official-brand" href="${homeLink("top")}" aria-label="DIGILUXIA — Inicio"><img src="assets/logo-oficial-digiluxia.png" alt="DIGILUXIA"></a>
    <button class="menu" type="button" aria-expanded="false" aria-controls="main-nav">Menú</button>
    <nav id="main-nav" aria-label="Navegación principal">
      ${navigationLinks([{ id: "top", title: "Inicio" }])}
      <details class="topics-menu">
        <summary>Temas</summary>
        <div class="topics-menu-links">${navigationLinks(topics)}</div>
      </details>
      ${navigationLinks([{ id: "canales", title: "Canales" }, ...navigation.slice(1)])}
      <div class="language-switch" role="group" aria-label="Idioma">
        ${languageLink("es")}${languageLink("en")}
      </div>
    </nav>
  </header>`;

document.querySelector("site-footer").innerHTML = `
  <footer>
    <div><a class="brand official-brand footer-logo" href="${homeLink("top")}"><img src="assets/logo-oficial-digiluxia.png" alt="DIGILUXIA — Inicio"></a>
    <p>Un ecosistema digital que conecta contenido, audiencias e ideas mediante tecnología y creatividad.</p></div>
    <div class="footlinks"><div><b>TEMAS</b>${navigationLinks(topics.slice(0, 3))}</div><div><b>MÁS TEMAS</b>${navigationLinks(topics.slice(3))}</div><div><b>DIGILUXIA</b>${navigationLinks([navigation[0], ...navigation.slice(-2)])}</div></div>
    <div class="copyright">© 2026 DIGILUXIA · California, USA · digiluxia.com · v2.0</div>
  </footer>`;

const menu = document.querySelector(".menu");
const nav = document.querySelector("#main-nav");
const topicsMenu = nav.querySelector(".topics-menu");
const languageLinks = nav.querySelectorAll(".language-switch a");
function updateLanguageLinks() {
  for (const link of languageLinks) {
    const url = new URL(location.href);
    if (link.hreflang === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    link.href = url.href;
  }
}
updateLanguageLinks();
window.addEventListener("hashchange", updateLanguageLinks);

function setMenu(open) {
  nav.classList.toggle("open", open);
  menu.setAttribute("aria-expanded", String(open));
  if (!open) topicsMenu.open = false;
}
menu.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("click", (event) => {
  if (!topicsMenu.contains(event.target)) topicsMenu.open = false;
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (topicsMenu.open) {
    topicsMenu.open = false;
    topicsMenu.querySelector("summary").focus();
  } else if (nav.classList.contains("open")) {
    setMenu(false);
    menu.focus();
  }
});

if (isHome) {
  document.querySelector("#temas").innerHTML = topics.map((topic) => `
    <section id="${topic.id}" class="topic section" aria-labelledby="title-${topic.id}">
      <div class="topic-image"><img src="assets/${topic.image}" alt="${topic.alt}" loading="lazy"></div>
      <div class="topic-copy">
        <h2 id="title-${topic.id}">${topic.title}</h2>
        <p>${topic.description}</p>
        <ul class="topic-list">${(topic.id === "misterios" ? topic.series.flatMap(({ videos }) => videos) : topic.series[0].videos).map(({ title }) => `<li>${title}</li>`).join("")}</ul>
        <a class="primary" href="${libraryLink(topic.id)}" aria-label="${isEnglish ? "Browse library: " : "Ver biblioteca de "}${t(topic.title)}">Ver biblioteca</a>
      </div>
    </section>`).join("");

  // Add confirmed official URLs here. Empty entries show the preview notice.
  const channels = {
    misterios: { name: "DIGILUXIA Misterios", YouTube: "", Instagram: "" },
    geografia: { name: "Geografía - MapasToon", YouTube: "", Instagram: "" },
  };
  const dialog = document.querySelector("#social-dialog");
  for (const button of document.querySelectorAll("[data-service]")) {
    const channel = channels[button.closest("[data-channel]").dataset.channel];
    const service = button.dataset.service;
    const label = service + " · " + t(channel.name);
    if (channel[service]) {
      const link = document.createElement("a");
      link.href = channel[service];
      link.className = button.className;
      link.textContent = service;
      link.setAttribute("aria-label", label);
      button.replaceWith(link);
      continue;
    }
    button.setAttribute("aria-label", label);
    button.setAttribute("aria-haspopup", "dialog");
    button.addEventListener("click", () => {
      dialog.querySelector("h2").textContent = label;
      dialog.showModal();
    });
  }
} else {
  const id = params.get("tema");
  const topic = topics.find((entry) => entry.id === id);
  const library = document.querySelector("#biblioteca");
  if (topic) {
    document.title = t(topic.title) + " — DIGILUXIA";
    library.innerHTML = `
      <a class="back-link" href="${homeLink(topic.id)}">Volver a la portada</a>
      <div class="library-hero">
        <img src="assets/${topic.image}" alt="${topic.alt}">
        <div><p class="eyebrow">BIBLIOTECA DE VIDEOS</p><h1>${topic.title}</h1><p>${topic.description}</p></div>
      </div>
      <p class="library-note">Selección editorial para revisión. Las fichas sin reproductor están pendientes de incorporar su video.</p>
      ${topic.series.map((series) => `
        <section class="series">
          <h2>${series.title}</h2>
          <div class="episode-grid">${series.videos.map((video) => `
            <article class="episode"><h3>${video.title}</h3><p>${video.description}</p>
            ${video.url ? `<a class="secondary" href="${video.url}">Ver video</a>` : ""}</article>`).join("")}</div>
        </section>`).join("")}
      <nav class="related" aria-label="Otras bibliotecas">${topics.filter((entry) => entry !== topic).map((entry) => `<a class="secondary" href="${libraryLink(entry.id)}">${entry.title}</a>`).join("")}</nav>`;
  } else {
    library.innerHTML = `<h1>Bibliotecas de DIGILUXIA</h1><div class="related">${topics.map((entry) => `<a class="secondary" href="${libraryLink(entry.id)}">${entry.title}</a>`).join("")}</div>`;
  }
}

if (isEnglish) {
  document.title = t(document.title);
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const original = node.nodeValue.trim();
    if (english.has(original)) node.nodeValue = node.nodeValue.replace(original, t(original));
  }
  for (const element of document.querySelectorAll("[aria-label], [alt], meta[name=description]")) {
    for (const attribute of ["aria-label", "alt", "content"]) {
      if (element.hasAttribute(attribute)) element.setAttribute(attribute, t(element.getAttribute(attribute)));
    }
  }
}
