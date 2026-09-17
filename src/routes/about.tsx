import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.jpeg.asset.json";
import { PageIntro, SectionLabel } from "@/components/portfolio-shell";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Deepalakshmi S — Builder & Engineer" }, { name: "description", content: "Meet Deepalakshmi S, an AI and Data Science engineering student who turns real problems into practical technology." },
    { property: "og:title", content: "About Deepalakshmi S" }, { property: "og:description", content: "Education, approach, skills and experience behind Deepalakshmi's technology builds." }, { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: About,
});

const skills = [
  ["Programming", "C · C++ · Python · Java · HTML · CSS · JavaScript"],
  ["Core concepts", "OOPS · Data Structures · SQL"],
  ["Technologies", "ReactJS · Flutter · Kubernetes"],
  ["Tools", "GitHub · VS Code · Figma · MIT Confluence · Canva · Power BI"],
  ["AI / Development", "Prompt Engineering · Amazon Q · Lovable AI"],
  ["Design", "Prototyping · UI Design · UX Basics"],
];

function About() { return <>
  <PageIntro eyebrow="About / Bio" title={<>The person<br/><span className="text-primary">behind</span> the builds.</>} />
  <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-32">
    <figure><div className="image-frame bg-muted"><img src={portraitAsset.url} alt="Deepalakshmi S in professional attire" className="aspect-[4/5] w-full object-cover object-top" /></div><figcaption className="mt-4 flex justify-between font-mono text-[9px] uppercase text-muted-foreground"><span>Deepalakshmi S</span><span>AI & Data Science</span></figcaption></figure>
    <div className="lg:pl-12"><SectionLabel index="01">Profile</SectionLabel><p className="font-display text-3xl leading-tight lg:text-5xl">I enjoy turning ideas and real-world problems into practical technology solutions.</p><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">I’m Deepalakshmi S, an AI & Data Science engineering student at Sri Eshwar College of Engineering, combining development, AI, data and user-focused design.</p><div className="mt-14 grid gap-px bg-border sm:grid-cols-3"><Fact label="Program" value="AI & Data Science"/><Fact label="Study" value="2025–2029"/><Fact label="Academic" value="9.1 CGPA · 2nd semester"/></div></div>
  </section>
  <section className="border-y border-border bg-secondary"><div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28"><SectionLabel index="02">How I think</SectionLabel><div className="grid gap-3 md:grid-cols-6">{["Problem","Understand","Design","Build","Test","Improve"].map((x,i)=><div key={x} className="border border-border bg-background p-5"><span className="font-mono text-[9px] text-primary">0{i+1}</span><p className="mt-10 font-display text-lg uppercase">{x}</p></div>)}</div><p className="mt-8 max-w-2xl leading-7 text-muted-foreground">I like starting with the problem rather than the technology. My focus is on understanding users, building practical solutions and continuously improving them.</p></div></section>
  <section className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-32"><SectionLabel index="03">Capabilities</SectionLabel><div className="grid gap-px border border-border bg-border md:grid-cols-2">{skills.map(([label,value])=><div key={label} className="bg-background p-7 lg:p-10"><p className="font-mono text-[9px] uppercase text-primary">{label}</p><p className="mt-5 text-lg leading-8">{value}</p></div>)}</div></section>
  <section className="border-t border-border"><div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-32"><SectionLabel index="04">Experience</SectionLabel><Experience year="2026" role="ReactJS Development Intern" company="Odisoft Technologies · Four weeks" text="Developed interactive React components and integrated them into dynamic web applications. Collaborated on responsive features, performance and website functionality."/><Experience year="Duration: 1 month" role="Frontend Developer Internship" company="LearnTricks EduTech Company" /></div></section>
  </> }

function Fact({label,value}:{label:string;value:string}) { return <div className="bg-background p-5"><p className="font-mono text-[9px] uppercase text-muted-foreground">{label}</p><p className="mt-3 text-sm font-medium">{value}</p></div> }
function Experience({year,role,company,text}:{year:string;role:string;company:string;text?:string}) { return <article className="grid gap-5 border-t border-border py-8 lg:grid-cols-[.3fr_.7fr_1fr]"><span className="font-mono text-[10px] uppercase text-primary">{year}</span><div><h2 className="font-display text-2xl">{role}</h2><p className="mt-2 text-sm text-muted-foreground">{company}</p></div>{text && <p className="leading-7 text-muted-foreground">{text}</p>}</article> }