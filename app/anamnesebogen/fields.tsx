"use client";

import type {
  CheckField,
  Field,
  MedsField,
  NoteField,
  RadioTextField,
  ScaleField,
  TableField,
  TextField,
  TextareaField,
} from "@/content/anamnesebogen";
import { medsColumns, medsHint } from "@/content/anamnesebogen";
import { useFormData } from "./FormContext";

const INPUT =
  "w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-cream)] px-3 py-2.5 text-[15px] text-[var(--color-ink)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sage)] print:hidden";

const PRINT_VALUE = "hidden whitespace-pre-wrap rounded-lg border border-[var(--color-line)] p-3 text-[14px] print:block";

const TABLE_CELL_PRINT_VALUE =
  "hidden whitespace-pre-wrap break-words px-2 py-1.5 text-[12.5px] leading-snug text-[var(--color-ink)] print:block print:text-black";

function FieldLabel({ label, name, hint }: { label: string; name: string; hint?: string }) {
  return (
    <label htmlFor={name} className="mb-2 block text-sm font-medium text-[var(--color-ink)]">
      {label}
      {hint && <span className="mt-1 block text-xs font-normal text-[var(--color-muted)]">{hint}</span>}
    </label>
  );
}

export function TextInput({ field }: { field: TextField }) {
  const { getVal, setVal } = useFormData();
  const value = getVal<string>(field.name, "");
  return (
    <div className="my-4">
      <FieldLabel {...field} />
      <input
        id={field.name}
        type="text"
        className={INPUT}
        placeholder={field.placeholder}
        value={value}
        onChange={(e) => setVal(field.name, e.target.value)}
      />
    </div>
  );
}

export function TextareaInput({ field }: { field: TextareaField }) {
  const { getVal, setVal } = useFormData();
  const value = getVal<string>(field.name, "");
  return (
    <div className="my-4">
      <FieldLabel {...field} />
      <textarea
        id={field.name}
        className={`${INPUT} resize-y`}
        style={{ minHeight: (field.lines ?? 3) * 22 }}
        value={value}
        onChange={(e) => setVal(field.name, e.target.value)}
      />
      <div className={PRINT_VALUE}>{value || "—"}</div>
    </div>
  );
}

export function CheckGroup({ field }: { field: CheckField }) {
  const { getVal, setVal } = useFormData();
  const selected = getVal<string[]>(field.name, []);
  const other = getVal<{ checked: boolean; text: string }>(`${field.name}_other`, { checked: false, text: "" });
  const cols = { 1: "grid-cols-1", 2: "grid-cols-1 sm:grid-cols-2", 3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" }[field.cols];

  function toggle(opt: string) {
    const next = selected.includes(opt) ? selected.filter((o) => o !== opt) : [...selected, opt];
    setVal(field.name, next);
  }

  return (
    <div className="my-4">
      <FieldLabel {...field} />
      <div className={`grid gap-x-5 gap-y-2 ${cols}`}>
        {field.options.map((opt) => (
          <label key={opt} className="flex cursor-pointer items-center gap-2 py-0.5 text-[14.5px] text-[var(--color-ink)]">
            <input
              type="checkbox"
              className="h-4 w-4 shrink-0 [accent-color:var(--color-sage-deep)]"
              checked={selected.includes(opt)}
              onChange={() => toggle(opt)}
            />
            {opt}
          </label>
        ))}
        {field.other && (
          <label className="col-span-full flex items-center gap-2 py-0.5 text-[14.5px] text-[var(--color-ink)]">
            <input
              type="checkbox"
              className="h-4 w-4 shrink-0 [accent-color:var(--color-sage-deep)]"
              checked={other.checked}
              onChange={(e) => setVal(`${field.name}_other`, { checked: e.target.checked, text: other.text })}
            />
            andere:
            <input
              type="text"
              className={`${INPUT} flex-1`}
              placeholder="eigene Angabe"
              value={other.text}
              onChange={(e) => setVal(`${field.name}_other`, { checked: other.checked, text: e.target.value })}
            />
          </label>
        )}
      </div>
    </div>
  );
}

export function RadioTextInput({ field }: { field: RadioTextField }) {
  const { getVal, setVal } = useFormData();
  const value = getVal<{ choice: string; text: string }>(field.name, { choice: "", text: "" });
  const options = field.options ?? ["nein", "ja"];

  return (
    <div className="my-4">
      <FieldLabel {...field} />
      <div className="flex flex-wrap items-center gap-4">
        {options.map((opt) => (
          <label key={opt} className="flex cursor-pointer items-center gap-1.5 text-[14.5px] text-[var(--color-ink)]">
            <input
              type="radio"
              name={field.name}
              className="h-4 w-4 [accent-color:var(--color-sage-deep)]"
              checked={value.choice === opt}
              onChange={() => setVal(field.name, { choice: opt, text: value.text })}
            />
            {opt}
          </label>
        ))}
        {field.withText !== false && (
          <input
            type="text"
            className={`${INPUT} min-w-[160px] flex-1`}
            placeholder={field.textPlaceholder ?? "wann / warum / Details"}
            value={value.text}
            onChange={(e) => setVal(field.name, { choice: value.choice, text: e.target.value })}
          />
        )}
      </div>
    </div>
  );
}

export function ScaleInput({ field }: { field: ScaleField }) {
  const { getVal, setVal } = useFormData();
  const current = getVal<number | null>(field.name, null);
  const dots = Array.from({ length: 11 }, (_, i) => i);

  return (
    <div className="my-4">
      <FieldLabel {...field} />
      <div className="flex flex-wrap items-center gap-1.5">
        {dots.map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => setVal(field.name, current === i ? null : i)}
            className={`grid h-8 w-8 place-items-center rounded-full border text-[12.5px] tabular-nums transition-colors ${
              current === i
                ? "border-[var(--color-sage-deep)] bg-[var(--color-sage-deep)] text-white"
                : "border-[var(--color-line)] bg-[var(--color-cream)] text-[var(--color-muted)] hover:border-[var(--color-sage)]"
            }`}
          >
            {i}
          </button>
        ))}
        <span className="ml-2 min-w-[70px] text-xs text-[var(--color-muted)]">
          {field.lowLabel && field.highLabel ? `${field.lowLabel} → ${field.highLabel}` : current !== null ? `gewählt: ${current}` : "nicht gewählt"}
        </span>
      </div>
    </div>
  );
}

