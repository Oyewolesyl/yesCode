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
  ["figma", "https://cdn.simpleicons.org/figma/F24E1E"],
  ["open ai", "https://cdn.simpleicons.org/openai/ffffff"],
];

const systems = [
  {
    name: "working data",
    body: "supabase and postgresql give the product a real operating base for users, orders, content, storage, roles, payments, and launch decisions.",
    value: "for a founder, that means the product is not just a page. it can remember customers, manage requests, and keep growing after launch.",
  },
  {
    name: "payment paths",
    body: "the ypod web app work includes payment thinking for bank transfer and crypto flows, with the interface shaped around confidence and completion.",
    value: "this turns interest into action. users can move from product choice to payment without the business needing to manually hold every step together.",
  },
  {
    name: "admin control",
    body: "private dashboards, auth, store logic, product updates, and operational workflows make the backend readable for the people running the business.",
    value: "a team can manage launches, customers, waitlists, preorders, and product activity without calling a developer for every small change.",
  },
  {
    name: "automation",
    body: "ai tools, mcp workflows, figma, notion, open ai, google ai, tencent hunyuan, and build automation are used where they speed up research, structure, testing, and delivery.",
    value: "the point is not to look automated. the point is to reduce delay while keeping the product directed by real judgment.",
  },
  {
    name: "app store path",
    body: "web apps can be prepared for mobile app release with the right responsive surface, installable behavior, account flows, payment rules, testing, store assets, and submission plan.",
    value: "when a product is ready, the same system can move toward an app store presence instead of starting from scratch.",
  },
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
    body: "a premium real estate surface built around buyer trust, property hierarchy, inquiry clarity, and a calmer route from interest to contact",
    value: "the design arm shaped the premium feel and proof. yescode turned that direction into a live product visitors can inspect and use.",
  },
  {
    title: "ypod",
    meta: "consumer electronics brand site",
    live: "https://ypod.vercel.app",
    logo: "./assets/projects/ypod/yema-dark.png",
    media: "./assets/projects/ypod/ypro-fit.png",
    surface: "hardware brand surface",
    build: "product interface, media proof, responsive frontend",
    body: "a hardware brand site that explains the product through fit studies, launch imagery, product hierarchy, and a believable sleep-focused story",
    value: "the visual direction gives the product credibility. the build makes that story fast, responsive, and ready for public attention.",
  },
  {
    title: "ypod store",
    meta: "ecommerce web app",
    live: "https://ypod-store.vercel.app/shop",
    logo: "./assets/projects/ypod/yema-case.png",
    media: "./assets/projects/ypod/yema-case.png",
    surface: "shop and product browsing",
    build: "next js, product cards, mobile commerce, payment readiness",
    body: "a commerce web app for browsing, comparing, choosing, and buying ypod products with a mobile-first purchase path",
    value: "the store turns brand demand into a path toward revenue, including the payment decisions a founder needs before launch.",
  },
  {
    title: "ypod backend management",
    meta: "backend operations",
    live: "https://ypod-backend-management.vercel.app/",
    logo: "./assets/projects/ypod/ypod-reasoning.png",
    media: "./assets/projects/ypod/ypod-reasoning.png",
    surface: "admin facing product control",
    build: "supabase, auth, dashboard logic, payment operations, deployment",
    body: "a private management surface for customer activity, store logic, payment review, preorder operations, and product control",
    value: "this is where the business runs after the public site goes live. founders get control, visibility, and a product that can be operated.",
  },
  {
    title: "dealradar ng",
    meta: "digital marketing ecommerce",
    live: "https://www.dealradarng.com",
    logo: "./assets/projects/dealradar/main-logo-light.svg",
    media: "./assets/projects/dealradar/banner-dark.png",
    surface: "deal discovery platform",
    build: "next js, marketplace ux, campaign routing",
    body: "a deal discovery and merchant visibility platform shaped around offers, campaign structure, and ecommerce action",
    value: "the experience helps people understand what is being offered quickly, then gives merchants a clearer route to attention and conversion.",
  },
  {
    title: "naturepacks™",
    meta: "sustainability impact",
    live: "https://www.naturepacks.org",
    logo: "./assets/projects/naturepacks/naturepacks-white-black.svg",
    media: "./assets/projects/naturepacks/merch-01.jpeg",
    surface: "impact and product proof site",
    build: "html, css, brand proof, deployment",
    body: "a sustainability product story using material clarity, branded proof, process evidence, and environmental positioning",
    value: "the site makes the mission tangible. visitors see the product, the material story, and the proof behind the brand.",
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
      <p>${project.body}.</p>
      <p>${project.value}</p>
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

document.querySelector("#systemBoard").innerHTML = systems.map((system) => `
  <article>
    <h3>${system.name}</h3>
    <p>${system.body}</p>
    <p>${system.value}</p>
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
    setTimeout(() => document.body.classList.remove("is-loading"), 380);
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
