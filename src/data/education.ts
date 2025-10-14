import { EducationItem } from "@/types/content";

export const educationItems: EducationItem[] = [
  {
    degree: {
      es: "Ingeniería en Sistemas de Información",
      en: "Information Systems Engineering",
    },
    institution: "Universidad de la Cuenca del Plata (UCP)",
    period: { es: "2020 – 2024", en: "2020 – 2024" },
    location: "Corrientes, Argentina",
    logo: "cuenca.png",               
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