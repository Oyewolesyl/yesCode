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

const capabilities = [
  "Backend APIs",
  "Authentication",
  "Storage",
  "Row Level Security",
  "Admin dashboards",
  "Database schema",
  "Automation flows",
  "Deployment handoff",
];

const projects = [
  {
    title: "A Home Realty",
    meta: "Real estate web product",
    live: "https://ahomerealty.vercel.app",
    logo: "https://ahomerealty.vercel.app/assets/brand/ahome-logo-gold-dark.svg",
    system: ["Frontend", "Lead flow", "Property UX", "Deployment"],
    body: "Luxury real estate interface, property hierarchy, inquiry flow, visual trust, and conversion-ready presentation.",
  },
  {
    title: "YPOD",
    meta: "Hardware brand site",
    live: "https://ypod.vercel.app",
    logo: "https://ypod.vercel.app/assets/yema-case-dark.png",
    system: ["Brand site", "Product UI", "Launch surface", "Deployment"],
    body: "Consumer electronics product site with product storytelling, research visuals, fit study proof, and launch structure.",
  },
  {
    title: "YPOD Store",
    meta: "Ecommerce",
    live: "https://ypod-store.vercel.app/shop",
    logo: "https://ypod-store.vercel.app/assets/nobg/yema-lite-in-case-nobg.png",
    system: ["Shop", "Product grid", "Cart path", "Mobile commerce"],
    body: "Shop surface for product browsing, purchase confidence, mobile commerce, and product-card decision flow.",
  },
  {
    title: "YPOD Backend Management",
    meta: "Backend operations",
    live: "https://ypod-backend-management.vercel.app/",
    logo: "https://ypod-store.vercel.app/assets/remote/ypod-remote-showcase.png",
    system: ["Backend", "Admin UI", "Operations", "Product control"],
    body: "Admin-facing management surface for backend product operations, store logic, dashboard structure, and control flows.",
  },
  {
    title: "DealRadar NG",
    meta: "Digital marketing commerce",
    live: "https://www.dealradarng.com",
    logo: "https://www.dealradarng.com/brand/main-logo-white.svg",
    system: ["Marketplace", "Campaigns", "Commerce", "Discovery"],
    body: "Deal discovery and merchant visibility platform shaped around offers, campaign structure, and ecommerce action.",
  },
  {
    title: "NaturePacks",
    meta: "Sustainability impact",
    live: "https://www.naturepacks.org",
    logo: "https://www.naturepacks.org/assets/brand/naturepacks-main.svg",
    system: ["Impact site", "Process proof", "Brand story", "Product proof"],
    body: "Sustainable packaging web experience with process proof, product story, material clarity, and environmental impact.",
  },
];

document.querySelector("#projectGrid").innerHTML = projects.map((project) => `
  <article class="project-row">
    <a class="project-mark" href="${project.live}" target="_blank" rel="noreferrer">
      <img src="${project.logo}" alt="${project.title}" loading="lazy">
    </a>
    <div>
      <span class="meta">${project.meta}</span>
      <h3>${project.title}</h3>
      <p>${project.body}</p>
      <div class="system-tags">${project.system.map((item) => `<span>${item}</span>`).join("")}</div>
    </div>
    <div class="project-actions">
      <a href="${project.live}" target="_blank" rel="noreferrer">Open live site</a>
      <a href="${project.live}" target="_blank" rel="noreferrer">Inspect system</a>
    </div>
  </article>
`).join("");

document.querySelector("#toolGrid").innerHTML = tools.map(([name, icon]) => `
  <div class="tool-card"><img src="${icon}" alt="" loading="lazy"><strong>${name}</strong></div>
`).join("");

document.querySelector(".backend-grid").innerHTML = capabilities.map((item) => `<span>${item}</span>`).join("");

document.querySelector(".menu-button").addEventListener("click", () => {
  const header = document.querySelector(".site-header");
  const open = header.classList.toggle("open");
  document.querySelector(".menu-button").setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.add("is-loading");
    document.querySelector(".site-header").classList.remove("open");
    setTimeout(() => document.body.classList.remove("is-loading"), 360);
  });
});

document.querySelectorAll(".media-shell img, .media-shell video").forEach((item) => {
  const done = () => item.closest(".media-shell")?.classList.add("ready");
  item.addEventListener("load", done);
  item.addEventListener("loadeddata", done);
  if (item.complete || item.readyState >= 2) done();
});

document.querySelector("[data-scroll='top']").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.querySelector("[data-scroll='bottom']").addEventListener("click", () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }));
