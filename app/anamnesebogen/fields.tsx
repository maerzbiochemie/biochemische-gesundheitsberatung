"use client";

import type {
  CheckField,
  Field,
  NoteField,
  RadioTextField,
  ScaleField,
  TableField,
  TextField,
  TextareaField,
} from "@/content/anamnesebogen";
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

export function TableInput({ field }: { field: TableField }) {
  const { getVal, setVal } = useFormData();
  const rows = getVal<string[][]>(field.name, Array.from({ length: field.rows ?? 4 }, () => field.columns.map(() => "")));

  function updateCell(rowIdx: number, colIdx: number, value: string) {
    const next = rows.map((r) => [...r]);
    next[rowIdx][colIdx] = value;
    setVal(field.name, next);
  }

  function addRow() {
    setVal(field.name, [...rows, field.columns.map(() => "")]);
  }

  return (
    <div className="my-4 print:break-inside-avoid">
      <FieldLabel {...field} />
      <div className="overflow-x-auto rounded-lg border border-[var(--color-line)] print:overflow-visible print:rounded-none print:border-black/25">
        <table className="w-full min-w-[560px] border-collapse text-[13.3px] print:min-w-0 print:table-fixed">
          <thead>
            <tr className="print:break-inside-avoid">
              {field.columns.map((c) => (
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
              <tr key={rIdx} className="print:break-inside-avoid">
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className="min-w-[110px] border-b border-[var(--color-line-soft)] p-1 last:border-b-0 print:min-w-0 print:border-black/15 print:p-1.5 print:align-top"
                  >
                    <input
                      type="text"
                      className="w-full bg-transparent px-2 py-1.5 text-[13.5px] text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-sage)] print:hidden"
                      value={cell}
                      onChange={(e) => updateCell(rIdx, cIdx, e.target.value)}
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
        onClick={addRow}
        className="mt-2 rounded-md border border-dashed border-[var(--color-line)] px-2.5 py-1 text-xs text-[var(--color-sage-deep)] hover:border-[var(--color-sage)] print:hidden"
      >
        + Zeile hinzufügen
      </button>
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
    case "table": {
      const v = state[field.name];
      return Array.isArray(v) && v.some((row) => Array.isArray(row) && row.some((cell) => typeof cell === "string" && cell.trim().length > 0));
    }
    case "note":
      return false;
    default:
      return false;
  }
}
