import Link from "next/link";
import { ButtonLink } from "@/components/ui";
import { site } from "@/content/site";

/*
 * Books the free initial consultation by linking DIRECTLY to the external
 * Calendly page (opens in a new tab). Calendly is never embedded — no scripts,
 * iframes or cookies are loaded. The privacy note (with a link to /datenschutz)
 * is always rendered beneath the button.
 */
type BookingButtonProps = {
  /** override the default button label */
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
  align?: "left" | "center";
  /** lighter note colours for dark backgrounds */
  tone?: "light" | "dark";
};

export function BookingButton({
  label,
  variant = "primary",
  className = "",
  align = "left",
  tone = "light",
}: BookingButtonProps) {
  const [before, after] = site.booking.note.split("Datenschutzerklärung");
  const noteColor = tone === "dark" ? "text-[var(--color-paper)]/55" : "text-[var(--color-muted)]";
  const linkColor =
    tone === "dark" ? "text-[var(--color-sage-soft)]" : "text-[var(--color-sage-deep)]";

  return (
    <div className={`flex flex-col ${align === "center" ? "items-center" : "items-start"}`}>
      <ButtonLink href={site.booking.url} variant={variant} className={className}>
        {label ?? site.booking.label}
      </ButtonLink>
      <p
        className={`mt-3 max-w-md text-xs leading-relaxed ${noteColor} ${
          align === "center" ? "text-center" : ""
        }`}
      >
        {before}
        <Link href="/datenschutz" className={`link-underline ${linkColor}`}>
          Datenschutzerklärung
        </Link>
        {after}
      </p>
    </div>
  );
}
