import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Eyebrow, Section, SignalList } from "@/components/ui";
import { CTABand } from "@/components/CTABand";
import { WordReveal } from "@/components/Animated";
import { Marquee } from "@/components/Marquee";
import { MoreInfo } from "@/components/MoreInfo";
import { BookingButton } from "@/components/BookingButton";
import { Portrait } from "@/components/Portrait";
import { Faq } from "@/components/Faq";
import { GlossaryText, TermPopover } from "@/components/Glossary";
import { site, home, faq } from "@/content/site";
import frontPhoto from "@/assets/front.jpeg";
import profilPhoto from "@/assets/profil.jpeg";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-[var(--color-cream)] pb-20 pt-32 md:pb-28 md:pt-44">
        {/* soft ambient shape */}
        <div
          aria-hidden
          className="animate-float-slow pointer-events-none absolute -right-40 -top-24 h-[34rem] w-[34rem] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(47,93,69,0.30), rgba(47,93,69,0) 70%)",
          }}
        />
        <div
          aria-hidden
          className="animate-float-slow pointer-events-none absolute -left-32 top-1/3 h-[22rem] w-[22rem] rounded-full opacity-40 blur-3xl"
          style={{
            animationDelay: "-7s",
            background:
              "radial-gradient(circle at 50% 50%, rgba(168,96,63,0.20), rgba(168,96,63,0) 70%)",
          }}
        />
        <div className="container-x relative">
          <Reveal>
            {/* First (and only) interactive occurrence — tooltip explains "Biochemie". */}
            <Eyebrow>
              <TermPopover term="biochemie">{home.hero.eyebrow}</TermPopover>
            </Eyebrow>
          </Reveal>
          <WordReveal
            as="h1"
            text={home.hero.title}
            delay={0.15}
            className="font-display mt-7 max-w-4xl text-[2.3rem] leading-[1.08] sm:text-5xl lg:text-[3.9rem]"
          />

          <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8">
            <Reveal delay={160} className="md:col-span-7 lg:col-span-6">
              <div className="space-y-5 text-lg text-[var(--color-ink-soft)]">
                {home.hero.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-start">
                <BookingButton />
                <ButtonLink href={site.cta.secondary.href} variant="secondary">
                  {site.cta.secondary.label}
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={240} className="md:col-span-5 md:col-start-9 lg:col-span-4 lg:col-start-9">
              <div className="card flex h-full flex-col p-7 md:p-8">
                {/* Small portrait of Milva März — personal touch, not dominant. */}
                <Portrait
                  src={frontPhoto}
                  alt="Milva März"
                  ratio="aspect-[5/4]"
                  position="object-[center_25%]"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="mb-7"
                />
                <p className="font-display text-2xl leading-snug">„{home.hero.heroQuote}“</p>
                <dl className="mt-8 space-y-4 border-t border-[var(--color-line)] pt-6 text-sm">
                  {home.hero.facts.map(([k, v]) => (
                    <div key={k} className="flex flex-col gap-0.5">
                      <dt className="text-[var(--color-muted)]">{k}</dt>
                      <dd className="text-[var(--color-ink)]">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------ Bedeutung von Gesundheit */}
      <Section tone="paper" id="ansatz">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>{home.system.eyebrow}</Eyebrow>
              <h2 className="font-display mt-6 text-4xl leading-tight md:text-5xl">
                {home.system.title}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={120}>
              <div className="space-y-5 text-[var(--color-ink-soft)]">
                {home.system.body.map((p, i) => (
                  <p key={p}>{i === 0 ? <GlossaryText text={p} term="gesundheit" /> : p}</p>
                ))}
              </div>
              <blockquote className="font-display mt-10 border-l-2 border-[var(--color-sage)] pl-6 text-2xl leading-snug text-[var(--color-ink)]">
                {home.system.pullquote}
              </blockquote>
              <MoreInfo
                label={home.system.more.label}
                title={home.system.more.title}
                body={home.system.more.body}
                className="mt-8"
              />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ----------------- Keyword band — moved below "Bedeutung von Gesundheit" */}
      <Marquee />

      {/* -------------------------------------- B2C decision section (Privatkunden) */}
      <Section tone="paper">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>Für Privatkunden</Eyebrow>
              <h2 className="font-display mt-6 text-4xl leading-tight md:text-5xl">
                {home.b2cLanding.headline}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={120}>
              <div className="space-y-4 text-[var(--color-ink-soft)] md:text-lg">
                {home.b2cLanding.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <SignalList items={home.b2cLanding.signals} className="mt-8" />
              <div className="mt-8">
                <ButtonLink href={home.b2cLanding.button.href}>
                  {home.b2cLanding.button.label}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* -------------------------- Lösungs-Sektion (eigene Überschrift, kein Kasten) */}
      <Section tone="cream">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                {home.solutionBlock.headline}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <div className="space-y-4 text-[var(--color-ink-soft)] md:text-lg">
              {home.solutionBlock.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------- B2B decision section (Unternehmen) */}
      <Section tone="paper">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>Für Unternehmen & Fachpersonen</Eyebrow>
              <h2 className="font-display mt-6 text-4xl leading-tight md:text-5xl">
                {home.b2bLanding.headline}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={120}>
              <div className="space-y-4 text-[var(--color-ink-soft)] md:text-lg">
                {home.b2bLanding.text.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <ButtonLink href={home.b2bLanding.button.href} variant="secondary">
                  {home.b2bLanding.button.label}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------ Approach */}
      <Section tone="cream">
        <Reveal className="max-w-2xl">
          <Eyebrow>{home.approach.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl md:text-5xl">{home.approach.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-3">
          {home.approach.steps.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 110}
              className="group bg-[var(--color-paper)] p-8 transition-colors duration-500 hover:bg-[var(--color-cream-deep)] md:p-10"
            >
              <span className="marker-num-lg">{step.n}</span>
              <h3 className="font-display mt-5 text-2xl md:text-3xl">{step.title}</h3>
              <p className="mt-3 text-[var(--color-ink-soft)]">{step.body}</p>
            </Reveal>
          ))}
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

      {/* ------------------------------------------------------------- About */}
      <Section tone="paper">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-4">
            <Portrait src={profilPhoto} alt="Milva März" ratio="aspect-[4/5]" />
          </Reveal>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal>
              <Eyebrow>{home.aboutTeaser.eyebrow}</Eyebrow>
              <div className="mt-6 space-y-5 text-lg text-[var(--color-ink-soft)]">
                {home.aboutTeaser.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
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
      <Section tone="cream" id="faq">
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
