import { Link } from "@tanstack/react-router";
import { ExternalArrow } from "@/components/portfolio-shell";
import type { projects } from "@/lib/portfolio-data";

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return <article className="group border-t border-border py-8 lg:py-12">
    <Link to="/projects/$slug" params={{ slug: project.slug }} className="grid gap-7 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,.85fr)] lg:items-center">
      <div className="image-frame overflow-hidden bg-muted"><img src={project.image} alt={project.alt} className="aspect-[16/9] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" loading="lazy" /></div>
      <div className="lg:pl-8"><div className="mb-14 flex items-center justify-between font-mono text-[10px] uppercase text-muted-foreground lg:mb-20"><span>{project.number}</span><span>{project.category}</span></div><h2 className="font-display text-4xl font-medium lg:text-6xl">{project.name}</h2><p className="mt-3 font-mono text-[10px] uppercase text-primary">{project.label}</p><p className="mt-6 max-w-lg leading-7 text-muted-foreground">{project.description}</p><div className="mt-8 flex items-center gap-2 text-sm font-medium uppercase">View project <ExternalArrow /></div></div>
    </Link>
  </article>;
}