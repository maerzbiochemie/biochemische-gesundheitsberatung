import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Eyebrow, Section } from "@/components/ui";
import { TopicsSection } from "@/components/TopicsSection";
import { CTABand } from "@/components/CTABand";
import { WordReveal } from "@/components/Animated";
import { Marquee } from "@/components/Marquee";
import { CompassBookletIllustration } from "@/components/CompassBookletIllustration";
import { BookingButton } from "@/components/BookingButton";
import { Faq } from "@/components/Faq";
import { Glossary } from "@/components/Glossary";
import { IconUnderstand, IconConnect, IconStructure, IconAct } from "@/components/icons";
import { home, faq } from "@/content/site";
import profilPhoto from "@/assets/profil.jpeg";
import visionFarnGross from "@/assets/vision-farn-gross.png";
import visionZweigKlein from "@/assets/vision-zweig-klein.png";
import heroBotanical from "@/assets/hero-botanical.png";
import heroDna from "@/assets/hero-dna-trim.png";
import situationFarn from "@/assets/situation-farn.png";
import frontPhoto from "@/assets/front.jpeg";
import zusammenhaengePapier from "@/assets/zusammenhaenge-papier-textur.png";
import ansatzFarn from "@/assets/ansatz-hintergrund-farn.png";
import zweiWegeTexturBeige from "@/assets/zwei-wege-textur-beige.png";
import zweiWegeTexturGruen from "@/assets/zwei-wege-textur-gruen.png";

