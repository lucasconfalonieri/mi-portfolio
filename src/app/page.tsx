"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiTensorflow, SiSvelte, SiExpo, SiSamsung, SiMysql, SiSelenium, SiTerraform } from "react-icons/si";
import { BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaAws } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Briefcase,
  Code2,
  GraduationCap,
  Phone,
  Award,
  FileText,
  PlayCircle,
} from "lucide-react";

type Category = "web" | "mobile" | "tv" | "ai" | "QA";

type Project = {
  title: string;
  description: string;
  tags: string[];
  categories: Category[];
  media: string;            
  demo?: string;
  deploy?: string;
  repo?: string;
  doc?: string;
  content?: string;
};

const projects: Project[] = [
  {
    title: "Mascoteando — Plataforma social para dueños de mascotas",
    description: "App híbrida (Expo) con mapa interactivo, alertas en tiempo real y feed social.",
    tags: ["Expo", "React Native", "Firebase", "Embeddings", "Google Maps API"],
    categories: ["mobile", "web", "ai"],  
    media: "/mascoteando.gif",        
    demo: "https://app-mascoteando.vercel.app",
    repo: "https://github.com/lucasconfalonieri/app-proyecto-final",
    doc:  "https://docs.google.com/document/d/1rcLdqpwaDHkSJX4TS1PLAWP9MHPisbgaev53Q6NbxP8/edit?usp=sharing", 
  },
  {
    title: "Digital Signage Tizen",
    description: "Gestión de slideshows para TVs Tizen: detección, playlists, editor, despliegue.",
    tags: [".NET", "React", "Tizen"],
    categories: ["tv", "web"],
    media: "/TVCast.gif",
    doc:  "https://docs.google.com/document/d/1k5GNt04K95fv3lc4VgcEB1efevX3CLAQ/edit?usp=sharing&ouid=102317204902453230079&rtpof=true&sd=true",
  },
  {
    title: "CNN Frutas/Verduras",
    description: "Clasificador con TensorFlow/Keras + panel Streamlit para métricas.",
    tags: ["TensorFlow", "Keras", "AWS S3", "AWS EC2" ,"Streamlit", "Terraform"],
    categories: ["ai"],
    media: "/ClasiFrutVerd.gif",            
    deploy: "https://github.com/lucasconfalonieri/Terraform-AWS-CNN",
    repo: "https://github.com/lucasconfalonieri/Frut-Verd-CNN",
    doc:  "https://docs.google.com/document/d/1IJ4iTGyfCEUvp-PzusfQkdrkMduNJEFFzdRm8XgCHyc/edit?usp=sharing",
  },
  {
    title: "Audiestimulos - Rehabilitación auditiva de pacientes con implantes cocleares",
    description: "App web que consta de un programa de rehabilitacion de 5 etapas incluyendo imagenes, sonidos y test de evolución para el paciente.",
    tags: ["Svelte", "Node.js", "MySQL", "Vercel"],
    categories: ["web"],
    media: "Audiestimulos.gif",
    demo: "https://herramienta-audiestimulos.vercel.app/",
    repo: "https://github.com/lucasconfalonieri/Audiestimulos",
    doc:  "https://docs.google.com/document/d/1wvyCRsayDzSJ7Yoa8TIiliox70YUsBeIc-QfdCIsLMg/edit?usp=sharing",
  },
    {
    title: "Mantina",
    description: "Plataforma web para gestión y distribución de material de estudio para alumnos de pilotaje. Incluye un backoffice para administrar archivos PDF y usuarios.",
    tags: ["React", "Node.js", "MySQL", "cPanel", "VPS Linux (AlmaLinux)"],
    categories: ["web"],
    media: "Mantina.gif",
    demo: "https://mantina.com",
    repo: "https://github.com/lucasconfalonieri/Mantina",
  },
  {
    title: "NeuroNEApp",
    description: "PWA de ejercicios cognitivos para centro neurologico, con el fin de trabajar habilidades mentales mediante juegos interactivos.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Cloudfare Pages", "Prisma"],
    categories: ["web"],
    media: "NeuroNEA.gif",
  },
    {
    title: "Tecnicar",
    description: "TecnicarApp es una aplicación web para registrar y visualizar los tiempos de las carreras del evento Tecnicar 2022, con panel de gestión para jueces y vista pública para espectadores.",
    tags: ["Node.js", "Svelte", "MySQL", "Vercel"],
    categories: ["web"],
    media: "Tecnicar.jpg",
    demo: "http://tecnicar.mec.gob.ar/",
    repo: "https://github.com/cuencadelplata/cronometraje-carrera-integrador-2022",
    doc:  "https://docs.google.com/document/d/1ULqGBsSmMd0L-r_utbjpnS5Caio5apPvOnfAe_5iveI/edit?usp=sharing",
    content: "https://www.youtube.com/watch?v=psZDonPfHK0",  
  },
    {
    title: "Landing Psicologa",
    description: "Landing estática Next.js + Tailwind optimizada con Lighthouse 95+.",
    tags: ["Next.js", "Tailwind", "SEO"],
    categories: ["web"],
    media: "/projects/landing.jpg",
    demo: "https://tusitio.com/landing",
    repo: "https://github.com/TU-USUARIO/landing",
  },
    {
    title: "QA Automation - InboxVip",
    description: "Automatización de pruebas funcionales para una plataforma social, abarcando flujos web y mobile.",
    tags: ["Selenium", "Maven", "TestNg", "Chromium", "Appium"],
    categories: ["QA"],
    media: "inboxvip.jpg",
    repo: "https://github.com/12juam12/automation-osos",
    doc:  "https://docs.google.com/spreadsheets/d/19Dz0sYT0QhLjUToQ-qJFCzuTnnoug3YkcQfYyWJDr3Q/edit?usp=sharing",
  }
];

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  mode?: "Remoto" | "Híbrido" | "Presencial" | "Part-time" | "Full-time";
  bullets: string[];
  platforms?: string[];
  tools?: string[];
  logo?: string;
};

