import {
  IconMetabolism,
  IconEnergy,
  IconDigestion,
  IconHormones,
  IconNervous,
  IconLoadRecovery,
} from "@/components/icons";

// Each keyword carries the line-icon that previously sat in the standalone
// "Themenfelder" band — the band was removed, the symbols live on here.
const KEYWORDS = [
  { word: "Stoffwechsel", Icon: IconMetabolism },
  { word: "Zellenergie", Icon: IconEnergy },
  { word: "Verdauung", Icon: IconDigestion },
  { word: "Hormonregulation", Icon: IconHormones },
  { word: "Nervensystem", Icon: IconNervous },
  { word: "Stressachsen", Icon: IconNervous },
  { word: "Regeneration", Icon: IconLoadRecovery },
  { word: "Mikronährstoffe", Icon: IconMetabolism },
  { word: "Alltagsstrategien", Icon: IconLoadRecovery },
] as const;

function Run({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={ariaHidden || undefined}>
      {KEYWORDS.map(({ word, Icon }, i) => (
        <span key={i} className="flex items-center">
          <Icon className="mr-3 h-5 w-5 shrink-0 text-[var(--color-terra)] md:h-7 md:w-7" />
          <span className="font-display text-2xl text-[var(--color-ink)]/80 md:text-4xl">
            {word}
          </span>
          <span className="mx-7 text-[var(--color-sage)] md:mx-10" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

/** Infinite horizontal keyword band — editorial, pure CSS animation. */
export function Marquee() {
  return (
    <section className="marquee overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-cream-deep)] py-8 md:py-10">
      <div className="flex w-max">
        {/* Rendered twice so the -50% translate loops seamlessly. */}
        <Run />
        <Run ariaHidden />
      </div>
    </section>
  );
}
