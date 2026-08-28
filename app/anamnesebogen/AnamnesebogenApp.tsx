"use client";

import { useEffect, useMemo, useState } from "react";
import {
  consentCheckboxes,
  consentIntro,
  optionalProtocol,
  privacyNoticeBlocks,
  sections,
} from "@/content/anamnesebogen";
import { site } from "@/content/site";
import { FormProvider, useFormData, useGate } from "./FormContext";
import { PasswordGate } from "./PasswordGate";
import { Toolbar } from "./Toolbar";
import { BodyMap } from "./BodyMap";
import { SignaturePad } from "./SignaturePad";
import { RenderField, TableInput, isFieldFilled } from "./fields";

const navItems = [
  ...sections.map((s) => ({ id: `s${s.n}`, label: `${s.n}. ${s.title.split(",")[0].split(" und ")[0]}` })),
  { id: "s18", label: "18. Datenschutz" },
  { id: "s19", label: "Kurzprotokoll" },
];

function useProgress() {
  const { state } = useFormData();
  return useMemo(() => {
    let total = 0;
    let filled = 0;
    sections.forEach((sec) => {
      sec.fields.forEach((f) => {
        if (f.type === "note") return;
        total++;
        if (isFieldFilled(f, state)) filled++;
      });
      if (sec.bodymap) {
        total++;
        const markers = state["bodymap_markers"];
        if (Array.isArray(markers) && markers.length > 0) filled++;
      }
    });
    total += 1 + consentCheckboxes.length + 2; // Einwilligung, 3 Bestätigungen, 2 Unterschriften
    if (state["s18_einwilligung"]) filled++;
    consentCheckboxes.forEach((c) => {
      if (state[c.name]) filled++;
    });
    if (state["s18_unterschrift_1"]) filled++;
    if (state["s18_unterschrift_2"]) filled++;
    return total ? Math.round((filled / total) * 100) : 0;
  }, [state]);
}

function SectionNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-section-card]"));
    if (!cards.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Abschnitte" className="flex gap-1.5 overflow-x-auto px-5 pb-2.5 pt-1.5">
      {navItems.map((it) => (
        <a
          key={it.id}
          href={`#${it.id}`}
          className={`flex-none whitespace-nowrap rounded-full border px-2.5 py-1 text-[12px] transition-colors ${
            active === it.id
              ? "border-[var(--color-sage)] bg-[var(--color-sage)]/10 font-medium text-[var(--color-sage-deep)]"
              : "border-[var(--color-line)] text-[var(--color-muted)]"
          }`}
        >
          {it.label}
        </a>
      ))}
    </nav>
  );
}

function TopBar() {
  const progress = useProgress();
  return (
    <div className="sticky top-16 z-40 border-b border-[var(--color-line)] bg-[var(--color-cream)]/92 backdrop-blur-md print:hidden md:top-20">
      <div className="mx-auto flex max-w-[860px] items-center gap-4 px-5 py-2.5 md:px-8">
        <span className="font-display whitespace-nowrap text-[15px] text-[var(--color-sage-deep)]">Biochemische Gesundheitsberatung</span>
        <div className="h-[7px] flex-1 overflow-hidden rounded-full bg-[var(--color-cream-deep)]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[var(--color-sage)] to-[var(--color-sage-deep)] transition-[width]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="whitespace-nowrap text-xs tabular-nums text-[var(--color-muted)]">{progress}% ausgefüllt</span>
      </div>
      <div className="mx-auto max-w-[860px]">
        <SectionNav />
      </div>
    </div>
  );
}

function InfoNote({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-xl border border-[var(--color-sage-soft)]/50 bg-[var(--color-sage)]/[0.06] p-4 text-[13.8px]">
      <h4 className="font-display mb-1 text-[14.5px] text-[var(--color-ink)]">{title}</h4>
      <div className="text-[var(--color-ink-soft)]">{children}</div>
    </div>
  );
}

function WarnNote({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-xl border border-[var(--color-terra-soft)]/50 bg-[var(--color-terra-soft)]/10 p-4 text-[13.8px]">
      <h4 className="font-display mb-1 text-[14.5px] text-[var(--color-ink)]">{title}</h4>
      <div className="text-[var(--color-ink-soft)]">{children}</div>
    </div>
  );
}