const experience: ExperienceItem[] = [
  {
    logo: "glitch.jpg",
    role: "Software Development Engineer in Test",
    company: "GlitchCode",
    period: "mar. 2023 – sep.2025",
    location: "Argentina",
    mode: "Part-time",
    bullets: [
      "Diseño, desarrollo y ejecución de pruebas automatizadas end-to-end.",
      "Pruebas de rendimiento y pruebas automatizadas de APIs (REST/SOAP).",
      "Configuración de pipelines de CI para suites de regresión.",
      "Diseño y ejecución de casos de prueba, análisis de riesgos y reporte de bugs.",
      "Elaboración de reportes de resultados y cobertura."
    ],
    platforms: ["Web", "REST/SOAP", "Mobile"],
    tools: ["TestNG", "Appium", "Selenium", "Maven", "Git"]
  },
  {
    logo: "nea.jpg",
    role: "Software Development — Área I+D",
    company: "Desarrollos NEA",
    period: "jun. 2024 – ene. 2025",
    location: "Corrientes, Argentina",
    mode: "Híbrido",
    bullets: [
      "Desarrollo y mantenimiento de aplicaciones web con React y Node.js.",
      "Desarrollo para Tizen OS en TVs: detección de dispositivos y despliegue.",
      "Diseño, creación y administración de bases de datos SQL.",
      "Desarrollo e integración de APIs; UI con Tailwind CSS.",
      "CI/CD y research de nuevas tecnologías; generación de reportes técnicos."
    ],
    platforms: ["Web", "REST APIs", "Tizen OS"],
    tools: ["React", "Node.js", "Tailwind CSS", "SQL", "Git", "Teams", "Tizen Studio"]
  },
  {
    role: "Software Developer — Proyectos Freelance",
    company: "Varios clientes",
    period: "2022 – actualidad",
    location: "Remoto",
    bullets: [
      "Mantina (React/Node/MySQL) — plataforma de distribución de material.",
      "NeuroNEA (Next.js/Prisma/PostgreSQL/Supabase) — app web para rehabilitación neurológica.",
      "Audiestímulos (Svelte/Node/MySQL) — app web para rehabilitación auditiva.",
      "Landing psicologa"
    ],
    platforms: ["Web", "Mobile"],
    tools: ["TypeScript", "React", "Node.js", "MySQL", "Supabase", "Svelte", "Prisma"]
  },
  {
    logo: "sierra.jpg", 
    role: "F&B Staff (Work & Travel)",
    company: "Sierra-at-Tahoe Resort",
    period: "(dic. 2023 – mar. 2024)-(dic. 2024 – mar. 2025)",
    location: "Twin Bridges, California, USA",
    mode: "Presencial",
    bullets: [
      "Inglés profesional.",
      "Compañeros internacionales.",
      "Contacto con clientes en entorno de alto flujo y trabajo en equipo.",
    ]
  },
];


