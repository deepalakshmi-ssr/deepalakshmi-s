import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Phone, Braces } from "lucide-react";
import { ExternalArrow, PageIntro, SectionLabel } from "@/components/portfolio-shell";
import { socialLinks } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({head:()=>({meta:[{title:"Contact Deepalakshmi S"},{name:"description",content:"Contact Deepalakshmi S for opportunities, collaborations and technology projects."},{property:"og:title",content:"Let's Connect — Deepalakshmi S"},{property:"og:description",content:"Direct contact details and professional profiles for Deepalakshmi S."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Contact});
const contacts=[
  {label:"Personal email",value:"wmahes991@gmail.com",href:"mailto:wmahes991@gmail.com",Icon:Mail},
  {label:"College email",value:"deepalakshmi.s2025aids@sece.ac.in",href:"mailto:deepalakshmi.s2025aids@sece.ac.in",Icon:Mail},
  {label:"Phone",value:"+91 9043569280",href:"tel:+919043569280",Icon:Phone},
  {label:"GitHub",value:"deepalakshmi-ssr",href:socialLinks.github,Icon:Github},
  {label:"LinkedIn",value:"deepalakshmi-sakthisabariraman",href:socialLinks.linkedin,Icon:Linkedin},
  {label:"LeetCode",value:"deepalakshmi_sakthiraman",href:socialLinks.leetcode,Icon:Braces},
];
function Contact(){return <><PageIntro eyebrow="Contact / Connect" title={<>Let&apos;s<br/><span className="text-primary">connect.</span></>} copy="Have an idea, opportunity, collaboration or project in mind? Feel free to reach out."/><section className="tech-grid"><div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 lg:grid-cols-[.65fr_1.35fr] lg:px-10 lg:py-32"><div><SectionLabel index="01">Availability</SectionLabel><h2 className="font-display text-5xl uppercase leading-none lg:text-7xl">Open to<br/>opportunities.</h2><p className="mt-7 max-w-sm leading-7 text-muted-foreground">For internships, collaborative builds, project conversations and thoughtful technology work.</p></div><div className="grid gap-px border border-border bg-border sm:grid-cols-2">{contacts.map(({label,value,href,Icon})=><a key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel={href.startsWith("http")?"noreferrer":undefined} className="group min-w-0 bg-background p-6 transition-colors hover:bg-secondary lg:p-8"><div className="flex justify-between"><Icon className="size-5"/><ExternalArrow/></div><p className="mt-14 font-mono text-[9px] uppercase text-primary">{label}</p><p className="mt-3 break-words text-sm font-medium">{value}</p></a>)}</div></div></section></>}