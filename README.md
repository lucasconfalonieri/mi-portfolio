Lucas Confalonieri — Portfolio

Live demo: lucasconfalonieri.vercel.app

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. It’s fully responsive, bilingual (ES/EN), and organized in modular sections.

✨ Features

Bilingual (ES/EN) with a simple dictionary-based i18n helper.

Modular sections: About, Knowledge, Projects (with tabs + GIF/video preview), Experiences (with logos + responsive dates), Education (with logo), Certificates (zoomable cards + modal), and Contact (buttons + working form).

Projects grid with filters (Web, Mobile, TV, AI / ML, QA) and multiple categories per project.

Media support per project: image, GIF, or video (.mp4 / .webm).

Certificates lightbox: zoom on hover, click to open modal, buttons for “View” and “Credential”.

Polished header: sticky, responsive spacing, no line wrapping, ES/EN toggle.

Accessible & lightweight: semantic HTML, keyboard-close on modal (ESC).

Deploy-ready for Vercel.

🧰 Tech Stack

Framework: Next.js 15 (App Router), React 18

Language: TypeScript

Styling: Tailwind CSS

Animations: Framer Motion

Icons: lucide-react, react-icons

Forms: FormSubmit
 (no backend needed)

📁 Project Structure
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    Section.tsx
    Header.tsx
    AboutSection.tsx
    KnowledgeSection.tsx
    ProjectsSection.tsx
    ExperiencesSection.tsx
    EducationSection.tsx
    CertificatesSection.tsx
    ContactSection.tsx
    CertificatesModal.tsx
  i18n/
    index.tsx           # I18nProvider, useI18n()
    dictionary.ts       # ES/EN dictionary
  types/
    content.ts          # Types for projects, experience, education, certificates, etc.
  content/
    content.ts          # Your data (projects, experience, skills, education, certificates)
public/
  logos/                # Company / University logos
  certificates/         # Certificate images/PDFs + thumbnails
  projects/             # Project media (jpg/png/webp/gif/mp4/webm)
  hero-bg2.jpg
  me.jpg


If you use different folders, just keep paths consistent with public/….

🚀 Getting Started
# 1) Clone
git clone https://github.com/<your-username>/mi-portfolio.git
cd mi-portfolio

# 2) Install
npm install

# 3) Run dev
npm run dev
# -> http://localhost:3000

# 4) Build & start
npm run build
npm run start

# Optional: type-check & lint
npm run typecheck
npm run lint

🌐 Internationalization (ES/EN)

Dictionary lives in src/i18n/dictionary.ts.

Provider + hook in src/i18n/index.tsx:

useI18n() returns { lang, setLang, t }.

t("path.to.key") reads a key from dictionary.

Language toggle is in the Header (ES/EN buttons). Active language is highlighted.

Example usage

const { t, lang } = useI18n();
<h2>{t("projects.title")}</h2>
<button onClick={() => setLang("en")}>EN</button>

🧩 Content Management

All portfolio content is centralized in src/content/content.ts and typed by src/types/content.ts.

Projects
type Category = "web" | "mobile" | "tv" | "ai" | "QA";

type Project = {
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  tags: string[];
  categories: Category[];         // multiple allowed
  media: string;                  // /public path; supports .gif/.jpg/.webp/.mp4/.webm
  demo?: string;
  deploy?: string;
  repo?: string;
  doc?: string;
  content?: string;               // e.g. YouTube video
};


Filtering works automatically by categories.

Media:

GIF/JPG/PNG → rendered as <img/>

MP4/WEBM → rendered as <video autoPlay muted loop playsInline/>

Place media in public/projects (or keep your current paths).

Experiences

Logos go in public/logos/….

Dates are localized with period: { es: string; en: string }.

Mode is translated via a small mapping (remote/hybrid/onsite/part-time/full-time).

Education

Add your degree (degree), institution, period, and optional logo + institutionUrl.

Certificates
type CertificateItem = {
  title: Record<Lang, string>;
  issuer: string;
  date?: string;
  file: string;               // image or pdf path in /public/certificates
  type: "image" | "pdf";
  thumbnail?: string;         // recommended for PDFs
  credentialUrl?: string;
};


Cards zoom on hover.

Clicking opens a modal preview (ESC closes).

Buttons use localized text (View / Credential).

Knowledge (Skills)

Icons come from react-icons / lucide-react.

Configure labels + icons in content.ts.
Example:

import { FaAws, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

export const skillIcons = [
  { label: "AWS", Icon: FaAws },
  { label: "TypeScript", Icon: BiLogoTypescript },
  { label: "React", Icon: FaReact },
  // ...
];

🧪 Useful Scripts
npm run dev        # start dev server
npm run build      # production build
npm run start      # run production
npm run lint       # eslint
npm run typecheck  # tsc --noEmit

☁️ Deploy (Vercel)

Push your repo to GitHub.

Import the project at vercel.com/new.

Framework preset: Next.js.

Build command: next build (default).

Output: .vercel/output (auto).

Set custom domain if desired.

Live demo reference: https://lucasconfalonieri.vercel.app

🧭 Conventions & Notes

Images: prefer .webp where possible for smaller sizes.

Accessibility: icons have aria-label, modal closes on ESC, buttons have clear labels.

Nav: items use whitespace-nowrap to prevent wrapping; the container may scroll horizontally on very small screens.

Contact form: uses FormSubmit by default. Replace the action email with your own or plug in your API later.

📌 Roadmap / Ideas

Analytics (Vercel Web Analytics or Plausible).

Dark mode.

CMS integration (Contentlayer, Sanity, Notion) to edit content without code.

OG image generator for better link previews.

Unit tests for i18n and components.

🤝 Contributing

PRs and suggestions are welcome. Please keep code consistent (TypeScript + Tailwind) and run npm run lint && npm run typecheck before committing.

📄 License

This project is open-source. You can publish it under MIT or your preferred license.
Add a LICENSE file if you want to make it explicit.

📬 Contact

Email: lucasconfa7.lc@gmail.com

LinkedIn: https://www.linkedin.com/in/lucas-confalonieri

GitHub: https://github.com/lucasconfalonieri

If you fork this repo, replace the links, media, and content in src/content/content.ts and you’ll be up and running!