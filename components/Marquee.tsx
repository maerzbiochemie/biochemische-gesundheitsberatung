const KEYWORDS = [
  "Stoffwechsel",
  "Zellenergie",
  "Verdauung",
  "Hormonregulation",
  "Nervensystem",
  "Stressachsen",
  "Regeneration",
  "Mikronährstoffe",
  "Alltagsstrategien",
];

/** Infinite horizontal keyword band — editorial, pure CSS animation. */
export function Marquee() {
  // Rendered twice so the -50% translate loops seamlessly.
  const run = (
    <div className="marquee-track">
      {KEYWORDS.map((word, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display text-3xl text-[var(--color-ink)]/80 md:text-5xl">
            {word}
          </span>
          <span className="mx-7 text-[var(--color-sage)] md:mx-10" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="marquee overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-cream-deep)] py-8 md:py-10">
      <div className="flex w-max">
        {run}
        <div className="marquee-track" aria-hidden>
          {KEYWORDS.map((word, i) => (
            <span key={i} className="flex items-center">
              <span className="font-display text-3xl text-[var(--color-ink)]/80 md:text-5xl">
                {word}
              </span>
              <span className="mx-7 text-[var(--color-sage)] md:mx-10" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
