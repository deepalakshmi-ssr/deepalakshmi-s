import agrimateAsset from "@/assets/agrimate.png.asset.json";
import hireReadyAsset from "@/assets/hirereadyai.png.asset.json";
import movaAsset from "@/assets/mova.png.asset.json";

export const socialLinks = {
  github: "https://github.com/deepalakshmi-ssr",
  linkedin: "https://www.linkedin.com/in/deepalakshmi-sakthisabariraman-0a798137a",
  leetcode: "https://leetcode.com/u/deepalakshmi_sakthiraman/",
};

export const projects = [
  {
    slug: "mova",
    number: "01",
    name: "MOVA",
    label: "Intelligent Mobility System",
    category: "Assistive Intelligence",
    image: movaAsset.url,
    alt: "MOVA intelligent mobility system concept with wheelchair and terrain analysis",
    description: "A modular assistive mobility system exploring safer, more accessible movement through sensing and intelligent navigation.",
    status: "Ongoing project",
  },
  {
    slug: "hirereadyai",
    number: "02",
    name: "HireReadyAI",
    label: "Smart Hiring & Evaluation Platform",
    category: "AI Product",
    image: hireReadyAsset.url,
    alt: "HireReadyAI candidate evaluation dashboard",
    description: "An intelligent placement system combining AI interviews, coding assessments and performance analytics.",
    status: "Product build",
  },
  {
    slug: "agrimate",
    number: "03",
    name: "AGRIMATE",
    label: "AI-Based Smart Farming Web Application",
    category: "Accessible Technology",
    image: agrimateAsset.url,
    alt: "AGRIMATE smart farming dashboard and multilingual voice assistant",
    description: "A responsive farming application connecting weather, soil, crop, pest and market guidance with multilingual voice access.",
    status: "Product build",
  },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];