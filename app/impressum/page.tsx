import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { impressum } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der biochemischen Gesundheitsberatung von Milva März.",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="bg-[var(--color-cream)] pb-24 pt-32 md:pb-32 md:pt-44">
      <div className="container-x max-w-3xl">
        <Reveal>
          <Eyebrow>Rechtliches</Eyebrow>
          <h1 className="font-display mt-7 text-[2.4rem] leading-[1.06] sm:text-5xl">
            {impressum.title}
          </h1>
        </Reveal>

        <div className="mt-12 space-y-10">
          {impressum.sections.map((sec) => (
            <Reveal key={sec.heading}>
              <h2 className="font-display text-xl text-[var(--color-sage-deep)] md:text-2xl">
                {sec.heading}
              </h2>
              <div className="mt-3 space-y-1 text-[var(--color-ink-soft)]">
                {sec.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                {"email" in sec && sec.email && (
                  <p className="pt-2">
                    E-Mail:{" "}
                    <a href={`mailto:${sec.email}`} className="link-underline break-all text-[var(--color-sage-deep)]">
                      {sec.email}
                    </a>
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
