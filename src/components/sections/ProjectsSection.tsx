"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, FileText, PlayCircle } from "lucide-react";
import Section from "@/components/Section";
import { useI18n } from "@/i18n";
import { projects } from "@/data/projects";
import { Category } from "@/types/content";

export default function ProjectsSection() {
  const { t, lang } = useI18n();
  const [activeFilter, setActiveFilter] = useState<"all" | Category>("all");

  return (
    <Section id="projects" title={t("projects.title")} variant="a">
      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {(["all", "web", "mobile", "tv", "ai", "QA"] as const).map((key) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              activeFilter === key
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {t(`projects.filters.${key}`)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(activeFilter === "all"
          ? projects
          : projects.filter((p) => p.categories.includes(activeFilter))
        ).map((p) => {
          const isVideo = /\.mp4$|\.webm$/i.test(p.media);
          const title = typeof p.title === "string" ? p.title : p.title[lang];
          const desc =
            typeof p.description === "string" ? p.description : p.description[lang];

          return (
            <motion.article
              key={`${title}-${p.media}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="group rounded-2xl border bg-white overflow-hidden shadow-sm flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {isVideo ? (
                  <video src={p.media} className="h-full w-full object-cover" autoPlay muted loop playsInline />
                ) : (
                  <img
                    src={p.media}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                  {p.categories.map((c) => (
                    <span key={c} className="text-[11px] font-medium rounded-full px-2.5 py-1 bg-black/70 text-white uppercase tracking-wide">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 flex-1">{desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] rounded-full border px-2 py-1 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
                    >
                      <ExternalLink className="h-4 w-4" /> {t("projects.buttons.demo")}
                    </a>
                  )}
                  {p.deploy && (
                    <a
                      href={p.deploy}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800"
                    >
                      <Code2 className="h-4 w-4" /> {t("projects.buttons.deploy")}
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800"
                    >
                      <Code2 className="h-4 w-4" /> {t("projects.buttons.code")}
                    </a>
                  )}
                  {p.doc && (
                    <a
                      href={p.doc}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      <FileText className="h-4 w-4" /> {t("projects.buttons.doc")}
                    </a>
                  )}
                  {p.content && (
                    <a
                      href={p.content}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-full bg-red-600 text-white shadow-sm ring-1 ring-red-600/20 hover:bg-red-700 hover:shadow transition"
                    >
                      <PlayCircle className="h-4 w-4" /> {t("projects.buttons.content")}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
