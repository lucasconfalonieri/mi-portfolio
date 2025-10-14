"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Download } from "lucide-react";
import { useI18n } from "@/i18n";

export default function Hero() {
  const { t } = useI18n();
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section id="home" className="relative isolate overflow-hidden min-h-screen flex items-center">
      <motion.div
        className="absolute inset-0 -z-10 bg-cover bg-center will-change-transform"
        style={{ y: yBg, backgroundImage: "url('/hero-bg2.jpg')" }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-black/20" aria-hidden />
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-40 -z-10 bg-gradient-to-b from-transparent to-white"
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-widest text-white/90">
                {t("hero.role")}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2 text-white">
                Lucas Confalonieri
              </h1>
              <p className="mt-2 text-lg text-white/90">{t("hero.subtitle")}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/70 text-white px-4 py-2 bg-white/5 hover:bg-white/10"
                >
                  <Code2 className="h-4 w-4" /> {t("hero.viewProjects")}
                </a>
                <a
                  href="/CV_LUCAS_CONFALONIERI.pdf"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 px-4 py-2 hover:opacity-95"
                >
                  <Download className="h-4 w-4" /> {t("hero.downloadCV")}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-white/90"
      >
        ▾
      </a>
    </section>
  );
}
