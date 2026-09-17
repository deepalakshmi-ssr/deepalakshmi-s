import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/portfolio-shell";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({ head: () => ({ meta: [
  { title: "Projects — Deepalakshmi S" }, { name: "description", content: "Explore MOVA, HireReadyAI and AGRIMATE — practical technology projects by Deepalakshmi S." }, { property: "og:title", content: "Projects — Deepalakshmi S" }, { property: "og:description", content: "Intelligent systems built around accessibility, hiring and farming." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Projects });
function Projects(){return <><PageIntro eyebrow="Selected projects / 2025–2026" title={<>Things I&apos;ve<br/><span className="text-primary">built.</span></>} copy="Projects focused on solving practical problems through technology, intelligent systems and user-centered design."/><section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</section></>}