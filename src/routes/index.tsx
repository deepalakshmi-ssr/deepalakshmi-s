import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Intro, SectionLabel } from "@/components/portfolio-shell";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/portfolio-data";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Deepalakshmi S — AI & Data Science Builder" },
    { name: "description", content: "Deepalakshmi S builds practical AI, data and accessible technology products." },
    { property: "og:title", content: "Deepalakshmi S — AI & Data Science Builder" },
    { property: "og:description", content: "A portfolio of intelligent products, accessible systems and ambitious technology builds." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <><Intro /><section className="tech-grid relative min-h-[calc(100svh-5rem)] border-b border-border"><div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1440px] flex-col justify-between px-5 py-10 lg:px-10 lg:py-14"><div className="flex justify-between"><Eyebrow>AI & Data Science Engineering</Eyebrow><span className="hidden font-mono text-[9px] uppercase text-muted-foreground sm:block">Coimbatore · India</span></div><div className="py-14"><h1 className="max-w-6xl font-display text-[clamp(3.5rem,9.2vw,9rem)] font-medium uppercase leading-[.8]">Building<br />ideas into<br /><span className="text-primary">real-world</span><br />solutions.</h1></div><div className="grid items-end gap-8 lg:grid-cols-2"><p className="max-w-xl text-base leading-7 text-muted-foreground lg:text-lg">I’m Deepalakshmi S, an AI & Data Science engineering student focused on building practical technology, intelligent applications and products that solve real problems.</p><div className="flex flex-wrap gap-3 lg:justify-end"><Button asChild><Link to="/projects">View my work <ArrowUpRight /></Link></Button><Button asChild variant="outline"><Link to="/contact">Let&apos;s connect <ArrowUpRight /></Link></Button></div></div></div><ArrowDown className="absolute bottom-8 right-6 hidden size-5 animate-bounce text-primary lg:block" /></section>
    <div className="overflow-hidden border-b border-border bg-primary text-primary-foreground"><div className="marquee flex w-max gap-14 py-4 font-mono text-[10px] uppercase">{[...Array(2)].flatMap(() => ["AI & Data Science", "Developer", "Product Builder", "Problem Solver"]).map((item,i) => <span key={`${item}-${i}`} className="flex items-center gap-14 after:size-1 after:rounded-full after:bg-primary-foreground/50">{item}</span>)}</div></div>
    <section className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-32"><SectionLabel index="01">Selected work</SectionLabel>{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</section>
    <section className="border-t border-border bg-secondary"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-32"><div><SectionLabel index="02">Currently building</SectionLabel><span className="status-dot font-mono text-[10px] uppercase text-primary">Ongoing</span></div><div><h2 className="font-display text-5xl uppercase leading-none lg:text-8xl">MOVA</h2><p className="mt-3 font-mono text-[10px] uppercase text-muted-foreground">Intelligent Mobility System</p><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">Developing a modular assistive mobility system integrating sensors, computer vision and intelligent navigation to improve wheelchair safety and accessibility.</p><Button asChild variant="outline" className="mt-8"><Link to="/projects/$slug" params={{ slug: "mova" }}>Explore MOVA <ArrowUpRight /></Link></Button></div></div></section></>
  );
}