interface TableGridProps {
  columns: string[];
  rows: string[][];
  onChange: (rowIdx: number, colIdx: number, value: string) => void;
  onAddRow: () => void;
}

function TableGrid({ columns, rows, onChange, onAddRow }: TableGridProps) {
  return (
    <>
      <div className="overflow-x-auto rounded-lg border border-[var(--color-line)] print:overflow-visible print:rounded-none print:border-black/25">
        <table className="w-full min-w-[560px] border-collapse text-[13.3px] print:min-w-0 print:table-fixed">
          <thead>
            <tr className="print:break-inside-avoid">
              {columns.map((c) => (
                <th
                  key={c}
                  className="whitespace-nowrap border-b border-[var(--color-line)] bg-[var(--color-cream-deep)] px-2.5 py-2 text-left text-[12.3px] font-medium text-[var(--color-muted)] print:whitespace-normal print:break-words print:border-black/40 print:bg-transparent print:align-bottom print:text-[11px] print:text-black"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className={`print:break-inside-avoid ${rIdx === rows.length - 1 ? "[&>td]:border-b-0" : ""}`}
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className="min-w-[110px] border-b border-[var(--color-line-soft)] p-1 print:min-w-0 print:border-black/15 print:p-1.5 print:align-top"
                  >
                    <input
                      type="text"
                      className="w-full bg-transparent px-2 py-1.5 text-[13.5px] text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-sage)] print:hidden"
                      value={cell}
                      onChange={(e) => onChange(rIdx, cIdx, e.target.value)}
                    />
                    <div className={TABLE_CELL_PRINT_VALUE}>{cell || "—"}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        onClick={onAddRow}
        className="mt-2 rounded-md border border-dashed border-[var(--color-line)] px-2.5 py-1 text-xs text-[var(--color-sage-deep)] hover:border-[var(--color-sage)] print:hidden"
      >
        + Zeile hinzufügen
      </button>
    </>
  );
}

function useTableRows(name: string, columns: string[], initialRows: number) {
  const { getVal, setVal } = useFormData();
  const rows = getVal<string[][]>(name, Array.from({ length: initialRows }, () => columns.map(() => "")));

  function updateCell(rowIdx: number, colIdx: number, value: string) {
    const next = rows.map((r) => [...r]);
    next[rowIdx][colIdx] = value;
    setVal(name, next);
  }

  function addRow() {
    setVal(name, [...rows, columns.map(() => "")]);
  }

  return { rows, updateCell, addRow };
}

export function TableInput({ field }: { field: TableField }) {
  const { rows, updateCell, addRow } = useTableRows(field.name, field.columns, field.rows ?? 4);
  return (
    <div className="my-4 print:break-inside-avoid">
      <FieldLabel {...field} />
      <TableGrid columns={field.columns} rows={rows} onChange={updateCell} onAddRow={addRow} />
    </div>
  );
}

/**
 * Abschluss eines Themenfeldes: Ja/Nein-Frage plus Tabelle. Die Einträge
 * erscheinen automatisch in der Zusammenfassung am Ende des Bogens.
 */
export function MedsInput({ field }: { field: MedsField }) {
  const { getVal, setVal } = useFormData();
  const choice = getVal<string>(`${field.name}_ja`, "");
  const { rows, updateCell, addRow } = useTableRows(field.name, medsColumns, field.rows ?? 3);

  return (
    <div className="my-5 rounded-xl border border-[var(--color-sage-soft)]/50 bg-[var(--color-sage)]/[0.05] p-4 print:break-inside-avoid print:border-black/25">
      <p className="mb-2 text-sm font-medium text-[var(--color-ink)]">{field.label}</p>
      <div className="mb-3 flex flex-wrap items-center gap-4 print:hidden">
        {["nein", "ja"].map((opt) => (
          <label key={opt} className="flex cursor-pointer items-center gap-1.5 text-[14.5px] text-[var(--color-ink)]">
            <input
              type="radio"
              name={`${field.name}_ja`}
              className="h-4 w-4 [accent-color:var(--color-sage-deep)]"
              checked={choice === opt}
              onChange={() => setVal(`${field.name}_ja`, opt)}
            />
            {opt}
          </label>
        ))}
      </div>
      <div className={PRINT_VALUE}>{choice || "—"}</div>
      <p className="mb-2 mt-3 text-xs text-[var(--color-muted)]">
        {field.hint && field.hint !== medsHint ? `${field.hint} — ${medsHint}` : medsHint}
      </p>
      <TableGrid columns={medsColumns} rows={rows} onChange={updateCell} onAddRow={addRow} />
    </div>
  );
}

export function NoteBlock({ field }: { field: NoteField }) {
  const isWarn = field.tone === "warn";
  return (
    <div
      className={`my-4 rounded-xl border p-4 text-[13.8px] ${
        isWarn
          ? "border-[var(--color-terra-soft)]/50 bg-[var(--color-terra-soft)]/10"
          : "border-[var(--color-sage-soft)]/50 bg-[var(--color-sage)]/[0.06]"
      }`}
    >
      <h4 className="font-display mb-1 text-[14.5px] text-[var(--color-ink)]">{field.title}</h4>
      <p className="m-0 text-[var(--color-ink-soft)]">{field.text}</p>
    </div>
  );
}

export function RenderField({ field }: { field: Field }) {
  switch (field.type) {
    case "text":
      return <TextInput field={field} />;
    case "textarea":
      return <TextareaInput field={field} />;
    case "check":
      return <CheckGroup field={field} />;
    case "radiotext":
      return <RadioTextInput field={field} />;
    case "scale":
      return <ScaleInput field={field} />;
    case "table":
      return <TableInput field={field} />;
    case "meds":
      return <MedsInput field={field} />;
    case "note":
      return <NoteBlock field={field} />;
    default:
      return null;
  }
}

export function isFieldFilled(field: Field, state: Record<string, unknown>): boolean {
  switch (field.type) {
    case "text":
    case "textarea": {
      const v = state[field.name];
      return typeof v === "string" && v.trim().length > 0;
    }
    case "check": {
      const v = state[field.name];
      const other = state[`${field.name}_other`] as { checked?: boolean } | undefined;
      return (Array.isArray(v) && v.length > 0) || !!other?.checked;
    }
    case "radiotext": {
      const v = state[field.name] as { choice?: string } | undefined;
      return !!v?.choice;
    }
    case "scale": {
      const v = state[field.name];
      return v !== undefined && v !== null;
    }
    case "meds": {
      const choice = state[`${field.name}_ja`];
      if (typeof choice === "string" && choice.length > 0) return true;
      return hasTableContent(state[field.name]);
    }
    case "table":
      return hasTableContent(state[field.name]);
    case "note":
      return false;
    default:
      return false;
  }
}

function hasTableContent(value: unknown): boolean {
  return (
    Array.isArray(value) &&
    value.some((row) => Array.isArray(row) && row.some((cell) => typeof cell === "string" && cell.trim().length > 0))
  );
}
