import {
  IconDigestion,
  IconEnergy,
  IconHormones,
  IconLoadRecovery,
  IconMetabolism,
  IconNervous,
} from "@/components/icons";

const chapterIcons = [
  IconMetabolism,
  IconEnergy,
  IconDigestion,
  IconHormones,
  IconNervous,
  IconLoadRecovery,
];

const tabColors = [
  "var(--color-terra)",
  "var(--color-sage-deep)",
  "var(--color-terra-soft)",
  "var(--color-sage)",
  "var(--color-terra)",
];

/** Compass rose — the recurring "Gesundheitskompass" motif, doubling as the booklet's signature illustration. */
function CompassMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--color-line)" strokeWidth="1" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="var(--color-sage-soft)" strokeWidth="1" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (Math.PI / 4) * i;
        const isCardinal = i % 2 === 0;
        const inner = isCardinal ? 30 : 32;
        const outer = 38;
        const x1 = 50 + inner * Math.sin(angle);
        const y1 = 50 - inner * Math.cos(angle);
        const x2 = 50 + outer * Math.sin(angle);
        const y2 = 50 - outer * Math.cos(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--color-ink-soft)"
            strokeWidth={isCardinal ? 1.5 : 1}
            strokeLinecap="round"
          />
        );
      })}
      <polygon points="50,20 58,50 42,50" fill="var(--color-terra)" />
      <polygon points="50,80 58,50 42,50" fill="var(--color-ink-soft)" opacity="0.55" />
      <circle cx="50" cy="50" r="4.5" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1.2" />
    </svg>
  );
}

export function BookletMockup({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <div className="relative mx-auto max-w-lg rotate-[-1.2deg] sm:max-w-2xl">
        {/* page stack — gives the spread depth, like a bound book rather than a flat sheet */}
        <div
          aria-hidden
          className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-cream-deep)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 translate-x-3 translate-y-3 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-cream)]"
        />

        {/* chapter tabs along the outer edge */}
        <div
          aria-hidden
          className="absolute -right-2.5 top-10 flex flex-col gap-2.5 sm:-right-3.5 sm:top-14"
        >
          {tabColors.map((color, i) => (
            <span
              key={i}
              className="block h-6 w-3 rounded-r-full sm:h-8 sm:w-4"
              style={{ backgroundColor: color, opacity: 0.85 }}
            />
          ))}
        </div>

        <div className="relative rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-2 shadow-[0_32px_60px_-32px_rgba(27,33,28,0.35)]">
          <div className="relative grid grid-cols-2 overflow-hidden rounded-[calc(var(--radius-card)-6px)] bg-[var(--color-cream)]">
            {/* spine shadow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-1/2 w-6 -translate-x-1/2 bg-gradient-to-r from-black/10 via-black/0 to-black/10"
            />

            {/* left page — the compass, as the booklet's opening illustration */}
            <div className="flex flex-col items-center justify-center gap-4 p-7 sm:p-10">
              <div className="h-px w-8 self-start bg-[var(--color-sage-soft)]" />
              <CompassMark className="h-28 w-28 sm:h-36 sm:w-36" />
              <div className="h-1.5 w-2/3 rounded-full bg-[var(--color-ink)]/10" />
            </div>

            {/* right page */}
            <div className="space-y-5 p-7 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg tracking-wide text-[var(--color-terra)] sm:text-xl">
                  02
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Kapitel
                </span>
              </div>
              <div className="h-3 w-[70%] rounded-full bg-[var(--color-ink)]/15" />
              <div className="space-y-2">
                <div className="h-1.5 w-full rounded-full bg-[var(--color-ink)]/8" />
                <div className="h-1.5 w-[88%] rounded-full bg-[var(--color-ink)]/8" />
                <div className="h-1.5 w-[60%] rounded-full bg-[var(--color-ink)]/8" />
              </div>
              {/* chapter/topic index — signals a full booklet, not a single spread */}
              <div className="flex flex-wrap gap-2 pt-1">
                {chapterIcons.map((Icon, i) => (
                  <span
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] sm:h-9 sm:w-9"
                  >
                    <Icon className="h-4 w-4 text-[var(--color-sage-deep)]" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        Stilisierte Illustration des Booklets „Biochemischer Gesundheitskompass“ mit Kompass-Motiv und
        Kapitelübersicht.
      </figcaption>
    </figure>
  );
}
