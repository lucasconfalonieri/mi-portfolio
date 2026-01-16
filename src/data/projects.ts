import { Project } from "@/types/content";

export const projects: Project[] = [
  {
    title: {
      es: "Futbolero - Ranking y estadísticas de fútbol entre amigos",
      en: "Futbolero - Soccer ranking & stats app for friends",
    },
    description: {
      es: "Web app para centralizar y visualizar estadísticas de una liga informal: tabla de posiciones, historial de partidos, head-to-head entre jugadores y perfiles individuales.",
      en: "Web app to centralize and view informal league stats: standings table, match history, head-to-head comparisons, and individual player profiles.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase Auth", "Firestore", "Vercel"],
    categories: ["web"],
    media: "/futbolero.gif",
    demo: "https://futbolero-alfin.vercel.app/",
    repo: "https://github.com/lucasconfalonieri/fut5-amigos",
  },
  {
    title: {
      es: "Mascoteando - Plataforma social para dueños de mascotas",
      en: "Mascoteando - Social platform for pet owners",
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
      es: "Mantina - Plataforma de material de estudio",
      en: "Mantina - Study material platform",
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
      es: "Psicóloga MVC - Landing Page",
      en: "Psychologist MVC - Landing Page",
    },
    description: {
      es: "Landing page moderna y accesible para una psicóloga, con identidad visual propia (paleta, tipografías y logotipo), foco en conversión vía WhatsApp y contenido escaneable (servicios, enfoque, FAQs, testimonios y legales). Diseño responsive, limpio y rápido, optimizado para SEO y performance.",
      en: "Modern and accessible landing page for a psychologist, with its own visual identity (palette, fonts and logo), focus on conversion via WhatsApp and scannable content (services, approach, frequently asked questions, testimonials and legal). Responsive, clean and fast design, optimized for SEO and performance.",
    },
    tags: ["Next.js", "Tailwind", "TypeScript", "Vercel", "WhatsApp"],
    categories: ["web"],
    media: "/landing.gif",
    demo: "https://psico-mv-confalonieri.vercel.app/",
    repo: "https://github.com/lucasconfalonieri/landing-psicologa",
  },
  {
    title: {
      es: "Audiestimulos - Rehabilitación auditiva (implantes cocleares)",
      en: "Audiestimulos - Auditory rehabilitation (cochlear implants)",
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
    demo: "https://castgestion-qa.desarrollosnea.com/",
    doc: "https://docs.google.com/document/d/1k5GNt04K95fv3lc4VgcEB1efevX3CLAQ/edit?usp=sharing&ouid=102317204902453230079&rtpof=true&sd=true",
  },
  /*
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
  */
  {
    title: {
      es: "Tecnicar - Cronometraje de carreras",
      en: "Tecnicar - Race time tracking",
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
      es: "QA Automation - InboxVip",
      en: "QA Automation - InboxVip",
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