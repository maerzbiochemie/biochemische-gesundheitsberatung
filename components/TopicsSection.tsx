"use client";

import { useId, useState, type CSSProperties } from "react";
import Image, { type StaticImageData } from "next/image";
import { Reveal } from "@/components/Reveal";
import { topicsSection } from "@/content/site";
import iconUterus from "@/assets/topics-uterus.png";
import iconDarm from "@/assets/topics-darm.png";
import iconSerotonin from "@/assets/topics-serotonin.png";
import iconZellen from "@/assets/topics-zellen.png";
import iconKoerperkontur from "@/assets/topics-koerperkontur.png";
import iconKompass from "@/assets/topics-kompass.png";

// Icon-Breiten je Thema. Ursprünglich exakt wie in der Vorgabe (BIO-198 §10);
// auf Milvas Wunsch (Icons 01-05 an die Kompass-Breite angleichen) auf
// einheitlich 135px gesetzt. Liegen hier statt in content/site.ts, weil es
// sich um ein Layout-/Asset-Detail handelt, nicht um editierbaren Text.
const ICON_WIDTHS: Record<string, number> = {
  endometriose: 135,
  darmbeschwerden: 135,
  "symptome-reaktionen": 135,
  "histamin-mastzellen": 135,
  "chronisch-krank": 135,
  "viel-ausprobiert": 135,
};

const ICON_SOURCES: Partial<Record<string, StaticImageData>> = {
  endometriose: iconUterus,
  darmbeschwerden: iconDarm,
  "symptome-reaktionen": iconSerotonin,
  "histamin-mastzellen": iconZellen,
  "chronisch-krank": iconKoerperkontur,
  "viel-ausprobiert": iconKompass,
};

/**
 * Sechs Themenkarten als 3×2-Raster (Desktop), je einzeln aufklappbar;
 * immer nur eine Karte gleichzeitig offen.
 */
export function TopicsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const idPrefix = useId();

  return (
    <section className="topics-section">
      <div className="container-wide topics-container">
        <Reveal className="topics-head">
          <span className="topics-eyebrow-row">
            <span className="topics-eyebrow">{topicsSection.eyebrow}</span>
            <span aria-hidden className="topics-eyebrow-line" />
          </span>
          <h2 className="topics-headline font-display">
            {topicsSection.headlineLines.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </h2>
        </Reveal>

        <div className="topics-grid">
          {topicsSection.topics.map((topic) => {
            const isOpen = openId === topic.id;
            const contentId = `${idPrefix}-${topic.id}`;
            return (
              <Reveal
                key={topic.id}
                delay={90}
                className={`topics-card${isOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="topics-card__trigger"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenId(isOpen ? null : topic.id)}
                >
                  <span
                    className="topics-card__icon"
                    aria-hidden
                    style={{ "--icon-width": `${ICON_WIDTHS[topic.id]}px` } as CSSProperties}
                  >
                    {ICON_SOURCES[topic.id] && (
                      <Image src={ICON_SOURCES[topic.id]!} alt="" />
                    )}
                  </span>
                  <span className="topics-card__title font-display">{topic.title}</span>
                  <span className="topics-card__plus" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div className="topics-card__content" id={contentId}>
                  <div className="topics-card__content-inner">
                    <span className="topics-card__rule" aria-hidden />
                    <p className="topics-card__text">{topic.body}</p>
                    {"note" in topic && (
                      <p className="topics-card__note">{topic.note}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
