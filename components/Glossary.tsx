"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { glossary } from "@/content/site";

type TermKey = keyof typeof glossary;

/**
 * Shared pop-up primitive. Renders a subtly underlined inline trigger that opens
 * a small, calm explanation panel. Works on click/tap (mobile) and hover
 * (desktop); closes via outside click, Escape, or tapping the trigger again.
 * Keyboard-accessible. The panel text is always shown in normal sentence casing.
 */
function Popover({
  trigger,
  title,
  paragraphs,
  source,
}: {
  trigger: string;
  title?: string;
  paragraphs: readonly string[];
  source?: string;
}) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const wrapRef = useRef<HTMLSpanElement | null>(null);
  const panelId = useId();
  const visible = open || hover;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <span
      ref={wrapRef}
      className="relative inline-block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        type="button"
        aria-expanded={visible}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="term-trigger"
      >
        {trigger}
      </button>

      {visible && (
        <span
          id={panelId}
          role="dialog"
          aria-label={title ?? trigger}
          className="modal-pop absolute left-0 top-full z-50 mt-2 block w-[min(24rem,82vw)] rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-5 text-left normal-case tracking-normal shadow-[0_24px_60px_-28px_rgba(27,33,28,0.5)]"
        >
          {(title || open) && (
            <span className="flex items-start justify-between gap-3">
              {title ? (
                <span className="font-display text-lg text-[var(--color-ink)]">{title}</span>
              ) : (
                <span aria-hidden />
              )}
              {open && (
                <button
                  type="button"
                  aria-label="Schließen"
                  onClick={() => setOpen(false)}
                  className="-mr-1 -mt-1 shrink-0 text-xl leading-none text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
                >
                  ×
                </button>
              )}
            </span>
          )}
          <span
            className={`block space-y-2 text-sm leading-relaxed text-[var(--color-ink-soft)] ${
              title ? "mt-2" : ""
            }`}
          >
            {paragraphs.map((p) => (
              <span key={p} className="block">
                {p}
              </span>
            ))}
          </span>
          {source && (
            <span className="mt-3 block border-t border-[var(--color-line)] pt-3 text-xs italic leading-relaxed text-[var(--color-muted)]">
              {source}
            </span>
          )}
        </span>
      )}
    </span>
  );
}

/** A single glossary term, opening its stored explanation. */
export function TermPopover({ term, children }: { term: TermKey; children: string }) {
  const entry = glossary[term];
  return (
    <Popover
      trigger={children}
      title={entry.title}
      paragraphs={[entry.text]}
      source={entry.source || undefined}
    />
  );
}

/** An inline pop-up with custom explanatory text (not tied to a glossary term). */
export function InlineInfo({
  trigger,
  paragraphs,
  title,
}: {
  trigger: string;
  paragraphs: readonly string[];
  title?: string;
}) {
  return <Popover trigger={trigger} paragraphs={paragraphs} title={title} />;
}

/**
 * Auto-links every occurrence of the two key terms inside a plain string:
 * the phrase "Biochemische Gesundheitsberatung" (→ Biochemie explanation) and
 * the standalone word "Gesundheit" (→ health explanation). All other text is
 * left untouched. "Gesundheit" inside longer words (e.g. "Gesundheitsberatung")
 * is intentionally not matched.
 */
export function Glossary({ children }: { children: string }) {
  return <>{wrapTerms(children)}</>;
}

function wrapTerms(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let key = 0;

  // Within a plain (non-phrase) slice, wrap each standalone "Gesundheit".
  const pushWithWord = (slice: string) => {
    const re = /\bGesundheit\b/g;
    let li = 0;
    let wm: RegExpExecArray | null;
    while ((wm = re.exec(slice))) {
      if (wm.index > li) nodes.push(slice.slice(li, wm.index));
      nodes.push(
        <TermPopover key={key++} term="gesundheit">
          {wm[0]}
        </TermPopover>,
      );
      li = wm.index + wm[0].length;
    }
    if (li < slice.length) nodes.push(slice.slice(li));
  };

  // First pass: pull out the full phrase (incl. German declension such as
  // "biochemischen Gesundheitsberatung"), then word-scan the gaps.
  const phrase = /biochemische\w*\s+Gesundheitsberatung/gi;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = phrase.exec(text))) {
    if (m.index > last) pushWithWord(text.slice(last, m.index));
    nodes.push(
      <TermPopover key={key++} term="biochemie">
        {m[0]}
      </TermPopover>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) pushWithWord(text.slice(last));

  return nodes;
}
