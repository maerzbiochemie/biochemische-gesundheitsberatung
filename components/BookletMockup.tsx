import { IconConnect } from "@/components/icons";

/**
 * Stylised placeholder for the "Biochemischer Gesundheitskompass" booklet —
 * an open double page built from CSS bars, not a real photo or real text.
 * Used until a real product photo is available (see BIO-105).
 */
export function BookletMockup({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <div className="relative mx-auto max-w-md rotate-[-1.2deg] rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-2 shadow-[0_32px_60px_-32px_rgba(27,33,28,0.35)] sm:max-w-lg">
        <div className="relative grid grid-cols-2 overflow-hidden rounded-[calc(var(--radius-card)-6px)] bg-[var(--color-cream)]">
          {/* spine shadow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/2 w-6 -translate-x-1/2 bg-gradient-to-r from-black/10 via-black/0 to-black/10"
          />

          {/* left page */}
          <div className="space-y-4 p-6 sm:p-8">
            <div className="h-px w-8 bg-[var(--color-sage-soft)]" />
            <div className="space-y-2">
              <div className="h-3 w-[85%] rounded-full bg-[var(--color-ink)]/15" />
              <div className="h-3 w-[55%] rounded-full bg-[var(--color-ink)]/15" />
            </div>
            <div className="space-y-2 pt-2">
              <div className="h-1.5 w-full rounded-full bg-[var(--color-ink)]/8" />
              <div className="h-1.5 w-[92%] rounded-full bg-[var(--color-ink)]/8" />
              <div className="h-1.5 w-full rounded-full bg-[var(--color-ink)]/8" />
              <div className="h-1.5 w-[70%] rounded-full bg-[var(--color-ink)]/8" />
            </div>
          </div>

          {/* right page */}
          <div className="space-y-4 p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="font-display text-base tracking-wide text-[var(--color-terra)]">
                02
              </span>
              <IconConnect className="h-6 w-6 text-[var(--color-terra)] opacity-70" />
            </div>
            <div className="h-3 w-[70%] rounded-full bg-[var(--color-ink)]/15" />
            <div className="space-y-2 pt-2">
              <div className="h-1.5 w-full rounded-full bg-[var(--color-ink)]/8" />
              <div className="h-1.5 w-[88%] rounded-full bg-[var(--color-ink)]/8" />
              <div className="h-1.5 w-[60%] rounded-full bg-[var(--color-ink)]/8" />
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs tracking-wide text-[var(--color-muted)]">
        Illustrative Darstellung – Layout-Platzhalter, kein finaler Inhalt
      </figcaption>
    </figure>
  );
}
