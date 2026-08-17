"use client";

import { useFormData } from "./FormContext";

function saveHintText(status: string, lastSavedAt: Date | null, cryptoAvailable: boolean): string {
  if (!cryptoAvailable) return "Verschlüsselung in diesem Browser nicht verfügbar — bitte aktuellen Browser verwenden";
  if (status === "expired") return "Vorherige Eingaben wurden nach 24 Std. automatisch gelöscht — neuer, leerer Bogen";
  if (status === "undecryptable")
    return "Vorherige Eingaben stammten aus einem geschlossenen Tab und waren verschlüsselt nicht mehr lesbar — neuer, leerer Bogen";
  if (status === "saving") return "speichere …";
  if (status === "saved" && lastSavedAt) {
    const time = lastSavedAt.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
    return `Automatisch lokal & verschlüsselt gespeichert · löscht sich selbst nach 24 Std. · ${time}`;
  }
  return "Automatisch lokal & verschlüsselt gespeichert · löscht sich selbst nach 24 Std.";
}

export function Toolbar() {
  const { saveStatus, lastSavedAt, cryptoAvailable, resetAll, exportJson } = useFormData();

  function handleReset() {
    if (window.confirm("Wirklich alle Eingaben in diesem Browser löschen? Dies kann nicht rückgängig gemacht werden.")) {
      resetAll();
    }
  }

  return (
    <div className="sticky bottom-0 z-30 border-t border-[var(--color-line)] bg-[var(--color-cream)]/95 px-5 py-3 backdrop-blur-md print:hidden">
      <div className="mx-auto flex max-w-[860px] flex-wrap items-center justify-end gap-2.5">
        <span className="mr-auto self-center text-[11.5px] text-[var(--color-muted)]">
          {saveHintText(saveStatus, lastSavedAt, cryptoAvailable)}
        </span>
        <button
          type="button"
          onClick={handleReset}
          className="rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-2 text-[13.5px] text-[var(--color-ink)] hover:border-[var(--color-sage)]"
        >
          Zurücksetzen
        </button>
        <button
          type="button"
          onClick={exportJson}
          className="rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-2 text-[13.5px] text-[var(--color-ink)] hover:border-[var(--color-sage)]"
        >
          Als Datei exportieren
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-lg border border-[var(--color-sage-deep)] bg-[var(--color-sage-deep)] px-4 py-2 text-[13.5px] font-medium text-white hover:bg-[var(--color-sage)]"
        >
          Drucken / Als PDF
        </button>
      </div>
    </div>
  );
}
