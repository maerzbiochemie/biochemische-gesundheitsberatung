"use client";

import { motion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Headline that reveals word by word from behind a mask. Animates on mount —
 * ideal for above-the-fold hero titles.
 */
export function WordReveal({
  text,
  className = "",
  as: Tag = "h1",
  delay = 0,
  stagger = 0.06,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  const MotionTag = motion(Tag);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  const word: Variants = {
    hidden: { y: "110%" },
    show: { y: "0%", transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <MotionTag className={className} variants={container} initial="hidden" animate="show">
      {words.map((w, i) => (
        <span key={i} className="word-mask">
          <motion.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/**
 * Spring-based fade + lift that triggers once when scrolled into view.
 * A more refined alternative to the CSS `.reveal` for accent moments.
 */
export function FadeIn({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  y?: number;
}) {
  const MotionTag = motion(Tag);
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.85, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}
