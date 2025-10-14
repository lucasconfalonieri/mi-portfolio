"use client";

import { skillIcons } from "@/constants/skillIcons";
import Section from "../Section";

export default function KnowledgeSection() {

  return (
    <Section id="knowledge" title="Knowledge" variant="b">  
    <>
      {/* Si querés que el título lo maneje Section, no pongas nada aquí */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
          {skillIcons.map(({ label, Icon }) => (
            <li key={label} className="group text-center">
              <div
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl border bg-white/70 shadow-sm
                           flex items-center justify-center transition
                           hover:-translate-y-1 hover:shadow-md"
              >
                <Icon className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden />
              </div>
              <p className="mt-2 text-xs text-slate-600 group-hover:text-slate-800">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
    </Section>
  );
}
