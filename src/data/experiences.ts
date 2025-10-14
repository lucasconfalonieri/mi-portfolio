import { ExperienceItem } from "@/types/content";

export const experience: ExperienceItem[] = [
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