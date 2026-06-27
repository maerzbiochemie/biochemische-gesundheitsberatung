"use client";

import Link from "next/link";
import { useState } from "react";
import { kontakt } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-sage)] focus:ring-2 focus:ring-[var(--color-sage)]/20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setServerError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      anliegen: String(fd.get("anliegen") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (data.errors) {
        setErrors(data.errors);
        setStatus("idle");
      } else {
        setServerError(data.error ?? "Etwas ist schiefgelaufen. Bitte erneut versuchen.");
        setStatus("error");
      }
    } catch {
      setServerError("Verbindung fehlgeschlagen. Bitte prüfen Sie Ihre Internetverbindung.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-start gap-4 p-8 md:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-sage)]/15 text-2xl text-[var(--color-sage-deep)]">
          ✓
        </span>
        <h3 className="font-display text-3xl">Vielen Dank!</h3>
        <p className="text-[var(--color-ink-soft)]">
          Ihre Anfrage ist eingegangen. Ich melde mich in der Regel innerhalb von ein bis zwei
          Werktagen bei Ihnen, um einen Termin für das kostenlose Erstgespräch zu finden.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-underline mt-2 text-[var(--color-sage-deep)]"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-7 md:p-9">
      {/* Honeypot — visually hidden, not a tab stop */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} autoComplete="name" required />
        <Field
          label="E-Mail"
          name="email"
          type="email"
          error={errors.email}
          autoComplete="email"
          required
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Telefon (optional)" name="phone" type="tel" autoComplete="tel" />
        <div>
          <label htmlFor="anliegen" className="mb-2 block text-sm text-[var(--color-ink-soft)]">
            Ich melde mich als
          </label>
          <select id="anliegen" name="anliegen" defaultValue={kontakt.anliegenOptionen[0]} className={fieldBase}>
            {kontakt.anliegenOptionen.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm text-[var(--color-ink-soft)]">
          Anliegen / Nachricht <span className="text-[var(--color-terra)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Worum geht es bei Ihnen? Welche Themen stehen im Vordergrund?"
          className={`${fieldBase} resize-y`}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-[var(--color-terra)]">{errors.message}</p>
        )}
        <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
          {kontakt.form.sensibleHinweis}
        </p>
      </div>

      {serverError && (
        <p className="mt-5 rounded-xl bg-[var(--color-terra)]/10 px-4 py-3 text-sm text-[var(--color-terra)]">
          {serverError}
        </p>
      )}

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Wird gesendet …" : "Anfrage senden"}
          {status !== "submitting" && (
            <span className="arrow" aria-hidden>
              →
            </span>
          )}
        </button>
        <p className="max-w-md text-xs leading-relaxed text-[var(--color-muted)]">
          {kontakt.form.datenschutzHinweis.split("Datenschutzerklärung")[0]}
          <Link href="/datenschutz" className="link-underline text-[var(--color-sage-deep)]">
            Datenschutzerklärung
          </Link>
          {kontakt.form.datenschutzHinweis.split("Datenschutzerklärung")[1]}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-[var(--color-ink-soft)]">
        {label} {required && <span className="text-[var(--color-terra)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-sage)] focus:ring-2 focus:ring-[var(--color-sage)]/20"
      />
      {error && <p className="mt-1.5 text-sm text-[var(--color-terra)]">{error}</p>}
    </div>
  );
}
