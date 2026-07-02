const tools = [
  ["Supabase", "https://cdn.simpleicons.org/supabase/3FCF8E"],
  ["PostgreSQL", "https://cdn.simpleicons.org/postgresql/4169E1"],
  ["React", "https://cdn.simpleicons.org/react/61DAFB"],
  ["Next.js", "https://cdn.simpleicons.org/nextdotjs/ffffff"],
  ["Vite", "https://cdn.simpleicons.org/vite/646CFF"],
  ["TypeScript", "https://cdn.simpleicons.org/typescript/3178C6"],
  ["Vercel", "https://cdn.simpleicons.org/vercel/ffffff"],
  ["GitHub", "https://cdn.simpleicons.org/github/ffffff"],
];

const systems = [
  ["Data model", "Supabase tables, relationships, storage paths, auth state, and product rules."],
  ["Backend logic", "APIs, admin actions, ecommerce control, product operations, and automation paths."],
  ["Frontend behavior", "Responsive screens, loading blur, live links, motion, and interface states."],
  ["Deployment", "Vercel builds, GitHub delivery, route structure, and production checks."],
];

const projects = [
  {
    title: "A Home Realty",
    meta: "Real estate web product",
    live: "https://ahomerealty.vercel.app",
    logo: "https://ahomerealty.vercel.app/assets/brand/ahome-logo-gold-dark.svg",
    surface: "Public property experience",
    build: "React / Vite / lead journey / deployment",
    body: "Luxury real estate interface with property hierarchy, buyer trust, inquiry flow, and conversion-ready presentation.",
  },
  {
    title: "YPOD",
    meta: "Hardware brand site",
    live: "https://ypod.vercel.app",
    logo: "./assets/projects/ypod/yema-dark.png",
    surface: "Consumer electronics brand site",
    build: "Product UI / media proof / responsive frontend",
    body: "Product storytelling, research visuals, fit study proof, launch structure, and brand-site execution.",
  },
  {
    title: "YPOD Store",
    meta: "Ecommerce",
    live: "https://ypod-store.vercel.app/shop",
    logo: "./assets/projects/ypod/yema-case.png",
    surface: "Shop and product browsing",
    build: "Next.js / product cards / mobile commerce",
    body: "A store surface for browsing, purchase confidence, product-card decisions, and a direct buying path.",
  },
  {
    title: "YPOD Backend Management",
    meta: "Backend operations",
    live: "https://ypod-backend-management.vercel.app/",
    logo: "./assets/projects/ypod/ypod-reasoning.png",
    surface: "Admin-facing product control",
    build: "Supabase / auth / dashboard logic / deployment",
    body: "Management surface for backend product operations, store logic, admin flows, and operational control.",
  },
  {
    title: "DealRadar NG",
    meta: "Digital marketing commerce",
    live: "https://www.dealradarng.com",
    logo: "./assets/projects/dealradar/main-logo-light.svg",
    surface: "Deal discovery platform",
    build: "Next.js / marketplace UX / campaign routing",
    body: "Merchant visibility, offer discovery, campaign structure, and ecommerce action for local businesses.",
  },
  {
    title: "NaturePacks",
    meta: "Sustainability impact",
    live: "https://www.naturepacks.org",
    logo: "./assets/projects/naturepacks/naturepacks-main.svg",
    surface: "Impact and product proof site",
    build: "HTML / CSS / brand proof / deployment",
    body: "Sustainable packaging experience with material clarity, product story, process proof, and environmental impact.",
  },
];

function img(src, alt) {
  return `<img src="${src}" alt="${alt}" loading="lazy">`;
}

document.querySelector("#projectGrid").innerHTML = projects.map((project, index) => `
  <article class="product-row">
    <a class="project-logo" href="${project.live}" target="_blank" rel="noreferrer">
      <span>${String(index + 1).padStart(2, "0")}</span>
      ${img(project.logo, project.title)}
    </a>
    <div class="project-main">
      <p class="kicker">${project.meta}</p>
      <h3>${project.title}</h3>
      <p>${project.body}</p>
    </div>
    <div class="project-facts">
      <span>${project.surface}</span>
      <span>${project.build}</span>
    </div>
    <a class="open-link" href="${project.live}" target="_blank" rel="noreferrer">Open live site</a>
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
  const done = () => item.closest(".proof-panel")?.classList.add("ready");
  item.addEventListener("load", done);
  item.addEventListener("loadeddata", done);
  if (item.complete || item.readyState >= 2) done();
});

document.querySelector("[data-scroll='top']").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.querySelector("[data-scroll='bottom']").addEventListener("click", () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }));
