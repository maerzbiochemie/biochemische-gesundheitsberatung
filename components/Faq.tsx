"use client";

import { useState } from "react";

type FaqItem = { q: string; a: readonly string[] };

/**
 * Accessible accordion FAQ. Questions are always visible; an answer expands on
 * click/tap. One item open at a time. Calm plus/minus affordance, keyboard
 * friendly via native <button>, aria-expanded + aria-controls for screen readers.
 */
export function Faq({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-12 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-button-${i}`;
        return (
          <div key={item.q}>
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[var(--color-sage-deep)] md:py-7"
              >
                <span className="font-display text-lg md:text-xl">{item.q}</span>
                <span
                  aria-hidden
                  className={`relative mt-1 h-4 w-4 shrink-0 text-[var(--color-sage-deep)] transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="overflow-hidden"
            >
              <div className="max-w-2xl space-y-3 pb-7 text-[var(--color-ink-soft)]">
                {item.a.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
