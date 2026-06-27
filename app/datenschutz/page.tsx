import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { datenschutz } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der biochemischen Gesundheitsberatung von Milva März.",
  robots: { index: false },
};

export default function DatenschutzPage() {
  const { responsible } = datenschutz;
  return (
    <section className="bg-[var(--color-cream)] pb-24 pt-32 md:pb-32 md:pt-44">
      <div className="container-x max-w-3xl">
        <Reveal>
          <Eyebrow>Rechtliches</Eyebrow>
          <h1 className="font-display mt-7 text-[2.4rem] leading-[1.06] sm:text-5xl">
            {datenschutz.title}
          </h1>
        </Reveal>

        {/* Sichtbarer Prüfungs-Hinweis (Platzhalter-Vorlage) */}
        <Reveal delay={80} className="mt-8 flex gap-4 rounded-[var(--radius-card)] border border-[var(--color-sage)]/45 bg-[var(--color-paper)] p-5 md:p-6">
          <span aria-hidden className="mt-0.5 text-xl text-[var(--color-sage-deep)]">
            ⓘ
          </span>
          <p className="text-sm text-[var(--color-ink-soft)]">Hinweis: {datenschutz.notice}</p>
        </Reveal>

        {/* Einleitung */}
        <Reveal className="mt-12">
          <p className="text-[var(--color-ink-soft)]">{datenschutz.intro}</p>
        </Reveal>

        {/* Verantwortliche Stelle */}
        <Reveal className="mt-10">
          <h2 className="font-display text-xl text-[var(--color-sage-deep)] md:text-2xl">
            {responsible.heading}
          </h2>
          <p className="mt-3 text-[var(--color-ink-soft)]">{responsible.intro}</p>
          <div className="mt-3 space-y-1 text-[var(--color-ink-soft)]">
            {responsible.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="pt-2">
              E-Mail:{" "}
              <a href={`mailto:${responsible.email}`} className="link-underline break-all text-[var(--color-sage-deep)]">
                {responsible.email}
              </a>
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-10">
          {datenschutz.sections.map((sec) => (
            <Reveal key={sec.heading}>
              <h2 className="font-display text-xl text-[var(--color-sage-deep)] md:text-2xl">
                {sec.heading}
              </h2>
              <div className="mt-3 space-y-3 text-[var(--color-ink-soft)]">
                {sec.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {"list" in sec && sec.list && (
                <ul className="mt-4 space-y-2">
                  {sec.list.map((li) => (
                    <li key={li} className="flex gap-3 text-[var(--color-ink-soft)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-sage)]" />
                      {li}
                    </li>
                  ))}
                </ul>
              )}
              {"after" in sec && sec.after && (
                <p className="mt-4 text-[var(--color-ink-soft)]">{sec.after}</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
