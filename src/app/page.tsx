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

type Lang = "es" | "en";

const i18n = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mi",
      knowledge: "Conocimientos",
      projects: "Proyectos",
      experiences: "Experiencias",
      education: "Educación",
      certificates: "Certificados",
      contact: "Contacto",
    },
    hero: {
      role: "Ingeniero en Sistemas",
      viewProjects: "Ver proyectos",
      downloadCV: "Descargar CV",
      subtitle: "Full-Stack Engineer · Testing & DB",
    },
    about: {
      hello: "Hola Mundo! soy",
      loc: "Corrientes, AR",
      ctaLinkedin: "lucas-confalonieri",
      role: "Ingeniero en Sistemas de Información",
      p1: {
        rest1: "con +3 años participando en proyectos con clientes reales y experiencia laboral en desarrollo y testing de software.",
        techBefore: "Trabajé con tecnologías como",
        techAfter: "e integré soluciones en",
        finalBefore: "También tuve oportunidades de desarrollar para",
        finalAfter: "lo que me dio perspectiva sobre despliegues en dispositivos y optimización."
      },
      and: "y",
      p2: "Quiero seguir creciendo en el área de ingeniería de software, profundizando en arquitecturas limpias, buenas prácticas de CI/CD, observabilidad y diseño de APIs y modelos de datos escalables. Me motiva aprender, documentar y trabajar en equipo para entregar valor medible.",
      p3: "En este portfolio vas a encontrar una recopilación de mis skills, proyectos e información personal. Si estás buscando alguien apasionado por brindar lo mejor de sí mismo, conectemos y creemos algo extraordinario juntos."
    },
    knowledge: { title: "Conocimientos" },
    projects: {
      title: "Proyectos",
      filters: {
        all: "All",
        web: "Web",
        mobile: "Mobile",
        tv: "TV",
        ai: "AI / Machine Learning",
        QA: "QA / Testing",
      },
      buttons: {
        demo: "Demo",
        deploy: "Deploy",
        code: "Código",
        doc: "Documento",
        content: "Contenido",
      },
    },
    experiences: { title: "Experiencias" },
    education: { title: "Educación" },
    certificates: { title: "Certificados", view: "Ver", credential: "Credencial" },
// dentro de i18n.es.contact
    contact: {
      title: "Let’s Work Together",
      subtitle: "¿Querés charlar sobre un proyecto, oportunidad o colaboración? Escribime:",
      email: "Email me",
      linkedin: "Connect on LinkedIn",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        send: "Enviar mensaje",
        namePh: "Tu nombre",
        emailPh: "tu@correo.com",
        messagePh: "Contame brevemente sobre tu proyecto o consulta…",
        mailtoSubject: "Consulta - Portfolio",
        mailtoBody: "Hola Lucas, te escribo desde tu portfolio para..."
      },
    },
    footer: (year: number) => `© ${year} Lucas Confalonieri — Portfolio`,
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      knowledge: "Knowledge",
      projects: "Projects",
      experiences: "Experiences",
      education: "Education",
      certificates: "Certificates",
      contact: "Contact",
    },
    hero: {
      role: "Information Systems Engineer",
      viewProjects: "View projects",
      downloadCV: "Download CV/Resume",
      subtitle: "Full-Stack Engineer · Testing & DB",
    },
    about: {
      hello: "Hello World! I’m",
      loc: "Corrientes, AR",
      ctaLinkedin: "lucas-confalonieri",
      role: "Information Systems Engineer",
      p1: {
        rest1: "with 3+ years contributing to real-world client projects and professional experience in software development and testing.",
        techBefore: "I’ve worked with technologies such as",
        techAfter: "and I’ve integrated solutions on",
        finalBefore: "I’ve also had opportunities to build for",
        finalAfter: "which gave me perspective on device deployments and optimization."
      },
      and: "and",
      p2: "I want to keep growing in software engineering, deepening in clean architectures, CI/CD best practices, observability, and the design of scalable APIs and data models. I’m driven by learning, documenting, and teamwork to deliver measurable value.",
      p3: "In this portfolio you’ll find a collection of my skills, projects, and personal information. If you’re looking for someone passionate about doing their best, let’s connect and create something great together."
    },
    knowledge: { title: "Knowledge" },
    projects: {
      title: "Projects",
      filters: {
        all: "All",
        web: "Web",
        mobile: "Mobile",
        tv: "TV",
        ai: "AI / Machine Learning",
        QA: "QA / Testing",
      },
      buttons: {
        demo: "Live",
        deploy: "Deploy",
        code: "Code",
        doc: "Doc",
        content: "Video",
      },
    },
    experiences: { title: "Experiences" },
    education: { title: "Education" },
    certificates: { title: "Certificates", view: "View", credential: "Credential" },
    contact: {
      title: "Let’s Work Together",
      subtitle: "Got a project in mind? I’m open to opportunities and collaborations.",
      email: "Email me",
      linkedin: "Connect on LinkedIn",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send message",
        namePh: "Your name",
        emailPh: "you@email.com",
        messagePh: "Tell me briefly about your project or question…",
        mailtoSubject: "Inquiry - Portfolio",
        mailtoBody: "Hi Lucas, I’m writing from your portfolio about..."
      },
    },
    footer: (year: number) => `© ${year} Lucas Confalonieri — Portfolio`,
  },
} as const;