const approachIcons = [IconUnderstand, IconConnect, IconStructure, IconAct];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      {/* Layout structure (BIO-206): .hero > .site-container > .hero-intro,
          a single left-aligned text column. Only the grain and the DNA
          illustration are absolutely positioned (purely decorative). */}
      <section className="hero">
        {/* Feines Papierkorn — reines CSS/SVG-Rauschen, keine neue Bilddatei. */}
        <div
          aria-hidden
          className="hero-grain"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="wide-container hero-content">
          <div className="hero-grid">
            <div className="hero-intro">
              <Reveal>
                <p className="eyebrow">{home.hero.eyebrow}</p>
                <h1 className="font-display hero-title">
                  <WordReveal as="span" text={home.hero.title} delay={0.15} />
                </h1>
              </Reveal>

              <Reveal as="p" delay={90} className="hero-subtitle font-display">
                {home.hero.subtitle}
              </Reveal>

              <Reveal as="p" delay={110} className="hero-description">
                {home.hero.description}
              </Reveal>

              <Reveal delay={130} className="hero-actions">
                <BookingButton className="btn-hero-olive hero-cta" />
                <Link
                  href={home.hero.secondaryCtaHref}
                  className="link-underline hero-secondary-link"
                >
                  {home.hero.secondaryCtaLabel} <span aria-hidden>↗</span>
                </Link>
              </Reveal>
            </div>

            <div aria-hidden className="hero-illustration">
              <Image src={heroDna} alt="" aria-hidden fill sizes="(min-width: 1024px) 30vw, 0px" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- Sie investieren viel in Ihre Gesundheit (BIO-206) */}
      {/* Directly below the hero, same colour family. Only the fern
          illustration is absolutely positioned (purely decorative, scoped to
          this section); text uses normal document flow in a responsive grid. */}
      <section className="situation">
        <div aria-hidden className="situation-fern">
          <Image src={situationFarn} alt="" fill sizes="640px" className="object-contain" />
        </div>

        <div className="wide-container situation-grid">
          <Reveal className="situation-copy">
            <p className="eyebrow">{home.situation.eyebrow}</p>
            <h2 className="font-display situation-title">{home.situation.headline}</h2>
            <p className="situation-body">{home.situation.body}</p>
            <p className="font-display situation-question">{home.situation.question}</p>
          </Reveal>

          <Reveal delay={90} className="situation-panel">
            <p className="eyebrow">{home.situation.approach.eyebrow}</p>
            <h3 className="font-display situation-panel-title">{home.situation.approach.headline}</h3>
            <p className="situation-panel-lead">{home.situation.approach.lead}</p>
            <p className="situation-panel-body">{home.situation.approach.body}</p>
            <Link
              href={home.situation.approach.ctaHref}
              className="link-underline situation-panel-link"
            >
              {home.situation.approach.ctaLabel} <span aria-hidden>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- Über mich & meine Vision (BIO-197) */}
      {/* Layout structure: .vision > .site-container.vision-grid >
          (.vision-head + .vision-body + .vision-visual). The visual spans
          grid rows 1-2 beside headline and body copy, so it starts level
          with the headline (Milva-Wunsch, 2026-10-18). Portrait and quote
          card share one relative wrapper; the card overlaps the portrait via
          negative margin, never absolute coordinates. Only the ferns are
          absolutely positioned. */}
      <section className="vision">
        <div aria-hidden className="vision-bg-left">
          <Image src={visionFarnGross} alt="" fill sizes="260px" className="object-contain" />
        </div>

        <div className="site-container vision-grid">
          <Reveal className="vision-copy vision-head">
            <span className="inline-flex items-center gap-[18px]">
              <span className="vision-eyebrow">{home.visionIntro.eyebrow}</span>
              <span aria-hidden className="vision-eyebrow-line" />
            </span>

            <h2 className="vision-title font-display">{home.visionIntro.headline}</h2>
          </Reveal>

          <Reveal className="vision-copy vision-body" delay={60}>
            <div className="vision-copy-block">
              <h3 className="font-display">{home.visionIntro.introHeading}</h3>
              <p>
                {home.visionIntro.bio.map((part, i) =>
                  part.bold ? (
                    <strong key={i}>{part.text}</strong>
                  ) : (
                    <span key={i}>{part.text}</span>
                  )
                )}
              </p>
            </div>

            <div className="vision-copy-block">
              <h3 className="font-display">{home.visionIntro.visionHeading}</h3>
              <p>
                {home.visionIntro.vision.map((part, i) =>
                  "break" in part && part.break ? null : part.bold ? (
                    <strong key={i}>{part.text}</strong>
                  ) : (
                    <span key={i}>{part.text}</span>
                  )
                )}
              </p>
            </div>
          </Reveal>

          <Reveal delay={90} className="vision-visual-slot">
            <div className="vision-visual">
              <div aria-hidden className="vision-fern">
                <Image src={visionFarnGross} alt="" fill sizes="580px" className="object-contain" />
              </div>

              <div className="portrait-card">
                <div className="portrait-image">
                  <Image
                    src={frontPhoto}
                    alt="Milva März"
                    fill
                    sizes="(min-width: 768px) 440px, 100vw"
                    placeholder="blur"
                    className="object-cover object-[50%_12%]"
                  />
                </div>
              </div>

              <div className="quote-card">
                <div aria-hidden className="quote-branch">
                  <Image src={visionZweigKlein} alt="" fill sizes="82px" className="object-contain" />
                </div>
                <div>
                  <blockquote className="font-display">{home.visionIntro.quote}</blockquote>
                  <span aria-hidden className="quote-rule" />
                  <p className="quote-signature-name">{home.visionIntro.signatureName}</p>
                  <p className="quote-signature-role">{home.visionIntro.signatureRole}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------- Wenn Standardantworten nicht weiterhelfen (BIO-198) */}
      <TopicsSection />

      {/* ---------------------------- Biochemischer Kompass (BIO-201, Pos. 4) */}
      <section
        id="ansatz"
        className="relative overflow-hidden bg-[var(--color-cream)] px-6 py-14 min-[600px]:px-10 min-[600px]:py-24 min-[1200px]:py-32"
        style={{ scrollMarginTop: "5rem" }}
      >
        {/* Paper-grain texture at low opacity over the ivory base — unchanged
            from the previous version of this section. */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={zusammenhaengePapier}
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover opacity-[0.48]"
          />
        </div>

        <div className="relative mx-auto max-w-[1360px]">
          {/* Illustration first in source order so it also comes first in
              the single-column mobile stack (BIO-201 spec: booklet, then
              label, heading, both paragraphs, button, hint). On desktop the
              same order places it in the left (narrower, ~42%) column. */}
          <div className="grid grid-cols-1 items-center gap-y-10 min-[901px]:grid-cols-[42fr_58fr] min-[901px]:gap-y-0 min-[901px]:gap-x-16 min-[1200px]:gap-x-20">
            <div>
              <Reveal>
                <div className="mx-auto max-w-[420px] min-[901px]:mx-0 min-[901px]:max-w-none">
                  <CompassBookletIllustration />
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal>
                <Eyebrow>{home.system.eyebrow}</Eyebrow>
                <h2 className="font-display mt-5 text-[34px] leading-[1.15] tracking-[-0.015em] min-[600px]:text-[46px] min-[600px]:leading-[1.12] min-[901px]:text-[40px] min-[1200px]:text-[46px]">
                  {home.system.title}
                </h2>
              </Reveal>
              <Reveal delay={90}>
                <div className="mt-8 space-y-6 text-[18px] leading-[1.6] text-[var(--color-ink-soft)] min-[600px]:text-[20px]">
                  {home.system.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <div className="mt-8">
                  <ButtonLink href={home.system.buttonHref} variant="primary">
                    {home.system.buttonLabel}
                  </ButtonLink>
                </div>
                <p className="mt-5 max-w-[480px] text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {home.system.note}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* -------- Keyword-Band — direkt unter dem Kompass-Abschnitt, ohne Lücke */}
      <Marquee />

      {/* -------------------------------------- Mein Ansatz (4 Phasen, Pos. 5) */}
      {/* Own container instead of <Section> (78rem/container-x cap) — this
          block alone uses a wider 1480px content column per Milva's spec,
          without touching the shared container-x utility other pages rely
          on. */}
      <section className="relative overflow-hidden bg-[var(--color-paper)] py-20 md:py-28 lg:py-32">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[7rem] md:block lg:w-[9rem]">
          <Image
            src={ansatzFarn}
            alt=""
            aria-hidden
            fill
            sizes="9rem"
            className="object-contain object-right"
          />
        </div>
        <div className="relative mx-auto w-full max-w-[1480px] px-6 md:px-14">
          <Reveal className="max-w-2xl">
            <Eyebrow>{home.approach.eyebrow}</Eyebrow>
            <h2 className="font-display mt-6 text-[36px] leading-[1.15] md:text-[56px] md:leading-[1.08]">
              {home.approach.title}
            </h2>
          </Reveal>

          {/* Mobile: simple stacked cards, no connector lines. */}
          <div className="mt-14 space-y-8 md:hidden">
            {home.approach.steps.map((step, i) => {
              const Icon = approachIcons[i];
              return (
                <Reveal
                  key={step.n}
                  delay={90}
                  className="rounded-[4px] border border-[var(--color-line)] p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[44px] leading-none text-[var(--color-terra)]">
                      {step.n}
                    </span>
                    <Icon className="h-7 w-7 text-[var(--color-terra)] opacity-80" />
                  </div>
                  <h3 className="font-display mt-4 text-2xl">{step.title}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-[var(--color-ink-soft)]">
                    {step.body}
                  </p>
                </Reveal>
              );
            })}
          </div>

          {/* Desktop: 2x2 grid. The middle column/row are thin gutters that
              host the fine connector line+dot (between columns) and the
              short connector tick (between rows), so they sit strictly
              between cards and never overlap them. Cards keep CSS grid's
              default row-stretch, which is what gives both cards in a row
              equal height even though 02's longer copy is what sets it. */}
          <div className="relative mt-16 hidden md:grid md:grid-cols-[1fr_44px_1fr] md:grid-rows-[auto_44px_auto]">
            {home.approach.steps.map((step, i) => {
              const Icon = approachIcons[i];
              const colClass = i % 2 === 0 ? "md:col-start-1" : "md:col-start-3";
              const rowClass = i < 2 ? "md:row-start-1" : "md:row-start-3";
              return (
                <Reveal
                  key={step.n}
                  delay={90}
                  className={`rounded-[4px] border border-[var(--color-line)] p-8 transition-colors duration-500 hover:border-[var(--color-sage-soft)] lg:p-10 ${colClass} ${rowClass}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[60px] leading-none text-[var(--color-terra)] lg:text-[64px]">
                      {step.n}
                    </span>
                    <Icon className="h-8 w-8 text-[var(--color-terra)] opacity-80" />
                  </div>
                  <h3 className="font-display mt-6 text-[28px] lg:text-[30px]">{step.title}</h3>
                  <p className="mt-4 text-[19px] leading-relaxed text-[var(--color-ink-soft)] lg:text-[20px]">
                    {step.body}
                  </p>
                </Reveal>
              );
            })}
            <div
              aria-hidden
              className="relative flex items-center"
              style={{ gridColumnStart: 2, gridRowStart: 1 }}
            >
              <span className="h-px w-full bg-[var(--color-line)]" />
              <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-sage-soft)]" />
            </div>
            <div
              aria-hidden
              className="relative flex items-center"
              style={{ gridColumnStart: 2, gridRowStart: 3 }}
            >
              <span className="h-px w-full bg-[var(--color-line)]" />
              <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-sage-soft)]" />
            </div>
            <div
              aria-hidden
              className="flex justify-center"
              style={{ gridColumnStart: 1, gridRowStart: 2 }}
            >
              <span className="h-full w-px bg-[var(--color-line)]" />
            </div>
            <div
              aria-hidden
              className="flex justify-center"
              style={{ gridColumnStart: 3, gridRowStart: 2 }}
            >
              <span className="h-full w-px bg-[var(--color-line)]" />
            </div>
          </div>

          <Reveal className="relative mt-10">
            <Link
              href="/leistungen"
              className="link-underline inline-flex items-center gap-2 text-[19px] text-[var(--color-sage-deep)]"
            >
              Leistungen & Preise ansehen <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- Für wen: Zwei Wege (Pos. 6) */}
      {/* Own container instead of <Section> (78rem/container-x cap) — the
          card row itself (663px card + 60px gap + 663px card = 1386px) is
          per Milva's exact reference math; the outer max-width is 1386px
          plus this block's own 56px side padding (112px total) so the row
          hits exactly 1386px once padding is subtracted, without touching
          the shared container-x utility other pages rely on. */}
      <section className="relative overflow-hidden bg-[var(--color-cream)] py-20 md:py-28 lg:py-32">
        <div className="relative mx-auto w-full max-w-[1498px] px-6 md:px-14">
          <div className="flex items-start justify-between gap-8">
            <Reveal className="max-w-2xl">
              <Eyebrow>{home.audience.eyebrow}</Eyebrow>
              <h2 className="font-display mt-6 text-4xl leading-tight md:text-[56px] md:leading-[1.08]">
                {home.audience.title}
              </h2>
            </Reveal>
            <Reveal delay={90} className="hidden shrink-0 md:block">
              <p className="font-sans text-[11px] font-normal uppercase leading-[1.7] tracking-[1.8px] text-[var(--color-walnut)]">
                BIOCHEMIE
                <br />
                FÜR EIN
                <br />
                KLARERES MORGEN
              </p>
              <span className="mt-2 block h-px w-[45px] bg-[var(--color-walnut)]" />
            </Reveal>
          </div>

          {/* Mobile: stacked boxes, no connector line, straight corners like
              the desktop reference. */}
          <Reveal delay={90} className="mt-10 md:hidden">
            <p className="font-sans text-[11px] font-normal uppercase leading-[1.7] tracking-[1.8px] text-[var(--color-walnut)]">
              BIOCHEMIE
              <br />
              FÜR EIN
              <br />
              KLARERES MORGEN
            </p>
            <span className="mt-2 block h-px w-[45px] bg-[var(--color-walnut)]" />
          </Reveal>
          <Reveal delay={90} className="mt-8 space-y-6 md:hidden">
            {home.audience.cards.map((card, i) => {
              const isB2B = i === 1;
              return (
                <div
                  key={card.label}
                  className={`relative overflow-hidden p-6 ${
                    isB2B ? "pb-[200px]" : "pb-[210px] border border-[var(--color-line)]"
                  }`}
                >
                  {isB2B ? (
                    <Image src={zweiWegeTexturGruen} alt="" aria-hidden fill className="object-cover" />
                  ) : (
                    <Image src={zweiWegeTexturBeige} alt="" aria-hidden fill className="object-cover" />
                  )}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-4 right-4 w-[135px] select-none"
                  >
                    <img
                      src={isB2B ? "/kreiszeichnung-aus-original-transparent.png" : "/molekuel-aus-original-transparent.png"}
                      alt=""
                    />
                  </div>
                  {isB2B ? (
                    <div className="pointer-events-none absolute bottom-[120px] right-4 text-right select-none">
                      <p className="font-sans text-[11px] font-normal uppercase leading-[1.7] tracking-[1.8px] text-[var(--color-sand)]">
                        DATEN
                        <br />
                        ZUSAMMENHÄNGE
                        <br />
                        KLARHEIT
                      </p>
                      <span className="ml-auto mt-2 block h-px w-[45px] bg-[var(--color-sand)]" />
                    </div>
                  ) : (
                    <div className="pointer-events-none absolute bottom-6 left-6 select-none">
                      <p className="font-sans text-[11px] font-normal uppercase leading-[1.7] tracking-[1.8px] text-[var(--color-walnut)]">
                        MENSCH
                        <br />
                        BIOCHEMIE
                        <br />
                        ALLTAG
                      </p>
                      <span className="mt-2 block h-px w-[45px] bg-[var(--color-walnut)]" />
                    </div>
                  )}
                  <div className="relative">
                    <span className="font-display text-[36px] leading-none text-[var(--color-terra)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-3 block h-px w-[130px] bg-[var(--color-terra)]" />
                    <span className={`eyebrow mt-3 block ${isB2B ? "!text-[var(--color-sand)]" : ""}`}>
                      {card.label}
                    </span>
                    <h3
                      className={`font-display mt-3 text-[25px] leading-snug ${
                        isB2B ? "text-[var(--color-paper)]" : "text-[var(--color-ink)]"
                      }`}
                    >
                      {card.headline}
                    </h3>
                    <p
                      className={`mt-3 text-[17px] leading-[1.5] ${
                        isB2B ? "text-[var(--color-paper)]/80" : "text-[var(--color-ink-soft)]"
                      }`}
                    >
                      {card.body}
                    </p>
                    <div className="mt-6">
                      <ButtonLink
                        href={card.button.href}
                        variant={isB2B ? "primary" : "secondary"}
                        className={`!text-[17px] ${isB2B ? "!bg-[var(--color-paper)] !text-[var(--color-sage-tief)]" : ""}`}
                      >
                        {card.button.label}
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>

          {/* Desktop: two offset boxes with a fine connector line+dot between
              them — never over them. Left box sits 16px lower than the right
              one (and so ends lower too), matching the editorial stagger in
              the reference. Min-heights (not fixed heights) so longer text
              never gets clipped. */}
          <Reveal
            delay={90}
            className="relative mt-16 hidden md:grid md:grid-cols-[1fr_60px_1fr]"
          >
            {home.audience.cards.map((card, i) => {
              const isB2B = i === 1;
              return (
                <div
                  key={card.label}
                  className={`relative self-start overflow-hidden p-[60px] md:row-start-1 ${
                    isB2B
                      ? "md:col-start-3 min-h-[700px]"
                      : "md:col-start-1 mt-4 min-h-[720px] border border-[var(--color-line)]"
                  }`}
                >
                  {isB2B ? (
                    <Image src={zweiWegeTexturGruen} alt="" aria-hidden fill className="object-cover" />
                  ) : (
                    <Image src={zweiWegeTexturBeige} alt="" aria-hidden fill className="object-cover" />
                  )}
                  {/* Illustration — decorative layer, behind the text. Only
                      width is set (height auto) so the PNG's own aspect
                      ratio is never distorted. The small negative offsets
                      compensate for each PNG's own transparent margin so the
                      visible line-art lands exactly where the reference has
                      it, without changing the box's overflow-hidden. */}
                  {isB2B ? (
                    <img
                      aria-hidden="true"
                      alt=""
                      src="/kreiszeichnung-aus-original-transparent.png"
                      className="pointer-events-none absolute select-none"
                      style={{ width: 246, right: 52, bottom: -4 }}
                    />
                  ) : (
                    <img
                      aria-hidden="true"
                      alt=""
                      src="/molekuel-aus-original-transparent.png"
                      className="pointer-events-none absolute select-none"
                      style={{ width: 216, right: -8, bottom: 4 }}
                    />
                  )}
                  {isB2B ? (
                    <div className="pointer-events-none absolute bottom-[136px] right-4 text-right select-none">
                      <p className="font-sans text-[11px] font-normal uppercase leading-[1.7] tracking-[1.8px] text-[var(--color-sand)]">
                        DATEN
                        <br />
                        ZUSAMMENHÄNGE
                        <br />
                        KLARHEIT
                      </p>
                      <span className="ml-auto mt-2 block h-px w-[45px] bg-[var(--color-sand)]" />
                    </div>
                  ) : (
                    <div className="pointer-events-none absolute bottom-[30px] left-12 select-none">
                      <p className="font-sans text-[11px] font-normal uppercase leading-[1.7] tracking-[1.8px] text-[var(--color-walnut)]">
                        MENSCH
                        <br />
                        BIOCHEMIE
                        <br />
                        ALLTAG
                      </p>
                      <span className="mt-2 block h-px w-[45px] bg-[var(--color-walnut)]" />
                    </div>
                  )}
                  <div className="relative">
                    <span className="font-display text-[36px] leading-none text-[var(--color-terra)] lg:text-[38px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-3 block h-px w-[130px] bg-[var(--color-terra)]" />
                    <span className={`eyebrow mt-3 block ${isB2B ? "!text-[var(--color-sand)]" : ""}`}>
                      {card.label}
                    </span>
                    <h3
                      className={`font-display mt-5 max-w-[26rem] text-[38px] leading-snug lg:text-[40px] ${
                        isB2B ? "text-[var(--color-paper)]" : "text-[var(--color-ink)]"
                      }`}
                    >
                      {card.headline}
                    </h3>
                    <p
                      className={`mt-5 max-w-[26rem] text-[19px] leading-[1.5] lg:text-[20px] ${
                        isB2B ? "text-[var(--color-paper)]/80" : "text-[var(--color-ink-soft)]"
                      }`}
                    >
                      {card.body}
                    </p>
                    <div className="mt-9">
                      <ButtonLink
                        href={card.button.href}
                        variant={isB2B ? "primary" : "secondary"}
                        className={`!text-[19px] ${isB2B ? "!bg-[var(--color-paper)] !text-[var(--color-sage-tief)]" : ""}`}
                      >
                        {card.button.label}
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              );
            })}
            <div aria-hidden className="relative md:col-start-2 md:row-start-1">
              <span className="absolute left-1/2 -top-5 -bottom-5 w-px -translate-x-1/2 bg-[var(--color-terra)]" />
              <span className="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-terra)]" />
              <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-terra)]" />
            </div>
          </Reveal>

          {/* Closing line — sits below the lower (left) card. */}
          <Reveal delay={90} className="mt-[30px] flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <span className="flex items-center gap-3">
              <span className="hidden h-px w-[45px] bg-[var(--color-sage-deep)] md:inline-block" />
              <span className="font-sans text-[12px] font-normal uppercase leading-[1.7] tracking-[1.8px] text-[var(--color-sage-deep)]">
                Wissenschaft trifft Praxis
              </span>
            </span>
            <span className="font-sans text-[12px] font-normal uppercase leading-[1.7] tracking-[1.8px] text-[var(--color-walnut)]">
              Ganzheitlich. Fundiert. Individuell.
            </span>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------- Kurzbio Milva (Pos. 7) */}
      <section className="relative overflow-hidden bg-[var(--color-cream)] px-6 py-14 min-[600px]:px-8 min-[600px]:py-[88px]">
        {/* Same finished watercolour graphic as the hero, reused rather than
            regenerated (per BIO-178) — but only the narrow left-edge sliver
            that holds the small leaf cluster. Constraining the image's own
            box to a fraction of the section width is what makes object-cover
            crop to that sliver instead of the big centre branch; the plain
            cream section background (already "ruhiges Papier") carries the
            rest, so no leaves land behind the text column. */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[62%] max-w-[520px] min-[900px]:w-[34%]"
          style={{
            maskImage: "linear-gradient(to right, black 55%, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to right, black 55%, transparent 95%)",
          }}
        >
          <Image
            src={heroBotanical}
            alt=""
            aria-hidden
            fill
            sizes="520px"
            className="object-cover object-left"
          />
        </div>
        <div className="relative mx-auto flex max-w-[1240px] flex-col gap-9 min-[900px]:flex-row min-[900px]:items-center min-[900px]:gap-x-[80px] min-[900px]:gap-y-0">
          <Reveal className="relative mx-auto w-full max-w-[320px] min-[900px]:mx-0 min-[900px]:w-[360px] min-[900px]:max-w-[360px] min-[900px]:shrink-0">
            <div className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-paper)] p-4 shadow-[0_20px_44px_-30px_rgba(27,33,28,0.28)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[14px]">
                <Image
                  src={profilPhoto}
                  alt="Milva März"
                  fill
                  sizes="(max-width: 900px) 320px, 360px"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <div className="min-[900px]:max-w-[680px]">
            <Reveal>
              <Eyebrow>{home.aboutTeaser.eyebrow}</Eyebrow>
              <p className="mt-6 text-[18px] leading-[1.6] text-[var(--color-ink-soft)] min-[600px]:text-[20px]">
                <Glossary>{home.aboutTeaser.intro}</Glossary>
              </p>
              <p className="font-display mt-7 text-[28px] font-normal leading-[1.2] text-[var(--color-sage-deep)] min-[600px]:text-[36px]">
                {home.aboutTeaser.highlight}
              </p>
              <p className="mt-5 text-[18px] leading-[1.6] text-[var(--color-ink-soft)] min-[600px]:text-[20px]">
                {home.aboutTeaser.closing}
              </p>
              <p className="mt-6 text-sm leading-[1.6] tracking-wide text-[var(--color-sage-deep)]">
                {home.aboutTeaser.qualifikationen}
              </p>
              <Link
                href="/ueber-mich"
                className="link-underline mt-7 inline-flex items-center gap-2 text-lg text-[var(--color-sage-deep)]"
              >
                Mehr über mich erfahren <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- FAQ */}
      <Section tone="deep" id="faq">
        <Reveal className="max-w-2xl">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{faq.title}</h2>
          <p className="mt-6 text-lg text-[var(--color-ink-soft)]">{faq.subtitle}</p>
        </Reveal>
        <Faq items={faq.items.slice(0, 5)} />
        <Reveal className="mt-8">
          <Link href="/faq" className="link-underline inline-flex items-center gap-2 text-[var(--color-sage-deep)]">
            Alle Fragen ansehen <span aria-hidden>→</span>
          </Link>
        </Reveal>
        <Reveal className="mt-12 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <h3 className="font-display text-2xl md:text-3xl">{faq.cta.title}</h3>
              <p className="mt-3 text-[var(--color-ink-soft)]">{faq.cta.body}</p>
            </div>
            <div className="md:col-span-5 md:flex md:justify-end">
              <BookingButton />
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand />
    </>
  );
}
