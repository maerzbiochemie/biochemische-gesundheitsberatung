import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Eyebrow, Section } from "@/components/ui";
import { Glossary } from "@/components/Glossary";
import { BookingButton } from "@/components/BookingButton";
import { privatkunden, site } from "@/content/site";
import heroDna from "@/assets/hero-dna-trim.png";
import privatkundenSupplements from "@/assets/privatkunden-supplements.png";
import privatkundenInfusion from "@/assets/privatkunden-infusion.png";
import privatkundenTeller from "@/assets/privatkunden-teller.png";
import privatkundenPlan from "@/assets/privatkunden-plan.png";
import kompassBuch from "@/assets/kompass-buch-freigestellt.png";
import ablaufFarn from "@/assets/situation-farn.png";

const beispielBilder = {
  supplements: privatkundenSupplements,
  infusion: privatkundenInfusion,
  teller: privatkundenTeller,
  plan: privatkundenPlan,
} as const;

/**
 * Calm, minimal line drawings for the benefit items — one per item, matching
 * the sage accent of the rest of the site. No filled or colourful icons.
 */
function BenefitIcon({ index }: { index: number }) {
  const drawings = [
    // Verständliche Einordnung — connected nodes
    <Fragment key="einordnung">
      <circle cx="7" cy="10" r="2.5" />
      <circle cx="24" cy="8" r="2.5" />
      <circle cx="16" cy="25" r="2.5" />
      <path d="M9.3 11 L21.7 9 M8.5 12.4 L14.6 22.7 M17.4 22.8 L22.9 10.2" />
    </Fragment>,
    // Klare Prioritäten — ranked lines
    <path key="priorities" d="M6 9h20M6 16h13M6 23h7" />,
    // Biochemischer Gesundheitskompass — compass
    <Fragment key="kompass">
      <circle cx="16" cy="16" r="11" />
      <path d="M11 21 L17.5 17.5 L21 11 L14.5 14.5 Z" />
      <circle cx="16" cy="16" r="0.8" />
    </Fragment>,
    // Alltagstaugliche Umsetzung — winding path
    <Fragment key="umsetzung">
      <path d="M7 25c0-6 6-6 6-11s6-5 6 0 6 6 6 0" />
      <circle cx="7" cy="25" r="1.6" />
      <circle cx="25" cy="13" r="1.6" />
    </Fragment>,
    // Mehr Verständnis für den Körper — person
    <Fragment key="verstaendnis">
      <circle cx="16" cy="9" r="3.6" />
      <path d="M9 25c0-7 3-10 7-10s7 3 7 10" />
    </Fragment>,
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
  const { hero, beispiele, catcher, praevention, zielgruppen, beratung, nutzen, kompass, process, pakete, finalCta } =
    privatkunden;
  return (
    <>
      {/* Privatkunden-Einstieg — Kachel-Layout nach Referenzvorlage (BIO-208).
          Gleiche Containerbreite/-Innenabstände wie die Ansatz-Sektion
          (.container-wide, siehe app/page.tsx#ansatz): Headline + DNA oben,
          darunter vier gleichmäßige Karten im 2×2-Raster statt der
          vorherigen zweispaltigen Liste. Kein Aquarell-Hintergrund, kein
          Pflanzenornament — ruhige, einfarbige Fläche wie in der Vorlage. */}
      <section className="bg-[var(--color-ivory)] pt-24 pb-14 min-[600px]:pt-28 min-[600px]:pb-24 min-[901px]:pt-[152px] min-[1200px]:pb-32">
        <div className="container-wide">
          {/* Hero */}
          <div className="grid grid-cols-1 items-start gap-10 min-[901px]:grid-cols-[60fr_40fr] min-[901px]:items-stretch min-[901px]:gap-16">
            <div>
              <Reveal>
                <span className="block font-sans text-[12px] font-medium uppercase tracking-[1.8px] text-[var(--color-sage-deep)]">
                  {hero.eyebrow}
                </span>
              </Reveal>
              <Reveal
                as="h1"
                delay={80}
                className="font-display mt-5 text-[36px] font-normal leading-[1.15] tracking-[-0.015em] min-[600px]:text-[56px] min-[600px]:leading-[1.08]"
              >
                {hero.headline.map((line) => (
                  <span
                    key={line.text}
                    className={`block ${
                      line.tone === "accent" ? "text-[var(--color-sage)]" : "text-[var(--color-forest)]"
                    }`}
                  >
                    {line.text}
                  </span>
                ))}
              </Reveal>
              <Reveal
                delay={140}
                className="mt-8 max-w-xl text-[18px] leading-[1.6] text-[var(--color-slate)] min-[600px]:text-[21px]"
              >
                <Glossary>{hero.intro}</Glossary>
              </Reveal>
            </div>

            {/* DNA — exakt dieselbe Bildbehandlung wie im Website-Hero
                (dasselbe Asset, object-cover, Opacity 0.4, Fade-Maske oben/
                unten), auf Milvas Wunsch angeglichen. Nur ab Tablet-Breite
                sichtbar, skaliert innerhalb der eigenen Grid-Spalte. */}
            <div aria-hidden className="relative hidden min-h-[360px] min-[901px]:block">
              <Image
                src={heroDna}
                alt=""
                fill
                sizes="(min-width: 1200px) 320px, 240px"
                className="object-cover object-center opacity-40"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)",
                }}
              />
            </div>
          </div>

          {/* Übergang zur Kachelsektion — unter 600px laufen die Linien weg
              statt den Text zu verdrängen: Text zentriert über volle Breite,
              Linien erscheinen erst, wenn genug Platz da ist. */}
          <Reveal delay={100} className="mt-16 flex items-center justify-center gap-6 min-[600px]:mt-20 min-[1200px]:mt-28">
            <span aria-hidden className="hidden h-px flex-1 bg-[var(--color-hairline-warm)] min-[600px]:block" />
            <p className="max-w-[90%] text-center font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--color-sage-deep)] min-[600px]:max-w-none min-[600px]:shrink-0 min-[600px]:text-[13px] min-[600px]:tracking-[0.16em]">
              {beispiele.eyebrow}
            </p>
            <span aria-hidden className="hidden h-px flex-1 bg-[var(--color-hairline-warm)] min-[600px]:block" />
          </Reveal>

          {/* Vier Karten im 2×2-Raster */}
          <div className="mt-10 grid grid-cols-1 gap-5 min-[700px]:grid-cols-2 min-[700px]:gap-6">
            {beispiele.items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="rounded-[var(--radius-card)] border border-[var(--color-hairline-warm)] bg-[var(--color-paper)] p-8 min-[600px]:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <span className="font-display block text-[28px] text-[var(--color-sage-deep)] min-[600px]:text-[32px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden className="mt-3 block h-px w-10 bg-[var(--color-hairline-warm)]" />
                    <h3 className="font-display mt-5 text-[22px] leading-[1.2] text-[var(--color-forest)] min-[600px]:text-[26px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.55] text-[var(--color-slate)] min-[600px]:text-[17px]">
                      {item.body}
                    </p>
                  </div>
                  <div
                    aria-hidden
                    className="relative h-[104px] w-[104px] shrink-0 rounded-full bg-[var(--color-cream-deep)] min-[600px]:h-[132px] min-[600px]:w-[132px]"
                  >
                    <Image
                      src={beispielBilder[item.image]}
                      alt=""
                      fill
                      sizes="132px"
                      className="object-contain p-2.5 min-[600px]:p-3"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Für wen ist die Beratung geeignet? — direkt hinter dem Hero (Pos. 2).
          Überarbeitet (BIO-212, dritte Korrekturrunde — pixelgenauer Abgleich
          mit Milvas Referenzbild bei 1536px). Farben sind direkt am Bild
          gemessene Literalwerte, lokal auf diesen Abschnitt begrenzt (kein
          Tokensystem-Umbau). Größen/Abstände als clamp() skaliert, damit sie
          bei 1536px dem Bild entsprechen und an den bestehenden Breakpoints
          sauber kleiner werden — Grid-Struktur/Container unverändert. */}
      <Section tone="cream" className="!bg-[#FBF9F3]">
        <Reveal>
          <span className="inline-flex items-center gap-3">
            <span className="font-sans text-[12px] font-medium uppercase tracking-[0.2em] text-[#1E2D22]">
              {zielgruppen.eyebrow}
            </span>
            <span aria-hidden className="h-px w-[100px] bg-[#1E2D22]" />
          </span>
        </Reveal>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-16">
          <Reveal>
            <h2 className="font-display text-[clamp(2.25rem,4.4vw,4.25rem)] leading-[1.05] tracking-[-0.02em] text-[#1E2D22]">
              <span className="lg:hidden">{zielgruppen.title}</span>
              <span aria-hidden className="hidden lg:block">
                Sie müssen nicht
                <br />
                in eine Schublade
                <br />
                passen.
              </span>
            </h2>
            <p className="mt-6 text-[clamp(1.0625rem,1.5625vw,1.5rem)] leading-[1.5] text-[#4A423E]">
              <Glossary>{zielgruppen.intro}</Glossary>
            </p>
          </Reveal>

          <ul className="space-y-8 lg:space-y-10">
            {zielgruppen.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80} className="flex gap-4">
                <span aria-hidden className="mt-[8px] h-4 w-4 shrink-0 rounded-full bg-[#8A9A80] lg:mt-[16px]" />
                <div>
                  <h3 className="font-display text-[clamp(1.375rem,2.474vw,2.375rem)] leading-snug text-[#1E2D22]">{item.title}</h3>
                  <p className="mt-[7px] text-[clamp(1rem,1.432vw,1.375rem)] text-[#4A423E]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <div aria-hidden className="mt-12 h-px w-full bg-[#E2DED3] md:mt-14" />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-[16px] border border-[#D9D5C9] bg-[#F6F1E9] p-8 shadow-none md:p-10">
            <h3 className="font-display text-[clamp(1.5rem,2.604vw,2.5rem)] leading-[1.1] text-[#1E2D22]">
              {catcher.title}
            </h3>
            <div className="mt-[20px] space-y-4 text-[clamp(1rem,1.432vw,1.375rem)] leading-[1.5] text-[#4A423E] [&_.term-trigger]:!no-underline">
              {catcher.body.map((p) => (
                <p key={p}>
                  <Glossary>{p}</Glossary>
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={90} className="rounded-[16px] border border-[#D9D5C9] bg-[#ECEEE5] p-8 shadow-none md:p-10">
            <h3 className="font-display text-[clamp(1.5rem,2.604vw,2.5rem)] leading-[1.1] text-[#1E2D22]">
              {praevention.title}
            </h3>
            <div className="mt-[20px] space-y-4 text-[clamp(1rem,1.432vw,1.375rem)] leading-[1.5] text-[#4A423E]">
              {praevention.body.map((p) => (
                <p key={p}>
                  <Glossary>{p}</Glossary>
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="/#ansatz"
            variant="secondary"
            className="!min-h-[56px] !rounded-[12px] !border-2 !border-[#1E2D22] !bg-transparent !text-[20px] !font-medium !text-[#1E2D22] [&>.arrow]:hidden hover:!bg-[#1E2D22]/5 md:!h-16"
          >
            Mein Ansatz
          </ButtonLink>
          <ButtonLink
            href={site.booking.url}
            variant="primary"
            className="!min-h-[56px] !rounded-[12px] !border-0 !bg-[#2F4030] !text-[20px] !font-medium !text-white [&>.arrow]:hidden hover:!bg-[#1E2D22] md:!h-16"
          >
            Kostenloses Kennenlerngespräch
          </ButtonLink>
        </Reveal>
      </Section>

      {/* Beratung & Ergebnis — eine gemeinsame Kachel statt getrennter
          Sektionen (BIO-214, Referenzbild "Beratung & Ergebnis"). Links vier
          Nutzenpunkte, rechts der Gesundheitskompass mit der Original-
          Booklet-Grafik, unten ein gemeinsamer Outline-Button. (Pos. 5+6) */}
      <Section tone="cream">
        <Reveal className="rounded-[var(--radius-card)] border border-[var(--color-hairline-warm)] bg-[var(--color-paper)] p-7 sm:p-10 md:p-14">
          <Eyebrow>{beratung.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl text-[var(--color-forest)] md:text-5xl">{beratung.title}</h2>
          <p className="mt-6 max-w-3xl text-lg text-[var(--color-ink-soft)]">{beratung.intro}</p>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-[var(--color-hairline-warm)]">
            <div className="md:pr-14">
              <h3 className="font-display text-2xl text-[var(--color-forest)]">{nutzen.title}</h3>
              <ul className="mt-7 space-y-7">
                {nutzen.items.map((item, i) => (
                  <li key={item.title} className="flex gap-4">
                    <BenefitIcon index={i} />
                    <div>
                      <h4 className="font-display text-xl text-[var(--color-forest)]">{item.title}</h4>
                      <p className="mt-1 text-[var(--color-ink-soft)]">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:pl-14">
              <h3 className="font-display text-2xl text-[var(--color-forest)]">{kompass.title}</h3>
              <div className="mt-6 space-y-4 text-[var(--color-ink-soft)]">
                {kompass.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-5 font-semibold text-[var(--color-forest)]">{kompass.highlight}</p>
              <div className="mt-8 flex justify-center md:justify-start">
                <Image
                  src={kompassBuch}
                  alt="Aufgeschlagenes Booklet „Ihr biochemischer Kompass“ mit Kompass-Illustration"
                  className="h-auto w-[min(300px,75%)]"
                  sizes="300px"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/leistungen"
              className="btn btn-secondary !border-[var(--color-forest)] !text-[var(--color-forest)] hover:!bg-[var(--color-forest)]/5"
            >
              {beratung.button} <span aria-hidden className="arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* So läuft die Zusammenarbeit ab — horizontaler Zeitstrahl mit sechs
          Schritten + dezentem Farn (BIO-214, Referenzbild "Ablauf"). Auf
          Mobilgeräten vertikaler Zeitstrahl. (Pos. 7) */}
      <Section tone="paper" className="relative overflow-hidden">
        <Image
          src={ablaufFarn}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-6 right-0 w-[220px] select-none opacity-30 sm:w-[300px] md:w-[360px]"
          sizes="360px"
        />
        <Reveal className="relative max-w-2xl">
          <Eyebrow>{process.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{process.title}</h2>
        </Reveal>

        {/* Mobil/Tablet: vertikaler Zeitstrahl */}
        <ol className="relative mt-14 md:hidden">
          {process.steps.map((step, i) => {
            const isLast = i === process.steps.length - 1;
            return (
              <Reveal key={step.title} as="li" delay={i * 90} className="flex gap-5 sm:gap-7">
                <div className="flex flex-col items-center" aria-hidden>
                  <span className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 !border-[var(--color-sage)] bg-[var(--color-paper)]" />
                  {!isLast && <span className="w-px flex-1 bg-[var(--color-sage)]/35" />}
                </div>
                <div className={isLast ? "pb-1" : "pb-12"}>
                  <span className="marker-num !text-[var(--color-sage-deep)]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display mt-2 text-2xl md:text-[1.7rem]">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-[var(--color-ink-soft)]">{step.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>

        {/* Ab Tablet quer: horizontaler Zeitstrahl, Schritte wechseln oben/unten.
            Fünf echte Grid-Zeilen (nicht sechs feste Pixelhöhen pro Spalte),
            damit sich Zeile 1/5 an den jeweils längsten Text anpassen und
            Linie/Punkte in Zeile 3 für alle Spalten exakt auf einer Höhe
            bleiben, unabhängig von der Textlänge der einzelnen Schritte. */}
        <Reveal delay={60} className="mt-20 hidden md:block">
        <div
          className="relative grid md:gap-x-3 lg:gap-x-6"
          style={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gridTemplateRows: "auto 24px 24px 24px auto" }}
        >
          <span
            aria-hidden
            className="h-px self-center bg-[var(--color-sage)]/45"
            style={{ gridColumn: "1 / -1", gridRow: 3 }}
          />
          {process.steps.map((step, i) => {
            const isTop = i % 2 === 0;
            const col = i + 1;
            return (
              <Fragment key={step.title}>
                {isTop && (
                  <div className="self-end" style={{ gridColumn: col, gridRow: 1 }}>
                    <span className="marker-num !text-[var(--color-sage-deep)]">{String(col).padStart(2, "0")}</span>
                    <h3 className="font-display mt-2 text-xl leading-snug lg:text-[1.4rem]">{step.title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-ink-soft)] lg:text-base">{step.body}</p>
                  </div>
                )}
                {isTop && (
                  <span
                    aria-hidden
                    className="h-full w-px justify-self-start bg-[var(--color-sage)]/45"
                    style={{ gridColumn: col, gridRow: 2 }}
                  />
                )}
                <span
                  aria-hidden
                  className="relative z-10 h-3.5 w-3.5 self-center justify-self-start rounded-full border-2 border-[var(--color-sage)] bg-[var(--color-paper)]"
                  style={{ gridColumn: col, gridRow: 3 }}
                />
                {!isTop && (
                  <span
                    aria-hidden
                    className="h-full w-px justify-self-start bg-[var(--color-sage)]/45"
                    style={{ gridColumn: col, gridRow: 4 }}
                  />
                )}
                {!isTop && (
                  <div className="self-start" style={{ gridColumn: col, gridRow: 5 }}>
                    <span className="marker-num !text-[var(--color-sage-deep)]">{String(col).padStart(2, "0")}</span>
                    <h3 className="font-display mt-2 text-xl leading-snug lg:text-[1.4rem]">{step.title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-ink-soft)] lg:text-base">{step.body}</p>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
        </Reveal>
      </Section>

      {/* Pakete im Vergleich — eigene Kachel mit Kostenaufschlüsselung
          (BIO-214, Referenzbild "Pakete im Vergleich"). Preise unverändert,
          nur Darstellung angepasst: mittlere Karte in hellem Salbei statt
          dunkel. (Pos. 8) */}
      <Section tone="cream">
        <Reveal className="max-w-2xl">
          <Eyebrow>{pakete.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl text-[var(--color-forest)]">{pakete.title}</h2>
          <p className="mt-6 text-lg text-[var(--color-ink-soft)]">
            <Glossary>{pakete.intro}</Glossary>
          </p>
        </Reveal>

        <Reveal delay={60} className="mt-10 text-center">
          <h3 className="font-display text-2xl text-[var(--color-forest)] md:text-3xl">{pakete.subheading}</h3>
          <p className="mt-3 text-base font-semibold text-[var(--color-sage-deep)] md:text-lg">
            {pakete.billingHighlight}
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
          {pakete.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 110}
              className={`relative flex flex-col rounded-[var(--radius-card)] border p-8 transition-transform duration-500 hover:-translate-y-1 ${
                item.featured
                  ? "border-[var(--color-sage)] bg-[var(--color-sage-mist)]"
                  : "border-[var(--color-hairline-warm)] bg-[var(--color-paper)]"
              }`}
            >
              {item.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-sage-deep)] px-4 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[var(--color-paper)]">
                  Beliebt
                </span>
              )}
              <h3 className="font-display text-2xl text-[var(--color-forest)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{item.sub}</p>
              <div className="mt-6">
                <span className="font-display whitespace-nowrap text-4xl text-[var(--color-forest)]">
                  {item.price}
                </span>
                <p className="mt-1 text-sm font-semibold text-[var(--color-sage-deep)]">{item.priceSuffix}</p>
                {item.weeklyPrice && (
                  <p className="mt-1 text-sm font-semibold text-[var(--color-sage-deep)]">{item.weeklyPrice}</p>
                )}
              </div>
              <p className="mt-6 text-[var(--color-ink-soft)]">{item.body}</p>
              <p className="mt-4 text-sm text-[var(--color-muted)]">{item.note}</p>
              <div className="mt-auto pt-8">
                <ButtonLink href={site.cta.primary.href} variant="secondary">
                  Anfragen
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-hairline-warm)] bg-[var(--color-paper)] p-7 sm:p-10">
          <h3 className="font-display text-2xl text-[var(--color-forest)]">{pakete.breakdown.heading}</h3>
          <dl className="mt-6 divide-y divide-[var(--color-hairline-warm)]">
            {pakete.breakdown.rows.map(([label, price]) => (
              <div key={label} className="flex items-center justify-between gap-4 py-3">
                <dt className="text-[var(--color-ink-soft)]">{label}</dt>
                <dd className="shrink-0 font-medium text-[var(--color-forest)]">{price}</dd>
              </div>
            ))}
            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="font-semibold text-[var(--color-forest)]">{pakete.breakdown.totalLabel}</dt>
              <dd className="font-display shrink-0 text-xl text-[var(--color-forest)]">
                {pakete.breakdown.totalValue}
              </dd>
            </div>
          </dl>
          <p className="mt-4 font-medium text-[var(--color-forest)]">{pakete.breakdown.billingNote}</p>
          <p className="mt-2 text-sm text-[var(--color-muted)]">{pakete.breakdown.supplementNote}</p>
        </Reveal>

        <Reveal delay={180} className="mt-8">
          <Link href="/leistungen" className="link-underline inline-flex items-center gap-2 text-[var(--color-sage-deep)]">
            {pakete.link} <span aria-hidden>→</span>
          </Link>
        </Reveal>
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
