import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Section } from "@/components/ui";
import { Portrait } from "@/components/Portrait";
import { BookingButton } from "@/components/BookingButton";
import { ueberMich } from "@/content/site";
import frontPhoto from "@/assets/front.jpeg";
import profilPhoto from "@/assets/profil.jpeg";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Milva März, Biochemikerin B.Sc. — warum Biochemie die Grundlage meiner Arbeit ist und wie wissenschaftliches Verständnis und praktische Umsetzung zusammenkommen.",
};

export default function UeberMichPage() {
  const { hero, person, biochemie, prinzip, anders, werte, vision, finalCta } = ueberMich;
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-cream)] pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="container-x">
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal as="h1" delay={80} className="font-display mt-7 max-w-4xl text-[2.4rem] leading-[1.06] sm:text-5xl lg:text-[3.6rem]">
            {hero.title}
          </Reveal>
          <Reveal delay={160} className="mt-8 max-w-2xl space-y-4 text-lg text-[var(--color-ink-soft)]">
            {hero.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Über mich — persönlich */}
      <Section tone="paper">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <Portrait
                src={frontPhoto}
                alt="Milva März, Biochemikerin B.Sc."
                ratio="aspect-[4/5]"
                position="object-[center_25%]"
                priority
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <Eyebrow>{person.eyebrow}</Eyebrow>
            <h2 className="font-display mt-5 text-4xl">{person.name}</h2>
            <p className="mt-1 text-[var(--color-sage-deep)]">{person.role}</p>
            <div className="mt-6 space-y-4 text-[var(--color-ink-soft)]">
              {person.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Warum Biochemie und Gesundheit zusammengehören */}
      <Section tone="cream">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>{biochemie.eyebrow}</Eyebrow>
              <h2 className="font-display mt-6 text-4xl leading-tight md:text-5xl">
                {biochemie.title}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={120}>
              <div className="space-y-4 text-[var(--color-ink-soft)]">
                {biochemie.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <blockquote className="font-display mt-8 border-l-2 border-[var(--color-sage)] pl-6 text-2xl leading-snug text-[var(--color-ink)]">
                {biochemie.pullquote}
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Arbeitsprinzip — Zeitstrahl / Prozess (Überschrift „Mein Arbeitsprinzip" entfernt,
          da das Pfeil-Layout des Titels als Überschrift ausreicht) */}
      <Section tone="paper">
        <div className="relative">
          {/* connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-[var(--color-line)] md:block"
          />
          <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
            {prinzip.steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 110} className="relative">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-sage)] bg-[var(--color-paper)] font-display text-xl text-[var(--color-sage-deep)]">
                  {step.n}
                </span>
                <p className="eyebrow mt-5">{step.phase}</p>
                <h3 className="font-display mt-2 text-2xl">{step.title}</h3>
                <p className="mt-3 text-[var(--color-ink-soft)]">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Microcopy — Orientierung im Verlauf (keine Ergebnisversprechen) */}
        <Reveal className="mt-16">
          <p className="eyebrow">Orientierung im Verlauf</p>
        </Reveal>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {prinzip.notes.map((note, i) => {
            const [lead, ...rest] = note.split(":");
            return (
              <Reveal
                key={note}
                delay={i * 80}
                className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-cream)] p-5 text-sm text-[var(--color-ink-soft)]"
              >
                <span className="font-medium text-[var(--color-ink)]">{lead}:</span>
                {rest.join(":")}
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Warum dieser Ansatz anders ist — prominentes Statement */}
      <Section tone="deep">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow>{anders.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80} className="mx-auto mt-8 max-w-4xl">
          <p className="font-display text-center text-[2rem] leading-[1.15] text-[var(--color-ink)] md:text-[2.8rem]">
            „{anders.statement}“
          </p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-3xl gap-5 text-[var(--color-ink-soft)] md:text-lg">
          {anders.body.map((p) => (
            <Reveal key={p}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Wofür ich stehe — Wertekacheln (ohne Nummerierung) */}
      <Section tone="cream">
        <Reveal className="max-w-2xl">
          <Eyebrow>{werte.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{werte.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {werte.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-8"
            >
              <h3 className="font-display text-2xl text-[var(--color-sage-deep)]">{item.title}</h3>
              <p className="mt-3 text-[var(--color-ink-soft)]">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Vision — starker Statement-Block */}
      <Section tone="paper">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-4">
            <Portrait src={profilPhoto} alt="Milva März" ratio="aspect-[4/5]" sizes="(max-width: 768px) 100vw, 33vw" />
          </Reveal>
          <Reveal delay={120} className="md:col-span-7 md:col-start-6">
            <blockquote className="font-display text-3xl leading-snug text-[var(--color-ink)] md:text-4xl">
              „{vision.statement}“
            </blockquote>
            <p className="mt-6 text-lg text-[var(--color-ink-soft)]">{vision.body}</p>
          </Reveal>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="container-x py-24 md:py-32">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center [&_.eyebrow]:!text-[var(--color-sage-soft)]">
              <Eyebrow>{finalCta.eyebrow}</Eyebrow>
            </div>
            <h2 className="font-display mt-6 text-4xl md:text-5xl">{finalCta.title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-[var(--color-paper)]/70">{finalCta.body}</p>
            <div className="mt-10 flex justify-center">
              <BookingButton
                tone="dark"
                align="center"
                className="!bg-[var(--color-paper)] !text-[var(--color-ink)] hover:!bg-[var(--color-sage-soft)]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