const skillIcons = [
  { label: "AWS", Icon: FaAws },
  { label: "TypeScript", Icon: BiLogoTypescript },
  { label: "Selenium", Icon: SiSelenium },
  { label: "Node.js", Icon: FaNode },
  { label: "Svelte", Icon: SiSvelte },
  { label: "React", Icon: FaReact },
  { label: "MySQL", Icon: SiMysql },
  { label: "Firebase", Icon: BiLogoFirebase },
  { label: "Tizen", Icon: SiSamsung },    
  { label: "Terraform", Icon: SiTerraform },
  { label: "Expo", Icon: SiExpo },
  { label: "TensorFlow", Icon: SiTensorflow },
];

const certificates = [
  {
    title: "AWS Cloud Practitioner (ejemplo)",
    issuer: "Amazon Web Services",
    year: "2025",
    link: "https://tusitio.com/certificado/aws",
  },
  {
    title: "Google Data Analytics (ejemplo)",
    issuer: "Coursera / Google",
    year: "2024",
    link: "https://tusitio.com/certificado/google-da",
  },
];

type SectionProps = { id: string; title?: string; children: React.ReactNode; variant?: 'a' | 'b'; hideTitle?: boolean };
const Section = ({ id, title, children, variant = 'a', hideTitle = false }: SectionProps) => (
  <section id={id} className={`${variant === 'a' ? 'bg-white' : 'bg-green-100'}`}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {!hideTitle && title ? (
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
      ) : null}
      {children}
    </div>
  </section>
);

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerText = scrolled ? "text-slate-900" : "text-white";
  const headerIconBtn = scrolled
    ? "p-2 rounded-xl border border-slate-300 text-slate-900 hover:bg-white"
    : "p-2 rounded-xl border border-white/70 text-white hover:bg-white/10";

  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, 120]);
  const [activeFilter, setActiveFilter] =
  useState<"all" | Category>("all");


  return (
    <div className="min-h-screen text-slate-900 scroll-smooth bg-white">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled
            ? "backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className={`font-semibold tracking-tight ${headerText}`}>LUCAS CONFALONIERI</a>
          <nav className={`hidden sm:flex gap-5 text-sm ${headerText}`}>
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#knowledge" className="hover:underline">Knowledge</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experiences" className="hover:underline">Experiences</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#certificates" className="hover:underline">Certificates</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/lucasconfalonieri" target="_blank" rel="noreferrer" className={headerIconBtn}>
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/lucas-confalonieri" target="_blank" rel="noreferrer" className={headerIconBtn}>
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href="mailto:lucasconfa7.lc@gmail.com" className={headerIconBtn}>
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="relative isolate overflow-hidden min-h-screen flex items-center">
        <motion.div
          className="absolute inset-0 -z-10 bg-cover bg-center will-change-transform"
          style={{ y: yBg, backgroundImage: "url('/hero-bg2.jpg')" }}
          aria-hidden />
        <div className="absolute inset-0 -z-10 bg-black/20" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 -z-10 bg-gradient-to-b from-transparent to-white" aria-hidden />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="grid gap-10 md:grid-cols-12 items-center">
            <div className="md:col-span-5 flex justify-center">
              <motion.img
                src="/me.jpg"
                alt="Lucas Confalonieri"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="h-44 w-44 md:h-64 md:w-64 rounded-full object-cover ring-4 ring-white shadow-2xl"
              />
            </div>
            <div className="md:col-span-7">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <p className="text-sm uppercase tracking-widest text-white/90">Ingeniero en Sistemas</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2 text-white">
                  Lucas Confalonieri
                </h1>
                <p className="mt-2 text-lg text-white/90">Full-Stack Engineer · Testing & BDD</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl border border-white/70 text-white px-4 py-2 bg-white/5 hover:bg-white/10">
                    <Code2 className="h-4 w-4" /> Ver proyectos
                  </a>
                  <a href="/CV_LUCAS_CONFALONIERI.pdf" className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 px-4 py-2 hover:opacity-95">
                    <Download className="h-4 w-4" /> Descargar CV
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-white/90">
          ▾
        </a>
      </section>

      <Section id="about" hideTitle variant="a">
        <div className="rounded-xl border bg-white p-6 md:p-12 shadow-sm">
          <h2 className="text-3xl sm:text-4xl md:text-[28px] font-bold tracking-tight">
            Hola, soy <span className="underline decoration-emerald-300 decoration-4 underline-offset-4">Lucas Confalonieri</span>
          </h2>
          <p className="mt-5 text-lg md:text-[16px] text-slate-700 max-w-3xl">
            <strong>Ingeniero en Sistemas de Información </strong> con +3 años participando en proyectos con clientes reales y experiencia laboral en desarrollo y testing de software.
            <br />Trabajé con tecnologias como <strong> Expo, TypeScript, Svelte, React, Node, SQL, Selenium, Terraform</strong> y he integrado soluciones en <strong>AWS</strong> y <strong>Firebase.</strong> También tuve oportunidades de desarrollar para <strong>Tizen OS</strong>, lo que me dio perspectiva sobre despliegues en dispositivos y optimización.
          </p>
          <p className="mt-3 text-lg md:text-[16px] text-slate-700 max-w-3xl">
            Quiero seguir creciendo en el área de ingeniería de software, profundizando en arquitecturas limpias, 
            buenas prácticas de CI/CD, observabilidad y diseño de APIs y modelos de datos escalables. 
            Me motiva aprender, documentar y trabajar en equipo para entregar valor medible.
          </p>
          <p className="mt-3 text-lg md:text-[16px] text-slate-700 max-w-3xl">
          En este portfolio vas a encontrar una recopilación de mis skills, proyectos e información personal. 
          Si estas buscando alguien apasionado por brindar lo mejor de si mismo, conectemos y colaboremos para crear algo extraordinario juntos.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-700">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Corrientes, AR</span>
            <a className="inline-flex items-center gap-2 " href="mailto:lucasconfa7.lc@gmail.com"><Mail className="h-4 w-4" /> lucasconfa7.lc@gmail.com</a>
            <a className="inline-flex items-center gap-2" href="https://github.com/lucasconfalonieri"><Github className="h-4 w-4" />lucasconfalonieri</a>
            <a className="inline-flex items-center gap-2" href="https://www.linkedin.com/in/lucas-confalonieri/"><Linkedin className="h-4 w-4" />lucas-confalonieri</a>
          </div>
        </div>
      </Section>

<Section id="knowledge" title="Knowledge" variant="b">
  <div className="rounded-2xl border bg-white p-6 shadow-sm">
    <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
      {skillIcons.map(({ label, Icon }) => (
        <li key={label} className="group text-center">
          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl border bg-white/70 shadow-sm
                          flex items-center justify-center transition
                          hover:-translate-y-1 hover:shadow-md">
            <Icon className="h-8 w-8 sm:h-9 sm:w-9 " aria-hidden />
          </div>
          <p className="mt-2 text-xs text-slate-600 group-hover:text-slate-800">{label}</p>
        </li>
      ))}
    </ul>
  </div>
</Section>


<Section id="projects" title="Projects" variant="a">
  {/* Tabs */}
  <div className="mb-6 flex flex-wrap gap-2">
    {[
      { key: "all", label: "All" },
      { key: "web", label: "Web" },
      { key: "mobile", label: "Mobile" },
      { key: "tv", label: "TV" },
      { key: "ai", label: "AI / Machine Learning" },
      { key: "QA", label: "QA / Testing" },
    ].map((f) => (
      <button
        key={f.key}
        onClick={() => setActiveFilter(f.key as any)}
        className={`px-4 py-2 rounded-full border text-sm transition
          ${activeFilter === f.key
            ? "bg-slate-900 text-white border-slate-900"
            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`}
      >
        {f.label}
      </button>
    ))}
  </div>

  {/* Grid */}
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {(activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter))
    ).map((p) => {
      const isVideo = /\.mp4$|\.webm$/i.test(p.media);
      return (
        <motion.article
          key={p.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="group rounded-2xl border bg-white overflow-hidden shadow-sm flex flex-col"
        >
          {/* Media: GIF/JPG/PNG via <img> o MP4/WEBM via <video> */}
          <div className="relative aspect-[16/9] overflow-hidden">
            {isVideo ? (
              <video
                src={p.media}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={p.media}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            )}
            {/* Badges de categorías (varias) */}
            <div className="absolute left-3 top-3 flex flex-wrap gap-2">
              {p.categories.map((c) => (
                <span
                  key={c}
                  className="text-[11px] font-medium rounded-full px-2.5 py-1 bg-black/70 text-white uppercase tracking-wide"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Texto */}
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-base font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600 flex-1">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-[11px] rounded-full border px-2 py-1 text-slate-700">
                  {t}
                </span>
              ))}
            </div>

            {/* Botones */}
            <div className="mt-4 flex flex-wrap gap-3">
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl
                             bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
              )}
              {p.deploy && (
                <a
                  href={p.deploy}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl
                             bg-slate-900 text-white hover:bg-slate-800"
                >
                  <Code2 className="h-4 w-4" /> Deploy
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl
                             bg-slate-900 text-white hover:bg-slate-800"
                >
                  <Code2 className="h-4 w-4" /> Código
                </a>
              )}
              {p.doc && (
                <a
                  href={p.doc}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl
                             bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <FileText className="h-4 w-4" /> Documento
                </a>
              )}
              {p.content && (
                <a
                  href={p.content}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-full
                  bg-red-600 text-white shadow-sm ring-1 ring-red-600/20
                  hover:bg-red-700 hover:shadow transition"
                >
                  <PlayCircle className="h-4 w-4" /> Contenido
                </a>
              )}
            </div>
          </div>
        </motion.article>
      );
    })}
  </div>
