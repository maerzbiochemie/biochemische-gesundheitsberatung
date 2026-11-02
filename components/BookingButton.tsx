import Link from "next/link";
import { ButtonLink } from "@/components/ui";
import { site } from "@/content/site";

/*
 * Books the free initial consultation by linking DIRECTLY to the external
 * Calendly page (opens in a new tab). Calendly is never embedded — no scripts,
 * iframes or cookies are loaded. The privacy note (with a link to /datenschutz)
 * is always rendered beneath the button.
 */
type BookingNoteProps = {
  align?: "left" | "center";
  /** lighter note colours for dark backgrounds */
  tone?: "light" | "dark";
  className?: string;
};

/** The Calendly/privacy note shown beneath every booking button. Exported
 * separately so layouts that need content between the button and the note
 * (e.g. a keyword line) can place it manually instead of via `BookingButton`. */
export function BookingNote({ align = "left", tone = "light", className = "" }: BookingNoteProps) {
  const [before, after] = site.booking.note.split("Datenschutzerklärung");
  const noteColor = tone === "dark" ? "text-[var(--color-paper)]/55" : "text-[var(--color-muted)]";
  const linkColor =
    tone === "dark" ? "text-[var(--color-sage-soft)]" : "text-[var(--color-sage-deep)]";

  return (
    <p
      className={`max-w-md text-xs leading-relaxed ${noteColor} ${
        align === "center" ? "text-center" : ""
      } ${className}`}
    >
      {before}
      <Link href="/datenschutz" className={`link-underline ${linkColor}`}>
        Datenschutzerklärung
      </Link>
      {after}
    </p>
  );
}

type BookingButtonProps = {
  /** override the default button label */
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
  align?: "left" | "center";
  /** lighter note colours for dark backgrounds */
  tone?: "light" | "dark";
  /** suppress the built-in note, e.g. when it's rendered separately below other content */
  hideNote?: boolean;
};

export function BookingButton({
  label,
  variant = "primary",
  className = "",
  align = "left",
  tone = "light",
  hideNote = false,
}: BookingButtonProps) {
  return (
    <div className={`flex flex-col ${align === "center" ? "items-center" : "items-start"}`}>
      <ButtonLink href={site.booking.url} variant={variant} className={className}>
        {label ?? site.booking.label}
      </ButtonLink>
      {!hideNote && <BookingNote align={align} tone={tone} className="mt-3" />}
    </div>
  );
}
