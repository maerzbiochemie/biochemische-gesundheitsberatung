"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[var(--color-cream)]/90 backdrop-blur-md border-b border-[var(--color-line)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="group flex flex-col leading-none">
            <span className="font-display text-xl tracking-tight md:text-[1.4rem]">
              {site.name}
            </span>
            <span className="mt-0.5 text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {site.tagline}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {site.nav.map((item) => {
              const base = item.href.split("#")[0];
              // "/#ansatz" points at the home page section — never a "page".
              const active = base !== "/" && pathname.startsWith(base);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`link-underline text-sm transition-colors ${
                    active ? "text-[var(--color-ink)]" : "text-[var(--color-ink-soft)]"
                  } hover:text-[var(--color-ink)]`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={site.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !px-5 !py-2.5 text-sm"
            >
              Erstgespräch
              <span className="arrow" aria-hidden>
                →
              </span>
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-[var(--color-ink)] transition-all duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-[var(--color-ink)] transition-all duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-cream)] transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-6">
          {site.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between border-b border-[var(--color-line-soft)] py-3.5 font-display text-2xl"
            >
              <span>{item.label}</span>
              <span className="marker-num">{String(i + 1).padStart(2, "0")}</span>
            </Link>
          ))}
          <a
            href={site.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-5 justify-center"
          >
            {site.booking.label}
            <span className="arrow" aria-hidden>
              →
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
