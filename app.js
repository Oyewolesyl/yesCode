const tools = [
  ["Supabase", "SB"],
  ["PostgreSQL", "PG"],
  ["Backend APIs", "API"],
  ["Authentication", "AU"],
  ["Storage", "ST"],
  ["Admin dashboards", "AD"],
  ["React", "R"],
  ["Next.js", "N"],
  ["Vite", "V"],
  ["TypeScript", "TS"],
  ["Vercel", "▲"],
  ["GitHub", "GH"],
];

const projects = [
  {
    title: "A Home Realty",
    meta: "Real estate web product",
    live: "https://ahomerealty.vercel.app",
    logo: "https://ahomerealty.vercel.app/assets/brand/ahome-logo-gold-dark.svg",
    media: "https://ahomerealty.vercel.app/assets/properties/estate-approach-05.png",
    body: "Luxury real estate interface, property hierarchy, inquiry flow, visual trust, and conversion-ready presentation.",
  },
  {
    title: "YPOD",
    meta: "Hardware brand site",
    live: "https://ypod.vercel.app",
    logo: "https://ypod.vercel.app/assets/yema-case-dark.png",
    media: "https://ypod.vercel.app/assets/videos/yema-pro-floating-dark.mp4",
    body: "Consumer electronics product site with product storytelling, research visuals, fit study proof, and launch structure.",
  },
  {
    title: "YPOD Store",
    meta: "Ecommerce",
    live: "https://ypod-store.vercel.app/shop",
    logo: "https://ypod-store.vercel.app/assets/nobg/yema-lite-in-case-nobg.png",
    media: "https://ypod-store.vercel.app/assets/nobg/yema-lite-in-case-nobg.png",
    body: "Shop surface for product browsing, purchase confidence, mobile commerce, and product-card decision flow.",
  },
  {
    title: "YPOD Backend Management",
    meta: "Backend operations",
    live: "https://ypod-backend-management.vercel.app/",
    logo: "https://ypod-store.vercel.app/assets/remote/ypod-remote-showcase.png",
    media: "https://ypod.vercel.app/assets/remote/ypod-remote-floating.mp4",
    body: "Admin-facing management surface for backend product operations, store logic, dashboard structure, and control flows.",
  },
  {
    title: "DealRadar NG",
    meta: "Digital marketing commerce",
    live: "https://www.dealradarng.com",
    logo: "https://www.dealradarng.com/brand/main-logo-white.svg",
    media: "https://www.dealradarng.com/products/amap.jpg",
    body: "Deal discovery and merchant visibility platform shaped around offers, campaign structure, and ecommerce action.",
  },
  {
    title: "NaturePacks",
    meta: "Sustainability impact",
    live: "https://www.naturepacks.org",
    logo: "https://www.naturepacks.org/assets/brand/naturepacks-main.svg",
    media: "https://www.naturepacks.org/assets/newnaturepacks/process/sheet-forming-new.mp4",
    body: "Sustainable packaging web experience with process proof, product story, material clarity, and environmental impact.",
  },
];

function mediaTag(src, alt) {
  if (src.endsWith(".mp4")) {
    return `<video src="${src}" autoplay muted loop playsinline></video>`;
  }
  return `<img src="${src}" alt="${alt}" loading="lazy" />`;
}

document.querySelector("#projectGrid").innerHTML = projects.map((project) => `
  <article class="project-card">
    <div class="logo-box"><img src="${project.logo}" alt="${project.title}" loading="lazy"></div>
    <div class="media-shell">${mediaTag(project.media, project.title)}</div>
    <div>
      <span class="meta">${project.meta}</span>
      <h3>${project.title}</h3>
      <p>${project.body}</p>
    </div>
    <div class="project-actions">
      <a href="${project.live}" target="_blank" rel="noreferrer">Open live site</a>
      <a href="${project.live}" target="_blank" rel="noreferrer">Inspect build</a>
    </div>
  </article>
`).join("");

document.querySelector("#toolGrid").innerHTML = tools.map(([name, mark]) => `
  <div class="tool-card"><span class="tool-icon">${mark}</span><strong>${name}</strong></div>
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
