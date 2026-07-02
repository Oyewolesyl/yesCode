const tools = [
  ["supabase", "https://cdn.simpleicons.org/supabase/3FCF8E"],
  ["postgresql", "https://cdn.simpleicons.org/postgresql/4169E1"],
  ["react", "https://cdn.simpleicons.org/react/61DAFB"],
  ["next js", "https://cdn.simpleicons.org/nextdotjs/ffffff"],
  ["vite", "https://cdn.simpleicons.org/vite/646CFF"],
  ["type script", "https://cdn.simpleicons.org/typescript/3178C6"],
  ["vercel", "https://cdn.simpleicons.org/vercel/ffffff"],
  ["github", "https://cdn.simpleicons.org/github/ffffff"],
  ["notion", "https://cdn.simpleicons.org/notion/ffffff"],
];

const systems = [
  ["data model", "supabase tables, relationships, storage paths, auth state, and product rules"],
  ["backend logic", "api routes, admin actions, commerce control, product operations, and automation paths"],
  ["frontend behavior", "responsive screens, loading blur, live links, motion, and interface states"],
  ["deployment", "vercel builds, github delivery, route structure, and production checks"],
];

const projects = [
  {
    title: "a home realty",
    meta: "real estate web product",
    live: "https://ahomerealty.vercel.app",
    logo: "https://ahomerealty.vercel.app/assets/brand/ahome-logo-gold-dark.svg",
    media: "https://ahomerealty.vercel.app/assets/properties/estate-approach-05.png",
    surface: "public property experience",
    build: "react, vite, lead flow, deployment",
    body: "luxury property hierarchy, buyer trust, inquiry flow, and conversion ready presentation",
  },
  {
    title: "ypod",
    meta: "consumer electronics brand site",
    live: "https://ypod.vercel.app",
    logo: "./assets/projects/ypod/yema-dark.png",
    media: "./assets/projects/ypod/ypro-fit.png",
    surface: "hardware brand surface",
    build: "product ui, media proof, responsive frontend",
    body: "product storytelling, research visuals, fit study proof, launch structure, and brand site execution",
  },
  {
    title: "ypod store",
    meta: "ecommerce",
    live: "https://ypod-store.vercel.app/shop",
    logo: "./assets/projects/ypod/yema-case.png",
    media: "./assets/projects/ypod/yema-case.png",
    surface: "shop and product browsing",
    build: "next js, product cards, mobile commerce",
    body: "browsing, purchase confidence, product card decisions, and a direct buying path",
  },
  {
    title: "ypod backend management",
    meta: "backend operations",
    live: "https://ypod-backend-management.vercel.app/",
    logo: "./assets/projects/ypod/ypod-reasoning.png",
    media: "./assets/projects/ypod/ypod-reasoning.png",
    surface: "admin facing product control",
    build: "supabase, auth, dashboard logic, deployment",
    body: "product operations, store logic, admin flows, database structure, and operational control",
  },
  {
    title: "dealradar ng",
    meta: "digital marketing ecommerce",
    live: "https://www.dealradarng.com",
    logo: "./assets/projects/dealradar/main-logo-light.svg",
    media: "./assets/projects/dealradar/banner-dark.png",
    surface: "deal discovery platform",
    build: "next js, marketplace ux, campaign routing",
    body: "merchant visibility, offer discovery, campaign structure, and ecommerce action for local businesses",
  },
  {
    title: "naturepacks",
    meta: "sustainability impact",
    live: "https://www.naturepacks.org",
    logo: "./assets/projects/naturepacks/naturepacks-main.svg",
    media: "./assets/projects/naturepacks/merch-01.jpeg",
    surface: "impact and product proof site",
    build: "html, css, brand proof, deployment",
    body: "material clarity, product story, process proof, and environmental impact",
  },
];

function img(src, alt) {
  return `<img src="${src}" alt="${alt}" loading="lazy">`;
}

document.querySelector("#projectGrid").innerHTML = projects.map((project, index) => `
  <article class="product-piece">
    <div class="piece-number">${String(index + 1).padStart(2, "0")}</div>
    <a class="piece-media" href="${project.live}" target="_blank" rel="noreferrer">
      ${img(project.media, project.title)}
    </a>
    <div class="piece-copy">
      <p class="kicker">${project.meta}</p>
      <h3>${project.title}</h3>
      <p>${project.body}</p>
      <div class="piece-notes">
        <span>${project.surface}</span>
        <span>${project.build}</span>
      </div>
      <a class="open-link" href="${project.live}" target="_blank" rel="noreferrer">open live site</a>
    </div>
    <a class="piece-mark" href="${project.live}" target="_blank" rel="noreferrer">${img(project.logo, project.title)}</a>
  </article>
`).join("");

document.querySelector("#toolGrid").innerHTML = tools.map(([name, icon]) => `
  <span class="tool-mark">${img(icon, name)}<strong>${name}</strong></span>
`).join("");

document.querySelector("#systemBoard").innerHTML = systems.map(([name, body]) => `
  <article>
    <h3>${name}</h3>
    <p>${body}</p>
  </article>
`).join("");

document.querySelector(".menu-button").addEventListener("click", () => {
  const header = document.querySelector(".site-header");
  const open = header.classList.toggle("open");
  document.querySelector(".menu-button").setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.add("is-loading");
    document.querySelector(".site-header").classList.remove("open");
    setTimeout(() => document.body.classList.remove("is-loading"), 320);
  });
});

document.querySelectorAll("img, video").forEach((item) => {
  const done = () => item.closest(".hero-media, .piece-media")?.classList.add("ready");
  item.addEventListener("load", done);
  item.addEventListener("loadeddata", done);
  if (item.complete || item.readyState >= 2) done();
});

document.querySelector("[data-scroll='top']").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.querySelector("[data-scroll='bottom']").addEventListener("click", () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }));
