"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Wraps children in a subtly "magnetic" element — it leans toward the cursor
 * on hover and springs back on leave. Disabled on touch / reduced-motion.
 */
export function Magnetic({
  children,
  className = "",
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(e: React.PointerEvent<HTMLSpanElement>) {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ x: springX, y: springY }}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.span>
  );
}
