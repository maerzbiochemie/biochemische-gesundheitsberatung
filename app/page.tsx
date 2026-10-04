import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Eyebrow, Section } from "@/components/ui";
import { SignalAccordion } from "@/components/SignalAccordion";
import { CTABand } from "@/components/CTABand";
import { WordReveal } from "@/components/Animated";
import { Marquee } from "@/components/Marquee";
import { MoreInfo } from "@/components/MoreInfo";
import { BookingButton } from "@/components/BookingButton";
import { Faq } from "@/components/Faq";
import { Glossary, TermPopover } from "@/components/Glossary";
import { IconUnderstand, IconConnect, IconStructure, IconAct } from "@/components/icons";
import { home, faq, koerperSignaleDetails } from "@/content/site";
import profilPhoto from "@/assets/profil.jpeg";
import heroBotanical from "@/assets/hero-botanical.png";
import heroDnaFarn from "@/assets/hero-dna-farn.png";
import heroDna from "@/assets/hero-dna.png";
import heroMolecule from "@/assets/hero-molecule.png";
import heroBook from "@/assets/hero-book.png";
import zusammenhaengeBuch from "@/assets/zusammenhaenge-buch-freigestellt.png";
import zusammenhaengePapier from "@/assets/zusammenhaenge-papier-textur.png";
import signaleFarn from "@/assets/signale-hintergrund-farn.png";
import ansatzFarn from "@/assets/ansatz-hintergrund-farn.png";
import zweiWegeTexturBeige from "@/assets/zwei-wege-textur-beige.png";
import zweiWegeTexturGruen from "@/assets/zwei-wege-textur-gruen.png";

