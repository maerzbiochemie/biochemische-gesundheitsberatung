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
import { Portrait } from "@/components/Portrait";
import { Faq } from "@/components/Faq";
import { Glossary, TermPopover } from "@/components/Glossary";
import { IconUnderstand, IconConnect, IconStructure, IconAct } from "@/components/icons";
import { site, home, faq, koerperSignaleDetails } from "@/content/site";
import frontPhoto from "@/assets/front.jpeg";
import profilPhoto from "@/assets/profil.jpeg";
import heroBotanical from "@/assets/hero-botanical.png";
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
      <section className="relative overflow-hidden bg-[var(--color-cream)] pb-20 pt-20 md:pb-28 md:pt-24">
        {/* Finished watercolour background graphic (paper texture + botanical
            branch + left-edge leaf cluster) — a real image file, not a
            generated CSS/SVG illustration. Sits behind all real content.
            The wrapper is pinned to the image's own aspect ratio (not the
            hero section's, which varies with copy length) so object-cover
            never has to scale/crop more than necessary — below it the
            section's plain cream background shows through on tall pages. */}
        <div className="absolute inset-x-0 top-0 aspect-[1756/896] w-full">
          <Image
            src={heroBotanical}
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="pointer-events-none object-cover object-center"
          />
        </div>
        <div className="container-wide relative">
          <Reveal>
            {/* First (and only) interactive occurrence — tooltip explains "Biochemie". */}
            <Eyebrow>
              <TermPopover term="biochemie">{home.hero.eyebrow}</TermPopover>
            </Eyebrow>
          </Reveal>
          {/* Heading and the credentials card share the same top edge on desktop. */}
          <div className="mt-7 grid gap-10 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-7 lg:col-span-6">
              <WordReveal
                as="h1"
                text={home.hero.title}
                delay={0.15}
                className="font-display max-w-md text-[2.3rem] leading-[1.08] sm:max-w-xl sm:text-5xl lg:max-w-[690px] lg:text-[5rem] lg:leading-[1]"
              />
              <Reveal
                as="p"
                delay={90}
                className="mt-6 max-w-2xl font-display text-xl text-[var(--color-sage-deep)] md:text-2xl"
              >
                {home.hero.subtitle}
              </Reveal>
              <div className="mt-10 space-y-5 text-lg text-[var(--color-ink-soft)]">
                {home.hero.body.map((p) => (
                  <p key={p}>
                    <Glossary>{p}</Glossary>
                  </p>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-start">
                <BookingButton />
                <ButtonLink href={site.cta.secondary.href} variant="secondary">
                  {site.cta.secondary.label}
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={90} className="md:col-span-5 md:col-start-9 md:self-start lg:col-span-5 lg:col-start-8 lg:pl-20">
              <div className="card flex w-full max-w-[28rem] flex-col p-7 md:p-8">
                {/* Credentials lead the card; the portrait sits below as a
                    personal touch, not the dominant element. */}
                <p className="font-display text-[1.6rem] leading-snug md:text-[1.75rem]">
                  „{home.hero.heroQuote}“
                </p>
                <dl className="mt-7 space-y-4 text-sm">
                  {home.hero.facts.map(([k, v]) => (
                    <div key={k} className="flex flex-col gap-0.5">
                      <dt className="text-[var(--color-muted)]">{k}</dt>
                      <dd className="text-[var(--color-ink)]">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8 border-t border-[var(--color-line)] pt-7">
                  <Portrait
                    src={frontPhoto}
                    alt="Milva März"
                    ratio="aspect-[5/4]"
                    position="object-[center_25%]"
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------- Keyword-Band (Pos. 2) — trägt jetzt die Themenfelder-Symbole */}
      <Marquee />

      {/* ------------------------- Woran Sie es merken (Symptomblock, Pos. 3) */}
      <Section tone="paper" className="relative overflow-hidden">
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
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>{home.signalsBlock.eyebrow}</Eyebrow>
              <h2 className="font-display mt-6 text-4xl leading-tight md:text-[3.625rem] md:leading-[1.05]">
                {home.signalsBlock.headline}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <SignalAccordion items={koerperSignaleDetails} revealDelay={90} />
            <Reveal delay={90} className="mt-10 text-[var(--color-ink-soft)] md:text-[1.5rem]">
              <Glossary>{home.signalsBlock.closing}</Glossary>
            </Reveal>
            <p className="mt-4 text-xs leading-relaxed text-[var(--color-muted)]">
              {home.signalsBlock.disclaimer}
            </p>
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
