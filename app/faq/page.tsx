import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Section } from "@/components/ui";
import { Faq } from "@/components/Faq";
import { BookingButton } from "@/components/BookingButton";
import { faq } from "@/content/site";

export const metadata: Metadata = {
  title: "Häufige Fragen",
  description:
    "Antworten auf die wichtigsten Fragen zur biochemischen Gesundheitsberatung, zum Ablauf, zu den Kosten und zur Zusammenarbeit.",
};

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-cream)] pb-12 pt-32 md:pb-16 md:pt-44">
        <div className="container-x">
          <Reveal>
            <Eyebrow>{faq.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal as="h1" delay={80} className="font-display mt-7 max-w-4xl text-[2.4rem] leading-[1.06] sm:text-5xl lg:text-[3.6rem]">
            {faq.title}
          </Reveal>
          <Reveal delay={160} className="mt-6 max-w-2xl text-lg text-[var(--color-ink-soft)]">
            {faq.subtitle}
          </Reveal>
        </div>
      </section>

      {/* Full accordion */}
      <Section tone="paper">
        <Faq items={faq.items} />
        <Reveal className="mt-12 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-cream)] p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <h2 className="font-display text-2xl md:text-3xl">{faq.cta.title}</h2>
              <p className="mt-3 text-[var(--color-ink-soft)]">{faq.cta.body}</p>
            </div>
            <div className="md:col-span-5 md:flex md:justify-end">
              <BookingButton />
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
