"use client";

import { useRef, useState } from "react";
import { bodyMapCategories, type BodyMapCategoryKey } from "@/content/anamnesebogen";
import { useFormData } from "./FormContext";

interface Marker {
  view: "vorn" | "hinten";
  cat: BodyMapCategoryKey;
  x: number;
  y: number;
}

const SILHOUETTE_PARTS: { tag: "circle" | "rect" | "path"; attrs: Record<string, string | number> }[] = [
  { tag: "circle", attrs: { cx: 100, cy: 38, r: 26 } },
  { tag: "rect", attrs: { x: 90, y: 60, width: 20, height: 16, rx: 6 } },
  {
    tag: "path",
    attrs: {
      d: "M62,76 C82,66 118,66 138,76 L142,120 C144,158 138,192 128,214 L72,214 C62,192 56,158 58,120 Z",
    },
  },
  { tag: "rect", attrs: { x: 22, y: 80, width: 26, height: 112, rx: 13, transform: "rotate(9 35 80)" } },
  { tag: "rect", attrs: { x: 152, y: 80, width: 26, height: 112, rx: 13, transform: "rotate(-9 165 80)" } },
  { tag: "rect", attrs: { x: 67, y: 208, width: 30, height: 172, rx: 14, transform: "rotate(-3 82 208)" } },
  { tag: "rect", attrs: { x: 103, y: 208, width: 30, height: 172, rx: 14, transform: "rotate(3 118 208)" } },
];

function Silhouette({
  view,
  markers,
  onSvgClick,
}: {
  view: "vorn" | "hinten";
  markers: Marker[];
  onSvgClick: (x: number, y: number) => void;
}) {
  const ref = useRef<SVGSVGElement>(null);

  function handleClick(e: React.MouseEvent<SVGSVGElement>) {
    const svg = ref.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const vb = svg.viewBox.baseVal;
    const x = ((e.clientX - rect.left) / rect.width) * vb.width;
    const y = ((e.clientY - rect.top) / rect.height) * vb.height;
    onSvgClick(x, y);
  }

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 420"
      onClick={handleClick}
      role="img"
      aria-label={`Körpersilhouette, ${view === "vorn" ? "Vorderansicht" : "Rückansicht"}. Anklicken setzt eine Markierung.`}
      className="w-[150px] cursor-crosshair rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)]"
    >
      {SILHOUETTE_PARTS.map((p, i) => {
        const Tag = p.tag;
        return <Tag key={i} {...p.attrs} fill="var(--color-cream-deep)" stroke="var(--color-muted)" strokeWidth={1.2} />;
      })}
      {markers
        .filter((m) => m.view === view)
        .map((m, i) => {
          const cat = bodyMapCategories.find((c) => c.key === m.cat) ?? bodyMapCategories[3];
          return (
            <g key={i}>
              <circle cx={m.x} cy={m.y} r={9} fill={cat.color} opacity={0.9} />
              <text x={m.x} y={m.y + 3.5} textAnchor="middle" fontSize={10} fill="#fff" fontWeight={700}>
                {cat.sym}
              </text>
            </g>
          );
        })}
    </svg>
  );
}

export function BodyMap() {
  const { getVal, setVal } = useFormData();
  const markers = getVal<Marker[]>("bodymap_markers", []);
  const [activeCat, setActiveCat] = useState<BodyMapCategoryKey>(bodyMapCategories[0].key);

  function handleSvgClick(view: "vorn" | "hinten", x: number, y: number) {
    const hitIdx = markers.findIndex((m) => m.view === view && Math.hypot(m.x - x, m.y - y) < 10);
    const next = hitIdx > -1 ? markers.filter((_, i) => i !== hitIdx) : [...markers, { view, cat: activeCat, x, y }];
    setVal("bodymap_markers", next);
  }

  return (
    <div className="my-1 mb-5 rounded-xl border border-[var(--color-sage-soft)]/40 bg-[var(--color-sage)]/[0.06] p-4 sm:p-5">
      <label className="mb-3 block text-sm font-medium text-[var(--color-ink)]">
        Körperkarte: Wo spüren Sie aktuell etwas?
        <span className="mt-1 block text-xs font-normal text-[var(--color-muted)]">
          Kategorie wählen, dann auf die Silhouette tippen/klicken, um eine Markierung zu setzen. Erneutes Klicken auf eine Markierung
          entfernt sie. Dient als Gesprächsgrundlage, nicht als Diagnose.
        </span>
      </label>

      <div className="mb-4 flex flex-wrap gap-2">
        {bodyMapCategories.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActiveCat(c.key)}
            className={`flex items-center gap-1.5 rounded-full border bg-[var(--color-paper)] py-1.5 pl-1.5 pr-3 text-[13px] transition-colors ${
              activeCat === c.key ? "border-[var(--color-ink)] ring-2 ring-[var(--color-ink)]/10" : "border-[var(--color-line)]"
            }`}
          >
            <span
              className="grid h-[18px] w-[18px] place-items-center rounded-full text-[11px] font-bold text-white"
              style={{ background: c.color }}
            >
              {c.sym}
            </span>
            {c.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {(["vorn", "hinten"] as const).map((view) => (
          <div key={view} className="text-center">
            <Silhouette view={view} markers={markers} onSvgClick={(x, y) => handleSvgClick(view, x, y)} />
            <div className="mt-1.5 text-xs text-[var(--color-muted)]">{view === "vorn" ? "Vorderansicht" : "Rückansicht"}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-center print:hidden">
        <button
          type="button"
          onClick={() => setVal("bodymap_markers", [])}
          className="rounded-md border border-[var(--color-line)] px-3 py-1.5 text-xs text-[var(--color-ink)] hover:border-[var(--color-sage)]"
        >
          Markierungen zurücksetzen
        </button>
      </div>
    </div>
  );
}
