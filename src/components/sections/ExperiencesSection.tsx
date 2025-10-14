"use client";
import Section from "@/components/Section";
import { experience } from "@/data/experiences";
import { useI18n } from "@/i18n";
import { Briefcase, MapPin } from "lucide-react";
import Image from "next/image";

const MODE_LABEL = {
  es: { "remote": "Remoto", "hybrid": "Híbrido", "onsite": "Presencial", "part-time": "Part-time", "full-time": "Full-time" },
  en: { "remote": "Remote", "hybrid": "Hybrid", "onsite": "On-site", "part-time": "Part-time", "full-time": "Full-time" },
} as const;

export default function ExperiencesSection() {
  const { t, lang } = useI18n();

  return (
    <Section id="experiences" title={t("experiences.title")} variant="b">
      <div className="space-y-4">
        {experience.map((e) => (
          <div key={`${e.company}-${e.role[lang]}`} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-start gap-3">
                  <div className="shrink-0">
                    {e.logo ? (
                      <Image
                        src={`/${e.logo}`}
                        alt={e.company}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-md object-contain border bg-white"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-md border bg-slate-50 flex items-center justify-center text-slate-400">
                        <Briefcase className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{e.role[lang]}</h3>
                    <p className="text-slate-600">{e.company}</p>
                  </div>
                </div>

                <p className="mt-1 text-sm text-slate-500 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {e.location} {e.mode ? `· ${MODE_LABEL[lang][e.mode]}` : ""}
                </p>
              </div>

              {/* fecha: visible sólo en >=sm */}
              <span className="hidden sm:block text-sm text-slate-500 whitespace-nowrap">{e.period[lang]}</span>
            </div>

            {/* fecha para mobile */}
            <p className="sm:hidden mt-2 text-xs text-slate-500">{e.period[lang]}</p>

            {e.platforms?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {e.platforms.map((p) => (
                  <span key={p} className="text-[11px] rounded-full border px-2 py-1 text-slate-700">
                    {p}
                  </span>
                ))}
              </div>
            ) : null}

            <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
              {e.bullets.map((b, i) => (
                <li key={i}>{b[lang]}</li>
              ))}
            </ul>

            {e.tools?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {e.tools.map((t) => (
                  <span key={t} className="text-[11px] rounded-full border px-2 py-1 text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
