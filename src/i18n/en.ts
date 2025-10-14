// /i18n/en.ts
const en = {
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
      rest1:
        "with 3+ years contributing to real-world client projects and professional experience in software development and testing.",
      techBefore: "I’ve worked with technologies such as",
      techAfter: "and I’ve integrated solutions on",
      finalBefore: "I’ve also had opportunities to build for",
      finalAfter:
        "which gave me perspective on device deployments and optimization.",
    },
    and: "and",
    p2: "I want to keep growing in software engineering, deepening in clean architectures, CI/CD best practices, observability, and the design of scalable APIs and data models. I’m driven by learning, documenting, and teamwork to deliver measurable value.",
    p3: "In this portfolio you’ll find a collection of my skills, projects, and personal information. If you’re looking for someone passionate about doing their best, let’s connect and create something great together.",
  },
  knowledge: { title: "Knowledge" },
  projects: {
    title: "Projects",
    filters: { all: "All", web: "Web", mobile: "Mobile", tv: "TV", ai: "AI / Machine Learning", QA: "QA / Testing" },
    buttons: { demo: "Live", deploy: "Deploy", code: "Code", doc: "Doc", content: "Video" },
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
      // 👇 placeholders
      namePh: "Your name",
      emailPh: "you@email.com",
      messagePh: "Tell me briefly about your project or question…",
    },
  },
  footer: (year: number) => `© ${year} Lucas Confalonieri — Portfolio`,
};
export default en;
