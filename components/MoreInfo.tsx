"use client";

import { useEffect, useState } from "react";

type MoreInfoProps = {
  label: string;
  title: string;
  body: readonly string[];
  className?: string;
};

/** A text link that opens a lightweight modal window with more detail. */
export function MoreInfo({ label, title, body, className = "" }: MoreInfoProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`link-underline inline-flex items-center gap-2 text-[var(--color-sage-deep)] ${className}`}
      >
        {label} <span aria-hidden>→</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <button
            type="button"
            aria-label="Schließen"
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-[var(--color-ink)]/55 backdrop-blur-sm"
          />
          <div className="modal-pop relative z-10 w-full max-w-lg rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-8 shadow-2xl md:p-10">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Schließen"
              className="absolute right-5 top-4 text-3xl leading-none text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              ×
            </button>
            <h3 className="font-display pr-8 text-2xl leading-snug md:text-3xl">{title}</h3>
            <div className="mt-5 space-y-4 text-[var(--color-ink-soft)]">
              {body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
