import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";

/** Small uppercase label sitting above headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2.5">
      {children}
      <span className="h-px w-6 bg-[var(--color-sage-soft)]" aria-hidden />
    </span>
  );
}

/**
 * A highlighted list of short body-signal statements.
 * - `layout="cards"` renders each statement in its own small box, two-up from
 *   the `lg` breakpoint, and lets each box lift into view on scroll with a
 *   short stagger. No marker dot.
 */
export function SignalList({
  items,
  className = "",
  layout = "list",
}: {
  items: readonly string[];
  className?: string;
  layout?: "list" | "cards";
}) {
  const text = "font-display text-lg leading-snug text-[var(--color-sage-deep)] md:text-xl";

  if (layout === "cards") {
    return (
      <ul className={`grid gap-3 lg:grid-cols-2 ${className}`}>
        {items.map((s, i) => (
          <Reveal
            as="li"
            key={s}
            delay={i * 70}
            className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-cream-deep)] px-5 py-4"
          >
            <span className="font-display text-base leading-snug text-[var(--color-sage-deep)] md:text-lg">
              {s}
            </span>
          </Reveal>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`space-y-4 border-l-2 border-[var(--color-sage)]/40 pl-6 ${className}`}>
      {items.map((s) => (
        <li key={s} className={text}>
          {s}
        </li>
      ))}
    </ul>
  );
}

/** Pill button that renders as a link. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`;
  const inner = (
    <>
      {children}
      <span className="arrow" aria-hidden>
        →
      </span>
    </>
  );
  return (
    <Magnetic>
      {external ? (
        <a
          href={href}
          className={cls}
          {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {inner}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {inner}
        </Link>
      )}
    </Magnetic>
  );
}

/** A consistent vertical-rhythm section wrapper. */
export function Section({
  children,
  className = "",
  id,
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "cream" | "paper" | "ink" | "deep";
}) {
  const toneClass =
    tone === "paper"
      ? "bg-[var(--color-paper)]"
      : tone === "ink"
        ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
        : tone === "deep"
          ? "bg-[var(--color-cream-deep)]"
          : "bg-[var(--color-cream)]";
  return (
    <section
      id={id}
      className={`${toneClass} py-20 md:py-28 lg:py-32 ${className}`}
      style={id ? { scrollMarginTop: "5rem" } : undefined}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}
