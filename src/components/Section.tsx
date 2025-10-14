import React from "react";

type Props = {
  id: string;
  title?: string;
  hideTitle?: boolean;
  variant?: "a" | "b";
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  hideTitle = false,
  variant = "a",
  children,
}: Props) {
  return (
    <section id={id} className={variant === "a" ? "bg-white" : "bg-green-100"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {!hideTitle && title ? (
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
