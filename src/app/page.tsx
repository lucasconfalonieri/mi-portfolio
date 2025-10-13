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
  FileText,
  PlayCircle,
} from "lucide-react";

type Category = "web" | "mobile" | "tv" | "ai" | "QA";

type Filter = "all" | Category;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "tv", label: "TV" },
  { key: "ai", label: "AI / Machine Learning" },
  { key: "QA", label: "QA / Testing" },
];

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
      "Desarrollo e integración de API; UI con Tailwind CSS.",
      "Research de nuevas tecnologías; generación de reportes técnicos."
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

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  logo?: string;        // ej: "/logos/ucp.png" (poné el archivo en public/logos/)
  institutionUrl?: string;
  bullets?: string[];
};

const educationItems: EducationItem[] = [
  {
    degree: "Ingeniería en Sistemas de Información",
    institution: "Universidad de la Cuenca del Plata (UCP)",
    period: "2020 – 2024",
    location: "Corrientes, Argentina",
    logo: "cuenca.png",
    institutionUrl: "https://www.ucp.edu.ar/",
    bullets: [
      "Carrera de grado (5 años).",
      "Formación en ingeniería de software, gestión de proyectos, bases de datos, redes y sistemas operativos.",
    ],
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

type CertificateItem = {
  title: string;
  issuer: string;
  date?: string;
  file: string;           // ruta en /public/certificates/*
  type: "image" | "pdf";
  thumbnail?: string;     // opcional: miniatura para PDF (jpg/png)
  credentialUrl?: string; // opcional: link a credly, etc.
};

const certificates: CertificateItem[] = [
  {
    title: "Ingeniería en Sistemas de Información",
    issuer: "Universidad de la Cuenca del Plata (UCP)",
    date: "2024",
    file: "degree.jpeg",
    type: "image",
    credentialUrl: "https://registrograduados.siu.edu.ar/consulta.php?ah=st68ec56337dbb79.61600392&ai=registro_dngu%7C%7C92000001&tcm=popup&cGFyYW1ldHJv=eyJpZF90cmFtaXRlIjoiMTc2MzQ5MiIsInNpc3RlbWEiOiJzaWRjZXIiLCJpZF90aXBvX2RvY3VtZW50byI6IkROSSIsImRvY3VtZW50byI6IjQzNzUyMDAyIiwidGlwb195X2RvY3VtZW50byI6IkRvY3VtZW50byBOYWNpb25hbCBkZSBJZGVudGlkYWQgNDM3NTIwMDIiLCJmZWNoYV9lZ3Jlc28iOiIyMDI0LTEyLTIwIiwibm9tYnJlX2FwZWxsaWRvIjoiQ09ORkFMT05JRVJJLCBMVUNBUyBFRFVBUkRPIiwiYXBlbGxpZG8iOiJDT05GQUxPTklFUkkiLCJub21icmUiOiJMVUNBUyBFRFVBUkRPIiwibmFjaW9uYWxpZGFkIjoiQVJHRU5USU5BIiwiaW5zdGl0dWNpb24iOiJVbml2ZXJzaWRhZCBkZSBsYSBDdWVuY2EgZGVsIFBsYXRhIiwidGl0dWxvIjoiSW5nZW5pZXJvXC9hIGVuIFNpc3RlbWFzIGRlIEluZm9ybWFjaVx1MDBmM24iLCJibG9ja2NoYWluIjoiYmxvY2tjaGFpbl9sb2dvX25lZ3JvLnBuZyJ9&tm=1",
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "2024-06",
    file: "aws-foundations.pdf",
    type: "pdf",
    thumbnail: "/aws.jpeg",
    credentialUrl: "https://www.credly.com/go/j7MXVoYG",
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
  const [activeFilter, setActiveFilter] = useState<Filter>("all");


  const [certPreview, setCertPreview] = useState<CertificateItem | null>(null);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setCertPreview(null);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);


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
                <p className="mt-2 text-lg text-white/90">Full-Stack Engineer · Testing & DB</p>
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
            Hola Mundo! soy <span className="underline decoration-emerald-300 decoration-4 underline-offset-4">Lucas Confalonieri</span>
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
  <div className="mb-6 flex flex-wrap gap-2">
    {FILTERS.map((f) => (
      <button
        key={f.key}
        onClick={() => setActiveFilter(f.key)}
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


{/* EDUCATION */}
<Section id="education" title="Education" variant="a">
  <div className="space-y-4">
    {educationItems.map((ed) => (
      <div key={ed.institution} className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            {/* Logo universidad */}
            <div className="shrink-0">
              {ed.logo ? (
                <img
                  src={ed.logo}
                  alt={ed.institution}
                  className="h-10 w-10 rounded-md object-contain border bg-white"
                  loading="lazy"
                />
              ) : (
                <div className="h-10 w-10 rounded-md border bg-slate-50 flex items-center justify-center text-slate-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
              )}
            </div>

            {/* Texto */}
            <div>
              <h3 className="text-lg font-semibold">{ed.degree}</h3>
              {ed.institutionUrl ? (
                <a
                  href={ed.institutionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {ed.institution}
                </a>
              ) : (
                <p className="text-slate-600">{ed.institution}</p>
              )}
              {ed.location && (
                <p className="mt-1 text-sm text-slate-500 flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {ed.location}
                </p>
              )}
            </div>
          </div>

          <span className="text-sm text-slate-500 whitespace-nowrap">{ed.period}</span>
        </div>

        {ed.bullets?.length ? (
          <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
            {ed.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        ) : null}
      </div>
    ))}
  </div>
</Section>


    {/* CERTIFICATES */}
    <Section id="certificates" title="Certificates" variant="b">
      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((c) => (
          <article key={c.title} className="rounded-2xl border bg-white shadow-sm overflow-hidden">
            {/* Preview grande clickeable */}
            <button
              type="button"
              onClick={() => setCertPreview(c)}
              className="group relative aspect-[16/11] w-full bg-slate-50 overflow-hidden cursor-zoom-in"
              aria-label={`Abrir ${c.title}`}
            >
              <img
                src={c.type === "image" ? c.file : (c.thumbnail ?? c.file)}
                alt={c.title}
                className="h-full w-full object-contain transition-transform duration-300 ease-out
                          group-hover:scale-105 group-active:scale-[.98]"
                loading="lazy"
              />
              {/* Badge del emisor */}
              <span className="absolute left-3 top-3 text-[11px] font-medium rounded-full px-2.5 py-1 bg-black/70 text-white uppercase tracking-wide">
                {c.issuer}
              </span>
            </button>

            {/* Info + botones */}
            <div className="p-5">
              <h3 className="text-base font-semibold">{c.title}</h3>
              {c.date && <p className="mt-1 text-sm text-slate-600">{c.date}</p>}

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={c.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl
                            bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Ver
                </a>
                {c.credentialUrl && (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl
                              bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    Credencial
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>

    {certPreview && (
      <div
        className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={() => setCertPreview(null)}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="relative max-w-5xl w-full"
          onClick={(e) => e.stopPropagation()} // evitar cierre al click dentro
        >
          <button
            onClick={() => setCertPreview(null)}
            className="absolute -top-3 -right-3 rounded-full bg-white text-slate-900 w-9 h-9 shadow
                      hover:opacity-90"
            aria-label="Cerrar"
          >
            ×
          </button>
          <img
            src={certPreview.type === "image" ? certPreview.file : (certPreview.thumbnail ?? certPreview.file)}
            alt={certPreview.title}
            className="w-full max-h-[80vh] object-contain rounded-lg bg-white"
          />
          <div className="mt-3 text-center text-sm text-white/90">
            {certPreview.title} — {certPreview.issuer}
          </div>
        </div>
      </div>
    )}
 

{/* CONTACT */}
<Section id="contact" title="Contact" variant="a">
  <div className="text-center max-w-3xl mx-auto">
    <h3 className="text-3xl font-extrabold tracking-tight text-slate-700">
      Let’s Work Together
    </h3>
    <p className="mt-3 text-slate-600">
      ¿Tenés un proyecto en mente? Estoy disponible para trabajo freelance y colaboraciones.
    </p>

    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      {/* Botón Email (mailto con subject/body) */}
      <a
        href={`mailto:lucasconfa7.lc@gmail.com?subject=${encodeURIComponent("Consulta - Portfolio")}&body=${encodeURIComponent("Hola Lucas, te escribo desde tu portfolio para...")}`}
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5
                   bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow
                   hover:opacity-95"
      >
        <Mail className="h-4 w-4" /> Email me
      </a>

      {/* Botón LinkedIn */}
      <a
        href="https://www.linkedin.com/in/lucas-confalonieri/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5
                   border border-slate-300 text-slate-800 hover:bg-slate-50"
      >
        <Linkedin className="h-4 w-4" /> Connect on LinkedIn
      </a>
    </div>
  </div>

  {/* Formulario para enviar mensaje (sin backend, usando FormSubmit) */}
  <form
    action="https://formsubmit.co/lucasconfa7.lc@gmail.com"
    method="POST"
    className="mt-10 max-w-3xl mx-auto rounded-2xl border bg-white p-6 shadow-sm"
  >
    <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />
    <input type="hidden" name="_captcha" value="false" />

    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">Nombre</label>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="tu@correo.com"
        />
      </div>
    </div>

    <div className="mt-4">
      <label className="block text-sm font-medium text-slate-700">Mensaje</label>
      <textarea
        name="message"
        required
        rows={5}
        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-emerald-500"
        placeholder="Contame brevemente sobre tu proyecto o consulta…"
      />
    </div>

    <div className="mt-5 flex items-center justify-between">
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5
                   bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow
                   hover:opacity-95"
      >
        Enviar mensaje
      </button>
    </div>
  </form>
</Section>


      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Lucas Confalonieri — Portfolio</footer>
    </div>
  );
}
