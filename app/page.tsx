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
import zusammenhaengeKompass from "@/assets/zusammenhaenge-kompass.png";
import signaleFarn from "@/assets/signale-hintergrund-farn.png";

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
            <Reveal delay={160} className="md:col-span-7 lg:col-span-6">
              <WordReveal
                as="h1"
                text={home.hero.title}
                delay={0.15}
                className="font-display max-w-md text-[2.3rem] leading-[1.08] sm:max-w-xl sm:text-5xl lg:max-w-[690px] lg:text-[5rem] lg:leading-[1]"
              />
              <Reveal
                as="p"
                delay={120}
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

            <Reveal delay={240} className="md:col-span-5 md:col-start-9 md:self-start lg:col-span-5 lg:col-start-8 lg:pl-20">
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
            <SignalAccordion items={koerperSignaleDetails} />
            <Reveal delay={120} className="mt-10 text-[var(--color-ink-soft)] md:text-[1.5rem]">
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
        className="relative overflow-hidden bg-[var(--color-sage-mist)] px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-16 lg:px-0 lg:pb-32 lg:pt-10"
        style={{ scrollMarginTop: "5rem" }}
      >
        {/* Finished watercolour graphic (book, compass, fern, chapter icons,
            pale-green fill) — a real image, not redrawn. Spans the full
            section edge-to-edge and scales proportionally (object-contain,
            never background-size:cover) so the book is never cropped. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden aspect-[1800/874] w-full md:block">
          <Image
            src={zusammenhaengeKompass}
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-contain object-left-top"
          />
        </div>

        <div className="relative mx-auto max-w-[1710px] lg:pl-[60px]">
          <Reveal className="max-w-2xl lg:max-w-[700px]">
            <Eyebrow>{home.system.eyebrow}</Eyebrow>
            <h2 className="font-display mt-6 text-4xl leading-tight md:text-5xl">
              {home.system.title}
            </h2>
          </Reveal>

          {/* Mobile-only crop of the same graphic — book + fern, empty right
              half cut out of the visible frame — sits between headline and body. */}
          <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] md:hidden">
            <Image
              src={zusammenhaengeKompass}
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="object-cover object-left"
            />
          </div>

          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 lg:mt-0 lg:block">
            <div className="md:col-span-6 md:col-start-7 lg:ml-[800px] lg:mt-[46px] lg:w-[810px]">
              <Reveal delay={120}>
                <div className="space-y-5 text-[var(--color-ink-soft)] md:text-[1.625rem] md:leading-relaxed">
                  {home.system.body.map((p) => (
                    <p key={p}>
                      <Glossary>{p}</Glossary>
                    </p>
                  ))}
                </div>
                <blockquote className="font-display mt-9 border-l-2 border-[var(--color-terra)] pl-6 text-2xl leading-[1.1] text-[var(--color-terra)] sm:text-3xl md:pl-7 md:text-[3.125rem] lg:pl-[35px]">
                  {home.system.pullquote}
                </blockquote>
                <MoreInfo
                  label={home.system.more.label}
                  title={home.system.more.title}
                  body={home.system.more.body}
                  className="mt-8 md:text-[1.625rem]"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------- Mein Ansatz (4 Phasen, Pos. 5) */}
      <Section tone="paper">
        <Reveal className="max-w-2xl">
          <Eyebrow>{home.approach.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{home.approach.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
          {home.approach.steps.map((step, i) => {
            const Icon = approachIcons[i];
            return (
              <Reveal
                key={step.n}
                delay={i * 110}
                className="group bg-[var(--color-paper)] p-8 transition-colors duration-500 hover:bg-[var(--color-cream-deep)] md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="marker-num-lg">{step.n}</span>
                  <Icon className="h-8 w-8 text-[var(--color-terra)] opacity-80 md:h-9 md:w-9" />
                </div>
                <h3 className="font-display mt-5 text-2xl md:text-3xl">{step.title}</h3>
                <p className="mt-3 text-[var(--color-ink-soft)]">{step.body}</p>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10">
          <Link
            href="/leistungen"
            className="link-underline inline-flex items-center gap-2 text-[var(--color-sage-deep)]"
          >
            Leistungen & Preise ansehen <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </Section>

      {/* ------------------------------- Für wen: Split-Cards (Pos. 6) */}
      <Section tone="cream">
        <Reveal className="max-w-2xl">
          <Eyebrow>{home.audience.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{home.audience.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {home.audience.cards.map((card, i) => {
            const isB2B = i === 1;
            return (
              <Reveal
                key={card.label}
                delay={i * 110}
                className={`card flex flex-col p-8 transition-transform duration-500 hover:-translate-y-1 md:p-10 ${
                  isB2B ? "!bg-[var(--color-sage-tief)]" : "!bg-[var(--color-sand)]"
                }`}
              >
                <span className={`eyebrow ${isB2B ? "!text-[var(--color-sand)]" : ""}`}>
                  {card.label}
                </span>
                <h3
                  className={`font-display mt-5 text-2xl leading-snug md:text-3xl ${
                    isB2B ? "text-[var(--color-paper)]" : "text-[var(--color-ink)]"
                  }`}
                >
                  {card.headline}
                </h3>
                <p className={`mt-4 ${isB2B ? "text-[var(--color-paper)]/80" : "text-[var(--color-ink-soft)]"}`}>
                  {card.body}
                </p>
                <div className="mt-auto pt-8">
                  <ButtonLink
                    href={card.button.href}
                    variant={isB2B ? "primary" : "secondary"}
                    className={isB2B ? "!bg-[var(--color-paper)] !text-[var(--color-sage-tief)]" : ""}
                  >
                    {card.button.label}
                  </ButtonLink>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---------------------------------------- Kurzbio Milva (Pos. 7) */}
      <Section tone="sand">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-4">
            <Portrait src={profilPhoto} alt="Milva März" ratio="aspect-[4/5]" />
          </Reveal>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal>
              <Eyebrow>{home.aboutTeaser.eyebrow}</Eyebrow>
              <div className="mt-6 space-y-5 text-lg text-[var(--color-ink-soft)]">
                {home.aboutTeaser.body.map((p) => (
                  <p key={p}>
                  <Glossary>{p}</Glossary>
                </p>
                ))}
              </div>
              <p className="mt-6 text-sm tracking-wide text-[var(--color-sage-deep)]">
                {home.aboutTeaser.qualifikationen}
              </p>
              <Link
                href="/ueber-mich"
                className="link-underline mt-7 inline-flex items-center gap-2 text-[var(--color-sage-deep)]"
              >
                Mehr über mich erfahren <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

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
