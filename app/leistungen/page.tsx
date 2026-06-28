import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Eyebrow, Section } from "@/components/ui";
import { BookingButton } from "@/components/BookingButton";
import { leistungen, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Leistungen & Preise",
  description:
    "Transparente Beratung, klare Struktur, individuelle Strategie. Das Basispaket bildet den Einstieg; optionale Begleitung kann je nach Bedarf ergänzt werden.",
};

function PageHero() {
  const { eyebrow, title, body } = leistungen.hero;
  return (
    <section className="bg-[var(--color-cream)] pb-16 pt-32 md:pb-20 md:pt-44">
      <div className="container-x">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal as="h1" delay={80} className="font-display mt-7 max-w-4xl text-[2.4rem] leading-[1.06] sm:text-5xl lg:text-[3.6rem]">
          {title}
        </Reveal>
        <Reveal delay={160} className="mt-8 max-w-2xl space-y-4 text-lg text-[var(--color-ink-soft)]">
          {body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default function LeistungenPage() {
  const { erstgespraech, basispaket, begleitung, pakete, kompass, hinweis, finalCta } = leistungen;
  return (
    <>
      <PageHero />

      {/* ----------------------------------------------- Kostenloses Erstgespräch */}
      <Section tone="paper">
        <Reveal>
          <div className="rounded-[var(--radius-card)] border border-[var(--color-sage)]/40 bg-[var(--color-cream)] p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <Eyebrow>{erstgespraech.eyebrow}</Eyebrow>
                <h2 className="font-display mt-6 text-3xl md:text-4xl">{erstgespraech.title}</h2>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="font-display text-4xl text-[var(--color-sage-deep)]">
                    {erstgespraech.price}
                  </span>
                  <span className="text-[var(--color-muted)]">| {erstgespraech.meta}</span>
                </div>
              </div>
              <div className="md:col-span-7">
                <p className="text-[var(--color-ink-soft)]">{erstgespraech.body}</p>
                <p className="mt-5 font-medium text-[var(--color-ink)]">{erstgespraech.listIntro}</p>
                <div className="mt-3 space-y-2 text-[var(--color-ink-soft)]">
                  {erstgespraech.list.map((q) => (
                    <p key={q}>{q}</p>
                  ))}
                </div>
                <p className="mt-6 text-sm italic text-[var(--color-muted)]">
                  {erstgespraech.footnote}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* --------------------------------------------------------- Das Basispaket */}
      <Section tone="cream">
        <Reveal className="max-w-2xl">
          <Eyebrow>{basispaket.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{basispaket.title}</h2>
          <p className="mt-6 text-lg text-[var(--color-ink-soft)]">{basispaket.intro}</p>
        </Reveal>

        {/* Zusammensetzung + Gesamtumfang + Abrechnung */}
        <Reveal delay={80} className="mt-10 grid gap-6 md:grid-cols-12">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-7 md:col-span-5 md:p-8">
            <div className="flex items-baseline justify-between gap-4 border-b border-[var(--color-line)] pb-5">
              <span className="text-[var(--color-muted)]">{basispaket.gesamtLabel}</span>
              <span className="font-display text-4xl text-[var(--color-sage-deep)]">
                {basispaket.gesamt}
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {basispaket.zusammensetzung.map(([name, price]) => (
                <li key={name} className="flex items-baseline justify-between gap-4 text-[var(--color-ink-soft)]">
                  <span>{name}</span>
                  <span className="whitespace-nowrap font-medium text-[var(--color-ink)]">{price}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-[var(--color-line)] pt-4 text-sm font-semibold text-[var(--color-sage-deep)]">
              {basispaket.gesamtNote}
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-cream-deep)] p-7 md:col-span-7 md:p-8">
            <p className="eyebrow">{basispaket.billing.title}</p>
            <div className="mt-4 space-y-4 text-[var(--color-ink-soft)]">
              {basispaket.billing.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Drei verbundene Bestandteile */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {basispaket.cards.map((item, i) => (
            <Reveal key={item.title} delay={i * 110} className="card flex flex-col p-8">
              <span className="marker-num-lg">{item.n}</span>
              <h3 className="font-display mt-4 text-2xl leading-snug md:text-[1.7rem]">{item.title}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{item.meta}</p>
              <p className="mt-5 text-[var(--color-ink-soft)]">{item.body}</p>
              <p className="mt-auto pt-6 text-sm italic text-[var(--color-muted)]">{item.note}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="text-sm text-[var(--color-muted)]">
            Hinweis: Diese drei Bestandteile gehören zusammen und können nur gemeinsam als Basispaket
            gebucht werden.
          </p>
        </Reveal>
      </Section>

      {/* ----------------------------------------------------- Optionale Begleitung */}
      <Section tone="paper">
        <Reveal className="max-w-2xl">
          <Eyebrow>{begleitung.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{begleitung.title}</h2>
          <div className="mt-6 space-y-4 text-lg text-[var(--color-ink-soft)]">
            {begleitung.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {begleitung.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 110} className="card card-hover sheen flex flex-col p-8">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display whitespace-nowrap text-3xl text-[var(--color-sage-deep)]">
                  {item.price}
                </span>
                <span className="text-sm text-[var(--color-muted)]">{item.meta}</span>
              </div>
              <p className="mt-5 text-[var(--color-ink-soft)]">{item.body}</p>
              {"list" in item && item.list && (
                <ul className="mt-6 space-y-2.5 border-t border-[var(--color-line)] pt-6">
                  {item.list.map((li) => (
                    <li key={li} className="flex gap-3 text-sm text-[var(--color-ink-soft)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-sage)]" />
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------ Pakete im Vergleich */}
      <Section tone="deep">
        <Reveal className="max-w-2xl">
          <Eyebrow>{pakete.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{pakete.title}</h2>
          <p className="mt-6 text-lg text-[var(--color-ink-soft)]">{pakete.intro}</p>
        </Reveal>
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {pakete.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 110}
              className={`relative flex flex-col rounded-[var(--radius-card)] border p-8 transition-transform duration-500 hover:-translate-y-1 ${
                item.featured
                  ? "border-[var(--color-sage)] bg-[var(--color-ink)] text-[var(--color-paper)]"
                  : "border-[var(--color-line)] bg-[var(--color-paper)]"
              }`}
            >
              {item.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-[var(--color-sage)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-paper)]">
                  Beliebt
                </span>
              )}
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p
                className={`mt-2 text-sm ${
                  item.featured ? "text-[var(--color-paper)]/65" : "text-[var(--color-muted)]"
                }`}
              >
                {item.sub}
              </p>
              <div className="mt-6 flex flex-wrap items-baseline gap-x-2">
                <span className="font-display whitespace-nowrap text-4xl">{item.price}</span>
                <span
                  className={`mt-1 w-full text-base font-semibold ${
                    item.featured ? "text-[var(--color-sage-soft)]" : "text-[var(--color-sage-deep)]"
                  }`}
                >
                  {item.priceSuffix}
                </span>
              </div>
              <p
                className={`mt-6 ${
                  item.featured ? "text-[var(--color-paper)]/75" : "text-[var(--color-ink-soft)]"
                }`}
              >
                {item.body}
              </p>
              <p
                className={`mt-4 text-sm ${
                  item.featured ? "text-[var(--color-paper)]/60" : "text-[var(--color-muted)]"
                }`}
              >
                {item.note}
              </p>
              <div className="mt-auto pt-8">
                <ButtonLink
                  href={site.cta.primary.href}
                  variant={item.featured ? "primary" : "secondary"}
                  className={
                    item.featured
                      ? "!bg-[var(--color-paper)] !text-[var(--color-ink)] hover:!bg-[var(--color-sage-soft)]"
                      : ""
                  }
                >
                  Anfragen
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* --------------------------------- Der Biochemische Gesundheitskompass im Detail */}
      <Section tone="cream">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal className="md:sticky md:top-28">
              <Eyebrow>{kompass.eyebrow}</Eyebrow>
              <h2 className="font-display mt-6 text-4xl leading-tight md:text-5xl">{kompass.title}</h2>
              <p className="mt-6 text-[var(--color-ink-soft)]">{kompass.intro}</p>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="space-y-px">
              {kompass.items.map((item, i) => (
                <Reveal
                  key={item.n}
                  delay={i * 60}
                  className="grid gap-2 border-t border-[var(--color-line)] py-6 md:grid-cols-12 md:gap-5"
                >
                  <span className="marker-num-lg md:col-span-2">{item.n}</span>
                  <div className="md:col-span-10">
                    <h3 className="font-display text-xl md:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-[var(--color-ink-soft)]">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------- Hinweis / Disclaimer */}
      <Section tone="paper">
        <Reveal>
          <div className="flex gap-4 rounded-[var(--radius-card)] border border-[var(--color-sage)]/45 bg-[var(--color-cream)] p-6 md:p-7">
            <span aria-hidden className="mt-0.5 text-xl text-[var(--color-sage-deep)]">
              ⓘ
            </span>
            <div>
              <p className="eyebrow mb-2">Hinweis</p>
              <p className="max-w-3xl text-[var(--color-ink-soft)]">{hinweis}</p>
            </div>
          </div>
        </Reveal>

        {/* Subtiler FAQ-Hinweis */}
        <Reveal className="mt-10">
          <p className="text-[var(--color-ink-soft)]">
            Sie möchten vorab mehr über Ablauf, Kosten oder Abgrenzung zur ärztlichen Behandlung
            erfahren?{" "}
            <Link href="/faq" className="link-underline text-[var(--color-sage-deep)]">
              Häufige Fragen ansehen →
            </Link>
          </p>
        </Reveal>
      </Section>

      {/* --------------------------------------------------------------- Final CTA */}
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
