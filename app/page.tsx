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
import { home, faq } from "@/content/site";
import profilPhoto from "@/assets/profil.jpeg";
import visionFarnGross from "@/assets/vision-farn-gross.png";
import visionZweigKlein from "@/assets/vision-zweig-klein.png";
import heroDna from "@/assets/hero-dna-trim.png";
import situationFarn from "@/assets/situation-farn.png";
import frontPhoto from "@/assets/front.jpeg";
import zusammenhaengePapier from "@/assets/zusammenhaenge-papier-textur.png";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      {/* Layout structure (BIO-206): .hero > .container-wide > .hero-intro,
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

        <div className="container-wide hero-content">
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

        <div className="container-wide situation-grid">
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
      {/* Layout structure: .vision > .container-wide.vision-grid >
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

        <div className="container-wide vision-grid">
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
        className="relative overflow-hidden bg-[var(--color-cream)] py-14 min-[600px]:py-24 min-[1200px]:py-32"
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

        <div className="relative container-wide">
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
                <h2 className="font-display mt-5 text-[36px] leading-[1.15] tracking-[-0.015em] md:text-[56px] md:leading-[1.08]">
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

      {/* -------------------------------------- Mein Ansatz (4 Schritte, Pos. 5, BIO-207) */}
      {/* Flat editorial rework (Milva reference, 2026-10-20): no cards, no
          icons, no connector lines — a fine rule above each step, taupe
          number + serif title + sans body, two equal columns from md up.
          Only the circle motif is absolutely positioned (purely decorative,
          cropped at the section's own top-right corner). */}
      <section className="approach-section">
        <div aria-hidden className="approach-motif">
          <Image
            src="/kreiszeichnung-aus-original-transparent.png"
            alt=""
            fill
            sizes="380px"
            className="object-contain"
          />
        </div>

        <div className="container-wide">
          <Reveal className="approach-head">
            <p className="eyebrow">{home.approach.eyebrow}</p>
            <h2 className="font-display approach-title">{home.approach.title}</h2>
          </Reveal>

          <div className="approach-grid">
            {home.approach.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 70} className="approach-step">
                <span className="approach-step-num font-display">{step.n}</span>
                <div>
                  <h3 className="font-display approach-step-title">{step.title}</h3>
                  <p className="approach-step-body">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={90}>
            <Link href="/leistungen" className="link-underline approach-link">
              Leistungen & Preise ansehen <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- Für wen: Zwei Wege (Pos. 6, BIO-207) */}
      {/* Flat two-panel rework (Milva reference, 2026-10-20): no paper
          texture, no dark-filled card — two equal panels stretched to the
          same height by CSS grid; buttons anchor to each panel's bottom via
          flex + margin-top:auto, never a fixed card height. The molecule
          motif sits only behind the left (Privatkunden) panel. */}
      <section className="audience-section">
        <div className="container-wide">
          <Reveal className="audience-head">
            <p className="eyebrow">{home.audience.eyebrow}</p>
            <h2 className="font-display audience-title">{home.audience.title}</h2>
          </Reveal>

          <div className="audience-grid">
            {home.audience.cards.map((card, i) => {
              const isB2B = i === 1;
              return (
                <Reveal
                  key={card.label}
                  delay={i * 90}
                  className={`audience-card ${isB2B ? "audience-card--dark" : "audience-card--light"}`}
                >
                  {!isB2B && (
                    <div aria-hidden className="audience-motif">
                      <Image
                        src="/molekuel-aus-original-transparent.png"
                        alt=""
                        fill
                        sizes="190px"
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div className="audience-card-body">
                    <p className="eyebrow">{card.label}</p>
                    <h3 className="font-display audience-card-title">{card.headline}</h3>
                    <p className="audience-card-text">{card.body}</p>
                  </div>
                  <div className="audience-card-foot">
                    <ButtonLink href={card.button.href} variant="secondary" className="btn-outline-olive">
                      {card.button.label}
                    </ButtonLink>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------- Über mich (Kurzbio, Pos. 7, BIO-207) */}
      {/* Calm two-column rework (Milva reference, 2026-10-20): no card frame
          around the portrait, no extra illustration — only the existing
          portrait photo and real document-flow text, headline-first reading
          order (eyebrow, H2, intro, closing, qualifications, link). */}
      <section className="kurzbio-section">
        <div className="container-wide kurzbio-grid">
          <Reveal className="kurzbio-portrait">
            <Image
              src={profilPhoto}
              alt="Milva März"
              fill
              sizes="(min-width: 768px) 420px, 360px"
              placeholder="blur"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={90} className="kurzbio-copy">
            <p className="eyebrow">{home.aboutTeaser.eyebrow}</p>
            <h2 className="font-display kurzbio-title">{home.aboutTeaser.highlight}</h2>
            <p className="kurzbio-intro">
              <Glossary>{home.aboutTeaser.intro}</Glossary>
            </p>
            <p className="kurzbio-closing">{home.aboutTeaser.closing}</p>
            <p className="kurzbio-qualifikationen">{home.aboutTeaser.qualifikationen}</p>
            <Link href="/ueber-mich" className="link-underline kurzbio-link">
              Mehr über mich erfahren <span aria-hidden>→</span>
            </Link>
          </Reveal>
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
