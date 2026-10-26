import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { BookingButton } from "@/components/BookingButton";
import { IconConnect, IconCompass, IconDocument } from "@/components/icons";
import { b2b } from "@/content/site";

export const metadata: Metadata = {
  title: "Für Unternehmen",
  description:
    "Biochemische Fachpartnerin für Unternehmen und Fachpersonen aus der Gesundheitsbranche: wissenschaftliche Fachberatung, Konzeptentwicklung, Medical Writing und Schulung.",
};

const tileIcons = {
  connect: IconConnect,
  compass: IconCompass,
  document: IconDocument,
} as const;

export default function UnternehmenPage() {
  const { hero, leistungen, ansatz, zusammenarbeit, kontakt } = b2b;

  return (
    <>
      {/* 1. Hero */}
      <section className="bg-[var(--color-cream)] pb-16 pt-32 md:pb-20 md:pt-44">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* Linke Spalte ~58% */}
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal
              as="h1"
              delay={80}
              className="font-display mt-7 max-w-2xl text-[2.1rem] leading-[1.1] text-[var(--color-ink)] sm:text-5xl lg:text-[3.2rem]"
            >
              {hero.title}
            </Reveal>
            <Reveal
              delay={140}
              className="font-display mt-6 max-w-xl text-xl text-[var(--color-walnut)] md:text-2xl"
            >
              {hero.subtitle}
            </Reveal>
            <Reveal delay={200} className="mt-8 max-w-xl space-y-4 text-lg text-[var(--color-walnut)]">
              {hero.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={260} className="mt-9">
              <BookingButton label={hero.ctaLabel} className="btn-hero-olive" />
            </Reveal>
            <Reveal delay={300} className="mt-8 text-sm text-[var(--color-muted)]">
              {hero.competenceLine}
            </Reveal>
          </div>

          {/* Rechte Kachel ~42%, mit dezentem Molekül an der oberen rechten Ecke */}
          <Reveal delay={160} className="relative lg:col-span-5">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-10 hidden w-[200px] select-none opacity-[0.28] md:block lg:w-[220px]"
            >
              <Image src="/b2b-molekuel.png" alt="" width={1536} height={1024} className="h-auto w-full" />
            </div>
            <div className="relative rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-8 md:p-9">
              <h2 className="font-display text-2xl leading-snug text-[var(--color-ink)] md:text-[1.7rem]">
                {hero.tile.title}
              </h2>
              <ul className="mt-7 space-y-5">
                {hero.tile.items.map((item) => {
                  const Icon = tileIcons[item.icon];
                  return (
                    <li key={item.label} className="flex items-center gap-4">
                      <Icon className="h-7 w-7 flex-none text-[var(--color-sage-deep)]" />
                      <span className="text-[var(--color-walnut)]">{item.label}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-7 border-t border-[var(--color-line)] pt-5">
                <p className="text-sm text-[var(--color-muted)]">{hero.tile.footnote}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Leistungen — 2x2 Kartenraster, diagonal abwechselnde Flächen */}
      <section className="bg-[var(--color-cream)] py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <Eyebrow>{leistungen.eyebrow}</Eyebrow>
            <h2 className="font-display mt-6 text-4xl text-[var(--color-ink)] md:text-5xl">
              {leistungen.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-6 text-lg text-[var(--color-walnut)]">{leistungen.intro}</p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {leistungen.cards.map((card, i) => {
              const isAltFill = i === 1 || i === 2;
              return (
                <Reveal
                  key={card.n}
                  delay={i * 90}
                  className={`flex flex-col rounded-[var(--radius-card)] border border-[var(--color-line)] p-8 md:p-9 ${
                    isAltFill ? "bg-[var(--color-sage-mist)]" : "bg-[var(--color-paper)]"
                  }`}
                >
                  <span className="marker-num-lg">{card.n}</span>
                  <h3 className="font-display mt-4 text-2xl leading-snug text-[var(--color-ink)] md:text-[1.6rem]">
                    {card.title}
                  </h3>
                  <p className="font-display mt-3 text-lg text-[var(--color-walnut)]">{card.lead}</p>
                  <p className="mt-4 text-[var(--color-walnut)]">{card.body}</p>
                  <ul className="mt-5 space-y-2">
                    {card.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[var(--color-walnut)]">
                        <span aria-hidden className="mt-[0.6em] h-1 w-1 flex-none rounded-full bg-[var(--color-sage-deep)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Mein Ansatz — schmale Qualifikationskachel + Inhalt, DNA-Grafik dezent hinter der Kachel */}
      <section className="bg-[var(--color-cream)] py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow>{ansatz.eyebrow}</Eyebrow>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            {/* Qualifikationskachel zuerst im Markup → auf Mobile vor dem Ansatztext */}
            <Reveal delay={60} className="relative lg:col-span-3">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-10 top-1/2 hidden h-[280px] w-auto -translate-y-1/2 select-none opacity-[0.22] md:block"
              >
                <Image
                  src="/b2b-dna.png"
                  alt=""
                  width={1024}
                  height={1536}
                  className="h-full w-auto"
                />
              </div>
              <div className="relative rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-7">
                <p className="font-display text-xl text-[var(--color-ink)]">{ansatz.qualifikation.name}</p>
                <p className="mt-1 text-[var(--color-walnut)]">{ansatz.qualifikation.degree}</p>
                <div className="my-5 h-px bg-[var(--color-line)]" />
                <p className="text-[var(--color-walnut)]">{ansatz.qualifikation.since}</p>
                <p className="mt-4 text-[var(--color-walnut)]">{ansatz.qualifikation.selfEmployed}</p>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-9">
              <h2 className="font-display text-4xl text-[var(--color-ink)] md:text-5xl">
                {ansatz.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-[var(--color-walnut)]">{ansatz.body}</p>
              <div className="mt-10 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
                {ansatz.rows.map((row) => (
                  <div key={row.title} className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-2 sm:gap-6">
                    <p className="font-display text-xl text-[var(--color-ink)]">{row.title}</p>
                    <p className="text-[var(--color-walnut)]">{row.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Zusammenarbeit und Preise */}
      <section className="bg-[var(--color-cream)] py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <Eyebrow>{zusammenarbeit.eyebrow}</Eyebrow>
            <h2 className="font-display mt-6 text-4xl text-[var(--color-ink)] md:text-5xl">
              {zusammenarbeit.title}
            </h2>
            <p className="mt-6 text-lg text-[var(--color-walnut)]">{zusammenarbeit.intro}</p>
          </Reveal>

          <div className="mt-14 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
            {zusammenarbeit.rows.map((row, i) => (
              <Reveal
                key={row.title}
                delay={i * 70}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="font-display text-xl text-[var(--color-ink)] md:text-2xl">{row.title}</p>
                  <p className="mt-1 text-[var(--color-walnut)]">{row.body}</p>
                </div>
                <p className="font-display whitespace-nowrap text-xl text-[var(--color-ink)] sm:text-right md:text-2xl">
                  {row.price}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[var(--color-walnut)]">
            {zusammenarbeit.process.map((step, i) => (
              <span key={step} className="flex items-center gap-x-3">
                <span>{step}</span>
                {i < zusammenarbeit.process.length - 1 && <span aria-hidden>→</span>}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 5. Kontakt */}
      <section className="bg-[var(--color-cream)] pb-24 pt-4 md:pb-32">
        <div className="container-x">
          <Reveal className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] px-8 py-12 md:px-14 md:py-16">
            <Eyebrow>{kontakt.eyebrow}</Eyebrow>
            <h2 className="font-display mt-6 max-w-2xl text-4xl text-[var(--color-ink)] md:text-5xl">
              {kontakt.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-walnut)]">{kontakt.body}</p>
            <div className="mt-9">
              <BookingButton
                label={kontakt.ctaLabel}
                className="!bg-[var(--color-sage-deep)] !text-[var(--color-paper)] hover:!bg-[var(--color-ink)]"
              />
            </div>
            <p className="mt-6 text-sm text-[var(--color-muted)]">{kontakt.note}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