function getBrowserLang(): Lang {
  if (typeof navigator === "undefined") return "es";
  const v = navigator.language?.toLowerCase() || "";
  return v.startsWith("en") ? "en" : "es";
}

function useLang() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "es";
    return (localStorage.getItem("lang") as Lang) || getBrowserLang();
  });
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);
return {
  lang,
  setLang,
  t: (path: string): string => {
    const val = path.split(".").reduce<unknown>((acc, key) => {
      if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, i18n[lang] as unknown);
    return typeof val === "string" ? val : path;
  },
};
}

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

type Localized = { es: string; en: string };

type Project = {
  title: Localized;
  description: Localized;
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
    title: {
      es: "Mascoteando — Plataforma social para dueños de mascotas",
      en: "Mascoteando — Social platform for pet owners",
    },
    description: {
      es: "App híbrida (Expo) con mapa interactivo, alertas en tiempo real y feed social.",
      en: "Hybrid app (Expo) featuring an interactive map, real-time alerts for lost pets, and a social feed.",
    },
    tags: ["Expo", "React Native", "Firebase", "Embeddings", "Google Maps API"],
    categories: ["mobile", "web", "ai"],
    media: "/mascoteando.gif",
    demo: "https://app-mascoteando.vercel.app",
    repo: "https://github.com/lucasconfalonieri/app-proyecto-final",
    doc: "https://docs.google.com/document/d/1rcLdqpwaDHkSJX4TS1PLAWP9MHPisbgaev53Q6NbxP8/edit?usp=sharing",
  },
  {
    title: {
      es: "Digital Signage Tizen",
      en: "Digital Signage Tizen",
    },
    description: {
      es: "Gestión de slideshows para TVs Tizen: detección, playlists, editor, despliegue.",
      en: "Slideshow management for Tizen TVs: device discovery, playlists, editor, and cloud deployment.",
    },
    tags: [".NET", "React", "Tizen"],
    categories: ["tv", "web"],
    media: "/TVCast.gif",
    doc: "https://docs.google.com/document/d/1k5GNt04K95fv3lc4VgcEB1efevX3CLAQ/edit?usp=sharing&ouid=102317204902453230079&rtpof=true&sd=true",
  },
  {
    title: {
      es: "CNN Frutas/Verduras",
      en: "Fruits/Vegetables CNN Classifier",
    },
    description: {
      es: "Clasificador con TensorFlow/Keras + panel Streamlit para métricas.",
      en: "Image classifier with TensorFlow/Keras plus a Streamlit dashboard for metrics.",
    },
    tags: ["TensorFlow", "Keras", "AWS S3", "AWS EC2", "Streamlit", "Terraform"],
    categories: ["ai"],
    media: "/ClasiFrutVerd.gif",
    deploy: "https://github.com/lucasconfalonieri/Terraform-AWS-CNN",
    repo: "https://github.com/lucasconfalonieri/Frut-Verd-CNN",
    doc: "https://docs.google.com/document/d/1IJ4iTGyfCEUvp-PzusfQkdrkMduNJEFFzdRm8XgCHyc/edit?usp=sharing",
  },
  {
    title: {
      es: "Audiestimulos — Rehabilitación auditiva (implantes cocleares)",
      en: "Audiestimulos — Auditory rehabilitation (cochlear implants)",
    },
    description: {
      es: "App web con programa de 5 etapas: imágenes, sonidos y tests de evolución.",
      en: "Web app with a 5-stage program: images, sounds, and progress tests.",
    },
    tags: ["Svelte", "Node.js", "MySQL", "Vercel"],
    categories: ["web"],
    media: "/Audiestimulos.gif",
    demo: "https://herramienta-audiestimulos.vercel.app/",
    repo: "https://github.com/lucasconfalonieri/Audiestimulos",
    doc: "https://docs.google.com/document/d/1wvyCRsayDzSJ7Yoa8TIiliox70YUsBeIc-QfdCIsLMg/edit?usp=sharing",
  },
  {
    title: {
      es: "Mantina — Plataforma de material de estudio",
      en: "Mantina — Study material platform",
    },
    description: {
      es: "Gestión y distribución de material para alumnos de pilotaje; backoffice para PDFs y usuarios.",
      en: "Manage and distribute materials for pilot students; admin backoffice for PDFs and users.",
    },
    tags: ["React", "Node.js", "MySQL", "cPanel", "VPS Linux (AlmaLinux)"],
    categories: ["web"],
    media: "/Mantina.gif",
    demo: "https://mantina.com",
    repo: "https://github.com/lucasconfalonieri/Mantina",
  },
  {
    title: {
      es: "NeuroNEApp",
      en: "NeuroNEApp",
    },
    description: {
      es: "PWA con juegos interactivos para entrenar habilidades cognitivas en un centro neurológico.",
      en: "PWA with interactive games to train cognitive skills for a neurology center.",
    },
    tags: ["Next.js", "Supabase", "PostgreSQL", "Cloudfare Pages", "Prisma"],
    categories: ["web"],
    media: "/NeuroNEA.gif",
  },
  {
    title: {
      es: "Tecnicar — Cronometraje de carreras",
      en: "Tecnicar — Race time tracking",
    },
    description: {
      es: "App web para registrar/visualizar tiempos del evento Tecnicar 2022; panel para jueces y vista pública.",
      en: "Web app to record/display race times for Tecnicar 2022; judges’ admin panel and public view.",
    },
    tags: ["Node.js", "Svelte", "MySQL", "Vercel"],
    categories: ["web"],
    media: "/Tecnicar.jpg",
    demo: "http://tecnicar.mec.gob.ar/",
    repo: "https://github.com/cuencadelplata/cronometraje-carrera-integrador-2022",
    doc: "https://docs.google.com/document/d/1ULqGBsSmMd0L-r_utbjpnS5Caio5apPvOnfAe_5iveI/edit?usp=sharing",
    content: "https://www.youtube.com/watch?v=psZDonPfHK0",
  },
  {
    title: {
      es: "Landing Psicóloga",
      en: "Psychologist Landing Page",
    },
    description: {
      es: "Landing estática Next.js + Tailwind optimizada con Lighthouse 95+.",
      en: "Static landing on Next.js + Tailwind, Lighthouse score 95+.",
    },
    tags: ["Next.js", "Tailwind", "SEO"],
    categories: ["web"],
    media: "/landing.jpg",
    demo: "https://tusitio.com/landing",
    repo: "https://github.com/TU-USUARIO/landing",
  },
  {
    title: {
      es: "QA Automation — InboxVip",
      en: "QA Automation — InboxVip",
    },
    description: {
      es: "Automatización de pruebas funcionales para una plataforma social, cubriendo flujos web y mobile.",
      en: "Functional test automation for a social platform, covering web and mobile flows.",
    },
    tags: ["Selenium", "Maven", "TestNg", "Chromium", "Appium"],
    categories: ["QA"],
    media: "/inboxvip.jpg",
    repo: "https://github.com/12juam12/automation-osos",
    doc: "https://docs.google.com/spreadsheets/d/19Dz0sYT0QhLjUToQ-qJFCzuTnnoug3YkcQfYyWJDr3Q/edit?usp=sharing",
  },
];

