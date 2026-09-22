"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

type SignalItem = {
  title: string;
  body: string;
  focusLabel: string;
  focus: string;
};

/**
 * Numbered, fully clickable rows (01–07) with thin dividers. Each row opens a
 * modal with the extended explanation for that signal. Mouse, touch and
 * keyboard all work through the native <button> trigger; closing (X or
 * Escape) returns focus to the row that opened it.
 */
export function SignalAccordion({
  items,
  className = "",
}: {
  items: readonly SignalItem[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const close = () => {
    setOpenIndex((current) => {
      if (current !== null) triggerRefs.current[current]?.focus();
      return null;
    });
  };

  useEffect(() => {
    if (openIndex === null) return;
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <ul className={`border-t border-[var(--color-line)] ${className}`}>
        {items.map((item, i) => (
          <li key={item.title} className="border-b border-[var(--color-line)]">
            <button
              type="button"
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              onClick={() => setOpenIndex(i)}
              aria-haspopup="dialog"
              className="group flex w-full items-center gap-4 py-6 text-left transition-colors sm:gap-6 sm:py-7"
            >
              <span className="font-display w-8 shrink-0 text-xl text-[var(--color-terra)] sm:w-10 sm:text-[22px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display flex-1 text-[27px] leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-sage-deep)] sm:text-[28px]">
                {item.title}
              </span>
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-xl leading-none text-[var(--color-sage-deep)] transition-colors group-hover:border-[var(--color-sage-deep)] sm:h-11 sm:w-11"
              >
                +
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Signal ${String((openIndex ?? 0) + 1).padStart(2, "0")}`}
        >
          <button
            type="button"
            aria-label="Schließen"
            onClick={close}
            className="absolute inset-0 cursor-default bg-[var(--color-ink)]/55 backdrop-blur-sm"
          />
          <div className="modal-pop relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-7 shadow-2xl sm:p-8 md:p-10">
            <button
              type="button"
              ref={closeButtonRef}
              onClick={close}
              aria-label="Schließen"
              className="absolute right-5 top-4 text-3xl leading-none text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              ×
            </button>
            <p className="eyebrow">{`Signal ${String((openIndex ?? 0) + 1).padStart(2, "0")}`}</p>
            <h3 className="font-display mt-3 pr-8 text-2xl leading-snug md:text-3xl">
              {active.title}
            </h3>
            <div className="mt-5 space-y-4 border-t border-[var(--color-line)] pt-5">
              <p className="text-[var(--color-ink-soft)]">{active.body}</p>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                <strong className="text-[var(--color-ink-soft)]">{active.focusLabel}</strong>{" "}
                {active.focus}
              </p>
            </div>
            <a
              href={site.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-6 inline-flex items-center gap-2 text-[var(--color-sage-deep)]"
            >
              Zum Erstgespräch
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
