import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { BookingButton } from "@/components/BookingButton";
import { kontakt, site, home } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kostenloses Erstgespräch anfragen. Gemeinsam klären wir, wo Sie stehen und welche Form der Zusammenarbeit zu Ihrer Situation passt.",
};

export default function KontaktPage() {
  return (
    <section className="bg-[var(--color-cream)] pb-24 pt-32 md:pb-32 md:pt-44">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Left column */}
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>{kontakt.hero.eyebrow}</Eyebrow>
              <h1 className="font-display mt-7 text-[2.4rem] leading-[1.06] sm:text-5xl">
                {kontakt.hero.title}
              </h1>
              <div className="mt-6 space-y-4 text-lg text-[var(--color-ink-soft)]">
                {kontakt.hero.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-10 space-y-px">
              {home.process.steps.slice(0, 3).map((step, i) => (
                <div
                  key={step.title}
                  className="flex gap-5 border-t border-[var(--color-line)] py-5 first:border-t-0"
                >
                  <span className="marker-num mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg">{step.title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{step.body}</p>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={200} className="mt-10 border-t border-[var(--color-line)] pt-6">
              <p className="text-sm text-[var(--color-muted)]">{kontakt.emailIntro}</p>
              <a
                href={`mailto:${site.email}`}
                className="link-underline mt-1 inline-block max-w-full break-all text-lg text-[var(--color-sage-deep)]"
              >
                {site.email}
              </a>
            </Reveal>
          </div>

          {/* Right column — form */}
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>

        {/* External Calendly booking — linked only, never embedded */}
        <Reveal delay={120} className="mt-16 border-t border-[var(--color-line)] pt-12 md:mt-20 md:pt-16">
          <Eyebrow>{kontakt.booking.eyebrow}</Eyebrow>
          <h2 className="font-display mt-5 text-3xl md:text-4xl">{kontakt.booking.title}</h2>
          <p className="mt-3 max-w-2xl text-[var(--color-ink-soft)]">{kontakt.booking.body}</p>
          <div className="mt-8">
            <BookingButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