type ModeKey = "remote" | "hybrid" | "onsite" | "part-time" | "full-time";

type ExperienceItem = {
  role: Localized;
  company: string;
  period: Localized;
  location: string;
  mode?: ModeKey;
  bullets: Localized[];
  platforms?: string[];
  tools?: string[];
  logo?: string;
};

const MODE_LABEL: Record<Lang, Record<ModeKey, string>> = {
  es: {
    remote: "Remoto",
    hybrid: "Híbrido",
    onsite: "Presencial",
    "part-time": "Part-time",
    "full-time": "Full-time",
  },
  en: {
    remote: "Remote",
    hybrid: "Hybrid",
    onsite: "On-site",
    "part-time": "Part-time",
    "full-time": "Full-time",
  },
};

const experience: ExperienceItem[] = [
  {
    logo: "glitch.jpg",
    role: {
      es: "Software Development Engineer in Test",
      en: "Software Development Engineer in Test",
    },
    company: "GlitchCode",
    period: { es: "mar. 2023 – sep. 2025", en: "Mar 2023 – Sep 2025" },
    location: "Argentina",
    mode: "part-time",
    bullets: [
      {
        es: "Diseño, desarrollo y ejecución de pruebas automatizadas end-to-end.",
        en: "Design, develop and execute end-to-end automated tests.",
      },
      {
        es: "Pruebas de rendimiento y pruebas automatizadas de APIs (REST/SOAP).",
        en: "Performance testing and automated API tests (REST/SOAP).",
      },
      {
        es: "Configuración de pipelines de CI para suites de regresión.",
        en: "Configure CI pipelines for regression suites.",
      },
      {
        es: "Diseño y ejecución de casos de prueba, análisis de riesgos y reporte de bugs.",
        en: "Test case design & execution, risk analysis, and bug reporting.",
      },
      {
        es: "Elaboración de reportes de resultados y cobertura.",
        en: "Build reports on results and coverage.",
      },
    ],
    platforms: ["Web", "REST/SOAP", "Mobile"],
    tools: ["TestNG", "Appium", "Selenium", "Maven", "Git"],
  },
  {
    logo: "nea.jpg",
    role: {
      es: "Software Development — Área I+D",
      en: "Software Development — R&D Area",
    },
    company: "Desarrollos NEA",
    period: { es: "jun. 2024 – ene. 2025", en: "Jun 2024 – Jan 2025" },
    location: "Corrientes, Argentina",
    mode: "hybrid",
    bullets: [
      {
        es: "Desarrollo y mantenimiento de aplicaciones web con React y Node.js.",
        en: "Develop and maintain web applications with React and Node.js.",
      },
      {
        es: "Desarrollo para Tizen OS en TVs: detección de dispositivos y despliegue.",
        en: "Tizen OS development for TVs: device discovery and deployment.",
      },
      {
        es: "Desarrollo e integración de API; UI con Tailwind CSS.",
        en: "API development & integration; UI with Tailwind CSS.",
      },
      {
        es: "Research de nuevas tecnologías; generación de reportes técnicos.",
        en: "Research emerging technologies; produce technical reports.",
      },
    ],
    platforms: ["Web", "REST APIs", "Tizen OS"],
    tools: ["React", "Node.js", "Tailwind CSS", "SQL", "Git", "Teams", "Tizen Studio"],
  },
  {
    role: {
      es: "Software Developer — Proyectos Freelance",
      en: "Software Developer — Freelance Projects",
    },
    company: "Varios clientes",
    period: { es: "2022 – actualidad", en: "2022 – present" },
    location: "Remoto",
    mode: "remote",
    bullets: [
      {
        es: "Mantina (React/Node/MySQL) — plataforma de distribución de material.",
        en: "Mantina (React/Node/MySQL) — study material distribution platform.",
      },
      {
        es: "NeuroNEA (Next.js/Prisma/PostgreSQL/Supabase) — app web para rehabilitación neurológica.",
        en: "NeuroNEA (Next.js/Prisma/PostgreSQL/Supabase) — web app for neurological rehabilitation.",
      },
      {
        es: "Audiestímulos (Svelte/Node/MySQL) — app web para rehabilitación auditiva.",
        en: "Audiestimulos (Svelte/Node/MySQL) — web app for auditory rehabilitation.",
      },
      { es: "Landing psicóloga.", en: "Psychologist landing page." },
    ],
    platforms: ["Web", "Mobile"],
    tools: ["TypeScript", "React", "Node.js", "MySQL", "Supabase", "Svelte", "Prisma"],
  },
  {
    logo: "sierra.jpg",
    role: {
      es: "F&B Staff (Work & Travel)",
      en: "F&B Staff (Work & Travel)",
    },
    company: "Sierra-at-Tahoe Resort",
    period: { es: "(dic. 2023 – mar. 2024) · (dic. 2024 – mar. 2025)", en: "Dec 2023–Mar 2024 · Dec 2024–Mar 2025" },
    location: "Twin Bridges, California, USA",
    mode: "onsite",
    bullets: [
      { es: "Inglés profesional.", en: "Professional English." },
      { es: "Compañeros internacionales.", en: "International teammates." },
      {
        es: "Atención a clientes en entorno de alto flujo y trabajo en equipo.",
        en: "High-throughput customer service and teamwork environment.",
      },
    ],
  },
];


