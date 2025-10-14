"use client";
import Section from "@/components/Section";
import {
  Linkedin,
  Mail,
} from "lucide-react";
import { useI18n } from "@/i18n";

export default function ContactSection() {
     const { t } = useI18n();

  return (
    <Section id="contact" title={t("nav.contact")} variant="a">
    <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-extrabold tracking-tight text-slate-700">
        Let’s Work Together
        </h3>
        <p className="mt-3 text-slate-600">
        {t("contact.subtitle")}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {/* Botón Email (mailto con subject/body) */}
        <a
            href={`mailto:lucasconfa7.lc@gmail.com?subject=${encodeURIComponent("Consulta - Portfolio")}&body=${encodeURIComponent("Hola Lucas, te escribo desde tu portfolio para...")}`}
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5
                    bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow
                    hover:opacity-95"
        >
            <Mail className="h-4 w-4" /> Email me
        </a>

        {/* Botón LinkedIn */}
        <a
            href="https://www.linkedin.com/in/lucas-confalonieri/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5
                    border border-slate-300 text-slate-800 hover:bg-slate-50"
        >
            <Linkedin className="h-4 w-4" /> Connect on LinkedIn
        </a>
        </div>
    </div>

    {/* Formulario para enviar mensaje (sin backend, usando FormSubmit) */}
    <form
        action="https://formsubmit.co/lucasconfa7.lc@gmail.com"
        method="POST"
        className="mt-10 max-w-3xl mx-auto rounded-2xl border bg-white p-6 shadow-sm"
    >
        <input type="hidden" name="_subject" value={t("contact.form.mailtoSubject")} />
        <input type="hidden" name="_captcha" value="false" />

        <div className="grid sm:grid-cols-2 gap-4">
        <div>
            <label className="block text-sm font-medium text-slate-700">{t("contact.form.name")}</label>
            <input
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2
                        focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder={t("contact.form.namePh")}
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-slate-700">{t("contact.form.email")}</label>
            <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2
                        focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder={t("contact.form.emailPh")}
            />
        </div>
        </div>

        <div className="mt-4">
        <label className="block text-sm font-medium text-slate-700">{t("contact.form.message")}</label>
        <textarea
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2
                    focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder={t("contact.form.messagePh")}
        />
        </div>

        <div className="mt-5 flex items-center justify-between">
        <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5
                    bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow
                    hover:opacity-95"
        >
            {t("contact.form.send")}
        </button>
        </div>
    </form>
    </Section>
  );
}