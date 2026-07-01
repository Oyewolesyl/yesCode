const ahome = "https://ahomerealty.vercel.app/assets";
const ypod = "https://ypod.vercel.app/assets";
const ypodStore = "https://ypod-store.vercel.app/assets";
const dealradar = "https://www.dealradarng.com";
const naturepacks = "https://www.naturepacks.org/assets";

export type Project = {
  slug: string;
  title: string;
  category: string;
  liveUrl: string;
  summary: string;
  role: string;
  logo: string;
  image: string;
  gallery: string[];
  outcome: string;
  skills: string[];
  tools: string[];
  sections: string[];
  proofLinks?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: "a-home-realty",
    title: "A Home Realty",
    category: "Real estate",
    liveUrl: "https://ahomerealty.vercel.app",
    summary:
      "A premium real estate web experience for property trust, buyer confidence, inquiry flow, and high-value home presentation.",
    role: "Frontend implementation, responsive layout, conversion path, brand asset integration, Vercel deployment.",
    logo: `${ahome}/brand/ahome-logo-gold-dark.svg`,
    image: `${ahome}/properties/estate-approach-05.png`,
    gallery: [
      `${ahome}/video/ahome-brand-film.mp4`,
      `${ahome}/properties/residence-tower-01.png`,
      `${ahome}/properties/grand-interior-04.png`,
    ],
    outcome: "A cleaner digital sales surface for real estate discovery and qualified client inquiry.",
    skills: ["Real estate UX", "Lead capture", "Responsive frontend", "Brand integration", "Conversion structure"],
    tools: ["React", "Vite", "TypeScript", "CSS", "Vercel", "GitHub"],
    sections: ["Property presentation", "Inquiry flow", "Trust signals", "Mobile-first browsing"],
  },
  {
    slug: "ypod",
    title: "YPOD",
    category: "Consumer electronics - hardware brand",
    liveUrl: "https://ypod.vercel.app",
    summary:
      "A consumer hardware brand site for sleep-focused audio, product education, visual research, fit studies, and launch storytelling.",
    role: "Product site build, product presentation, asset integration, responsive product sections, deployment.",
    logo: `${ypod}/yema-case-dark.png`,
    image: `${ypod}/yema-case-dark.png`,
    gallery: [
      `${ypod}/videos/yema-1-floating-gradient.mp4`,
      `${ypod}/videos/yema-pro-in-ear.mp4`,
      `${ypod}/fit-study-final.png`,
    ],
    outcome: "Moved the hardware concept into a polished product narrative with clear visual proof.",
    skills: ["Hardware product site", "Product storytelling", "Responsive frontend", "Asset-led layout", "Launch structure"],
    tools: ["React", "Vite", "TypeScript", "CSS", "Vercel", "GitHub"],
    sections: ["Product hero", "Research visuals", "Fit study", "Campaign-ready sections"],
  },
  {
    slug: "ypod-store",
    title: "YPOD Store",
    category: "Ecommerce",
    liveUrl: "https://ypod-store.vercel.app/shop",
    summary:
      "A commerce layer for YPOD focused on product browsing, purchase intent, store structure, and mobile shopping.",
    role: "Shop interface, product card system, commerce page structure, responsive buying journey.",
    logo: `${ypodStore}/nobg/yema-lite-in-case-nobg.png`,
    image: `${ypodStore}/nobg/yema-lite-in-case-nobg.png`,
    gallery: [
      `${ypodStore}/nobg/yema-lite-in-case-nobg.png`,
      `${ypodStore}/remote/ypod-remote-showcase.png`,
      `${ypodStore}/nobg/kuromi-wrapped-controller-nobg.png`,
    ],
    outcome: "Extended the YPOD brand from product awareness into a store-ready buying journey.",
    skills: ["Ecommerce UX", "Product cards", "Shop navigation", "Mobile commerce", "Conversion flow"],
    tools: ["Next.js", "React", "TypeScript", "CSS", "Vercel", "GitHub"],
    sections: ["Shop grid", "Product detail logic", "Purchase path", "Store-ready structure"],
    proofLinks: [
      { label: "Shop walkthrough video", url: "https://x.com/daveayodeji_/status/2069845385393086882/video/1?s=46" },
    ],
  },
  {
    slug: "ypod-backend-management",
    title: "YPOD Backend Management",
    category: "Backend operations",
    liveUrl: "https://ypod-backend-management.vercel.app/",
    summary:
      "The operational management surface behind YPOD: a backend-facing admin experience for products, store control, and ecommerce readiness.",
    role: "Backend management interface, admin structure, product operations flow, deployment, and system-facing UX.",
    logo: `${ypodStore}/remote/ypod-remote-showcase.png`,
    image: `${ypodStore}/remote/ypod-remote-showcase.png`,
    gallery: [
      `${ypod}/remote/ypod-remote-floating.mp4`,
      `${ypodStore}/nobg/black-controller-nobg.png`,
      `${ypodStore}/nobg/yema-pro-right-ear-nobg.png`,
    ],
    outcome: "Gave the YPOD ecosystem an admin-management layer that supports product and commerce operations.",
    skills: ["Admin systems", "Backend-facing UX", "Product operations", "Ecommerce management", "Deployment"],
    tools: ["Next.js", "React", "TypeScript", "Vercel", "GitHub"],
    sections: ["Admin dashboard", "Product operations", "Store management", "Backend deployment"],
    proofLinks: [
      { label: "Backend management video", url: "https://x.com/daveayodeji_/status/2069818800896106503/video/1?s=46" },
      { label: "Custom GLB workflow video", url: "https://x.com/daveayodeji_/status/2069091597401071790/video/1?s=46" },
      { label: "Product motion proof", url: "https://x.com/daveayodeji_/status/2070400194269557022/video/1?s=46" },
    ],
  },
  {
    slug: "dealradar-ng",
    title: "DealRadar NG",
    category: "Digital marketing - ecommerce",
    liveUrl: "https://www.dealradarng.com",
    summary:
      "A digital marketing and ecommerce platform for deal discovery, local business visibility, branded campaigns, and conversion.",
    role: "Frontend system, brand asset integration, deal discovery interface, category and conversion structure.",
    logo: `${dealradar}/brand/main-logo-white.svg`,
    image: `${dealradar}/brand/main-logo-white.svg`,
    gallery: [
      `${dealradar}/products/amap.jpg`,
      `${dealradar}/products/monetize-knowledge.jpg`,
      `${dealradar}/products/virtual-assistant.jpg`,
    ],
    outcome: "Created a sharper interface for local deal discovery and business promotion.",
    skills: ["Marketplace UX", "Deal discovery", "Digital marketing", "Category systems", "Conversion design"],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"],
    sections: ["Brand banner", "Deal cards", "Business visibility", "Commerce-facing browsing"],
  },
  {
    slug: "naturepacks",
    title: "NaturePacks",
    category: "Sustainability - environmental impact",
    liveUrl: "https://www.naturepacks.org",
    summary:
      "A sustainability product site for banana fibre paper packaging, environmental impact, process storytelling, and market credibility.",
    role: "Frontend implementation, media-led sections, responsive storytelling, product and process proof.",
    logo: `${naturepacks}/brand/naturepacks-main.svg`,
    image: `${naturepacks}/howitworksbanner.png`,
    gallery: [
      `${naturepacks}/newnaturepacks/process/sheet-forming-new.mp4`,
      `${naturepacks}/finalproduxts.png`,
      `${naturepacks}/product-bag-front.png`,
    ],
    outcome: "Built a credible environmental-impact site around product proof, process, and sustainability.",
    skills: ["Impact storytelling", "Product site", "Media integration", "Responsive frontend", "Sustainability UX"],
    tools: ["HTML", "CSS", "JavaScript", "Vercel", "GitHub"],
    sections: ["Manufacturing process", "Product proof", "Environmental story", "Founder/product confidence"],
  },
];
