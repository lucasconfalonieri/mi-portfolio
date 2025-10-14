const es = {
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
      rest1:
        "con +3 años participando en proyectos con clientes reales y experiencia laboral en desarrollo y testing de software.",
      techBefore: "Trabajé con tecnologías como",
      techAfter: "e integré soluciones en",
      finalBefore: "También tuve oportunidades de desarrollar para",
      finalAfter:
        "lo que me dio perspectiva sobre despliegues en dispositivos y optimización.",
    },
    and: "y",
    p2: "Quiero seguir creciendo en el área de ingeniería de software, profundizando en arquitecturas limpias, buenas prácticas de CI/CD, observabilidad y diseño de APIs y modelos de datos escalables. Me motiva aprender, documentar y trabajar en equipo para entregar valor medible.",
    p3: "En este portfolio vas a encontrar una recopilación de mis skills, proyectos e información personal. Si estás buscando alguien apasionado por brindar lo mejor de sí mismo, conectemos y creemos algo extraordinario juntos.",
  },
  knowledge: { title: "Conocimientos" },
  projects: {
    title: "Proyectos",
    filters: { all: "All", web: "Web", mobile: "Mobile", tv: "TV", ai: "AI / Machine Learning", QA: "QA / Testing" },
    buttons: { demo: "Demo", deploy: "Deploy", code: "Código", doc: "Documento", content: "Contenido" },
  },
  experiences: { title: "Experiencias" },
  education: { title: "Educación" },
  certificates: { title: "Certificados", view: "Ver", credential: "Credencial" },
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
    },
  },
  footer: (year: number) => `© ${year} Lucas Confalonieri — Portfolio`,
};
export default es;
