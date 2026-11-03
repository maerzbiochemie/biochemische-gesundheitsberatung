import type { Metadata } from "next";
import { Fragment } from "react";
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
  const { hero, leistungen, zusammenarbeit, kontakt } = b2b;

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

      {/* 2. Leistungen — kompaktes Bento-Raster: Medical Writing + Blog-Teaser links, Fachliche Beratung rechts */}
      <section className="relative overflow-hidden bg-[var(--color-cream)] py-20 md:py-28">
        {/* Zarter Blätterzweig, kompakt oben rechts neben der Überschrift, reicht bis zur Mitte der rechten Karte, hinter der Karte */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 z-0 hidden w-[220px] select-none opacity-95 lg:block lg:w-[250px] xl:w-[270px]"
        >
          <Image
            src="/b2b-zweig.png"
            alt=""
            width={667}
            height={1013}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="container-wide relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-sage-deep)]">
              {leistungen.eyebrow}
              <span className="h-px w-6 bg-[var(--color-sage-soft)]" aria-hidden />
            </span>
            <h2 className="font-display mt-4 max-w-[1000px] text-4xl text-[var(--color-ink)] md:text-5xl lg:text-[3.375rem]">
              {leistungen.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-4 max-w-[800px] text-lg leading-snug text-[var(--color-ink)] md:text-xl">
              {leistungen.intro}
            </p>
          </Reveal>

          <div className="relative z-10 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:grid-rows-[auto_auto]">
            {/* Medical Writing */}
            <Reveal className="lg:col-start-1 lg:row-start-1">
              <div
                className="h-full rounded-[var(--radius-card)] border bg-[var(--color-rose-mist)] p-8"
                style={{ borderColor: "var(--color-sage-deep)" }}
              >
                <h3 className="font-display text-3xl leading-snug text-[var(--color-ink)] md:text-4xl lg:text-[2.875rem]">
                  {leistungen.medicalWriting.title}
                </h3>
                <p className="mt-2 text-lg leading-snug text-[var(--color-ink)] md:text-xl lg:text-[1.375rem]">
                  {leistungen.medicalWriting.subtitle}
                </p>
                <div className="mt-4 border-t border-[var(--color-sage-deep)]/15 pt-4">
                  <p className="text-base leading-snug text-[var(--color-ink)] md:text-lg lg:text-xl">
                    {leistungen.medicalWriting.body}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Fachliche Beratung — hohe Karte rechts, bündig mit der Blog-Karte */}
            <Reveal delay={90} className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <div
                className="h-full rounded-[var(--radius-card)] border bg-[var(--color-sage-mist)]/75 p-8"
                style={{ borderColor: "var(--color-sage-deep)" }}
              >
                <h3 className="font-display text-3xl leading-snug text-[var(--color-ink)] md:text-4xl lg:text-[2.875rem]">
                  {leistungen.beratung.title}
                </h3>
                <p className="mt-2 text-lg leading-snug text-[var(--color-ink)] md:text-xl lg:text-[1.375rem]">
                  {leistungen.beratung.subtitle}
                </p>
                <ul className="mt-4 divide-y divide-[var(--color-sage-deep)]/15 border-t border-[var(--color-sage-deep)]/15">
                  {leistungen.beratung.items.map((item) => (
                    <li
                      key={item}
                      className="py-3.5 text-base leading-snug text-[var(--color-ink)] md:text-lg lg:whitespace-nowrap lg:text-xl"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Blog-Teaser */}
            <Reveal delay={150} className="lg:col-start-1 lg:row-start-2">
              <div className="flex flex-col gap-5 rounded-[var(--radius-card)] bg-[var(--color-sage-dim)] p-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-sage-deep)]">
                    {leistungen.blog.eyebrow}
                  </p>
                  <p className="font-display mt-2 text-xl leading-snug text-[var(--color-ink)] md:text-2xl">
                    {leistungen.blog.text}
                  </p>
                </div>
                <span
                  className="inline-flex flex-none items-center self-start rounded-full border px-4 py-2 text-base text-[var(--color-sage-deep)] lg:self-center"
                  style={{ borderColor: "var(--color-sage-deep)" }}
                >
                  {leistungen.blog.badge}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={200}
            className="relative z-10 mt-10 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]"
          >
            {leistungen.keywords.join(" · ")}
          </Reveal>
        </div>
      </section>

      {/* 3. Zusammenarbeit — Leistungstabelle mit Ablaufleiste (ersetzt vormals „Mein Ansatz" + „Zusammenarbeit", BIO-223) */}
      <section className="bg-[var(--color-cream)] py-14 md:py-16">
        <div className="container-x">
          <Reveal>
            <Eyebrow>{zusammenarbeit.eyebrow}</Eyebrow>
            <h2 className="font-display mt-4 text-[2.2rem] leading-[1.1] text-[var(--color-ink)] sm:text-4xl lg:text-[3.25rem]">
              {zusammenarbeit.title}
            </h2>
            <p className="mt-3 text-lg text-[var(--color-sage-deep)] md:text-xl">{zusammenarbeit.intro}</p>
          </Reveal>

          <div className="mt-10">
            {zusammenarbeit.rows.map((row, i) => {
              const featured = i === 0;
              return (
                <Reveal
                  key={row.title}
                  delay={i * 70}
                  className={`grid grid-cols-1 items-start gap-3 px-5 py-6 sm:gap-5 lg:grid-cols-[0.3fr_0.45fr_0.25fr] lg:items-center lg:gap-8 lg:px-8 ${
                    featured
                      ? "rounded-[var(--radius-card)] bg-[var(--color-sage-mist)]"
                      : "border-b border-[var(--color-line)]"
                  }`}
                >
                  <p className="font-display text-[1.95rem] leading-[1.15] text-[var(--color-sage-deep)]">
                    {row.title}
                  </p>
                  <p
                    className="text-[1.1rem] leading-snug text-[var(--color-ink)] lg:border-l lg:pl-6"
                    style={{ borderColor: "rgba(40, 79, 59, 0.4)" }}
                  >
                    {row.body}
                  </p>
                  <div className="lg:justify-self-end">
                    <span
                      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-center text-xl font-bold lg:w-[250px] ${
                        featured
                          ? "bg-[var(--color-sage)] text-[var(--color-paper)]"
                          : "bg-[var(--color-sage-mist)] text-[var(--color-sage-deep)]"
                      }`}
                    >
                      {row.price}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-4 text-sm text-[var(--color-muted)]">{zusammenarbeit.priceNote}</p>

          <Reveal
            delay={280}
            className="mt-10 flex flex-col gap-4 rounded-[var(--radius-card)] bg-[var(--color-sage-mist)] px-7 py-7 lg:flex-row lg:items-center lg:gap-8"
          >
            <p className="font-display shrink-0 text-xl font-semibold text-[var(--color-ink)]">
              {zusammenarbeit.processLabel}
            </p>
            <div className="flex flex-col items-start gap-3 lg:flex-1 lg:flex-row lg:items-center lg:justify-between">
              {zusammenarbeit.process.map((step, i) => (
                <Fragment key={step}>
                  <span className="text-lg text-[var(--color-ink)]">{step}</span>
                  {i < zusammenarbeit.process.length - 1 && (
                    <span aria-hidden className="text-[var(--color-sage-deep)]">
                      <span className="lg:hidden">↓</span>
                      <span className="hidden lg:inline">→</span>
                    </span>
                  )}
                </Fragment>
              ))}
            </div>
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
