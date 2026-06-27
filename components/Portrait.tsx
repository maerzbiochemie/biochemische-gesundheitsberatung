import Image, { type StaticImageData } from "next/image";
import { Parallax } from "@/components/Parallax";

/*
 * Renders a real photo of Milva März when `src` is provided (optimised via
 * next/image with an automatic blur placeholder). When no image is supplied it
 * falls back to a calm "MM" placeholder so the layout never shows a broken path.
 */

type PortraitProps = {
  /** statically imported image (from /assets) */
  src?: StaticImageData;
  alt?: string;
  /** aspect ratio utility, e.g. "aspect-[4/5]" */
  ratio?: string;
  /** object-position helper, e.g. "object-top" */
  position?: string;
  /** caption shown only on the placeholder */
  caption?: string;
  className?: string;
  /** parallax only applies to the placeholder */
  parallax?: boolean;
  /** prioritise loading (use for above-the-fold images) */
  priority?: boolean;
  /** responsive sizes hint for next/image */
  sizes?: string;
};

export function Portrait({
  src,
  alt = "Milva März",
  ratio = "aspect-[4/5]",
  position = "object-center",
  caption = "Porträt folgt",
  className = "",
  parallax = true,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 40vw",
}: PortraitProps) {
  const wrapper = `relative ${ratio} overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-cream-deep)] ${className}`;

  if (src) {
    return (
      <div className={wrapper}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          placeholder="blur"
          priority={priority}
          className={`object-cover ${position}`}
        />
      </div>
    );
  }

  // TODO (Bild einsetzen): Platzhalter — ersetzt sich automatisch, sobald ein
  // `src` (statisch importiertes Bild) übergeben wird.
  const inner = (
    <div className="flex h-full items-center justify-center">
      <div
        aria-hidden
        className="animate-float-slow h-40 w-40 rounded-full opacity-70 blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(47,93,69,0.55), rgba(47,93,69,0))" }}
      />
      <span className="font-display absolute text-[4.5rem] text-[var(--color-sage-soft)]">MM</span>
    </div>
  );

  return (
    <div className={wrapper}>
      {parallax ? <Parallax amount={36} className="absolute inset-0">{inner}</Parallax> : inner}
      {caption && (
        <span className="absolute bottom-4 left-4 rounded-full bg-[var(--color-paper)]/80 px-3 py-1 text-xs text-[var(--color-muted)] backdrop-blur">
          {caption}
        </span>
      )}
    </div>
  );
}
