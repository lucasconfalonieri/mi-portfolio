"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import es from "./es";
import en from "./en";

export type Lang = "es" | "en";

const i18n = { es, en } as const;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string; 
  footer: (year: number) => string;  
};

export const I18nContext = createContext<Ctx | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "es" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", lang);
    }
  }, [lang]);

  const value = useMemo<Ctx>(() => {
    const t = (path: string): string => {
      const root = i18n[lang] as unknown as Record<string, unknown>;
      const val = path.split(".").reduce<unknown>((acc, key) => {
        if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
          return (acc as Record<string, unknown>)[key];
        }
        return undefined;
      }, root);

      return typeof val === "string" ? val : path;
    };

    const footer = (year: number) => {
      const dict = i18n[lang] as unknown as Record<string, unknown>;
      const fn = dict["footer"];
      return typeof fn === "function" ? (fn as (y: number) => string)(year) : `© ${year}`;
    };

    return { lang, setLang, t, footer };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
