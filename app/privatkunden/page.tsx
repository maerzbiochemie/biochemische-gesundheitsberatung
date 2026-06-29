import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Section, SignalList } from "@/components/ui";
import { Glossary, InlineInfo } from "@/components/Glossary";
import { BookingButton } from "@/components/BookingButton";
import { privatkunden } from "@/content/site";

/**
 * Calm, minimal line drawings for the benefit items — one per item, matching
 * the sage accent of the rest of the site. No filled or colourful icons.
 */
function BenefitIcon({ index }: { index: number }) {
  const drawings = [
    // Verständliche Einordnung — connected nodes
    <>
      <circle cx="7" cy="10" r="2.5" />
      <circle cx="24" cy="8" r="2.5" />
      <circle cx="16" cy="25" r="2.5" />
      <path d="M9.3 11 L21.7 9 M8.5 12.4 L14.6 22.7 M17.4 22.8 L22.9 10.2" />
    </>,
    // Klare Prioritäten — ranked lines
    <path d="M6 9h20M6 16h13M6 23h7" />,
    // Biochemischer Gesundheitskompass — compass
    <>
      <circle cx="16" cy="16" r="11" />
      <path d="M11 21 L17.5 17.5 L21 11 L14.5 14.5 Z" />
      <circle cx="16" cy="16" r="0.8" />
    </>,
    // Alltagstaugliche Umsetzung — winding path
    <>
      <path d="M7 25c0-6 6-6 6-11s6-5 6 0 6 6 6 0" />
      <circle cx="7" cy="25" r="1.6" />
      <circle cx="25" cy="13" r="1.6" />
    </>,
    // Mehr Verständnis für den Körper — person
    <>
      <circle cx="16" cy="9" r="3.6" />
      <path d="M9 25c0-7 3-10 7-10s7 3 7 10" />
    </>,
  ];
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9 text-[var(--color-sage-deep)]"
      aria-hidden
    >
      {drawings[index % drawings.length]}
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Für Privatkunden",
  description:
    "Biochemische Gesundheitsberatung für Privatkunden: körperliche Zusammenhänge verständlich einordnen und eine Strategie entwickeln, die zu Ihrem Körper und Alltag passt.",
};

export default function PrivatkundenPage() {
  const { hero, catcher, praevention, zielgruppen, nutzen, process, finalCta } = privatkunden;
  return (
    <>
      {/* Hero — links Überschrift, rechts Text & hervorgehobene Signale (keine Kästen) */}
      <section className="bg-[var(--color-cream)] pb-16 pt-32 md:pb-20 md:pt-44">
        <div className="container-x">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <Eyebrow>{hero.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal as="h1" delay={80} className="font-display mt-7 text-[2.1rem] leading-[1.08] sm:text-4xl lg:text-5xl">
                {hero.title}
              </Reveal>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Reveal delay={140} className="text-lg text-[var(--color-ink-soft)]">
                <Glossary>{hero.intro}</Glossary>
              </Reveal>
              <SignalList items={hero.signals} className="mt-8" />
              <Reveal delay={120} className="mt-8 space-y-4 text-[var(--color-ink-soft)] md:text-lg">
                {hero.afterSignals.map((p) => (
                  <p key={p}>
                <Glossary>{p}</Glossary>
              </p>
                ))}
                <p className="text-[var(--color-muted)]">{hero.questionLead}</p>
              </Reveal>
              <Reveal delay={160}>
                <p className="font-display mt-3 text-2xl leading-snug text-[var(--color-ink)] md:text-3xl">
                  <InlineInfo trigger={hero.question} paragraphs={hero.questionTooltip} />
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Verständnis & Prävention — zwei ruhige, hochwertige Boxen */}
      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="flex flex-col rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-cream)] p-8 md:p-10">
            <h2 className="font-display text-2xl leading-snug md:text-3xl">{catcher.title}</h2>
            <div className="mt-5 space-y-4 text-[var(--color-ink-soft)]">
              {catcher.body.map((p) => (
                <p key={p}>
                <Glossary>{p}</Glossary>
              </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="flex flex-col rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-cream)] p-8 md:p-10">
            <h2 className="font-display text-2xl leading-snug md:text-3xl">{praevention.title}</h2>
            <div className="mt-5 space-y-4 text-[var(--color-ink-soft)]">
              {praevention.body.map((p) => (
                <p key={p}>
                <Glossary>{p}</Glossary>
              </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Zielgruppen */}
      <Section tone="cream">
        <Reveal className="max-w-2xl">
          <Eyebrow>Für wen</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{zielgruppen.title}</h2>
          <p className="mt-6 text-lg text-[var(--color-ink-soft)]">
            <Glossary>{zielgruppen.intro}</Glossary>
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {zielgruppen.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="flex flex-col rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-8"
            >
              <h3 className="font-display text-2xl leading-snug text-[var(--color-sage-deep)]">{item.title}</h3>
              <p className="mt-3 text-[var(--color-ink-soft)]">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Nutzen / was Sie mitnehmen */}
      <Section tone="paper">
        <Reveal className="max-w-2xl">
          <Eyebrow>Ihr Ergebnis</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{nutzen.title}</h2>
          <p className="mt-6 text-lg text-[var(--color-ink-soft)]">{nutzen.intro}</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {nutzen.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="card flex flex-col p-8"
            >
              <BenefitIcon index={i} />
              <h3 className="font-display mt-5 text-2xl leading-snug">{item.title}</h3>
              <p className="mt-3 text-[var(--color-ink-soft)]">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Ablauf / Prozess */}
      <Section tone="cream">
        <Reveal className="max-w-2xl">
          <Eyebrow>{process.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{process.title}</h2>
        </Reveal>
        <ol className="mt-14 space-y-px">
          {process.steps.map((step, i) => (
            <Reveal
              key={step.title}
              as="li"
              delay={i * 70}
              className="grid gap-3 border-t border-[var(--color-line)] py-7 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <span className="marker-num-lg md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl md:col-span-4 md:text-[1.7rem]">{step.title}</h3>
              <p className="text-[var(--color-ink-soft)] md:col-span-7">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Final CTA */}
      <section className="bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="container-x py-24 md:py-32">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl md:text-5xl">{finalCta.title}</h2>
            <div className="mx-auto mt-6 max-w-xl space-y-4 text-[var(--color-paper)]/70">
              {finalCta.body.map((p) => (
                <p key={p}>
                <Glossary>{p}</Glossary>
              </p>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <BookingButton
                tone="dark"
                align="center"
                className="!bg-[var(--color-paper)] !text-[var(--color-ink)] hover:!bg-[var(--color-sage-soft)]"
              />
            </div>
            <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-[var(--color-paper)]/55">
              {finalCta.note}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
