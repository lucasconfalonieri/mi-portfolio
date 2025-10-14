"use client";
import { useEffect, useState } from "react";
import Section from "@/components/Section";
import { certificates } from "@/data/certificates";
import { useI18n } from "@/i18n";

export default function CertificatesSection() {
  const { t, lang } = useI18n();
  const [preview, setPreview] = useState<typeof certificates[number] | null>(null);
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <>
      <Section id="certificates" title={t("certificates.title")} variant="b">
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((c) => (
            <article key={c.title.en} className="rounded-2xl border bg-white shadow-sm overflow-hidden">
              <button
                type="button"
                onClick={() => setPreview(c)}
                className="group relative aspect-[16/11] w-full bg-slate-50 overflow-hidden cursor-zoom-in"
                aria-label={`Open ${c.title[lang]}`}
              >
                <img
                  src={c.type === "image" ? c.file : (c.thumbnail ?? c.file)}
                  alt={c.title[lang]}
                  className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-[.98]"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 text-[11px] font-medium rounded-full px-2.5 py-1 bg-black/70 text-white uppercase tracking-wide">
                  {c.issuer}
                </span>
              </button>

              <div className="p-5">
                <h3 className="text-base font-semibold">{c.title[lang]}</h3>
                {c.date && <p className="mt-1 text-sm text-slate-600">{c.date}</p>}

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    {t("certificates.view")}
                  </a>
                  {c.credentialUrl && (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      {t("certificates.credential")}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {preview && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreview(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPreview(null)}
              className="absolute -top-3 -right-3 rounded-full bg-white text-slate-900 w-9 h-9 shadow hover:opacity-90"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={preview.type === "image" ? preview.file : (preview.thumbnail ?? preview.file)}
              alt={preview.title[lang]}
              className="w-full max-h-[80vh] object-contain rounded-lg bg-white"
            />
            <div className="mt-3 text-center text-sm text-white/90">
              {preview.title[lang]} — {preview.issuer}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
