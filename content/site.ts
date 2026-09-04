// Zentrale Inhalts- und Navigationsdaten der Website (Deutsch).

export const site = {
  name: "Milva März",
  role: "Biochemikerin B.Sc.",
  tagline: "Biochemische Gesundheitsberatung",
  email: "kontakt@biochemische-gesundheitsberatung.com",
  address: ["Jurastraße 27-1", "72072 Tübingen-Derendingen"],
  // TODO (Launch): finale Social-Media-URLs eintragen. Keine erfundenen Links —
  // bleiben ohne href (nicht klickbar), bis echte URLs vorliegen.
  social: [
    { label: "LinkedIn", url: "" },
    { label: "Instagram", url: "" },
  ],
  nav: [
    { label: "Ansatz", href: "/#ansatz" },
    { label: "Für Privatkunden", href: "/privatkunden" },
    { label: "Für Unternehmen", href: "/unternehmen" },
    { label: "Über mich", href: "/ueber-mich" },
    { label: "Leistungen & Preise", href: "/leistungen" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  legalNav: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutzerklärung", href: "/datenschutz" },
  ],
  cta: {
    primary: { label: "Kostenloses Erstgespräch anfragen", href: "/kontakt" },
    secondary: { label: "Leistungen & Preise ansehen", href: "/leistungen" },
  },
  // Calendly is linked externally only — never embedded (no scripts, iframes,
  // widgets or cookies are loaded). The note is shown beneath every booking button.
  // TODO (Launch): finalen Calendly-Link bestätigen, falls abweichend.
  booking: {
    url: "https://calendly.com/maerz-biochemie",
    label: "Kostenloses Erstgespräch buchen",
    note: "Die Terminbuchung erfolgt über Calendly. Dabei können personenbezogene Daten an Calendly übermittelt werden. Weitere Informationen finden Sie in der Datenschutzerklärung.",
  },
  footerDisclaimer:
    "Die biochemische Gesundheitsberatung ersetzt keine ärztliche Diagnostik oder Behandlung.",
} as const;

// Körper-Signale — vollständige Liste ausschließlich auf der Startseite
// („Woran Sie es merken"). Durchgehend „Sie"-Form, einheitlich kurze Sätze.
export const koerperSignale = [
  "Der Schlaf wird schlechter.",
  "Die Verdauung reagiert empfindlicher.",
  "Die Energie schwankt über den Tag.",
  "Stress wirkt länger nach.",
  "Training fühlt sich zäh an.",
  "Die Regeneration dauert länger.",
  "Der Zyklus verändert sich.",
] as const;

// Gekürzte Reihe — nur für den Privatkunden-Hero (bewusst nicht die volle Liste,
// um die Symptom-Aufzählung nicht über zwei Seiten zu doppeln).
export const koerperSignaleKurz = [
  "Der Schlaf wird schlechter.",
  "Die Verdauung reagiert empfindlicher.",
  "Die Energie schwankt.",
  "Die Regeneration dauert länger.",
] as const;

export const home = {
  hero: {
    eyebrow: "Biochemische Gesundheitsberatung",
    title: "Verstehen, was Ihr Körper gerade braucht – statt weiter zu raten.",
    subtitle:
      "Wissenschaftlich fundierte Beratung für Menschen, die ihre Gesundheit nicht dem Zufall überlassen.",
    body: [
      "Statt allgemeiner Tipps schauen wir auf Ihre Werte, Ihre Beschwerden und Ihren Alltag – und leiten daraus konkrete Schritte ab, die zu Ihrem Körper passen.",
    ],
    heroQuote: "Wer Gesundheit verstehen will, muss den Körper als System betrachten.",
    facts: [
      ["Fachlicher Hintergrund", "Biochemie Bachelor of Science · Fitnesstrainerin"],
      ["Fokus", "Einordnung · Struktur · Umsetzung"],
      ["Arbeitsweise", "Individuell & wissenschaftlich fundiert"],
    ],
  },
  // Section formerly "Bedeutung von Gesundheit" — now "Ein Symptom ist selten
  // die ganze Geschichte". Fließtext + Untertitel = vom Juristen freigegebene
  // Fassung (BIO-144/145, Kommentar 2026-09-02): Möglichkeitsform, keine
  // Ergebniszusage. Die schärfere Variante „…damit sich mehrere Dinge
  // gleichzeitig verbessern" ist 🔴 und darf NICHT eingebaut werden.
  system: {
    eyebrow: "Zusammenhänge",
    title: "Ein Symptom ist selten die ganze Geschichte",
    subtitle:
      "Schlaf, Verdauung, Hormone, Energie, Stress und Regeneration hängen zusammen. Verändert sich eins, kann das die anderen mitbeeinflussen.",
    body: [
      "Deshalb greift es oft zu kurz, ein einzelnes Symptom isoliert zu betrachten. Die Frage ist, welcher Prozess dahintersteht – und wo für Sie ein sinnvoller Ansatzpunkt liegt.",
    ],
    pullquote: "Entscheidend sind deshalb die Prozesse dahinter – nicht nur das einzelne Symptom.",
    heroQuote: "Wer Gesundheit verstehen will, muss den Körper als System betrachten.",
    // Themenfelder — dieselben Begriffe, die bereits in system.body und im
    // Gesundheitskompass (leistungen.kompass) verwendet werden, hier als
    // eigene Liste mit Icons statt Bulletpoints.
    themenfelder: [
      "Stoffwechsel",
      "Energiehaushalt",
      "Verdauung",
      "Hormonregulation",
      "Nervensystem",
      "Belastung & Regeneration",
    ],
    more: {
      label: "So gehe ich vor",
      title: "Der Körper als zusammenhängendes Gefüge",
      body: [
        "Beschwerden zeigen sich oft an einer Stelle, entstehen aber im Zusammenspiel mehrerer Prozesse: Stoffwechsel, Verdauung, Hormonhaushalt, Nervensystem und Regeneration greifen ineinander.",
        "Eine biochemische Einordnung betrachtet diese Zusammenhänge gemeinsam. Statt einzelne Symptome isoliert zu behandeln, rücken die zugrunde liegenden Abläufe in den Blick.",
        "Daraus entsteht eine Strategie, die an den Ursachen ansetzt – nachvollziehbar, individuell und im Alltag umsetzbar.",
      ],
    },
  },
  // Einheitliches 4-Phasen-Modell — wortgleich auch auf „Über mich" (ueberMich.prinzip).
  approach: {
    eyebrow: "Mein Ansatz",
    title: "In vier Schritten zu einem Plan, der zu Ihnen passt",
    steps: [
      {
        n: "01",
        title: "Verstehen",
        body: "Wir machen sichtbar, wie Ihr Körper arbeitet – von Energie und Verdauung über Nährstoffe bis zu Stressreaktion und Regeneration.",
      },
      {
        n: "02",
        title: "Einordnen",
        body: "Beschwerden, Laborwerte, Gewohnheiten und Lebensstil betrachten wir nicht einzeln, sondern im Zusammenhang – und ordnen biochemisch ein, was davon gerade zählt.",
      },
      {
        n: "03",
        title: "Strukturieren",
        body: "Daraus wird eine klare Reihenfolge: welcher Schritt zuerst kommt und welcher darauf aufbaut.",
      },
      {
        n: "04",
        title: "Umsetzen",
        body: "Am Ende stehen konkrete Schritte, die zu Ihrem Körper, Ihrem Alltag und Ihren Zielen passen.",
      },
    ],
  },
  // Zusammengelegte B2C+„Stagnation"-Sektion — ein Problem-Framing statt zwei.
  // Headline bewusst anders formuliert als privatkunden.hero.title, damit
  // Besucher beim Klick zu /privatkunden keine wortgleiche Zeile doppelt lesen.
  signalsBlock: {
    eyebrow: "Woran Sie es merken",
    headline:
      "Selten ist es ein großer Auslöser. Meist sind es viele kleine Veränderungen, die sich summieren, bis der Alltag anstrengender wird.",
    signals: koerperSignale,
    closing:
      "Diese Signale lassen sich einordnen. Daraus wird ein klarer nächster Schritt.",
  },
  // Split-Card-Sektion — ersetzt die früheren zwei vollen B2C-/B2B-Sektionen.
  audience: {
    eyebrow: "Für wen ist die Beratung?",
    title: "Zwei Wege, ein Ansatz",
    cards: [
      {
        label: "Für Privatkunden",
        // Wortlaut vom Juristen nachgeschärft (BIO-147, 2026-09-03): „nicht nur
        // Symptome dämpfen" wurde als abwertende Gegenüberstellung zur ärztlichen
        // Behandlung gelesen (§ 5 UWG). Neutral formuliert, nicht ohne Prüfung ändern.
        headline: "Sie wollen Ihren Körper verstehen, statt nur an einzelnen Symptomen anzusetzen.",
        body: "Sie bekommen eine Einordnung Ihrer Situation und einen Plan, der zu Ihrem Alltag passt – auf Basis von Biochemie, nicht von Standardratschlägen.",
        button: { label: "Beratung für Privatkunden", href: "/privatkunden" },
      },
      {
        label: "Für Unternehmen & Fachpersonen",
        headline: "Ihre Fälle werden komplexer, und Standardschemata reichen nicht mehr.",
        body: "Ihre Kundinnen und Kunden kommen mit Laborwerten, Recherchen und widersprüchlichen Empfehlungen. Ich helfe Ihnen, das fachlich sauber einzuordnen.",
        button: { label: "Angebot für Unternehmen", href: "/unternehmen" },
      },
    ],
  },
  services: {
    eyebrow: "Leistungen im Überblick",
    title: "Klare Struktur, individuell abgestimmt",
    items: [
      {
        title: "Erstanalyse",
        body: "Ausführliches Analysegespräch von ca. 60–75 Minuten auf Grundlage Ihres Anamnesebogens, Ihrer aktuellen Situation, Ziele, Beschwerden, Routinen und vorhandenen Informationen.",
      },
      {
        title: "Biochemischer Gesundheitskompass",
        body: "Ihre schriftliche Ausarbeitung mit biochemischer Einordnung, individueller Strategie und konkreten Empfehlungen für Ernährung, Mikronährstoffe, Verdauung, Bewegung, Schlaf, Stressregulation und Regeneration.",
      },
      {
        title: "Begleitung & Anpassung",
        body: "Regelmäßige Unterstützung bei der Umsetzung – über Online-Termine, Verlaufseinordnung, schriftliche Rückfragen und Anpassung der Strategie an Ihren Alltag.",
      },
    ],
  },
  process: {
    eyebrow: "So läuft die Zusammenarbeit ab",
    title: "In fünf Schritten zu Ihrer Strategie",
    steps: [
      {
        title: "Kostenloses Erstgespräch",
        body: "Ihr Anliegen, Ihre Erwartungen und die Passung zur Beratung werden geklärt.",
      },
      {
        title: "Anamnese",
        body: "Sie erhalten einen ausführlichen Fragebogen als Grundlage für die Analyse.",
      },
      {
        title: "Analysegespräch",
        body: "Ihre Beschwerden, Ziele, Routinen und relevanten Einflussfaktoren werden im Detail besprochen.",
      },
      {
        title: "Biochemischer Gesundheitskompass",
        body: "Sie erhalten eine schriftliche Ausarbeitung mit biochemischer Einordnung, individueller Strategie und konkreten Empfehlungen.",
      },
      {
        title: "Umsetzung & Begleitung",
        body: "Auf Wunsch begleite ich Sie bei der Umsetzung, Verlaufseinordnung und Anpassung der nächsten Schritte.",
      },
    ],
  },
  aboutTeaser: {
    eyebrow: "Über mich",
    body: [
      "Ich bin Milva März – Biochemikerin B.Sc., seit Jahren in der Fitness- und Gesundheitsbranche und aktuell in Ausbildung zur Heilpraktikerin. Mich interessiert nicht nur, dass etwas im Körper passiert, sondern warum. Genau das gebe ich in der Beratung weiter.",
    ],
    qualifikationen: "Biochemikerin B.Sc. · Fitnesstrainerin · in Ausbildung zur Heilpraktikerin",
  },
  finalCta: {
    eyebrow: "Kostenlos & unverbindlich",
    title: "Der nächste Schritt",
    body: [
      "Wenn Ihnen bisher die klare Einordnung fehlt, ist das kostenlose Erstgespräch der richtige Einstieg. 15–20 Minuten, unverbindlich – wir klären, ob und wie ich Ihnen weiterhelfen kann.",
    ],
  },
} as const;

// Glossar-Begriffe für die Erklärungs-Pop-ups auf der Startseite.
export const glossary = {
  gesundheit: {
    title: "Gesundheit",
    text: "Gesundheit ist ein Zustand vollständigen körperlichen, geistigen und sozialen Wohlbefindens und nicht nur das Freisein von Krankheit oder Gebrechen.",
    source:
      "Quelle: World Health Organization, Constitution of the World Health Organization, Präambel. Die WHO-Verfassung wurde 1946 verabschiedet und trat 1948 in Kraft.",
  },
  biochemie: {
    title: "Biochemie",
    text: "Biochemie beschäftigt sich mit den Prozessen, die im Körper im Hintergrund ablaufen: wie Zellen Energie gewinnen, Nährstoffe verwerten, Signale weitergeben und sich an Belastung, Ernährung, Schlaf, Stress oder Regeneration anpassen.",
    source: "",
  },
} as const;

export const privatkunden = {
  hero: {
    eyebrow: "Für Privatkunden",
    title: "Was ist für Ihren Körper gerade wirklich relevant?",
    subtitle:
      "Meist beginnt es leise: schlechterer Schlaf, empfindlichere Verdauung, schwankende Energie, längere Regeneration. Einzeln wirkt nichts davon dramatisch – zusammen verändern sie Ihren Alltag.",
    intro:
      "In der Beratung sortieren wir diese Signale und finden heraus, wo es sich für Sie lohnt anzusetzen.",
    signals: koerperSignaleKurz,
  },
  zielgruppen: {
    title: "Für wen ist die Beratung geeignet?",
    intro:
      "Die Beratung eignet sich für Menschen, die ihre Gesundheit nicht pauschal betrachten möchten, sondern verstehen wollen, welche körperlichen Zusammenhänge bei ihnen eine Rolle spielen können.",
    items: [
      {
        title: "Leistungsorientiert, wenig Zeit",
        body: "Sie funktionieren, aber Energie, Schlaf oder Verdauung ziehen nicht mehr richtig mit.",
      },
      {
        title: "Sportlich aktiv / ehemalige Leistungssportler",
        body: "Was früher funktioniert hat, reicht heute nicht mehr – und Sie wollen wissen, warum.",
      },
      {
        title: "Wiederkehrende Beschwerden",
        body: "Sie haben vieles ausprobiert und suchen das Muster dahinter, nicht den nächsten Tipp.",
      },
      {
        title: "Gesundheitsbewusst und neugierig",
        body: "Sie wollen vorsorgen, bevor etwas aus dem Ruder läuft.",
      },
    ],
  },
  catcher: {
    title: "Sie brauchen nicht mehr Disziplin – sondern mehr Verständnis.",
    body: [
      "Viele versuchen, Gesundheit über mehr Kontrolle zu lösen: strenger essen, härter trainieren, mehr Regeln. Das hält selten lange. Sinnvoller ist zu verstehen, wie Ihr Körper auf Belastung, Ernährung und Schlaf reagiert – und die Strategie darauf aufzubauen.",
    ],
  },
  praevention: {
    title: "Nicht erst handeln, wenn der Körper laut wird.",
    body: [
      "Prävention heißt nicht, auf Beschwerden zu warten und erst dann zu reagieren. Es heißt, die Belastungsgrenzen Ihres Körpers zu kennen und Routinen aufzubauen, die Sie auch in stressigen Phasen tragen.",
    ],
  },
  nutzen: {
    title: "Was Sie konkret aus der Beratung mitnehmen",
    intro:
      "Ziel ist nicht, möglichst viele Maßnahmen gleichzeitig umzusetzen. Ziel ist, besser zu verstehen, welche nächsten Schritte für Ihren Körper, Ihren Alltag und Ihre Ziele wirklich relevant sind.",
    items: [
      {
        title: "Verständliche Einordnung",
        body: "Eine verständliche Einordnung, welche Prozesse bei Ihnen gerade zählen.",
      },
      {
        title: "Klare Prioritäten",
        body: "Klare Prioritäten statt zwanzig gut gemeinter Ratschläge.",
      },
      {
        title: "Empfehlungen für Ihren Alltag",
        body: "Empfehlungen, die in Ihren Alltag passen – nicht in einen Idealtag.",
      },
      {
        title: "Wissen für eigene Entscheidungen",
        body: "Genug Hintergrundwissen, um selbst gute Entscheidungen zu treffen.",
      },
    ],
  },
  kompass: {
    eyebrow: "Ihr Ergebnis",
    title: "Ihr Ergebnis: der Biochemische Gesundheitskompass",
    intro:
      "Nach dem Analysegespräch bekommen Sie Ihre Einordnung schriftlich – kein Standard-PDF, sondern auf Ihre Situation geschrieben.",
    listIntro: "Darin steht:",
    list: [
      "wie Ihre aktuelle Ausgangslage biochemisch einzuordnen ist",
      "welche Prozesse bei Ihnen im Vordergrund stehen",
      "konkrete Empfehlungen für Ernährung, Bewegung, Schlaf, Stress und Regeneration",
      "auf Wunsch: ergänzende Nährstoffstrategien",
    ],
    outro:
      "Der Kompass ist Maßnahmenplan und Nachschlagewerk zugleich – Sie können jederzeit nachlesen, warum ein Schritt für Sie sinnvoll ist.",
  },
  // Operativer Ablauf — bleibt bei 5 Schritten (nicht das konzeptionelle
  // 4-Phasen-Modell). Als Zeitstrahl dargestellt (BIO-139-Optik).
  process: {
    eyebrow: "Ablauf",
    title: "So läuft die Zusammenarbeit ab",
    steps: [
      { title: "Kostenloses Erstgespräch", body: "Wir klären Ihr Anliegen und ob die Beratung passt. 15–20 Minuten, unverbindlich." },
      { title: "Anamnese", body: "Sie füllen einen ausführlichen Fragebogen aus – die Grundlage für alles Weitere." },
      { title: "Analysegespräch", body: "Wir gehen Ihre Beschwerden, Ziele, Routinen und Werte gemeinsam durch." },
      { title: "Biochemischer Gesundheitskompass", body: "Sie erhalten Ihre schriftliche Einordnung mit konkreter Strategie." },
      // Schritt-5-Text an die Zeitstrahl-Auflage angeglichen (BIO-147, 2026-09-03):
      // „auf Ihre Entwicklung schauen" setzt voraus, dass es eine Entwicklung gibt.
      { title: "Abschlussgespräch & Ausblick", body: "Nach rund drei Monaten besprechen wir Ihre bisherigen Erfahrungen und die nächsten Schritte." },
    ],
  },
  finalCta: {
    title: "Sie möchten wissen, was für Ihren Körper relevant ist?",
    body: [
      "Buchen Sie ein kostenloses Erstgespräch. Sie müssen sich vorher für kein Paket entscheiden – wir schauen erst, ob es passt.",
    ],
    note: "Die biochemische Gesundheitsberatung ersetzt keine ärztliche Diagnostik oder Behandlung.",
  },
} as const;

export const leistungen = {
  hero: {
    eyebrow: "Leistungen & Preise",
    title: "Transparente Beratung. Klare Struktur. Individuelle Strategie.",
    body: [
      "Klare Leistungen, transparente Preise und ein strukturierter Ablauf. Das Basispaket bildet den Einstieg in die Zusammenarbeit; optionale Begleitung kann je nach Bedarf ergänzt werden.",
    ],
  },
  erstgespraech: {
    eyebrow: "Erster Schritt",
    title: "Kostenloses Erstgespräch",
    price: "0 €",
    meta: "15–20 Minuten",
    body: "15–20 Minuten, um Ihr Anliegen kennenzulernen und einzuschätzen, ob meine biochemische Gesundheitsberatung zu Ihrer Situation passt.",
    listIntro: "Diese Fragen klären wir gemeinsam:",
    list: [
      "Worum geht es bei Ihnen?",
      "Welche Themen stehen im Vordergrund?",
      "Ist eine Zusammenarbeit sinnvoll?",
      "Welcher nächste Schritt passt?",
    ],
    footnote: "Keine ausführliche Beratung, kein Verkaufsgespräch.",
  },
  basispaket: {
    eyebrow: "Das Herzstück",
    title: "Das Basispaket",
    intro:
      "Das Basispaket bildet den strukturierten Einstieg in die biochemische Gesundheitsberatung. Es besteht aus Analysegespräch, Besprechung des Biochemischen Gesundheitskompasses, dem Biochemischen Gesundheitskompass und Abschlussgespräch & Ausblick und kann nur gemeinsam gebucht werden.",
    gesamt: "640 €",
    gesamtLabel: "Gesamtumfang",
    gesamtNote: "Abrechnung erfolgt schrittweise nach erbrachter Leistung.",
    zusammensetzung: [
      ["Analysegespräch", "150 €"],
      ["Besprechung des Biochemischen Gesundheitskompasses", "120 €"],
      ["Biochemischer Gesundheitskompass", "250 €"],
      ["Abschlussgespräch & Ausblick", "120 €"],
    ],
    billing: {
      title: "Hinweis zur Abrechnung",
      body: [
        "Der Gesamtpreis von 640 € beschreibt den Umfang des Basispakets. Die einzelnen Bestandteile werden jeweils erst nach Durchführung des jeweiligen Termins beziehungsweise nach Bereitstellung der schriftlichen Ausarbeitung abgerechnet. So zahlen Sie nur für Leistungen, die tatsächlich stattgefunden haben oder erbracht wurden.",
        "Falls ein Termin verschoben werden muss, kann dieser neu vereinbart werden. Die Abrechnung erfolgt entsprechend erst nach dem wahrgenommenen Termin.",
      ],
    },
    cards: [
      {
        n: "01",
        title: "Analysegespräch",
        meta: "ca. 60–75 Minuten",
        body: "Das Analysegespräch findet auf Grundlage Ihres Anamnesebogens statt. Besprochen werden Ihre aktuelle Situation, Beschwerden, Ziele, Routinen, Ernährung, Bewegung, Schlaf, Stressbelastung, Regeneration und vorhandene Informationen wie Laborwerte oder bisherige Empfehlungen.",
        note: "Ziel: Ihre gesundheitliche Situation nicht isoliert betrachten, sondern im Zusammenhang verstehen und die wichtigsten Einflussfaktoren herausarbeiten.",
      },
      {
        n: "02",
        title: "Biochemischer Gesundheitskompass",
        meta: "im Anschluss an das Analysegespräch · ca. 1,5 Stunden Besprechung · schriftliche Ausarbeitung",
        body: "Bevor Sie Ihren schriftlichen Biochemischen Gesundheitskompass erhalten, besprechen wir gemeinsam die zentralen Ergebnisse aus dem Analysegespräch und ordnen erste Schwerpunkte ein. Anschließend erhalten Sie Ihren individuell ausgearbeiteten Biochemischen Gesundheitskompass: Er verbindet Ihre Ausgangssituation mit einer verständlichen biochemischen Einordnung und konkreten Handlungsschritten für Ihren Alltag.",
        note: "So haben Sie bereits vor der schriftlichen Ausarbeitung die Möglichkeit, Rückfragen zu stellen und Prioritäten mitzugestalten. Der Gesundheitskompass dient darüber hinaus als persönliche Wissensgrundlage, die Sie jederzeit nachlesen können.",
      },
      {
        n: "03",
        title: "Abschlussgespräch & Ausblick",
        meta: "nach drei Monaten · ca. 60 Minuten",
        body: "Das Abschlussgespräch findet nach drei Monaten statt. Wir werten Ihre bisherige Entwicklung aus, ordnen Veränderungen ein und strukturieren die nächsten sinnvollen Schritte.",
        note: "Dabei geht es nicht um einen endgültigen Abschluss, sondern um Orientierung für den weiteren Weg: Welche Maßnahmen funktionieren? Was sollte stabilisiert werden? Wo besteht Anpassungsbedarf? Und welche nächsten Schritte sind für die kommenden Wochen oder Monate sinnvoll?",
      },
    ],
  },
  begleitung: {
    eyebrow: "Optionale Begleitung",
    title: "Optionale Begleitung danach",
    intro: [
      "Nur wenn Sie die Umsetzung nicht allein machen möchten.",
      "Nach dem Basispaket können diese Angebote ergänzt werden – mit Mindestlaufzeit direkt am Preis.",
    ],
    items: [
      {
        title: "Zwischengespräch",
        price: "70 €",
        meta: "ca. 30 Minuten",
        body: "Das Zwischengespräch eignet sich, wenn Sie einzelne Fragen klären, erste Erfahrungen einordnen oder kleinere Anpassungen besprechen möchten. Es kann flexibel ergänzend gebucht werden, wenn im Verlauf zusätzlicher Klärungsbedarf entsteht.",
      },
      {
        title: "Performer-Begleitung",
        price: "90 €",
        meta: "pro Woche · Mindestlaufzeit 4 Wochen",
        body: "Geeignet, wenn Sie Ihr Konzept strukturiert umsetzen möchten und regelmäßig fachliche Einordnung und Anpassung wünschen.",
        list: [
          "ein wöchentliches Zwischengespräch.",
          "kurze Rückfragen per E-Mail.",
          "Verlaufseinordnung und Anpassung einzelner Empfehlungen.",
        ],
      },
      {
        title: "High-Performer-Begleitung",
        price: "160 €",
        meta: "pro Woche · Mindestlaufzeit 4 Wochen",
        body: "Geeignet, wenn Sie eine persönliche und tägliche Begleitung wünschen, beruflich oder sportlich stark eingespannt sind oder bei komplexeren Themen engmaschigere Rückmeldung benötigen.",
        list: [
          "persönliche, tägliche Begleitung mit täglichen Check-ins.",
          "ein wöchentliches Zwischengespräch.",
          "begleitende Rückfragen per E-Mail.",
          "engere Verlaufseinordnung und Anpassung der Strategie.",
          "Unterstützung bei Ernährung, Alltag, Training, Regeneration und Priorisierung.",
        ],
      },
    ],
  },
  pakete: {
    eyebrow: "Welche Zusammenarbeit passt zu Ihnen?",
    title: "Pakete im Vergleich",
    intro:
      "Je nach Anliegen unterschiedlich intensiv. Im kostenlosen Erstgespräch wird die passende Form gefunden.",
    items: [
      {
        title: "Gesundheitskompass",
        sub: "Analysegespräch + Besprechung + Biochemischer Gesundheitskompass + Abschlussgespräch & Ausblick",
        price: "640 €",
        priceSuffix: "Gesamtumfang",
        body: "Der Einstieg: Ihre vollständige Einordnung und ein schriftlicher Plan.",
        note: "Abrechnung erfolgt schrittweise nach erbrachter Leistung.",
        featured: false,
      },
      {
        title: "Performer",
        sub: "Gesundheitskompass + regelmäßige Begleitung",
        price: "640 €",
        priceSuffix: "zzgl. 90 € pro Woche",
        body: "Wenn Sie die Umsetzung nicht allein machen wollen: wöchentliche Begleitung und Anpassung.",
        note: "Mindestlaufzeit der Begleitung: 4 Wochen.",
        featured: true,
      },
      {
        title: "High Performer",
        sub: "Gesundheitskompass + persönliche und tägliche Begleitung",
        price: "640 €",
        priceSuffix: "zzgl. 160 € pro Woche",
        body: "Enge Begleitung bei hohem Anspruch – beruflich, sportlich oder bei komplexen Themen.",
        note: "Mindestlaufzeit der Begleitung: 4 Wochen.",
        featured: false,
      },
    ],
  },
  kompass: {
    eyebrow: "Im Detail",
    title: "Der Biochemische Gesundheitskompass im Detail",
    intro:
      "Eine schriftliche Ausarbeitung zum Nachlesen – damit Sie verstehen, welche Prozesse eine Rolle spielen und warum bestimmte Empfehlungen sinnvoll sind.",
    items: [
      {
        n: "01",
        title: "Ihre Ausgangssituation",
        body: "Eine strukturierte Zusammenfassung Ihrer aktuellen Situation, Beschwerden, Ziele, Routinen, bisherigen Maßnahmen und relevanten Einflussfaktoren.",
      },
      {
        n: "02",
        title: "Biochemische Einordnung",
        body: "Eine verständliche Einordnung, welche Körpersysteme und Prozesse bei Ihrem Anliegen eine Rolle spielen können – von Energiehaushalt und Verdauung bis hin zu Hormonregulation, Nervensystem, Belastung und Regeneration.",
      },
      {
        n: "03",
        title: "Erklärung der Zusammenhänge",
        body: "Eine nachvollziehbare Erklärung, wie sich die beteiligten Prozesse gegenseitig beeinflussen und welche Faktoren für Ihre Situation besonders relevant sein können.",
      },
      {
        n: "04",
        title: "Individuelle Strategie",
        body: "Aus der Einordnung entsteht eine konkrete Strategie mit Empfehlungen zu Ernährung, Bewegung, Schlaf, Stressmanagement, Regeneration und Alltag – abgestimmt auf Ihre Situation, Ziele und Umsetzbarkeit.",
      },
      {
        n: "05",
        title: "Optional: Supplementierung",
        body: "Auf Wunsch enthält der Gesundheitskompass Hinweise, welche Nährstoffe oder Supplemente ergänzend sinnvoll sein könnten. Dabei steht nicht die Menge an Produkten im Vordergrund, sondern eine gezielte, nachvollziehbare und bedarfsorientierte Auswahl.",
      },
      {
        n: "06",
        title: "3-Monats-Masterplan",
        body: "Zum Abschluss erhalten Sie eine klare Struktur für die nächsten drei Monate: Welche Schritte sind zuerst wichtig? Was sollte aufgebaut, stabilisiert oder angepasst werden? Bei weiterer Zusammenarbeit kann daraus ein anschließender 3-Monats-Plan entstehen.",
      },
    ],
  },
  hinweis:
    "Die biochemische Gesundheitsberatung ersetzt keine ärztliche Diagnostik oder Behandlung. Sie dient der verständlichen Einordnung körperlicher Zusammenhänge und der Entwicklung individueller Strategien für Ernährung, Alltag, Bewegung, Regeneration und Eigenverantwortung.",
  finalCta: {
    eyebrow: "Noch unsicher?",
    title: "Nicht sicher, was zu Ihnen passt?",
    body: "Sie müssen vorab nicht genau wissen, welche Form der Zusammenarbeit für Sie die richtige ist. Im kostenlosen Erstgespräch klären wir gemeinsam, wo Sie aktuell stehen, welche Themen im Vordergrund stehen und welcher nächste Schritt sinnvoll ist.",
  },
} as const;

export const ueberMich = {
  hero: {
    eyebrow: "Über mich",
    title: "Gesundheit verständlich machen – von der Zelle bis in den Alltag",
    body: [
      "Zwischen Trends, Laborwerten, Diagnosen und widersprüchlichen Empfehlungen bleibt eine Frage oft offen: Was ist für den eigenen Körper wirklich relevant? Genau da setze ich an.",
    ],
  },
  person: {
    eyebrow: "Über mich",
    name: "Milva März",
    role: "Biochemikerin B.Sc. · in Ausbildung zur Heilpraktikerin",
    body: [
      "Ich bin Milva März. Nach dem Biochemie-Studium (B.Sc.) hat mich eine Frage nicht losgelassen: Warum laufen bestimmte Prozesse im Körper so ab – und nicht nur, dass sie es tun. Parallel habe ich jahrelang in der Fitness- und Gesundheitsbranche gearbeitet und gesehen, wie oft gutes Wissen an der Umsetzung scheitert. Aktuell bin ich in Ausbildung zur Heilpraktikerin.",
    ],
  },
  biochemie: {
    eyebrow: "Wissenschaftliche Grundlage",
    title: "Warum Biochemie und Gesundheit zusammengehören",
    body: [
      "Biochemie zeigt, was auf Zell- und Molekülebene passiert – und wie eng Stoffwechsel, Immunsystem, Nervensystem, Organe und Alltag zusammenhängen. Wer diese Ebene versteht, kann Empfehlungen einordnen, statt ihnen ausgeliefert zu sein.",
    ],
    pullquote: "So entsteht Orientierung statt Informationsüberflutung.",
  },
  // Wortgleich zum 4-Phasen-Modell auf der Startseite (home.approach).
  prinzip: {
    eyebrow: "Mein Arbeitsprinzip",
    title: "Verstehen → Einordnen → Strukturieren → Umsetzen",
    steps: [
      {
        n: "1",
        title: "Verstehen",
        phase: "Start der Zusammenarbeit",
        body: "Wir machen sichtbar, wie Ihr Körper arbeitet – von Energie und Verdauung über Nährstoffe bis zu Stressreaktion und Regeneration.",
      },
      {
        n: "2",
        title: "Einordnen",
        phase: "Analysephase",
        body: "Beschwerden, Laborwerte, Gewohnheiten und Lebensstil betrachten wir nicht einzeln, sondern im Zusammenhang – und ordnen biochemisch ein, was davon gerade zählt.",
      },
      {
        n: "3",
        title: "Strukturieren",
        phase: "Biochemischer Gesundheitskompass",
        body: "Daraus wird eine klare Reihenfolge: welcher Schritt zuerst kommt und welcher darauf aufbaut.",
      },
      {
        n: "4",
        title: "Umsetzen",
        phase: "Beginn der Veränderung",
        body: "Am Ende stehen konkrete Schritte, die zu Ihrem Körper, Ihrem Alltag und Ihren Zielen passen.",
      },
    ],
  },
  // Zeitlicher Ablauf — Fassung vom Juristen freigegeben (BIO-144/145,
  // 2026-09-02) UNTER AUFLAGEN: Überschrift nicht „Zeitverlauf"; Sätze 1 und 3
  // exakt wie hier; der Hinweis muss gleichwertig ÜBER dem Zeitstrahl stehen,
  // nicht klein darunter. Nichts an diesen vier Sätzen ohne erneute Prüfung ändern.
  verlauf: {
    eyebrow: "Zeitlicher Ablauf der Beratung",
    disclaimer:
      "Ob und wie sich etwas verändert, ist individuell, zeitlich nicht vorhersehbar und lässt sich nicht zusichern.",
    steps: [
      "In den ersten Wochen setzen Sie erste Schritte im Alltag um. Was Ihnen dabei auffällt – etwa zu Schlaf, Energie oder Verdauung – halten wir fest und besprechen es.",
      "Nach ~4 Wochen – wir schauen auf die Umsetzung und passen an.",
      "8–12 Wochen – die Umsetzung wird zur Routine; wir justieren bei Bedarf nach.",
      "Nach ~3 Monaten – Abschlussgespräch: Entwicklung einordnen, nächste Schritte planen.",
    ],
  },
  anders: {
    eyebrow: "Warum dieser Ansatz anders ist",
    statement: "Das Problem ist oft nicht fehlende Information – sondern fehlende Einordnung.",
    body: [
      "Viele Menschen haben bereits zahlreiche Informationen gesammelt: Laborwerte, Diagnosen, Empfehlungen, Trainingspläne, Supplementlisten, Social-Media-Tipps oder unterschiedliche fachliche Meinungen.",
      "Die Herausforderung besteht nicht darin, noch mehr Informationen zu sammeln, sondern diese sinnvoll zu sortieren.",
      "Meine Arbeit hilft dabei, Zusammenhänge zu erkennen, Prioritäten zu setzen und aus vorhandenen Informationen eine nachvollziehbare Strategie zu entwickeln.",
      "Es geht nicht darum, möglichst viele Maßnahmen gleichzeitig umzusetzen. Es geht darum, die richtigen nächsten Schritte zu finden.",
    ],
  },
  werte: {
    eyebrow: "Wofür ich stehe",
    title: "Meine Vision",
    items: [
      {
        title: "Wissenschaftlich fundiert",
        body: "Gesundheitsberatung soll fachlich nachvollziehbar sein – ohne Trends, Übertreibungen oder leere Versprechen.",
      },
      {
        title: "Verständlich erklärt",
        body: "Komplexe Prozesse müssen so erklärt werden, dass Menschen sie verstehen und für sich einordnen können.",
      },
      {
        title: "Individuell statt pauschal",
        body: "Eine Strategie muss zum Körper, zum Alltag, zur Belastbarkeit und zu den Zielen eines Menschen passen.",
      },
      {
        title: "Eigenverantwortung durch Verständnis",
        body: "Menschen sollen nicht nur Empfehlungen befolgen, sondern verstehen, warum bestimmte Schritte für ihren Körper sinnvoll sein können.",
      },
    ],
  },
  vision: {
    statement: "Sie sollen nicht nur Empfehlungen erhalten, sondern verstehen, warum bestimmte Schritte für Ihren Körper sinnvoll sein können.",
    body: "Nachhaltige Veränderung entsteht durch Verständnis, Struktur und eine Strategie, die zum eigenen Leben passt.",
  },
  finalCta: {
    eyebrow: "Der nächste Schritt",
    title: "Möchten Sie Ihre Gesundheit besser verstehen?",
    body: "Wenn Sie sich eine fundierte Einordnung Ihrer Situation wünschen und verstehen möchten, welche nächsten Schritte für Ihren Körper sinnvoll sein können, ist das kostenlose Erstgespräch der passende Einstieg.",
  },
} as const;

export const b2b = {
  hero: {
    eyebrow: "Für Unternehmen & Fachpersonen",
    title: "Fachliche Tiefe für Ihre Fälle – ohne dass sie im Alltag verloren geht.",
    subtitle:
      "Für Praxen, Studios, Coaches und Fachpersonen, die Laborwerte, Empfehlungen und bestehende Konzepte fachlich sauber einordnen wollen.",
    body: [
      "Mehr Informationen bedeuten nicht automatisch mehr Klarheit. Ich unterstütze Sie dabei, biochemisches Wissen so in Ihre Arbeit einzubinden, dass es fachlich trägt und praktisch anwendbar bleibt.",
    ],
  },
  herausforderung: {
    eyebrow: "Die Herausforderung",
    title: "Wenn Kundenfälle komplexer werden, braucht Beratung mehr Tiefe.",
    lead: "Sie kennen das:",
    highlights: [
      "Nicht jeder Körper reagiert gleich.",
      "Nicht jede Empfehlung passt zu jedem Menschen.",
      "Nicht jeder Fall lässt sich mit einem Standardschema sinnvoll begleiten.",
    ],
    closing:
      "Genau an diesen Stellen komme ich dazu – als fachliches Sparring, nicht als weiteres Konzept von der Stange.",
  },
  zielgruppe: {
    eyebrow: "Für wen",
    title: "Für wen ist die Zusammenarbeit geeignet?",
    intro:
      "Die Zusammenarbeit richtet sich an gesundheitsnahe Unternehmen und Fachpersonen, die ihre Arbeit fachlich vertiefen, bestehende Angebote schärfen oder komplexe Gesundheitsfragen besser einordnen möchten.",
    categories: [
      {
        title: "Praxen & therapeutische Einrichtungen",
        body: "Wenn Patientenfälle mehr biochemische Einordnung brauchen.",
        roles: ["Heilpraktiker", "Osteopathen", "Physiotherapeuten", "Therapeuten", "Praxisteams"],
      },
      {
        title: "Training, Coaching & Performance",
        body: "Wenn Standardpläne bei anspruchsvollen Kundinnen und Kunden nicht mehr reichen.",
        roles: [
          "Personal Trainer",
          "Fitness Coaches",
          "Athletiktrainer",
          "Gesundheitscoaches",
          "Studios",
        ],
      },
      {
        title: "Unternehmen, Konzepte & Teams",
        body: "Wenn Angebote oder Materialien fachlich fundiert (weiter-)entwickelt werden sollen.",
        roles: [
          "Gesundheitszentren",
          "Ernährungsberatungen",
          "Präventionsanbieter",
          "kleine Gesundheitsunternehmen",
          "Teams im gesundheitsnahen Bereich",
        ],
      },
    ],
  },
  formen: {
    eyebrow: "Leistungen",
    title: "Tiefe nach Bedarf",
    items: [
      {
        n: "01",
        title: "Fachliche Beratung",
        body: "Für konkrete Fragen, anonymisierte Fallbesprechungen oder regelmäßiges fachliches Sparring.",
      },
      {
        n: "02",
        title: "Konzeptentwicklung",
        body: "Für Angebote, Beratungsprozesse, Workshops oder Materialien, die strukturiert überarbeitet oder neu aufgebaut werden.",
      },
      {
        n: "03",
        title: "Schriftliche Ausarbeitung",
        body: "Zu einem Thema, Fall oder Konzept: als interne Grundlage, Schulungsunterlage oder Konzeptpapier.",
      },
    ],
    footnote:
      "Die Zusammenarbeit kann einmalig stattfinden oder in regelmäßigen Meetings fortgeführt werden – je nachdem, wie viel fachliche Tiefe und Begleitung benötigt wird.",
  },
  gewinn: {
    eyebrow: "Nutzen",
    title: "Fachliche Tiefe, die Ihre Arbeit stärkt",
    items: [
      {
        title: "Fachliche Sicherheit",
        body: "Sie können komplexe Fälle einordnen, ohne sich auf Halbwissen zu verlassen.",
      },
      {
        title: "Struktur",
        body: "Aus widersprüchlichen Infos wird ein nachvollziehbarer roter Faden.",
      },
      {
        title: "Bessere Angebote",
        body: "Ihre Beratungen und Konzepte gewinnen an fachlicher Tiefe.",
      },
      {
        title: "Anwendbar im Alltag",
        body: "Die Ergebnisse passen in Ihre Abläufe, nicht in ein Lehrbuch.",
      },
    ],
  },
  preise: {
    eyebrow: "Preise & Formate",
    title: "Mögliche Formen der Zusammenarbeit",
    items: [
      {
        n: "01",
        title: "Fachliche Beratung",
        price: "150 €",
        meta: "pro Stunde",
        body: "Für konkrete Fragestellungen, anonymisierte Fallbesprechungen, fachliche Unsicherheiten, regelmäßige Meetings oder die Einordnung komplexer gesundheitlicher Zusammenhänge.",
      },
      {
        n: "02",
        title: "Konzeptentwicklung",
        price: "ab 250 €",
        meta: "pauschal",
        body: "Für bestehende Angebote, Beratungsprozesse, Workshops, Coachingformate oder fachliche Materialien, die strukturiert überarbeitet oder neu aufgebaut werden sollen. Der genaue Umfang wird vorab gemeinsam festgelegt.",
      },
      {
        n: "03",
        title: "Schriftliche Ausarbeitung nach Umfang",
        price: "individuell",
        meta: "nach Umfang",
        body: "Für eine schriftliche Ausarbeitung zu einem Thema, Fall, Konzept oder fachlichen Schwerpunkt – als interne Orientierung, fachliche Grundlage, Vorbereitung für Gespräche, Schulungsunterlage oder Konzeptpapier.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Zusammenarbeit",
    title: "Lassen Sie uns über Ihren Fall sprechen.",
    body: "Im kostenlosen Erstgespräch klären wir, wo Sie stehen und ob eine Zusammenarbeit sinnvoll ist.",
  },
} as const;

export const faq = {
  eyebrow: "Häufige Fragen",
  title: "Häufige Fragen",
  subtitle: "Was Menschen vor dem Erstgespräch am häufigsten wissen wollen.",
  items: [
    {
      q: "Was ist biochemische Gesundheitsberatung?",
      a: [
        "Biochemische Gesundheitsberatung verbindet wissenschaftliches Verständnis mit praktischer Umsetzung. Im Mittelpunkt steht die Frage, welche Prozesse im Körper eine Rolle spielen können – zum Beispiel Energiehaushalt, Verdauung, Nährstoffverwertung, Hormonregulation, Immunsystem, Nervensystem, Belastung und Regeneration.",
        "Ziel ist es, körperliche Zusammenhänge verständlich einzuordnen und daraus konkrete, alltagstaugliche Schritte abzuleiten.",
      ],
    },
    {
      q: "Für wen ist die Beratung geeignet?",
      a: [
        "Die Beratung eignet sich für Menschen, die ihre Gesundheit besser verstehen und gezielt Verantwortung übernehmen möchten.",
        "Besonders passend ist sie für leistungsorientierte Menschen mit wenig Zeit, sportlich aktive Menschen und ehemalige Leistungssportler sowie Personen mit wiederkehrenden Beschwerden, die bereits vieles ausprobiert haben, aber keine klare Einordnung oder langfristige Strategie gefunden haben.",
      ],
    },
    {
      q: "Ersetzt die Beratung eine ärztliche Behandlung?",
      a: [
        "Nein. Die biochemische Gesundheitsberatung ersetzt keine ärztliche Diagnostik, Behandlung oder Therapie.",
        "Sie dient der verständlichen Einordnung körperlicher Zusammenhänge und der Entwicklung individueller Strategien für Ernährung, Alltag, Bewegung, Regeneration und Eigenverantwortung.",
        "Bei akuten Beschwerden, Warnzeichen, bestehenden Erkrankungen oder behandlungsbedürftigen Befunden sollte immer eine ärztliche Abklärung erfolgen.",
      ],
    },
    {
      q: "Was passiert im kostenlosen Erstgespräch?",
      a: [
        "Das kostenlose Erstgespräch dauert 15–20 Minuten und dient der Orientierung.",
        "Wir klären, worum es bei Ihnen geht, welche Themen im Vordergrund stehen, ob meine Beratung zu Ihrer Situation passt und welcher nächste Schritt sinnvoll wäre.",
        "Das Erstgespräch ist keine ausführliche Beratung, sondern ein erstes Kennenlernen und eine Einschätzung der Passung.",
      ],
    },
    {
      q: "Was ist der Biochemische Gesundheitskompass?",
      a: [
        "Der Biochemische Gesundheitskompass ist Ihre schriftliche Ausarbeitung nach dem Analysegespräch.",
        "Er verbindet Ihre persönliche Ausgangssituation mit einer verständlichen biochemischen Einordnung und konkreten Empfehlungen für Ernährung, Bewegung, Schlaf, Stressregulation, Regeneration, Alltag und auf Wunsch ergänzende Nährstoffstrategien.",
        "Er dient nicht nur als Maßnahmenplan, sondern auch als persönliche Wissensgrundlage, die Sie jederzeit nachlesen können.",
      ],
    },
    {
      q: "Kann ich das Analysegespräch oder den Gesundheitskompass einzeln buchen?",
      a: [
        "Nein. Analysegespräch, Besprechung des Biochemischen Gesundheitskompasses, der schriftliche Gesundheitskompass und das Abschlussgespräch & Ausblick bilden gemeinsam das Basispaket.",
        "Diese vier Bestandteile gehören zusammen, weil eine sinnvolle Strategie zuerst eine ausführliche Einordnung braucht, anschließend gemeinsam besprochen und schriftlich ausgearbeitet wird und im Abschlussgespräch gemeinsam eingeordnet werden sollte.",
      ],
    },
    {
      q: "Wie läuft die Zusammenarbeit ab?",
      a: [
        "Die Zusammenarbeit beginnt mit einem kostenlosen Erstgespräch. Danach erhalten Sie einen ausführlichen Anamnesebogen.",
        "Auf dieser Grundlage findet das Analysegespräch statt. Anschließend besprechen wir gemeinsam die zentralen Ergebnisse, bevor Ihr Biochemischer Gesundheitskompass schriftlich ausgearbeitet wird. Im Abschlussgespräch besprechen wir die wichtigsten Punkte, ordnen Ihre nächsten Schritte ein und schauen, wie der weitere Weg sinnvoll gestaltet werden kann.",
      ],
    },
    {
      q: "Muss ich Laborwerte mitbringen?",
      a: [
        "Nein. Laborwerte sind keine Voraussetzung.",
        "Wenn bereits Laborwerte, Befunde oder Empfehlungen vorliegen, können diese in die Einordnung einbezogen werden. Wenn keine Werte vorhanden sind, arbeiten wir mit Ihrer Anamnese, Ihren Beschwerden, Routinen, Zielen und relevanten Einflussfaktoren.",
        "Falls bestimmte Werte sinnvoll erscheinen, kann besprochen werden, welche Themen ärztlich oder labordiagnostisch abgeklärt werden könnten.",
      ],
    },
    {
      q: "Werden Nahrungsergänzungsmittel empfohlen?",
      a: [
        "Supplemente stehen nicht im Mittelpunkt der Beratung.",
        "Zuerst geht es um Einordnung, Struktur und die grundlegenden Einflussfaktoren: Ernährung, Verdauung, Schlaf, Stress, Bewegung, Regeneration und Alltag. Auf Wunsch kann der Biochemische Gesundheitskompass Hinweise enthalten, welche Nährstoffe oder Supplemente ergänzend sinnvoll sein könnten.",
        "Dabei geht es nicht um möglichst viele Produkte, sondern um eine gezielte, nachvollziehbare und bedarfsorientierte Auswahl.",
      ],
    },
    {
      q: "Wie schnell merke ich Veränderungen?",
      a: [
        "Das ist individuell unterschiedlich.",
        "Manche Menschen bemerken erste Veränderungen bereits nach wenigen Wochen, zum Beispiel bei Energie, Verdauung, Schlaf, Wasserhaushalt oder Belastbarkeit. Andere Prozesse brauchen mehr Zeit, besonders wenn Beschwerden schon länger bestehen oder mehrere Faktoren zusammenspielen.",
        "Deshalb ist der Blick auf Verlauf, Alltag und Anpassung so wichtig. Ziel ist nicht eine kurzfristige Lösung, sondern eine Strategie, die langfristig tragfähig wird.",
      ],
    },
    {
      q: "Was passiert, wenn ich bei der Umsetzung Fragen habe?",
      a: [
        "Nach dem Basispaket können weitere Unterstützungsangebote ergänzt werden.",
        "Dazu gehören ein Zwischengespräch für einzelne Fragen oder Anpassungen sowie die Performer- oder High-Performer-Begleitung über mindestens 4 Wochen. So können Umsetzung, Verlauf und nächste Schritte regelmäßig eingeordnet werden.",
      ],
    },
    {
      q: "Findet die Beratung online statt?",
      a: [
        "Ja, die Beratung kann online stattfinden.",
        "Analysegespräche, Abschlussgespräche und Begleitungen können über Online-Termine durchgeführt werden. Schriftliche Rückfragen sind je nach gewählter Leistung ebenfalls möglich.",
      ],
    },
    {
      q: "Für wen ist die Beratung nicht geeignet?",
      a: [
        "Die Beratung ist nicht geeignet für akute medizinische Notfälle, unbehandelte schwere Beschwerden, akute psychische Krisen oder Situationen, in denen eine ärztliche Diagnostik oder Behandlung im Vordergrund stehen muss.",
        "In solchen Fällen sollte zuerst eine ärztliche oder therapeutische Abklärung erfolgen.",
      ],
    },
    {
      q: "Wie wird abgerechnet?",
      a: [
        "Das Basispaket hat einen Gesamtumfang von 640 €.",
        "Die Abrechnung erfolgt schrittweise nach erbrachter Leistung: jeweils nach dem Termin beziehungsweise nach Bereitstellung des Biochemischen Gesundheitskompasses. So zahlen Sie nur für Leistungen, die tatsächlich stattgefunden haben oder erbracht wurden.",
        "Wenn ein Termin verschoben werden muss, kann dieser neu vereinbart werden. Die Abrechnung erfolgt entsprechend erst nach dem wahrgenommenen Termin.",
      ],
    },
    {
      q: "Was passiert mit meinen Daten?",
      a: [
        "Gesundheitsbezogene Informationen werden vertraulich behandelt.",
        "Der Anamnesebogen und alle bereitgestellten Informationen dienen ausschließlich der Vorbereitung und Durchführung Ihrer Beratung. Für die Website und die weitere technische Umsetzung werden Datenschutz, Kontaktformular und Einwilligungen separat rechtssicher eingebunden.",
        "Bitte senden Sie im ersten Kontaktformular keine ausführlichen sensiblen Gesundheitsdaten, sondern beschreiben Sie Ihr Anliegen zunächst kurz.",
      ],
    },
    {
      q: "Gibt es auch Angebote für Unternehmen und Fachpersonen?",
      a: [
        "Ja. Neben der Beratung für Privatpersonen biete ich biochemische Gesundheitsberatung für Unternehmen und Fachpersonen an.",
        "Dazu gehören fachliche Beratung, anonymisierte Fallbesprechungen, Konzeptentwicklung, schriftliche Ausarbeitungen und regelmäßige Meetings. Die Zusammenarbeit richtet sich an Praxen, therapeutische Einrichtungen, Studios, Coaches, Trainer, Gesundheitszentren, Ernährungsberatungen und gesundheitsnahe Unternehmen.",
      ],
    },
    {
      q: "Was unterscheidet die biochemische Gesundheitsberatung von allgemeinen Gesundheitstipps?",
      a: [
        "Allgemeine Gesundheitstipps bleiben oft an der Oberfläche.",
        "In meiner Arbeit geht es darum, Informationen, Beschwerden, Routinen und vorhandene Befunde in einen sinnvollen Zusammenhang zu bringen. Der Fokus liegt nicht auf einzelnen Maßnahmen, sondern auf Einordnung, Struktur und Umsetzung.",
        "Sie sollen nicht nur Empfehlungen erhalten, sondern verstehen, warum bestimmte Schritte für Ihren Körper sinnvoll sein können.",
      ],
    },
  ],
  cta: {
    title: "Noch Fragen?",
    body: "Wenn Sie unsicher sind, ob meine Beratung zu Ihrer Situation passt, klären wir das gerne im kostenlosen Erstgespräch.",
  },
} as const;

export const kontakt = {
  hero: {
    eyebrow: "Kontakt",
    title: "Kostenloses Erstgespräch anfragen",
    body: [
      "Sie müssen vorab nicht genau wissen, welche Leistung für Sie die richtige ist. Im kostenlosen Erstgespräch klären wir gemeinsam, worum es bei Ihnen geht, welche Themen im Vordergrund stehen und welche Form der Zusammenarbeit sinnvoll ist.",
      "Bitte beschreiben Sie Ihr Anliegen zunächst kurz. Ausführliche Gesundheitsdaten werden erst im Rahmen des Anamnesebogens strukturiert abgefragt.",
    ],
  },
  emailIntro: "Sie möchten Ihr Anliegen lieber schriftlich schildern? Dann schreiben Sie mir gerne an:",
  booking: {
    eyebrow: "Direkt buchen",
    title: "Lieber gleich einen Termin wählen?",
    body: "Wählen Sie einen freien Termin für das kostenlose Erstgespräch direkt über Calendly.",
  },
  // Privatperson vs. Unternehmen & Fachperson
  anliegenOptionen: ["Privatperson", "Unternehmen & Fachperson"],
  form: {
    sensibleHinweis:
      "Bitte senden Sie über dieses Formular keine ausführlichen sensiblen Gesundheitsdaten. Diese werden erst im Rahmen des Anamnesebogens strukturiert abgefragt.",
    datenschutzHinweis:
      "Mit dem Absenden des Formulars werden Ihre Angaben zur Bearbeitung Ihrer Anfrage verarbeitet. Weitere Informationen finden Sie in der Datenschutzerklärung.",
  },
} as const;

// Strukturierte Vorlage — finale Rechtstexte werden vor Veröffentlichung geprüft/ergänzt.
export const impressum = {
  title: "Impressum",
  sections: [
    {
      heading: "Angaben gemäß § 5 DDG",
      lines: [
        "Milva März",
        "Biochemische Gesundheitsberatung",
        "Jurastraße 27-1",
        "72072 Tübingen-Derendingen",
        "Deutschland",
        "Kleinunternehmerin im Sinne von § 19 UStG (keine Umsatzsteuer ausgewiesen)",
      ],
      email: "kontakt@biochemische-gesundheitsberatung.com",
      phone: "+49 162 9230556",
    },
    {
      heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      lines: ["Milva März", "Jurastraße 27-1", "72072 Tübingen-Derendingen"],
    },
  ],
} as const;
