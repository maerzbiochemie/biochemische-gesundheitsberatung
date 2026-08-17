"use client";

import { useEffect, useRef } from "react";
import { useFormData } from "./FormContext";

export function SignaturePad({ name, label }: { name: string; label: string }) {
  const { getVal, setVal } = useFormData();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawingRef = useRef(false);
  const lastRef = useRef<{ x: number; y: number } | null>(null);
  const savedValue = getVal<string>(name, "");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = getComputedStyle(document.body).color;

    if (savedValue) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      img.src = savedValue;
    }

    function pos(ev: MouseEvent | TouchEvent) {
      const rect = canvas!.getBoundingClientRect();
      const point = "touches" in ev ? ev.touches[0] : ev;
      const cx = point.clientX - rect.left;
      const cy = point.clientY - rect.top;
      return { x: cx * (canvas!.width / rect.width), y: cy * (canvas!.height / rect.height) };
    }
    function start(ev: MouseEvent | TouchEvent) {
      drawingRef.current = true;
      lastRef.current = pos(ev);
      ev.preventDefault();
    }
    function move(ev: MouseEvent | TouchEvent) {
      if (!drawingRef.current || !lastRef.current) return;
      const p = pos(ev);
      ctx!.beginPath();
      ctx!.moveTo(lastRef.current.x, lastRef.current.y);
      ctx!.lineTo(p.x, p.y);
      ctx!.stroke();
      lastRef.current = p;
      ev.preventDefault();
      setVal(name, canvas!.toDataURL());
    }
    function end() {
      drawingRef.current = false;
    }

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", move, { passive: false });
    canvas.addEventListener("touchend", end);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", move);
      canvas.removeEventListener("touchend", end);
    };
    // Only wire up the canvas once; drawing itself does not need to react to re-renders.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function clear() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    setVal(name, "");
  }

  return (
    <div className="min-w-[200px] flex-1">
      <label className="mb-1 block text-xs text-[var(--color-muted)]">{label}</label>
      <canvas
        ref={canvasRef}
        width={320}
        height={100}
        className="w-full max-w-[320px] touch-none rounded-lg border border-[var(--color-line)] bg-[var(--color-cream)] print:hidden"
      />
      <button
        type="button"
        onClick={clear}
        className="mt-1 text-[11.5px] text-[var(--color-sage-deep)] underline-offset-2 hover:underline print:hidden"
      >
        Löschen
      </button>
    </div>
  );
}
