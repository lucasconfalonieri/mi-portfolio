"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useI18n } from "@/i18n";

export default function Header() {
  const { lang, setLang, t } = useI18n();
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

  return (
<header
  className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
    scrolled
      ? "backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200"
      : "bg-transparent"
  }`}
>
  <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 h-16 flex items-center">
    {/* Marca */}
    <a
      href="#home"
      className={`mr-3 shrink-0 font-semibold tracking-tight ${headerText}`}
    >
      LUCAS CONFALONIERI
    </a>

    {/* NAV – centrado, sin wrap, con scroll horizontal si no entra */}
    <nav
      className={`flex-1 hidden md:flex items-center justify-center overflow-x-auto whitespace-nowrap no-scrollbar
                  gap-4 md:gap-6 lg:gap-8 text-[13px] md:text-sm ${headerText}`}
    >
      <a href="#home" className="hover:underline">{t("nav.home")}</a>
      <a href="#about" className="hover:underline">{t("nav.about")}</a>
      <a href="#knowledge" className="hover:underline">{t("nav.knowledge")}</a>
      <a href="#projects" className="hover:underline">{t("nav.projects")}</a>
      <a href="#experiences" className="hover:underline">{t("nav.experiences")}</a>
      <a href="#education" className="hover:underline">{t("nav.education")}</a>
      <a href="#certificates" className="hover:underline">{t("nav.certificates")}</a>
      <a href="#contact" className="hover:underline">{t("nav.contact")}</a>
    </nav>

    {/* Idioma + iconos (no se encogen) */}
    <div className="ml-3 shrink-0 flex items-center gap-2 sm:gap-3">
      {/* ES/EN toggle */}
      <div
        className={`flex overflow-hidden rounded-xl border ${
          scrolled ? "border-slate-300" : "border-white/60"
        }`}
        role="group"
        aria-label="Language"
      >
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

      {/* Iconos sociales */}
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


  );
}
