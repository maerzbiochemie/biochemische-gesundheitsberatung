import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Section } from "@/components/ui";
import { BookingButton } from "@/components/BookingButton";
import { b2b } from "@/content/site";

export const metadata: Metadata = {
  title: "Für Unternehmen & Fachpersonen",
  description:
    "Biochemische Fachberatung für Praxen, Studios, Coaches, Teams und gesundheitsnahe Unternehmen. Fachliche Beratung, Konzeptentwicklung und schriftliche Ausarbeitungen.",
};

export default function B2BPage() {
  const { hero, warum, zielgruppe, formen, staerken, gewinn, preise, finalCta } = b2b;
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-cream)] pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="container-x">
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal as="h1" delay={80} className="font-display mt-7 max-w-4xl text-[2.3rem] leading-[1.07] sm:text-5xl lg:text-[3.4rem]">
            {hero.title}
          </Reveal>
          <Reveal delay={140} className="font-display mt-6 max-w-2xl text-xl text-[var(--color-sage-deep)] md:text-2xl">
            {hero.subtitle}
          </Reveal>
          <Reveal delay={200} className="mt-8 max-w-2xl space-y-4 text-lg text-[var(--color-ink-soft)]">
            {hero.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Warum biochemische Fachberatung für Unternehmen sinnvoll ist */}
      <Section tone="paper">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>{warum.eyebrow}</Eyebrow>
              <h2 className="font-display mt-6 text-4xl leading-tight md:text-5xl">{warum.title}</h2>
            </Reveal>
          </div>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <div className="space-y-4 text-[var(--color-ink-soft)] md:text-lg">
              {warum.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Für wen ist die Zusammenarbeit geeignet? — drei Kategorien */}
      <Section tone="cream">
        <Reveal className="max-w-2xl">
          <Eyebrow>{zielgruppe.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{zielgruppe.title}</h2>
          <p className="mt-6 text-lg text-[var(--color-ink-soft)]">{zielgruppe.intro}</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {zielgruppe.categories.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={i * 110}
              className="flex flex-col rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-8"
            >
              <h3 className="font-display text-2xl leading-snug">{cat.title}</h3>
              <p className="mt-4 text-[var(--color-ink-soft)]">{cat.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2 border-t border-[var(--color-line)] pt-6">
                {cat.roles.map((role) => (
                  <li
                    key={role}
                    className="rounded-full bg-[var(--color-cream-deep)] px-3 py-1 text-sm text-[var(--color-muted)]"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Tiefe nach Bedarf */}
      <Section tone="deep">
        <Reveal className="max-w-xl">
          <Eyebrow>{formen.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{formen.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {formen.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 110}
              className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-8"
            >
              <span className="marker-num-lg">{item.n}</span>
              <h3 className="font-display mt-4 text-2xl md:text-[1.7rem]">{item.title}</h3>
              <p className="mt-3 text-[var(--color-ink-soft)]">{item.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 max-w-3xl">
          <p className="text-[var(--color-ink-soft)]">{formen.footnote}</p>
        </Reveal>
      </Section>

      {/* Fachliche Tiefe, die Ihre Arbeit stärkt */}
      <Section tone="paper">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>{staerken.eyebrow}</Eyebrow>
              <h2 className="font-display mt-6 text-4xl leading-tight md:text-5xl">
                {staerken.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <div className="space-y-4 text-[var(--color-ink-soft)] md:text-lg">
              {staerken.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Was Sie durch die Zusammenarbeit gewinnen */}
      <Section tone="cream">
        <Reveal className="max-w-2xl">
          <Eyebrow>{gewinn.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{gewinn.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {gewinn.items.map((item, i) => (
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

      {/* Preise / Formate */}
      <Section tone="paper">
        <Reveal className="max-w-xl">
          <Eyebrow>{preise.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{preise.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {preise.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 110} className="card card-hover sheen flex flex-col p-8 md:p-9">
              <span className="marker-num-lg">{item.n}</span>
              <h3 className="font-display mt-4 text-2xl leading-snug">{item.title}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display whitespace-nowrap text-3xl text-[var(--color-sage-deep)]">
                  {item.price}
                </span>
                <span className="text-sm text-[var(--color-muted)]">{item.meta}</span>
              </div>
              <p className="mt-5 text-[var(--color-ink-soft)]">{item.body}</p>
            </Reveal>
          ))}
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
