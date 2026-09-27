import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Eyebrow, Section } from "@/components/ui";
import { Glossary } from "@/components/Glossary";
import { BookingButton } from "@/components/BookingButton";
import { BookletMockup } from "@/components/BookletMockup";
import { privatkunden, leistungen, site } from "@/content/site";
import privatkundenHintergrund from "@/assets/privatkunden-hintergrund.png";
import privatkundenDna from "@/assets/privatkunden-dna.png";
import privatkundenFarn from "@/assets/privatkunden-farn.png";
import privatkundenSupplements from "@/assets/privatkunden-supplements.png";
import privatkundenInfusion from "@/assets/privatkunden-infusion.png";
import privatkundenTeller from "@/assets/privatkunden-teller.png";
import privatkundenPlan from "@/assets/privatkunden-plan.png";
import zweiWegeTexturBeige from "@/assets/zwei-wege-textur-beige.png";

const beispielBilder = {
  supplements: privatkundenSupplements,
  infusion: privatkundenInfusion,
  teller: privatkundenTeller,
  plan: privatkundenPlan,
} as const;

/**
 * Fill/border colours and layout anchors for the four overlapping
 * "Für wen"-circles (BIO-184). Order matches `zielgruppen.items`:
 * top-left, top-right, bottom-left, bottom-right.
 */
const zielgruppenVisual = [
  {
    corner: "top-left",
    fill: "bg-[#D8B779]/[0.10]",
    border: "border-[#8a6f45]/40",
    titleBreak: "Im Alltag\nstark gefordert",
    bodyBreak: "Beruf, Familie und wenig\nZeit für sich.",
  },
  {
    corner: "top-right",
    fill: "bg-[#98A184]/[0.12]",
    border: "border-[#5f6e52]/40",
    titleBreak: "Sportlich aktiv",
    bodyBreak: "Training, Leistungsfähigkeit\nund Regeneration.",
  },
  {
    corner: "bottom-left",
    fill: "bg-[#A98F71]/[0.10]",
    border: "border-[#7a6349]/40",
    titleBreak: "Wiederkehrende\nBeschwerden",
    bodyBreak: "Veränderungen bei Energie,\nSchlaf oder Verdauung.",
  },
  {
    corner: "bottom-right",
    fill: "bg-[#D5AB67]/[0.11]",
    border: "border-[#8a6f3f]/40",
    titleBreak: "Gesundheitsbewusst\n& neugierig",
    bodyBreak: "Zusammenhänge verstehen\nund frühzeitig vorsorgen.",
  },
] as const;

type ZielgruppenCorner = (typeof zielgruppenVisual)[number]["corner"];

const zielgruppenCirclePosition: Record<ZielgruppenCorner, string> = {
  "top-left": "left-0 top-0",
  "top-right": "right-0 top-0",
  "bottom-left": "left-0 bottom-0",
  "bottom-right": "right-0 bottom-0",
};

/** Text-Positionen: 700–1199px (kleinere Zeichenfläche) und ab 1200px
 * (großer Desktop, BIO-184-Korrektur — weniger Kreis-Überschneidung, mehr
 * Platz pro Beschriftung). */
const zielgruppenLabelPosition: Record<ZielgruppenCorner, string> = {
  "top-left": "left-[25%] top-[24%] w-[31%] min-[1200px]:left-[27%] min-[1200px]:top-[25%] min-[1200px]:w-[34%]",
  "top-right": "left-[75%] top-[24%] w-[31%] min-[1200px]:left-[73%] min-[1200px]:top-[25%] min-[1200px]:w-[34%]",
  "bottom-left": "left-[25%] top-[76%] w-[31%] min-[1200px]:left-[27%] min-[1200px]:top-[75%] min-[1200px]:w-[34%]",
  "bottom-right": "left-[75%] top-[76%] w-[31%] min-[1200px]:left-[73%] min-[1200px]:top-[75%] min-[1200px]:w-[34%]",
};

/** Rendert einen Titel/Body-Text: natürlicher Umbruch bis 1199px, ab 1200px
 * die von Milva vorgegebenen manuellen Zeilenumbrüche (BIO-184-Korrektur). */
