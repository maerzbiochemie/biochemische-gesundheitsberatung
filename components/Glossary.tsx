"use client";

import { useEffect, useId, useRef, useState } from "react";
import { glossary } from "@/content/site";

type TermKey = keyof typeof glossary;

/** Regex used to find the trigger word for each glossary term inside a text. */
const TRIGGER: Record<TermKey, RegExp> = {
  gesundheit: /\bGesundheit\b/, // standalone word only (not "Gesundheitsberatung")
  biochemie: /\bBiochemi\w*\b/i, // stem: Biochemie, Biochemikerin, biochemische …
};

/**
 * An inline, subtly underlined term that opens a small explanation pop-up.
 * Works on click/tap (mobile) and hover (desktop); closes via outside click,
 * Escape, or tapping the term again. Keyboard-accessible.
 */
export function TermPopover({ term, children }: { term: TermKey; children: string }) {
  const entry = glossary[term];
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
        {children}
      </button>

      {visible && (
        <span
          id={panelId}
          role="dialog"
          aria-label={entry.title}
          className="modal-pop absolute left-0 top-full z-50 mt-2 block w-[min(22rem,82vw)] rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-5 text-left normal-case tracking-normal shadow-[0_24px_60px_-28px_rgba(27,33,28,0.5)]"
        >
          <span className="flex items-start justify-between gap-3">
            <span className="font-display text-lg text-[var(--color-ink)]">{entry.title}</span>
            {open && (
              <button
                type="button"
                aria-label="Schließen"
                onClick={() => setOpen(false)}
                className="-mr-1 -mt-1 text-xl leading-none text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                ×
              </button>
            )}
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[var(--color-ink-soft)]">
            {entry.text}
          </span>
          {entry.source && (
            <span className="mt-3 block border-t border-[var(--color-line)] pt-3 text-xs italic leading-relaxed text-[var(--color-muted)]">
              {entry.source}
            </span>
          )}
        </span>
      )}
    </span>
  );
}

/**
 * Renders a plain string and wraps the first occurrence of the given term's
 * trigger word in a {@link TermPopover}. Leaves all other text untouched.
 */
export function GlossaryText({ text, term }: { text: string; term: TermKey }) {
  const match = TRIGGER[term].exec(text);
  if (!match) return <>{text}</>;
  const start = match.index;
  const end = start + match[0].length;
  return (
    <>
      {text.slice(0, start)}
      <TermPopover term={term}>{match[0]}</TermPopover>
      {text.slice(end)}
    </>
  );
}
