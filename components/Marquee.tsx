const KEYWORDS = [
  "Bewegungskonzepte",
  "Achsenregulation",
  "Stressregulation",
  "Ernährung",
  "Mikronährstoffversorgung",
  "Schlaf & Regeneration",
  "Alltagstransfer",
] as const;

function Run({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={ariaHidden || undefined}>
      {KEYWORDS.map((word, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display text-2xl text-[#243c30] md:text-4xl">{word}</span>
          <span className="mx-7 text-[var(--color-terra)] md:mx-10" aria-hidden>
            •
          </span>
        </span>
      ))}
    </div>
  );
}

/** Infinite horizontal keyword band — editorial, pure CSS animation. */
export function Marquee() {
  return (
    <section className="marquee overflow-hidden bg-[#d9e2d2] py-8 md:py-10">
      <div className="flex w-max">
        {/* Rendered twice so the -50% translate loops seamlessly. */}
        <Run />
        <Run ariaHidden />
      </div>
    </section>
  );
}