type EducationItem = {
  degree: Localized;
  institution: string;
  period: Localized;
  location?: Localized;
  logo?: string;
  institutionUrl?: string;
  bullets?: Localized[];
};


const educationItems: EducationItem[] = [
  {
    degree: {
      es: "Ingeniería en Sistemas de Información",
      en: "Information Systems Engineering",
    },
    institution: "Universidad de la Cuenca del Plata (UCP)",
    period: { es: "2020 – 2024", en: "2020 – 2024" },
    location: { es: "Corrientes, Argentina", en: "Corrientes, Argentina" },
    logo: "cuenca.png",                // /public/cuenca.png
    institutionUrl: "https://www.ucp.edu.ar/",
    bullets: [
      {
        es: "Carrera de grado (5 años).",
        en: "Undergraduate degree (5 years).",
      },
      {
        es: "Formación en ingeniería de software, gestión de proyectos, bases de datos, redes y sistemas operativos.",
        en: "Training in software engineering, project management, databases, networking, and operating systems.",
      },
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
  title: Localized | string;
  issuer: string;
  date?: string;
  file: string;           
  type: "image" | "pdf";
  thumbnail?: string;     
  credentialUrl?: string; 
};

const CERT_BTN = {
  es: { view: "Ver", credential: "Credencial" },
  en: { view: "View", credential: "Credential" },
} as const;


const certificates: CertificateItem[] = [
  {
    title: { es: "Ingeniería en Sistemas de Información", en: "Information Systems Engineering" },
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

  const { lang, setLang, t } = useLang();


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
          <a href="#home" className="hover:underline">{t("nav.home")}</a>
          <a href="#about" className="hover:underline">{t("nav.about")}</a>
          <a href="#knowledge" className="hover:underline">{t("nav.knowledge")}</a>
          <a href="#projects" className="hover:underline">{t("nav.projects")}</a>
          <a href="#experiences" className="hover:underline">{t("nav.experiences")}</a>
          <a href="#education" className="hover:underline">{t("nav.education")}</a>
          <a href="#certificates" className="hover:underline">{t("nav.certificates")}</a>
          <a href="#contact" className="hover:underline">{t("nav.contact")}</a>
        </nav>
        <div role="group" aria-label="Language" className="flex items-center">
          <div className={`ml-2 flex overflow-hidden rounded-xl border ${scrolled ? "border-slate-300" : "border-white/60"}`}>
            <button
              type="button"
              aria-pressed={lang === "es"}
              onClick={() => setLang("es")}
              className={`px-3 py-1.5 text-xs font-medium transition
                ${lang === "es"
                  ? "bg-slate-900 text-white"
                  : scrolled
                    ? "bg-white text-slate-700 hover:bg-slate-50"
                    : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              ES
            </button>
            <button
              type="button"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 text-xs font-medium transition border-l
                ${scrolled ? "border-slate-300" : "border-white/60"}
                ${lang === "en"
                  ? "bg-slate-900 text-white"
                  : scrolled
                    ? "bg-white text-slate-700 hover:bg-slate-50"
                    : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              EN
            </button>
          </div>
        </div>
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
          aria-hidden
        />
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
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm uppercase tracking-widest text-white/90">{t("hero.role")}</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2 text-white">
                  Lucas Confalonieri
                </h1>
                <p className="mt-2 text-lg text-white/90">{t("hero.subtitle")}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/70 text-white px-4 py-2 bg-white/5 hover:bg-white/10"
                  >
                    <Code2 className="h-4 w-4" /> {t("hero.viewProjects")}
                  </a>
                  <a
                    href="/CV_LUCAS_CONFALONIERI.pdf"
                    className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 px-4 py-2 hover:opacity-95"
                  >
                    <Download className="h-4 w-4" /> {t("hero.downloadCV")}
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
            {t("about.hello")} <span className="underline decoration-emerald-300 decoration-4 underline-offset-4">Lucas Confalonieri</span>
          </h2>
          <p className="mt-5 text-lg md:text-[16px] text-slate-700 max-w-3xl">
            <strong>{t("about.role")}</strong> {t("about.p1.rest1")}
            <br />
            {t("about.p1.techBefore")}{" "}
            <strong>Expo, TypeScript, Svelte, React, Node, SQL, Selenium, Terraform</strong>{" "}
            {t("about.p1.techAfter")} <strong>AWS</strong> {t("about.and")} <strong>Firebase</strong>.{" "}
            {t("about.p1.finalBefore")} <strong>Tizen OS</strong>, {t("about.p1.finalAfter")}
          </p>
          <p className="mt-3 text-lg md:text-[16px] text-slate-700 max-w-3xl">
            {t("about.p2")}
          </p>
          <p className="mt-3 text-lg md:text-[16px] text-slate-700 max-w-3xl">
            {t("about.p3")}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-700">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Corrientes, AR</span>
            <a className="inline-flex items-center gap-2 " href="mailto:lucasconfa7.lc@gmail.com"><Mail className="h-4 w-4" /> lucasconfa7.lc@gmail.com</a>
            <a className="inline-flex items-center gap-2" href="https://github.com/lucasconfalonieri"><Github className="h-4 w-4" />lucasconfalonieri</a>
            <a className="inline-flex items-center gap-2" href="https://www.linkedin.com/in/lucas-confalonieri/"><Linkedin className="h-4 w-4" />lucas-confalonieri</a>
          </div>
        </div>
      </Section>

<Section id="knowledge" title={t("knowledge.title")} variant="b">
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


<Section id="projects" title={t("projects.title")} variant="a">
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
      const titleStr = typeof p.title === "string" ? p.title : p.title[lang];
      return (
        <motion.article
          key={titleStr}
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
                alt={titleStr}
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
            <h3 className="text-base font-semibold">{p.title[lang]}</h3>
            <p className="mt-2 text-sm text-slate-600 flex-1">{p.description[lang]}</p>
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
                  <ExternalLink className="h-4 w-4" /> {t("projects.buttons.demo")}
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
                  <Code2 className="h-4 w-4" /> {t("projects.buttons.deploy")}
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
                  <Code2 className="h-4 w-4" /> {t("projects.buttons.code")}
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
                  <FileText className="h-4 w-4" /> {t("projects.buttons.doc")}
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
                  <PlayCircle className="h-4 w-4" /> {t("projects.buttons.content")}
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
<Section id="experiences" title={t("experiences.title")} variant="b">
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
            <h3 className="text-lg font-semibold">{e.role[lang]}</h3>
            <p className="text-slate-600">{e.company}</p>
          </div>
        </div>

            <p className="mt-1 text-sm text-slate-500 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {e.location} {e.mode ? `· ${MODE_LABEL[lang][e.mode]}` : ""}
            </p>
          </div>
          <span className="text-sm text-slate-500 whitespace-nowrap">{e.period[lang]}</span>
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
          <li key={i}>{b[lang]}</li>
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
<Section id="education" title={t("education.title")} variant="a">
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
              <h3 className="text-lg font-semibold">{ed.degree[lang]}</h3>
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
                  <MapPin className="h-4 w-4" /> {ed.location[lang]}
                </p>
              )}
            </div>
          </div>

          <span className="text-sm text-slate-500 whitespace-nowrap">{ed.period[lang]}</span>
        </div>

        {ed.bullets?.length ? (
          <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
            {ed.bullets.map((b, i) => (
              <li key={i}>{b[lang]}</li>
            ))}
          </ul>
        ) : null}
      </div>
    ))}
  </div>
</Section>


    {/* CERTIFICATES */}
    <Section id="certificates" title={t("certificates.title")} variant="b">
      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((c) => {
          const titleStr = typeof c.title === "string" ? c.title : c.title[lang];
          return (
            <article key={titleStr} className="rounded-2xl border bg-white shadow-sm overflow-hidden">
              <button
                type="button"
                onClick={() => setCertPreview(c)}
                className="group relative aspect-[16/11] w-full bg-slate-50 overflow-hidden cursor-zoom-in"
                aria-label={`Abrir ${titleStr}`}
              >
              <img
                src={c.type === "image" ? c.file : (c.thumbnail ?? c.file)}
                alt={titleStr}
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
              <h3 className="text-base font-semibold">{titleStr}</h3>
              {c.date && <p className="mt-1 text-sm text-slate-600">{c.date}</p>}

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={c.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl
                            bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  {CERT_BTN[lang].view}
                </a>
                {c.credentialUrl && (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl
                              bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    {CERT_BTN[lang].credential}
                  </a>
                )}
              </div>
            </div>
          </article>
        );
      })}
      </div>
    </Section>

    {certPreview && (() => {
      const previewTitle = typeof certPreview.title === "string" ? certPreview.title : certPreview.title[lang];
      return (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setCertPreview(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setCertPreview(null)}
              className="absolute -top-3 -right-3 rounded-full bg-white text-slate-900 w-9 h-9 shadow hover:opacity-90"
              aria-label="Cerrar"
            >
              ×
            </button>
            <img
              src={certPreview.type === "image" ? certPreview.file : (certPreview.thumbnail ?? certPreview.file)}
              alt={previewTitle}
              className="w-full max-h-[80vh] object-contain rounded-lg bg-white"
            />
            <div className="mt-3 text-center text-sm text-white/90">
              {previewTitle} — {certPreview.issuer}
            </div>
          </div>
        </div>
      );
    })()}
 

{/* CONTACT */}
<Section id="contact" title={t("nav.contact")} variant="a">
  <div className="text-center max-w-3xl mx-auto">
    <h3 className="text-3xl font-extrabold tracking-tight text-slate-700">
      Let’s Work Together
    </h3>
    <p className="mt-3 text-slate-600">
      {t("contact.subtitle")}
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
    <input type="hidden" name="_subject" value={t("contact.form.mailtoSubject")} />
    <input type="hidden" name="_captcha" value="false" />

    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">{t("contact.form.name")}</label>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder={t("contact.form.namePh")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">{t("contact.form.email")}</label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder={t("contact.form.emailPh")}
        />
      </div>
    </div>

    <div className="mt-4">
      <label className="block text-sm font-medium text-slate-700">{t("contact.form.message")}</label>
      <textarea
        name="message"
        required
        rows={5}
        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-emerald-500"
        placeholder={t("contact.form.messagePh")}
      />
    </div>

    <div className="mt-5 flex items-center justify-between">
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5
                   bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow
                   hover:opacity-95"
      >
        {t("contact.form.send")}
      </button>
    </div>
  </form>
</Section>


      <footer className="py-10 text-center text-sm text-slate-500">{i18n[lang].footer(new Date().getFullYear())}</footer>
    </div>
  );
}
