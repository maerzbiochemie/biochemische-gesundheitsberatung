import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="container-x py-20 md:py-24">
        {/* Centered brand block */}
        <div className="text-center">
          <p className="font-display text-2xl md:text-3xl">{site.name}</p>
          <p className="eyebrow mt-2 !text-[var(--color-sage-soft)]">{site.tagline}</p>
          <p className="font-display mx-auto mt-5 max-w-xl text-3xl leading-tight md:text-[2.4rem]">
            Verständnis statt Informationsüberflutung.
          </p>
          <Link
            href={site.cta.primary.href}
            className="link-underline mt-7 inline-flex items-center gap-2 text-[var(--color-sage-soft)]"
          >
            {site.cta.primary.label}
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Three columns below: Navigation · Kontakt · Rechtliches */}
        <div className="mt-16 grid gap-10 border-t border-[var(--color-paper)]/15 pt-12 text-center sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-sage-soft)]">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-paper)]/70 transition-colors hover:text-[var(--color-paper)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-sage-soft)]">
              Kontakt
            </p>
            {/* Nur Name + E-Mail + Social. Vollständige Adresse / Qualifikation
                stehen ausschließlich im Impressum. */}
            <ul className="mt-5 space-y-3 text-[var(--color-paper)]/70">
              <li>{site.name}</li>
              <li>
                <a href={`mailto:${site.email}`} className="link-underline whitespace-nowrap">
                  {site.email}
                </a>
              </li>
            </ul>
            <ul className="mt-5 flex flex-wrap justify-center gap-4 text-[var(--color-paper)]/70">
              {site.social.map((s) => (
                <li key={s.label}>
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline transition-colors hover:text-[var(--color-paper)]"
                    >
                      {s.label}
                    </a>
                  ) : (
                    // TODO (Launch): URL in site.social ergänzen — dann wird dies ein Link.
                    <span>{s.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-sage-soft)]">
              Rechtliches
            </p>
            <ul className="mt-5 space-y-3">
              {site.legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-paper)]/70 transition-colors hover:text-[var(--color-paper)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-[var(--color-paper)]/15 pt-8 text-center text-sm text-[var(--color-paper)]/55">
          <p>© 2026 {site.name}. Alle Rechte vorbehalten.</p>
          <p className="max-w-xl text-xs leading-relaxed">{site.footerDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
