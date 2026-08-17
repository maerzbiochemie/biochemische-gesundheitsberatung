"use client";

import { useState, type FormEvent } from "react";
import { useGate } from "./FormContext";

export function PasswordGate() {
  const { error, unlock, browserSupported } = useGate();
  const [password, setPassword] = useState("");
  const [checking, setChecking] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setChecking(true);
    await unlock(password);
    setChecking(false);
    setPassword("");
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-ink)]/55 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Zugang geschützt">
      <form
        onSubmit={handleSubmit}
        className="modal-pop relative w-full max-w-[380px] rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-8 text-center shadow-2xl"
      >
        <h1 className="font-display text-xl text-[var(--color-ink)]">Zugang geschützt</h1>
        <p className="mt-2 text-[13.8px] text-[var(--color-ink-soft)]">
          Bitte geben Sie das Passwort ein, das Sie von Ihrer Beraterin erhalten haben.
        </p>
        {browserSupported ? (
          <>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwort"
              autoFocus
              required
              className="mt-4 w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-cream)] px-3 py-2.5 text-center text-[15px] tracking-wide text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sage)]"
            />
            <button
              type="submit"
              disabled={checking}
              className="mt-3 w-full rounded-lg bg-[var(--color-sage-deep)] px-3 py-2.5 text-[14.5px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              Weiter
            </button>
            <div className="mt-2.5 min-h-[16px] text-[13px] text-[var(--color-terra)]" role="alert">
              {error}
            </div>
          </>
        ) : (
          <p className="mt-4 text-[13px] text-[var(--color-terra)]" role="alert">
            Ihr Browser wird nicht unterstützt. Bitte aktuellen Browser verwenden.
          </p>
        )}
      </form>
    </div>
  );
}