const approachIcons = [IconUnderstand, IconConnect, IconStructure, IconAct];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      {/* Rebuilt October 2026 (BIO-192). 2026-10-04 revision: a 29-point
          geometry/detail pass on top of the prior exact-spec round — wider
          container (1500px), stronger/bigger corner symbols, a longer centre
          divider reaching back down to button height, more breathing room
          between the hairlines and the column text, a muted-tint secondary
          button, and a new "book" watermark bottom-right using Milva's exact
          supplied file. That book takes the circle drawing's former slot
          (same corner/size) since the spec didn't ask to keep both. */}
      <section className="relative overflow-hidden bg-[var(--color-cream)] pb-10 pt-20 md:pb-12 md:pt-24">
        {/* DNA + fern — centre watermark; opacity 0.08 → 0.12 per the
            2026-10-04 spec's explicit 0.10–0.14 range. Hidden on mobile. */}
        <div className="pointer-events-none absolute left-1/2 top-[400px] z-0 hidden w-[420px] -translate-x-1/2 opacity-[0.12] md:block">
          <Image src={heroDnaFarn} alt="" aria-hidden width={420} height={630} sizes="420px" className="h-auto w-full object-contain" />
        </div>

        {/* Molecule (top-left) + DNA helix (top-right) — still bleed past the
            edge, pulled in slightly and made more visible per the
            2026-10-04 spec's position/opacity ranges. Hidden on mobile. */}
        <div className="pointer-events-none absolute left-[-10px] top-[85px] z-0 hidden aspect-[1536/1024] w-[320px] opacity-[0.42] md:block">
          <Image src={heroMolecule} alt="" aria-hidden fill sizes="320px" className="object-contain object-left-top" />
        </div>
        <div className="pointer-events-none absolute right-[-10px] top-[35px] z-0 hidden aspect-[1024/1536] w-[250px] opacity-[0.44] md:block">
          <Image src={heroDna} alt="" aria-hidden fill sizes="250px" className="object-contain object-right-top" />
        </div>
        {/* Book watermark — bottom right, exact file Milva supplied
            (offenes_buch_mit_dna_und_mikroskop.png), slightly desaturated;
            opacity raised again 0.20 → 0.32 per Milva's "weniger Fade" request. */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[25px] right-[32px] z-0 hidden aspect-[1448/1086] w-[125px] opacity-[0.32] md:block"
          style={{ filter: "saturate(0.75)" }}
        >
          <Image src={heroBook} alt="" fill sizes="125px" className="object-contain object-right-bottom" />
        </div>

        {/* Dedicated hero-wide container: max-width 1500px, width calc(100% -
            96px) per the 2026-10-04 spec (was 1480px). z-[2] so it always
            paints above the edge/centre graphics. */}
        <div className="relative z-[2] mx-auto w-[calc(100%-96px)] max-w-[1500px]">
          {/* Centred intro */}
          <Reveal className="relative mx-auto max-w-[1320px] text-center">
            {/* First (and only) interactive occurrence — tooltip explains "Biochemie". */}
            <p className="eyebrow block text-center text-[19px]">
              <TermPopover term="biochemie">{home.hero.eyebrow}</TermPopover>
            </p>
            <WordReveal
              as="h1"
              text={home.hero.title}
              delay={0.15}
              className="font-display mx-auto mt-[28px] max-w-[1320px] text-center leading-[1.1] tracking-[-0.025em] text-[var(--color-ink)] text-[2.3rem] sm:text-[2.75rem] md:leading-[0.98] md:text-[clamp(64px,4.7vw,82px)]"
            />
          </Reveal>
          <Reveal
            as="p"
            delay={90}
            className="relative mx-auto mt-[30px] max-w-[1260px] text-center font-display leading-[1.3] text-[var(--color-olive)] text-2xl sm:text-3xl md:leading-[1.05] md:text-[clamp(38px,2.8vw,50px)]"
          >
            {home.hero.subtitle}
          </Reveal>

          {/* Two columns — left/right, left-aligned, divided by a fine
              vertical line with a ring+dot centred on it, pulled down to the
              disclaimer per Milva's "bis nach unten ziehen" follow-up; the
              two horizontal lines above the columns are now flush (no
              vertical offset) per her "auf eine Höhe" request. The line
              above each column doubles as the mobile divider once the grid
              stacks. */}
          <div
            className="relative grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_90px_minmax(0,1fr)] md:items-start md:gap-0"
            style={{ marginTop: 65 }}
          >
            <Reveal delay={90} className="relative flex flex-col items-start">
              <span className="h-px w-full bg-[var(--color-olive-line)]" aria-hidden />
              <p
                className="max-w-[610px] text-[var(--color-ink-soft)]"
                style={{ marginTop: 54, fontSize: 22, lineHeight: 1.5 }}
              >
                <span className="text-[#45514D]">{home.hero.left.body}</span>
              </p>
              <h2
                className="font-display max-w-[620px] text-[28px] leading-[1.15] text-[var(--color-ink)] md:text-[32px] lg:text-[46px] lg:leading-[1.05]"
                style={{ marginTop: 38 }}
              >
                {home.hero.left.headline}
              </h2>
              <div style={{ marginTop: 32 }}>
                <BookingButton className="btn-hero-olive w-full justify-center lg:!h-[60px] lg:!w-auto lg:!px-8 lg:!text-[17px] lg:justify-start" />
              </div>
            </Reveal>

            <div aria-hidden className="relative hidden md:block">
              <span className="absolute top-0 h-[530px] left-1/2 w-px -translate-x-1/2 bg-[var(--color-olive-line)]" />
              <span className="absolute left-1/2 top-[265px] h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-olive-line)] bg-[var(--color-cream)]" />
              <span className="absolute left-1/2 top-[265px] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-olive-line)]" />
            </div>

            <Reveal delay={120} className="relative flex flex-col items-start md:pl-[28px]">
              <span className="h-px w-full bg-[var(--color-olive-line)]" aria-hidden />
              <h2
                className="font-display max-w-[620px] text-[28px] leading-[1.15] text-[var(--color-ink)] md:text-[32px] lg:text-[46px] lg:leading-[1.05]"
                style={{ marginTop: 54 }}
              >
                {home.hero.right.headline}
              </h2>
              <p
                className="max-w-[620px] text-[var(--color-ink-soft)]"
                style={{ marginTop: 36, fontSize: 22, lineHeight: 1.5 }}
              >
                <span className="text-[#45514D]">{home.hero.right.body}</span>
              </p>
              <div style={{ marginTop: 32 }}>
                <ButtonLink
                  href={home.hero.right.ctaHref}
                  variant="secondary"
                  className="btn-hero-outline w-full justify-center lg:!h-[60px] lg:!w-auto lg:!px-8 lg:!text-[17px] lg:justify-start"
                >
                  {home.hero.right.ctaLabel}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------- Woran Sie es merken (Symptomblock, Pos. 3) */}
      <Section tone="paper" padding="tight" className="relative overflow-hidden">
        {/* Finished watercolour graphic — plain paper tone plus one pale fern
            in the bottom-left corner. Sized to the image's own aspect ratio
            (not stretched to the section's full height) so the fern stays a
            modest, contained accent behind the headline column instead of
            scaling up with the section's height. */}
        <div className="pointer-events-none absolute bottom-0 left-0 aspect-[1890/832] w-full max-w-[46rem]">
          <Image
            src={signaleFarn}
            alt=""
            aria-hidden
            fill
            sizes="(min-width: 768px) 46rem, 100vw"
            className="object-contain object-left-bottom"
          />
        </div>
        <div className="relative grid gap-12 md:grid-cols-12">
          <div className="flex flex-col md:col-span-5">
            <Reveal>
              <Eyebrow>{home.signalsBlock.eyebrow}</Eyebrow>
              <h2 className="font-display mt-6 text-4xl leading-tight md:text-[3.625rem] md:leading-[1.05]">
                {home.signalsBlock.headline}
              </h2>
              <p className="mt-6 max-w-md text-[var(--color-ink-soft)] md:text-lg">
                {home.signalsBlock.intro}
              </p>
            </Reveal>
            {/* Pflichthinweis unten links in der Spalte verankert (Milva-Wunsch,
                Kommentar 2026-09-28) — Text/Sichtbarkeit unverändert, nur Position. */}
            <p className="mt-10 max-w-md text-xs leading-relaxed text-[var(--color-muted)] md:mt-auto">
              {home.signalsBlock.disclaimer}
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <SignalAccordion
              items={koerperSignaleDetails}
              revealDelay={90}
              disclaimer={home.signalsBlock.disclaimer}
            />
            <Reveal delay={90} className="mt-10 text-[var(--color-ink-soft)] md:text-[1.5rem]">
              <Glossary>{home.signalsBlock.closing}</Glossary>
            </Reveal>
            <Reveal delay={120} className="mt-8">
              <BookingButton label={home.signalsBlock.ctaLabel} />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ---------------- Ein Symptom ist selten die ganze Geschichte (Pos. 4) */}
      <section
        id="ansatz"
        className="relative overflow-hidden bg-[var(--color-cream)] px-6 py-14 min-[600px]:px-10 min-[600px]:py-[88px]"
        style={{ scrollMarginTop: "5rem" }}
      >
        {/* Paper-grain texture at low opacity over the ivory base — this
            replaces the old flat mint-green fill that used to be baked into
            the illustration file itself. */}
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
          <div className="grid grid-cols-1 items-center gap-y-9 min-[901px]:grid-cols-2 min-[901px]:gap-x-10 min-[901px]:gap-y-0 min-[1200px]:gap-x-16">
            {/* Text column — first in source order so it also comes first
                in the single-column mobile/tablet stack. */}
            <div>
              <Reveal>
                <Eyebrow>{home.system.eyebrow}</Eyebrow>
                <h2 className="font-display mt-5 text-[34px] leading-[1.15] tracking-[-0.015em] min-[600px]:text-[46px] min-[600px]:leading-[1.12] min-[901px]:text-[40px] min-[1200px]:text-[46px]">
                  {home.system.title}
                </h2>
              </Reveal>
              <Reveal delay={90}>
                <div className="mt-[26px] space-y-5 text-[18px] leading-[1.6] text-[var(--color-ink-soft)] min-[600px]:text-[20px]">
                  {home.system.body.map((p) => (
                    <p key={p}>
                      <Glossary>{p}</Glossary>
                    </p>
                  ))}
                </div>
                <blockquote className="font-display mt-[30px] text-[26px] leading-[1.3] text-[var(--color-terra)] min-[600px]:text-[30px] min-[901px]:text-[28px] min-[1200px]:text-[30px]">
                  {home.system.pullquote}
                </blockquote>
                <MoreInfo
                  label={home.system.more.label}
                  title={home.system.more.title}
                  body={home.system.more.body}
                  className="mt-[26px] !text-[18px] !leading-[1.5]"
                />
              </Reveal>
            </div>

            {/* Illustration column — real image (book, compass, fern,
                chapter icons), cut out of its original flat-green source so
                only the artwork itself remains, plus a soft sage glow
                behind it that fades into the paper texture with no hard
                edge. Never cropped: width is capped, height scales freely. */}
            <div className="relative">
              <Reveal>
                <div className="relative mx-auto max-w-[480px] min-[901px]:max-w-[580px]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-12 -z-10 rounded-full blur-3xl"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(221,229,215,0.9), rgba(221,229,215,0) 72%)",
                    }}
                  />
                  <Image
                    src={zusammenhaengeBuch}
                    alt=""
                    aria-hidden
                    sizes="(min-width: 901px) 580px, 480px"
                    className="h-auto w-full"
                  />
                </div>
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
