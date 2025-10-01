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
} from "lucide-react";

const projects = [
  {
    title: "Mascoteando — Social para mascotas",
    description:
      "App híbrida (web + móvil) con Expo Router, Firebase y Supabase. Mapa de espacios verdes, alertas de mascotas perdidas, feed social y recomendaciones.",
    tags: ["Expo", "React Native", "Firebase", "Supabase"],
    link: "https://tusitio.com/mascoteando",
    repo: "https://github.com/TU-USUARIO/mascoteando",
  },
  {
    title: "Digital Signage Tizen",
    description:
      "Plataforma de gestión de slideshows para TVs Tizen: detección de dispositivos, playlists, editor de presentaciones, despliegue desde la nube.",
    tags: [".NET", "React", "Tizen", "AWS"],
    link: "https://tusitio.com/signage",
    repo: "https://github.com/TU-USUARIO/signage",
  },
  {
    title: "CNN Frutas/Verduras",
    description:
      "Clasificador con TensorFlow/Keras, dataset en S3 y panel Streamlit para pruebas y visualización de métricas.",
    tags: ["TensorFlow", "Keras", "AWS S3", "Streamlit"],
    link: "https://tusitio.com/cnn",
    repo: "https://github.com/TU-USUARIO/cnn-frutas",
  },
];

const experience = [
  {
    role: "Desarrollador Full‑Stack (Pasantía)",
    company: "EMPRESA/INSTITUCIÓN",
    period: "03/2024 – 12/2024",
    bullets: [
      "Diseñé e implementé editor de presentaciones con React y Tailwind.",
      "Integré autenticación (Supabase) y despliegue en Vercel/AWS.",
      "Mejoré tiempos de build y DX (CI/CD, linting, PR templates).",
    ],
  },
  {
    role: "Ayudante/Docente — API REST",
    company: "UNNE — Ingeniería en Sistemas",
    period: "2025",
    bullets: [
      "Planifiqué clase práctica con CRUD en Node/Express.",
      "Guié a estudiantes en pruebas de endpoints (GET/POST/PUT/DELETE).",
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
            <a href="#skills" className="hover:underline">Skills</a>
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
                <p className="mt-2 text-lg text-white/90">Full‑Stack & Data‑Driven Products</p>
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
            <a className="inline-flex items-center gap-2" href="https://github.com/lucasconfa7"><Github className="h-4 w-4" />lucasconfalonieri</a>
            <a className="inline-flex items-center gap-2" href="https://www.linkedin.com/in/lucas-confalonieri/"><Linkedin className="h-4 w-4" />lucas-confalonieri</a>
          </div>
        </div>
      </Section>

<Section id="skills" title="Skills" variant="b">
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
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full border px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl border hover:bg-slate-50">
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl border hover:bg-slate-50">
                  <Code2 className="h-4 w-4" /> Código
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="experiences" title="Experiences" variant="b">
        <div className="space-y-4">
          {experience.map((e) => (
            <div key={e.role} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2"><Briefcase className="h-5 w-5" /> {e.role}</h3>
                  <p className="text-slate-600">{e.company}</p>
                </div>
                <span className="text-sm text-slate-500 whitespace-nowrap">{e.period}</span>
              </div>
              <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
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
