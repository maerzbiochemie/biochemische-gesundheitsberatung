import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "@/components/Magnetic";

/** Small uppercase label sitting above headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2.5">
      {children}
      <span className="h-px w-6 bg-[var(--color-sage-soft)]" aria-hidden />
    </span>
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
