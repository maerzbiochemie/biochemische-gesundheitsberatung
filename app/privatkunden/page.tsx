import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Section } from "@/components/ui";
import { BookingButton } from "@/components/BookingButton";
import { privatkunden } from "@/content/site";

export const metadata: Metadata = {
  title: "Für Privatkunden",
  description:
    "Biochemische Gesundheitsberatung für Privatkunden: körperliche Zusammenhänge verständlich einordnen und eine Strategie entwickeln, die zu Ihrem Körper und Alltag passt.",
};

export default function PrivatkundenPage() {
  const { hero, catcher, praevention, zielgruppen, nutzen, process, finalCta } = privatkunden;
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-cream)] pb-16 pt-32 md:pb-20 md:pt-44">
        <div className="container-x">
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal as="h1" delay={80} className="font-display mt-7 max-w-4xl text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.3rem]">
            {hero.title}
          </Reveal>
          <Reveal delay={140} className="mt-7 max-w-2xl text-lg text-[var(--color-ink-soft)]">
            {hero.intro}
          </Reveal>

          {/* Körper-Signale als ruhige Kacheln */}
          <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 md:grid-cols-3">
            {hero.signals.map((s, i) => (
              <Reveal
                key={s}
                delay={i * 60}
                className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-4 text-center text-[var(--color-ink-soft)]"
              >
                {s}
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-8 max-w-2xl space-y-4 text-[var(--color-ink-soft)] md:text-lg">
            {hero.afterSignals.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="text-[var(--color-muted)]">{hero.questionLead}</p>
          </Reveal>
          <Reveal delay={160}>
            <p className="font-display mt-3 max-w-3xl text-2xl leading-snug text-[var(--color-ink)] md:text-3xl">
              {hero.question}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Emotional catcher */}
      <Section tone="paper">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display text-3xl leading-snug md:text-[2.4rem]">{catcher.title}</h2>
            </Reveal>
          </div>
          <Reveal delay={100} className="md:col-span-6 md:col-start-7">
            <div className="space-y-4 text-[var(--color-ink-soft)] md:text-lg">
              {catcher.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Prävention */}
      <Section tone="deep">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display text-3xl leading-snug md:text-[2.4rem]">{praevention.title}</h2>
            </Reveal>
          </div>
          <Reveal delay={100} className="md:col-span-6 md:col-start-7">
            <div className="space-y-4 text-[var(--color-ink-soft)] md:text-lg">
              {praevention.body.map((p) => (
                <p key={p}>{p}</p>
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
          <p className="mt-6 text-lg text-[var(--color-ink-soft)]">{zielgruppen.intro}</p>
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
              <span className="marker-num-lg">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-4 text-2xl leading-snug">{item.title}</h3>
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
                <p key={p}>{p}</p>
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
