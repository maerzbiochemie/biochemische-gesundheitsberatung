import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { BookingButton } from "@/components/BookingButton";
import { site, home } from "@/content/site";

export function CTABand() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="container-x py-24 md:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center [&_.eyebrow]:!text-[var(--color-sage-soft)]">
            <Eyebrow>{home.finalCta.eyebrow}</Eyebrow>
          </div>
          <h2 className="font-display mt-6 text-4xl md:text-6xl">{home.finalCta.title}</h2>
          <div className="mx-auto mt-6 max-w-xl space-y-4 text-[var(--color-paper)]/70">
            {home.finalCta.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-5">
            <BookingButton
              tone="dark"
              align="center"
              className="!bg-[var(--color-paper)] !text-[var(--color-ink)] hover:!bg-[var(--color-sage-soft)]"
            />
            <a href={`mailto:${site.email}`} className="link-underline text-[var(--color-sage-soft)]">
              oder direkt schreiben
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
