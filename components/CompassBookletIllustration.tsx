import Image from "next/image";
import kompassBuch from "@/assets/kompass-buch-freigestellt.png";

/** Decorative open-booklet illustration for the "Biochemischer Kompass" section —
 * Milva's own image, background removed, fixed aspect ratio to avoid layout shift. */
export function CompassBookletIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[1200/789] ${className}`}>
      <Image
        src={kompassBuch}
        alt=""
        aria-hidden
        fill
        sizes="(min-width: 901px) 580px, 420px"
        className="object-contain"
      />
    </div>
  );
}
