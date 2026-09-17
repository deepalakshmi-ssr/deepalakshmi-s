import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import logoAsset from "@/assets/ds-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/portfolio-data";

const nav = [
  ["/", "Home"], ["/about", "About"], ["/projects", "Projects"],
  ["/achievements", "Achievements"], ["/coding", "Coding"], ["/contact", "Contact"],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <Link to="/" className="group flex flex-col leading-none" aria-label="Deepalakshmi S home">
            <span className="font-display text-[15px] font-semibold uppercase">Deepalakshmi S</span>
            <span className="mt-1 font-mono text-[9px] uppercase text-muted-foreground">AI & Data Science</span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {nav.map(([to, label]) => (
              <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="nav-link font-mono text-[10px] uppercase text-muted-foreground">{label}</Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button asChild variant="outline" size="sm"><Link to="/contact">Let&apos;s connect <ArrowUpRight /></Link></Button>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && <nav className="border-t border-border bg-background px-5 py-6 lg:hidden" aria-label="Mobile navigation">
          {nav.map(([to, label]) => <Link key={to} to={to} className="block border-b border-border py-4 font-display text-2xl uppercase">{label}</Link>)}
        </nav>}
      </header>
      <main className="page-enter pt-20">{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return <footer className="border-t border-border bg-surface-dark text-surface-dark-foreground">
    <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr_auto]">
        <div><p className="font-display text-2xl font-semibold uppercase">Deepalakshmi S</p><p className="mt-2 font-mono text-[10px] uppercase text-surface-dark-muted">AI & Data Science</p></div>
        <nav className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Footer navigation">{nav.map(([to,label]) => <Link key={to} to={to} className="text-sm text-surface-dark-muted transition-colors hover:text-surface-dark-foreground">{label}</Link>)}</nav>
        <div className="flex gap-2">
          <SocialIcon href={socialLinks.github} label="GitHub"><Github /></SocialIcon>
          <SocialIcon href={socialLinks.linkedin} label="LinkedIn"><Linkedin /></SocialIcon>
          <SocialIcon href="mailto:wmahes991@gmail.com" label="Email"><Mail /></SocialIcon>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-2 border-t border-surface-dark-border pt-5 font-mono text-[9px] uppercase text-surface-dark-muted sm:flex-row sm:justify-between"><span>© 2026 Deepalakshmi S. All rights reserved.</span><span>Designed to build what matters.</span></div>
    </div>
  </footer>;
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label} className="flex size-10 items-center justify-center border border-surface-dark-border text-surface-dark-muted transition-colors hover:border-surface-dark-foreground hover:text-surface-dark-foreground [&_svg]:size-4">{children}</a>;
}

export function Intro() {
  const [visible, setVisible] = useState(true);
  useEffect(() => { const id = window.setTimeout(() => setVisible(false), 2700); return () => window.clearTimeout(id); }, []);
  if (!visible) return null;
  return <div className="intro fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink text-paper" aria-label="Opening introduction">
    <div className="intro-mark relative overflow-hidden"><img src={logoAsset.url} alt="Deepalakshmi S monogram" className="h-52 w-52 object-cover sm:h-72 sm:w-72" /><span className="light-sweep" /></div>
    <div className="mt-7 h-px w-48 overflow-hidden bg-paper/20"><span className="intro-progress block h-full bg-champagne" /></div>
    <Button variant="ghost" size="sm" className="mt-5 text-paper/65 hover:bg-paper/10 hover:text-paper" onClick={() => setVisible(false)}>Skip intro <ArrowUpRight /></Button>
  </div>;
}

export function Eyebrow({ children }: { children: ReactNode }) { return <p className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase text-primary before:h-px before:w-7 before:bg-primary">{children}</p>; }

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy?: string }) {
  return <section className="tech-grid border-b border-border"><div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-32"><Eyebrow>{eyebrow}</Eyebrow><h1 className="max-w-5xl font-display text-[clamp(3.4rem,9vw,8.5rem)] font-medium uppercase leading-[.82]">{title}</h1>{copy && <p className="mt-9 max-w-2xl text-base leading-7 text-muted-foreground lg:text-lg">{copy}</p>}</div></section>;
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) { return <div className="mb-10 flex items-center gap-4 border-b border-border pb-4 font-mono text-[10px] uppercase text-muted-foreground"><span className="text-primary">{index}</span><span>{children}</span></div>; }

export function ArrowLink({ to, children }: { to: "/projects" | "/contact" | "/about"; children: ReactNode }) { return <Button asChild><Link to={to}>{children}<ArrowUpRight /></Link></Button>; }

export function ExternalArrow() { return <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />; }