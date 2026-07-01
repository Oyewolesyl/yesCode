import ahomeLogo from "../assets/proof/ahome-logo.svg";
import ypodHero from "../assets/proof/ypod-hero.png";
import ypodResearch from "../assets/proof/ypod-research.png";
import ypodFitStudy from "../assets/proof/ypod-fit-study.png";
import dealradarBanner from "../assets/proof/dealradar-banner.png";
import dealradarProfile from "../assets/proof/dealradar-profile.png";
import naturepacksProcess from "../assets/proof/naturepacks-process.png";
import naturepacksProducts from "../assets/proof/naturepacks-products.png";
import naturepacksBag from "../assets/proof/naturepacks-bag.png";

export type Project = {
  slug: string;
  title: string;
  category: string;
  liveUrl: string;
  summary: string;
  role: string;
  image: string;
  gallery: string[];
  outcome: string;
  skills: string[];
  tools: string[];
  sections: string[];
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
    image: ahomeLogo,
    gallery: [ahomeLogo],
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
    image: ypodHero,
    gallery: [ypodHero, ypodResearch, ypodFitStudy],
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
    image: ypodResearch,
    gallery: [ypodResearch, ypodHero, ypodFitStudy],
    outcome: "Extended the YPOD brand from product awareness into a store-ready buying journey.",
    skills: ["Ecommerce UX", "Product cards", "Shop navigation", "Mobile commerce", "Conversion flow"],
    tools: ["Next.js", "React", "TypeScript", "CSS", "Vercel", "GitHub"],
    sections: ["Shop grid", "Product detail logic", "Purchase path", "Store-ready structure"],
  },
  {
    slug: "dealradar-ng",
    title: "DealRadar NG",
    category: "Digital marketing - ecommerce",
    liveUrl: "https://dealradarng.com",
    summary:
      "A digital marketing and ecommerce platform for deal discovery, local business visibility, branded campaigns, and conversion.",
    role: "Frontend system, brand asset integration, deal discovery interface, category and conversion structure.",
    image: dealradarBanner,
    gallery: [dealradarBanner, dealradarProfile],
    outcome: "Created a sharper interface for local deal discovery and business promotion.",
    skills: ["Marketplace UX", "Deal discovery", "Digital marketing", "Category systems", "Conversion design"],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"],
    sections: ["Brand banner", "Deal cards", "Business visibility", "Commerce-facing browsing"],
  },
  {
    slug: "naturepacks",
    title: "NaturePacks",
    category: "Sustainability - environmental impact",
    liveUrl: "https://naturepacks.org",
    summary:
      "A sustainability product site for banana fibre paper packaging, environmental impact, process storytelling, and market credibility.",
    role: "Frontend implementation, media-led sections, responsive storytelling, product and process proof.",
    image: naturepacksProcess,
    gallery: [naturepacksProcess, naturepacksProducts, naturepacksBag],
    outcome: "Built a credible environmental-impact site around product proof, process, and sustainability.",
    skills: ["Impact storytelling", "Product site", "Media integration", "Responsive frontend", "Sustainability UX"],
    tools: ["HTML", "CSS", "JavaScript", "Vercel", "GitHub"],
    sections: ["Manufacturing process", "Product proof", "Environmental story", "Founder/product confidence"],
  },
];
