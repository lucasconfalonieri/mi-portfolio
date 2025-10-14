"use client";

import React from "react";
import { useI18n } from "@/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/sections/AboutSection";
import KnowledgeSection from "@/components/sections/KnowledgeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Portfolio() {
  const {footer} = useI18n();

  return (
    <div className="min-h-screen text-slate-900 scroll-smooth bg-white">
      <Header />
    
      <Hero />

      <AboutSection />

      <KnowledgeSection />

      <ProjectsSection />

      <ExperiencesSection />

      <EducationSection />

      <CertificatesSection />

      <ContactSection />

      <footer className="py-10 text-center text-sm text-slate-500">{footer(new Date().getFullYear())}</footer>
    </div>
  );
}
