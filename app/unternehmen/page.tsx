import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { BookingButton, BookingNote } from "@/components/BookingButton";
import { b2b } from "@/content/site";

export const metadata: Metadata = {
  title: "Für Unternehmen",
  description:
    "Biochemische Fachpartnerin für Unternehmen und Fachpersonen aus der Gesundheitsbranche: wissenschaftliche Fachberatung, Konzeptentwicklung, Medical Writing und Schulung.",
};

export default function UnternehmenPage() {
  const { hero, leistungen, ansatz, zusammenarbeit, kontakt } = b2b;

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[var(--color-cream)] pb-16 pt-32 md:pb-20 md:pt-44">
        {/* Blasse DNA-Doppelhelix, senkrecht über die gesamte Abschnittshöhe am rechten Rand, hinter der Karte */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-auto select-none opacity-[0.35] lg:block"
        >
          <Image
            src="/b2b-dna.png"
            alt=""
            width={1024}
            height={1536}
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="container-x relative z-10">
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <div className="mt-7 grid grid-cols-1 gap-12 lg:grid-cols-[1.22fr_1fr] lg:items-start lg:gap-14">
            {/* Linke Spalte */}
            <div>
              <Reveal
                as="h1"
                delay={80}
                className="font-display max-w-2xl text-[2.1rem] leading-[1.1] text-[var(--color-sage-deep)] sm:text-5xl lg:text-[3.2rem]"
              >
                {hero.title}
              </Reveal>
              <Reveal
                delay={140}
                className="font-display mt-6 max-w-xl text-xl text-[var(--color-sage-deep)] md:text-2xl"
              >
                {hero.subtitle}
              </Reveal>
              <Reveal delay={200} className="mt-8 max-w-xl space-y-4 text-lg text-[var(--color-ink)]">
                {hero.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Reveal>
              <Reveal delay={260} className="mt-9">
                <BookingButton
                  label={hero.ctaLabel}
                  className="!bg-[var(--color-sage-deep)] !text-[var(--color-paper)] hover:!bg-[var(--color-ink)]"
                  hideNote
                />
              </Reveal>
              <Reveal delay={300} className="mt-7 text-sm text-[var(--color-muted)]">
                {hero.competenceLine}
              </Reveal>
              <Reveal delay={330} className="mt-3">
                <BookingNote />
              </Reveal>
            </div>

            {/* Rechte Kachel ~45% */}
            <Reveal delay={160}>
              <div className="rounded-[var(--radius-card)] border border-[var(--color-sage-deep)] bg-[var(--color-sage-mist)]/75 p-8 md:p-9">
                {hero.tile.blocks.map((block, i) => (
                  <div
                    key={block.title}
                    className={i > 0 ? "mt-7 border-t border-[var(--color-sage-deep)]/15 pt-7" : ""}
                  >
                    <h2 className="font-display text-3xl leading-snug text-[var(--color-ink)] md:text-4xl">
                      {block.title}
                    </h2>
                    <p className="mt-2 text-base text-[var(--color-sage-deep)] md:text-lg">
                      {block.subtitle}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {block.items.map((item) => (
                        <li key={item} className="text-base leading-snug text-[var(--color-ink)]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="mt-7 border-t border-[var(--color-sage-deep)]/15 pt-5">
                  <p className="text-sm text-[var(--color-walnut)]">{hero.tile.footnote}</p>
                </div>
              </div>
            </Reveal>
          </div>
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