function SectionCard({ n, total, title, children }: { n: number; total: number; title: string; children: React.ReactNode }) {
  return (
    <div
      id={`s${n}`}
      data-section-card
      className="card scroll-mt-24 p-6 print:break-inside-avoid print:border-black/20 print:shadow-none sm:p-8"
    >
      <div className="mb-1 text-xs font-semibold tracking-wide text-[var(--color-sage-deep)]">
        Abschnitt {n} von {total}
      </div>
      <div className="mb-4 flex items-baseline gap-4 border-b border-[var(--color-line)] pb-4">
        <span className="marker-num-lg">{n}</span>
        <h2 className="font-display text-xl text-[var(--color-ink)] md:text-2xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function ConsentSection() {
  const { getVal, setVal } = useFormData();
  const einwilligung = getVal<boolean>("s18_einwilligung", false);
  const ortDatum1 = getVal<string>("s18_ort_datum_1", "");
  const ortDatum2 = getVal<string>("s18_ort_datum_2", "");

  return (
    <SectionCard n={18} total={19} title="Datenschutz, Einwilligung und Abschluss">
      <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-cream-deep)] p-4 text-[13.3px] sm:p-5">
        <p className="font-medium text-[var(--color-ink)]">{consentIntro.heading}</p>
        {consentIntro.paragraphs.map((p) => (
          <p key={p} className="mt-2 text-[var(--color-ink-soft)]">
            {p}
          </p>
        ))}
        <ul className="mt-2 space-y-1.5 pl-5 text-[var(--color-ink-soft)]">
          {consentIntro.bullets.map((b) => (
            <li key={b} className="list-disc">
              {b}
            </li>
          ))}
        </ul>
      </div>

      <label className="my-4 flex cursor-pointer items-center gap-2 text-[14px] text-[var(--color-ink)]">
        <input
          type="checkbox"
          className="h-4 w-4 [accent-color:var(--color-sage-deep)]"
          checked={einwilligung}
          onChange={(e) => setVal("s18_einwilligung", e.target.checked)}
        />
        Ja, ich willige ein.
      </label>

      <div className="my-4 flex flex-wrap items-end gap-5">
        <div className="min-w-[200px] flex-1">
          <label className="mb-1 block text-xs text-[var(--color-muted)]">Ort, Datum</label>
          <input
            type="text"
            className="w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-cream)] px-3 py-2 text-[14.5px] text-[var(--color-ink)]"
            value={ortDatum1}
            onChange={(e) => setVal("s18_ort_datum_1", e.target.value)}
          />
        </div>
        <SignaturePad name="s18_unterschrift_1" label="Unterschrift" />
      </div>

      <div className="legal-copy mt-6 text-[13.3px] text-[var(--color-ink)]">
        {privacyNoticeBlocks.map((block, i) => {
          if (block.type === "h4") {
            return (
              <h4 key={i} className="font-display mb-1.5 mt-5 text-[14.5px] text-[var(--color-ink)]">
                {block.text}
              </h4>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={i} className="my-2 space-y-1.5 pl-5">
                {block.items.map((it) => (
                  <li key={it} className="list-disc text-[var(--color-ink-soft)]">
                    {it}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={i} className="my-2 text-[var(--color-ink-soft)]">
              {block.text}
            </p>
          );
        })}
      </div>

      {consentCheckboxes.map((c) => (
        <label key={c.name} className="my-3 flex cursor-pointer items-center gap-2 text-[14px] text-[var(--color-ink)]">
          <input
            type="checkbox"
            className="h-4 w-4 shrink-0 [accent-color:var(--color-sage-deep)]"
            checked={getVal<boolean>(c.name, false)}
            onChange={(e) => setVal(c.name, e.target.checked)}
          />
          {c.label}
        </label>
      ))}

      <div className="my-4 flex flex-wrap items-end gap-5">
        <div className="min-w-[200px] flex-1">
          <label className="mb-1 block text-xs text-[var(--color-muted)]">Ort, Datum</label>
          <input
            type="text"
            className="w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-cream)] px-3 py-2 text-[14.5px] text-[var(--color-ink)]"
            value={ortDatum2}
            onChange={(e) => setVal("s18_ort_datum_2", e.target.value)}
          />
        </div>
        <SignaturePad name="s18_unterschrift_2" label="Unterschrift" />
      </div>
    </SectionCard>
  );
}

function AnamnesebogenContent() {
  return (
    <>
      <TopBar />

      <div className="mx-auto max-w-[860px] px-5 pb-28 pt-9 md:px-8">
        <div className="eyebrow">Vorbereitungsbogen für den Ersttermin · Online-Version</div>
        <h1 className="font-display mt-2 text-[1.85rem] leading-[1.12] text-[var(--color-ink)] sm:text-4xl">
          Gesundheits- und Ernährungsfragebogen
        </h1>
        <p className="mt-2 text-[15px] text-[var(--color-ink-soft)]">Biochemische Gesundheitsberatung — Milva März, B.Sc. Biochemie</p>

        <InfoNote title="Hinweis zur Nutzung">
          <p className="italic">
            Diese Beratung ist eine biochemische Gesundheits- und Ernährungsberatung durch eine Biochemikerin B.Sc. Sie ersetzt keine
            ärztliche Diagnose, Behandlung oder Therapie und stellt keine Ausübung der Heilkunde dar. Bei gesundheitlichen Beschwerden
            wenden Sie sich bitte an eine Ärztin/einen Arzt oder eine zugelassene Heilpraktikerin/einen zugelassenen Heilpraktiker.
          </p>
          <p className="mt-2">
            Dieser Bogen dient der Vorbereitung Ihres Ersttermins. Bitte füllen Sie ihn so vollständig wie möglich aus. Fragen, die nicht
            zutreffen oder die Sie nicht beantworten möchten, können Sie frei lassen. Je genauer Ihre Angaben sind, desto gezielter kann
            die Beratung vorbereitet werden.
          </p>
        </InfoNote>

        <WarnNote title="So senden Sie den ausgefüllten Bogen zurück">
          <p>
            Bitte füllen Sie den Bogen hier aus und speichern Sie ihn anschließend als PDF (Button „Drucken / Als PDF“ unten). Am
            einfachsten: Ich richte Ihnen dafür einen passwortgeschützten Freigabe-Link zu einem eigens angelegten Ordner in meinem
            Proton Drive ein, gültig für 7 Tage. Link und Passwort erhalten Sie von mir getrennt (den Link per E-Mail, das Passwort auf
            einem anderen Weg, z.&nbsp;B. Telefon oder SMS). Laden Sie darüber bitte ausschließlich Ihren fertig ausgefüllten Fragebogen
            hoch — ich lösche Ordner und Datei, sobald ich sie übernommen habe, spätestens jedoch nach Ablauf der 7 Tage. Falls Sie
            diesen Link noch nicht haben, melden Sie sich einfach bei mir ({site.email}). Genauso gut können Sie den
            ausgedruckten Bogen auch <strong>per Post</strong> senden an: Milva März,
            Biochemische Gesundheitsberatung, Jurastraße 27-1, 72072 Tübingen-Derendingen. Ihre Eingaben verlassen dabei nie diesen
            Browser, werden dort verschlüsselt gespeichert und automatisch 24 Stunden nach der letzten Eingabe selbst gelöscht — speichern
            Sie die PDF also rechtzeitig vorher.
          </p>
        </WarnNote>

        <InfoNote title="Bitte vor dem Termin beifügen">
          <p>
            Falls vorhanden, senden Sie bitte aktuelle Laborwerte, Arztbriefe, Entlassberichte, Medikamentenpläne, Diagnosen,
            Ernährungsprotokolle oder relevante Befunde mit. Bitte nutzen Sie dafür möglichst den vorher vereinbarten sicheren
            Übermittlungsweg.
          </p>
        </InfoNote>

        <main className="mt-2 space-y-6">
          {sections.map((sec) => (
            <SectionCard key={sec.n} n={sec.n} total={19} title={sec.title}>
              {sec.bodymap && <BodyMap />}
              {sec.fields.map((f, i) => (
                <RenderField key={"name" in f ? f.name : `${sec.n}-note-${i}`} field={f} />
              ))}
            </SectionCard>
          ))}

          <ConsentSection />

          <SectionCard n={19} total={19} title="Optional: 7-Tage-Kurzprotokoll">
            <InfoNote title="Optional">
              <p>
                Dieses Kurzprotokoll kann vor dem Ersttermin hilfreich sein, wenn Beschwerden stark mit Ernährung, Stress, Schlaf, Zyklus
                oder Bewegung schwanken. Es muss nicht ausgefüllt werden, wenn es nicht notwendig ist.
              </p>
            </InfoNote>
            <TableInput field={{ type: "table", label: "Tagesprotokoll", name: optionalProtocol.name, columns: optionalProtocol.columns, rows: optionalProtocol.rows }} />
          </SectionCard>
        </main>

        <footer className="pb-2 pt-10 text-center text-xs text-[var(--color-muted)]">
          Version 2.3 · Online-Fragebogen · Ihre Eingaben werden ausschließlich lokal in diesem Browser gespeichert (kein Server-Upload),
          dort verschlüsselt (AES-256) und löschen sich automatisch 24 Stunden nach der letzten Eingabe von selbst. Bitte speichern Sie
          den ausgefüllten Bogen rechtzeitig vorher als PDF — danach senden Sie ihn bitte über den von mir bereitgestellten,
          7 Tage gültigen Proton-Drive-Freigabe-Link oder per Post an die Praxisadresse. Über „Zurücksetzen“ können Sie Ihre Angaben auch jederzeit sofort löschen, was
          besonders auf gemeinsam genutzten oder öffentlichen Geräten wichtig ist.
        </footer>
      </div>

      <Toolbar />
    </>
  );
}

export function AnamnesebogenApp() {
  const { unlocked } = useGate();
  if (!unlocked) return <PasswordGate />;
  // FormProvider mounts only once the password gate is passed, so loading
  // and decrypting stored data never runs before that point.
  return (
    <FormProvider>
      <AnamnesebogenContent />
    </FormProvider>
  );
}
