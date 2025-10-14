"use client";

import { MapPin, Github, Linkedin, Mail } from "lucide-react";
import { useI18n } from "@/i18n";
import Section from "../Section";

export default function AboutSection() {
  const { t } = useI18n();

  return (
    <Section id="about" hideTitle variant="a">
    <div className="rounded-xl border bg-white p-6 md:p-12 shadow-sm">
      <h2 className="text-3xl sm:text-4xl md:text-[28px] font-bold tracking-tight">
        {t("about.hello")}{" "}
        <span className="underline decoration-emerald-300 decoration-4 underline-offset-4">
          Lucas Confalonieri
        </span>
      </h2>

      {/* Párrafo 1 con negritas parciales */}
      <p className="mt-5 text-lg md:text-[16px] text-slate-700 max-w-3xl">
        <strong>{t("about.role")}</strong>{" "}
        {t("about.p1.rest1")}
        <br />
        {t("about.p1.techBefore")}{" "}
        <strong>Expo, TypeScript, Svelte, React, Node, SQL, Selenium, Terraform</strong>{" "}
        {t("about.p1.techAfter")} <strong>AWS</strong> {t("about.and")}{" "}
        <strong>Firebase.</strong> {t("about.p1.finalBefore")}{" "}
        <strong>Tizen OS</strong>, {t("about.p1.finalAfter")}
      </p>

      <p className="mt-3 text-lg md:text-[16px] text-slate-700 max-w-3xl">
        {t("about.p2")}
      </p>
      <p className="mt-3 text-lg md:text-[16px] text-slate-700 max-w-3xl">
        {t("about.p3")}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-700">
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4" /> {t("about.loc")}
        </span>
        <a className="inline-flex items-center gap-2" href="mailto:lucasconfa7.lc@gmail.com">
          <Mail className="h-4 w-4" /> lucasconfa7.lc@gmail.com
        </a>
        <a className="inline-flex items-center gap-2" href="https://github.com/lucasconfalonieri" target="_blank" rel="noreferrer">
          <Github className="h-4 w-4" /> lucasconfalonieri
        </a>
        <a className="inline-flex items-center gap-2" href="https://www.linkedin.com/in/lucas-confalonieri/" target="_blank" rel="noreferrer">
          <Linkedin className="h-4 w-4" /> {t("about.ctaLinkedin")}
        </a>
      </div>
    </div>
    </Section>
  );
}
