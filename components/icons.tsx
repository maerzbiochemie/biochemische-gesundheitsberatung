/**
 * Small line-icon set for the "Ansatz" (approach) steps and the
 * "Themenfelder" list. 1.5px stroke, no fill (unless noted), sized to sit
 * above the existing marker-num-lg — an accent, not a replacement for the
 * numbered marker.
 */
type IconProps = {
  className?: string;
};

const shared = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Verstehen — Lupe: körperliche Prozesse sichtbar machen. */
export function IconUnderstand({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...shared}>
      <circle cx="14" cy="14" r="8.5" />
      <path d="M20.2 20.2 27 27" />
    </svg>
  );
}

/** Verbinden — verknüpfte Punkte: Faktoren in Zusammenhang bringen. */
export function IconConnect({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...shared}>
      <circle cx="8" cy="9" r="3" />
      <circle cx="24" cy="9" r="3" />
      <circle cx="16" cy="24" r="3" />
      <path d="M10.6 10.6 13.6 21.6M21.4 10.6 18.4 21.6M11 9h10" />
    </svg>
  );
}

/** Umsetzen — Pfeil zum Haken: aus Erkenntnis wird ein konkreter Schritt. */
export function IconAct({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...shared}>
      <path d="M5 17h17M16 9l9 8-9 8" />
    </svg>
  );
}

/** Stoffwechsel — geschlossener Kreislauf aus zwei Pfeilbögen. */
export function IconMetabolism({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...shared}>
      <path d="M8 12a8 8 0 0 1 14.5-4.5M24 12V6.5M24 12h-5.5" />
      <path d="M24 20a8 8 0 0 1-14.5 4.5M8 20v5.5M8 20h5.5" />
    </svg>
  );
}

/** Energiehaushalt — Blitz, mittig gerahmt. */
export function IconEnergy({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...shared}>
      <path d="M17.5 5 8.5 18h6.5l-2.5 9 11-14h-7z" />
    </svg>
  );
}

/** Verdauung — fließende Wellenlinie. */
export function IconDigestion({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...shared}>
      <path d="M5 12c2.5-4 5.5-4 8 0s5.5 4 8 0 5.5-4 8 0M5 20c2.5-4 5.5-4 8 0s5.5 4 8 0 5.5-4 8 0" />
    </svg>
  );
}

/** Hormonregulation — zwei Knoten im Signalaustausch. */
export function IconHormones({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...shared}>
      <circle cx="9" cy="11" r="4" />
      <circle cx="23" cy="21" r="4" />
      <path d="M12.3 13.7 19.7 18.3M9 11h0" />
    </svg>
  );
}

/** Nervensystem — verzweigende Bahnen von einem Knoten. */
export function IconNervous({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...shared}>
      <path d="M16 5v8M16 13 8 21M16 13l8 8M8 21v6M24 21v6" />
      <circle cx="16" cy="13" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Belastung & Regeneration — Puls, der auf eine ruhige Linie zurückfindet. */
export function IconLoadRecovery({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...shared}>
      <path d="M4 17h5l3-9 4 18 3-9h9" />
    </svg>
  );
}