</Section>



{/* EXPERIENCES */}
<Section id="experiences" title="Experiences" variant="b">
  <div className="space-y-4">
    {experience.map((e) => (
      <div key={`${e.company}-${e.role}`} className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
          <div className="flex items-start gap-3">
          {/* Logo de la empresa */}
          <div className="shrink-0">
            {e.logo ? (
              <img
                src={e.logo}
                alt={e.company}
                className="h-10 w-10 rounded-md object-contain border bg-white"
                loading="lazy"
              />
            ) : (
              <div className="h-10 w-10 rounded-md border bg-slate-50 flex items-center justify-center text-slate-400">
                <Briefcase className="h-5 w-5" />
              </div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{e.role}</h3>
            <p className="text-slate-600">{e.company}</p>
          </div>
        </div>

            <p className="mt-1 text-sm text-slate-500 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {e.location} {e.mode ? `· ${e.mode}` : ""}
            </p>
          </div>
          <span className="text-sm text-slate-500 whitespace-nowrap">{e.period}</span>
        </div>

        {e.platforms?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {e.platforms.map((p) => (
              <span key={p} className="text-[11px] rounded-full border px-2 py-1 text-slate-700">
                {p}
              </span>
            ))}
          </div>
        ) : null}

        <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
          {e.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {e.tools?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {e.tools.map((t) => (
              <span key={t} className="text-[11px] rounded-full border px-2 py-1 text-slate-700">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    ))}
  </div>
</Section>


      <Section id="education" title="Education" variant="a">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold flex items-center gap-2"><GraduationCap className="h-5 w-5" /> Ingeniería en Sistemas de Información</h3>
          <p className="text-slate-600 mt-1">Universidad Nacional del Nordeste (UNNE) — 5º año</p>
          <p className="text-slate-600">Intereses: IA aplicada, DevOps, visualización y productos web/mobile escalables.</p>
        </div>
      </Section>

      <Section id="certificates" title="Certificates" variant="b">
        <div className="grid sm:grid-cols-2 gap-4">
          {certificates.map((c) => (
            <div key={c.title} className="rounded-2xl border bg-white p-5 shadow-sm flex items-start justify-between gap-4">
              <div>
                <h4 className="font-semibold flex items-center gap-2"><Award className="h-5 w-5" /> {c.title}</h4>
                <p className="text-slate-600">{c.issuer}</p>
              </div>
              <div className="text-sm text-slate-500 text-right">
                <div>{c.year}</div>
                <a className="underline" href={c.link} target="_blank" rel="noreferrer">Credential</a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" variant="a">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-slate-700">¿Querés charlar sobre un proyecto, oportunidad o colaboración? Escribime:</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href="mailto:TU-EMAIL" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-4 py-2 hover:opacity-95"><Mail className="h-4 w-4" /> Enviar email</a>
            <a href="https://www.linkedin.com/in/TU-USUARIO" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:bg-slate-50"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Lucas Confalonieri — Portfolio</footer>
    </div>
  );
}
