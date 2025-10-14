"use client";
import Section from "@/components/Section";
import { educationItems } from "@/data/education";
import { useI18n } from "@/i18n";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import { Lang } from "@/types/content";

function pickLocalized(value: string | Record<Lang, string>, lang: Lang) {
  return typeof value === "string" ? value : value[lang];
}

export default function EducationSection() {
  const { t, lang } = useI18n();

  return (
    <Section id="education" title={t("education.title")} variant="a">
      <div className="space-y-4">
        {educationItems.map((ed) => (
          <div key={ed.institution} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  {ed.logo ? (
                    <Image
                      src={`/${ed.logo}`}
                      alt={ed.institution}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-md object-contain border bg-white"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-md border bg-slate-50 flex items-center justify-center text-slate-400">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{ed.degree[lang]}</h3>
                  {ed.institutionUrl ? (
                    <a href={ed.institutionUrl} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                      {ed.institution}
                    </a>
                  ) : (
                    <p className="text-slate-600">{ed.institution}</p>
                  )}
                  {ed.location && (
                    <p className="mt-1 text-sm text-slate-500 flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> {pickLocalized(ed.location, lang)}
                    </p>
                  )}
                </div>
              </div>

              <span className="text-sm text-slate-500 whitespace-nowrap">{ed.period[lang]}</span>
            </div>

            {ed.bullets?.length ? (
              <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
                {ed.bullets.map((b, i) => (
                  <li key={i}>{b[lang]}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