function BreakableText({ natural, desktop, as: Tag = "span" }: { natural: string; desktop: string; as?: "span" | "p" }) {
  const lines = desktop.split("\n");
  return (
    <>
      <Tag className="min-[1200px]:hidden">{natural}</Tag>
      <Tag className="hidden min-[1200px]:block">
        {lines.map((line, idx) => (
          <Fragment key={idx}>
            {line}
            {idx < lines.length - 1 && <br />}
          </Fragment>
        ))}
      </Tag>
    </>
  );
}

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
  const { hero, beispiele, catcher, praevention, zielgruppen, nutzen, kompass, process, finalCta } = privatkunden;
  const { pakete } = leistungen;
  return (
    <>
      {/* Privatkunden-Einstieg — ruhige, reduzierte Variante nach Layoutreferenz
          (BIO-183): Hero, vier Beispiele, Erstgespräch-Aufruf. Elfenbeinfläche
          mit dezenter Papierstruktur am oberen Rand, feine Trennlinien statt
          Kartenrahmen. */}
      <section className="relative overflow-hidden bg-[var(--color-ivory)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 aspect-[1536/1024] w-full">
          <Image
            src={privatkundenHintergrund}
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="pointer-events-none absolute -right-6 top-6 aspect-[1222/1287] w-[90px] opacity-20 min-[600px]:w-[130px] min-[901px]:-right-10 min-[901px]:top-10 min-[901px]:w-[180px]">
          <Image
            src={privatkundenFarn}
            alt=""
            aria-hidden
            fill
            sizes="180px"
            className="object-contain"
          />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 pb-20 min-[600px]:px-10 min-[600px]:pb-24 min-[901px]:pb-28">
          {/* Hero */}
          <div className="pt-24 min-[600px]:pt-28 min-[901px]:pt-[152px]">
            <div className="relative min-[901px]:flex min-[901px]:items-center min-[901px]:gap-10">
              <div className="min-[901px]:flex-1">
                <Reveal>
                  <span className="block font-sans text-[12px] font-medium uppercase tracking-[1.8px] text-[var(--color-clay)]">
                    {hero.eyebrow}
                  </span>
                </Reveal>
                <Reveal
                  as="h1"
                  delay={80}
                  className="font-display mt-5 text-[36px] font-normal leading-[1.12] tracking-[-0.015em] min-[600px]:text-[56px]"
                >
                  {hero.headline.map((line) => (
                    <span
                      key={line.text}
                      className={`block ${
                        line.tone === "accent" ? "text-[var(--color-clay)]" : "text-[var(--color-forest)]"
                      }`}
                    >
                      {line.text}
                    </span>
                  ))}
                </Reveal>
              </div>

              {/* Vertically centered only against the eyebrow+headline (not the
                  intro below), so it sits in the upper-right quadrant of the
                  hero rather than mid-height of the whole block. */}
              <div className="pointer-events-none absolute right-0 top-0 hidden aspect-[1024/1536] w-[90px] opacity-45 min-[600px]:block min-[901px]:relative min-[901px]:w-[240px] min-[901px]:shrink-0">
                <Image src={privatkundenDna} alt="" aria-hidden fill sizes="240px" className="object-contain" />
              </div>
            </div>

            <Reveal
              delay={140}
              className="mt-6 max-w-2xl text-[18px] leading-[1.55] text-[var(--color-slate)] min-[600px]:text-[21px]"
            >
              <Glossary>{hero.intro}</Glossary>
            </Reveal>
          </div>

          {/* Vier Beispiele */}
          <div className="mt-14">
            <Reveal>
              <span className="block font-sans text-[12px] font-medium uppercase tracking-[1.8px] text-[var(--color-clay)]">
                {beispiele.eyebrow}
              </span>
            </Reveal>
            <div className="relative mt-8">
              <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-[var(--color-hairline-warm)] min-[901px]:block" />
              <div className="grid grid-cols-1 gap-x-12 gap-y-8 min-[901px]:grid-cols-2">
              {beispiele.items.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 80}
                  className="border-t border-[var(--color-hairline-warm)] pt-6"
                >
                  <div className="flex flex-col gap-5 min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-between min-[600px]:gap-5">
                    <div className="min-[600px]:flex-1">
                      <span className="font-display block text-[32px] text-[var(--color-clay)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display mt-2 text-[26px] leading-[1.15] text-[var(--color-forest)] min-[600px]:text-[30px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[17px] leading-[1.55] text-[var(--color-slate)] min-[600px]:text-[18px]">
                        {item.body}
                      </p>
                    </div>
                    <div className="relative h-[126px] w-[88px] shrink-0 self-end min-[600px]:h-[200px] min-[600px]:w-[140px] min-[600px]:self-center">
                      <Image
                        src={beispielBilder[item.image]}
                        alt=""
                        aria-hidden
                        fill
                        sizes="140px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Für wen ist die Beratung geeignet? — direkt hinter dem Hero (Pos. 2).
          Vier echte, überlappende Kreise auf der Original-Aquarelltextur,
          direkt aus Website-Elementen aufgebaut (BIO-184, Referenz:
          Schublade.png). Unter 700px werden die Kreise durch vier gestapelte
          Zielgruppenflächen ersetzt, damit nichts unlesbar klein wird.
          Eigener, breiterer Container (1470px statt 1248px) und eigene
          Typo-Skala ab 1200px, weil die Referenz eine großzügigere
          Komposition zeigt als der Rest der Seite (BIO-184-Korrektur). */}
      <section className="relative overflow-hidden py-[56px]">
        <div className="absolute inset-0">
          <Image src={zweiWegeTexturBeige} alt="" aria-hidden fill sizes="100vw" className="object-cover" />
        </div>
        {/* Gleichmäßige elfenbeinfarbene Aufhellung über der ganzen Textur,
            unter allen Inhalten — die Papierstruktur bleibt sichtbar
            (BIO-184-Korrektur: kein warmer/gelber Farbfilter mehr). */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#FFFDF8]/[0.15]" />

        <div className="relative mx-auto w-full max-w-[1470px] px-6 md:px-10">
          <div className="flex flex-col gap-10 min-[1200px]:grid min-[1200px]:grid-cols-[550fr_840fr] min-[1200px]:items-center min-[1200px]:gap-[80px]">
            {/* Text links */}
            <Reveal className="max-w-[760px]">
              <span className="inline-flex items-center gap-3">
                <span className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-[var(--color-forest)] min-[1200px]:text-[14px]">
                  {zielgruppen.eyebrow}
                </span>
                <span aria-hidden className="h-px w-[60px] bg-[var(--color-forest)] min-[1200px]:w-[85px]" />
              </span>
              <h2 className="font-display mt-[26px] text-[36px] font-normal leading-[1.12] tracking-[-0.015em] text-[var(--color-forest)] min-[700px]:text-[48px] min-[1200px]:mt-[40px] min-[1200px]:text-[68px] min-[1200px]:leading-[1.06] min-[1200px]:tracking-[-0.02em]">
                <BreakableText natural={zielgruppen.title} desktop={"Sie müssen nicht\nin eine Schublade\npassen."} as="span" />
              </h2>
              <p className="mt-[28px] text-[18px] leading-[1.6] text-[var(--color-slate)] min-[700px]:text-[20px] min-[1200px]:mt-[32px] min-[1200px]:text-[22px] min-[1200px]:leading-[1.5]">
                <Glossary>{zielgruppen.intro[0]}</Glossary>
              </p>
              <p className="mt-[24px] text-[18px] leading-[1.6] text-[var(--color-slate)] min-[700px]:text-[20px] min-[1200px]:mt-[28px] min-[1200px]:text-[22px] min-[1200px]:leading-[1.5]">
                <Glossary>{zielgruppen.intro[1]}</Glossary>
              </p>
            </Reveal>

            {/* Grafik rechts */}
            <div className="flex flex-col items-center">
              {/* ≥700px: vier echte, überlappende Kreise */}
              <Reveal delay={100} className="hidden w-full max-w-[780px] min-[700px]:block min-[1200px]:max-w-[840px]">
                <div className="relative aspect-square w-full">
                  {zielgruppenVisual.map((v, i) => {
                    const item = zielgruppen.items[i];
                    return (
                      <span
                        key={item.title}
                        aria-hidden
                        className={`absolute h-[60%] w-[60%] rounded-full border ${v.fill} ${v.border} ${zielgruppenCirclePosition[v.corner]}`}
                      />
                    );
                  })}
                  {zielgruppenVisual.map((v, i) => {
                    const item = zielgruppen.items[i];
                    return (
                      <div
                        key={item.title}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 text-center ${zielgruppenLabelPosition[v.corner]}`}
                      >
                        <h3 className="font-display text-[26px] font-normal leading-[1.15] text-[var(--color-forest)] min-[1200px]:text-[32px] min-[1200px]:leading-[1.1]">
                          <BreakableText natural={item.title} desktop={v.titleBreak} />
                        </h3>
                        <p className="mt-[14px] text-[17px] leading-[1.4] text-[var(--color-slate)] min-[1200px]:mt-[18px] min-[1200px]:text-[20px]">
                          <BreakableText natural={item.body} desktop={v.bodyBreak} />
                        </p>
                      </div>
                    );
                  })}
                  {/* Ovaler Akzent exakt um die gemeinsame Mitte — wie in
                      Schublade.png (BIO-184-Korrektur, 4. Runde: größer + oval
                      statt rund). */}
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 h-[38%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#A76343]/40 bg-[#A76343]/[0.08]"
                  />
                  <div className="absolute left-1/2 top-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2 text-center min-[1200px]:w-[48%]">
                    <p className="font-display text-[28px] leading-[1.15] text-[#A76343] min-[1200px]:text-[36px]">
                      <BreakableText natural={zielgruppen.centerTitle} desktop={"Ihr Körper\nim Zusammenhang"} />
                    </p>
                  </div>
                </div>
                <p className="mx-auto mt-[24px] max-w-[420px] text-center text-[16px] leading-[1.5] text-[var(--color-forest)] min-[1200px]:max-w-[640px] min-[1200px]:text-[18px]">
                  {zielgruppen.footnote}
                </p>
              </Reveal>

              {/* <700px: gestapelte Zielgruppenflächen statt Kreisgrafik */}
              <div className="w-full min-[700px]:hidden">
                <div className="flex flex-col gap-4">
                  {zielgruppenVisual.map((v, i) => {
                    const item = zielgruppen.items[i];
                    return (
                      <Reveal
                        key={item.title}
                        delay={i * 80}
                        className={`rounded-[var(--radius-card)] border p-6 ${v.fill} ${v.border}`}
                      >
                        <h3 className="font-display text-[25px] font-normal leading-[1.15] text-[var(--color-forest)]">
                          {item.title}
                        </h3>
                        <p className="mt-[14px] text-[16px] leading-[1.4] text-[var(--color-slate)]">{item.body}</p>
                      </Reveal>
                    );
                  })}
                </div>
                <Reveal delay={340} className="mt-8 text-center">
                  <p className="font-display text-[28px] leading-[1.15] text-[#A76343]">{zielgruppen.centerTitle}</p>
                  <p className="mt-3 text-[16px] leading-[1.5] text-[var(--color-forest)]">{zielgruppen.footnote}</p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verständnis & Prävention — zwei ruhige, hochwertige Boxen (Pos. 3–4) */}
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

      {/* Was Sie konkret mitnehmen (Pos. 5) */}
      <Section tone="cream">
        <Reveal className="max-w-2xl">
          <Eyebrow>Was Sie mitnehmen</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{nutzen.title}</h2>
          <p className="mt-6 text-lg text-[var(--color-ink-soft)]">{nutzen.intro}</p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Ihr Ergebnis: der Biochemische Gesundheitskompass — Signature-Element (Pos. 6) */}
      <Section tone="deep" className="overflow-x-hidden">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <Eyebrow>{kompass.eyebrow}</Eyebrow>
            <h2 className="font-display mt-6 text-4xl leading-tight break-words hyphens-auto md:text-5xl">
              {kompass.title}
            </h2>
            <p className="mt-6 text-lg text-[var(--color-ink-soft)]">{kompass.intro}</p>
            <p className="mt-6 text-[var(--color-ink-soft)]">{kompass.listIntro}</p>
            <ul className="mt-4 space-y-3">
              {kompass.list.map((li) => (
                <li key={li} className="flex gap-3 text-[var(--color-ink-soft)]">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-terra)]"
                  />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[var(--color-ink-soft)]">{kompass.outro}</p>
            <Link
              href="/leistungen"
              className="link-underline mt-7 inline-flex items-center gap-2 text-[var(--color-sage-deep)]"
            >
              Leistungen & Preise ansehen <span aria-hidden>→</span>
            </Link>
          </Reveal>
          <Reveal delay={120} className="mt-14">
            <BookletMockup className="mx-auto" />
          </Reveal>
        </div>
      </Section>

      {/* So läuft die Zusammenarbeit ab — operativer Ablauf als Zeitstrahl (Pos. 7) */}
      <Section tone="paper">
        <Reveal className="max-w-2xl">
          <Eyebrow>{process.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{process.title}</h2>
        </Reveal>
        <ol className="mt-14">
          {process.steps.map((step, i) => {
            const isLast = i === process.steps.length - 1;
            return (
              <Reveal key={step.title} as="li" delay={i * 90} className="flex gap-5 sm:gap-7">
                <div className="flex flex-col items-center" aria-hidden>
                  <span className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 !border-[var(--color-terra)] bg-[var(--color-paper)]" />
                  {!isLast && <span className="w-px flex-1 bg-[var(--color-terra)]/35" />}
                </div>
                <div className={isLast ? "pb-1" : "pb-12"}>
                  <span className="marker-num !text-[var(--color-terra)]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display mt-2 text-2xl md:text-[1.7rem]">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-[var(--color-ink-soft)]">{step.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      {/* Pakete im Vergleich — gespiegelt von /leistungen, mit Link zu allen Details (Pos. 8) */}
      <Section tone="deep">
        <Reveal className="max-w-2xl">
          <Eyebrow>{pakete.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{pakete.title}</h2>
          <p className="mt-6 text-lg text-[var(--color-ink-soft)]">
            <Glossary>{pakete.intro}</Glossary>
          </p>
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
        <Reveal delay={120} className="mt-10">
          <Link
            href="/leistungen"
            className="link-underline inline-flex items-center gap-2 text-[var(--color-sage-soft)]"
          >
            Alle Details zu Leistungen & Preisen ansehen <span aria-hidden>→</span>
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
