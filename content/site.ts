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
    { label: "Ansatz", href: "/#top" },
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

// Themen-Sektion „Wenn Standardantworten nicht weiterhelfen" (BIO-198,
// Ursprungstext von Milva, Vorgabe 2026-10-17). Ersetzt die vorherige
// signalsBlock/koerperSignaleDetails-Darstellung (lange Headline + Fließtext
// links, fünf lange Accordion-Zeilen rechts) durch sechs kompakte
// Themenkarten mit Icon + Kurztitel; der Infotext erscheint erst beim
// Aufklappen. Wortlaut (Eyebrow, Headline, Kartentitel, Infotexte) exakt wie
// vorgegeben — nicht umformulieren.
//
// Rechtscheck BIO-199 abgeschlossen (🟡, freigabefähig). Einzige Pflicht-
// Auflage: ärztlicher Hinweis in den Karten „Endometriose" und „Histamin &
// Mastzellen" (siehe note-Feld unten, Jurist-Wortlaut). Übrige Kartentexte
// wortgleich wie von Milva vorgegeben.
export const topicsSection = {
  eyebrow: "Wenn Standardantworten nicht weiterhelfen",
  headlineLines: ["Viel versucht", "und trotzdem", "keine Klarheit?"],
  topics: [
    {
      id: "endometriose",
      title: "Endometriose",
      body: "Eine Diagnose beantwortet nicht automatisch alle Fragen. Ernährung, Verdauung, Belastbarkeit, Entzündungsprozesse und der individuelle Alltag können zusätzliche Themen aufwerfen. Gemeinsam ordnen wir ein, welche Zusammenhänge für Ihre persönliche Situation tatsächlich relevant sind.",
      // Pflicht-Hinweis laut Rechtscheck BIO-199 (Jurist-Wortlaut, konsistent mit Footer).
      note: "Hinweis: Die Beratung ersetzt keine ärztliche Diagnostik oder Behandlung; die Bewertung von Befunden und Diagnosen bleibt ärztlich.",
    },
    {
      id: "darmbeschwerden",
      title: "Chronische Darmbeschwerden",
      body: "Blähungen, Schmerzen, wechselnde Verdauung oder Unverträglichkeiten können sehr unterschiedliche Hintergründe haben. Statt immer mehr Lebensmittel zu streichen, betrachten wir Ernährung, Schleimhaut, Verdauung und vorhandene Befunde im Zusammenhang.",
    },
    {
      id: "symptome-reaktionen",
      title: "Unerklärliche Symptome & Reaktionen",
      body: "Wenn Beschwerden scheinbar unabhängig voneinander auftreten oder Sie auf Lebensmittel, Stress oder Umweltreize ungewöhnlich reagieren, fehlt häufig vor allem eine nachvollziehbare Einordnung. Ziel ist, Muster und mögliche Zusammenhänge sichtbar zu machen.",
    },
    {
      id: "histamin-mastzellen",
      title: "Histamin & Mastzellen",
      body: "Histaminproblematik und Mastzellaktivierung werden schnell als Erklärung für sehr unterschiedliche Beschwerden herangezogen. Hier lohnt sich eine saubere Einordnung: Was passt tatsächlich zum Beschwerdebild, welche anderen Faktoren kommen infrage und welche Maßnahmen sind wirklich sinnvoll?",
      // Pflicht-Hinweis laut Rechtscheck BIO-199 (Jurist-Wortlaut, konsistent mit Footer).
      note: "Hinweis: Die Beratung ersetzt keine ärztliche Diagnostik oder Behandlung; die Bewertung von Befunden und Diagnosen bleibt ärztlich.",
    },
    {
      id: "chronisch-krank",
      title: "Chronisch erkrankt",
      body: "Auch mit einer bestehenden Diagnose bleiben häufig Fragen zum Alltag, zur Ernährung oder zur Belastbarkeit offen. Die Beratung ersetzt keine ärztliche Behandlung, kann Ihnen aber helfen, Ihre Situation und bereits vorhandene Informationen besser zu verstehen.",
    },
    {
      id: "viel-ausprobiert",
      title: "Eine klare Richtung",
      body: "Supplemente, Ernährungsformen, Behandlungen und neue Routinen können sich mit der Zeit ansammeln. Gemeinsam sortieren wir, was davon für Ihre Situation relevant ist, wo Widersprüche bestehen und welche nächsten Schritte sinnvoll erscheinen.",
    },
  ],
} as const;

// Gekürzte Reihe — nur für den Privatkunden-Hero (bewusst nicht die volle Liste,
// um die Symptom-Aufzählung nicht über zwei Seiten zu doppeln).
export const koerperSignaleKurz = [
  "Der Schlaf wird schlechter.",
  "Die Verdauung reagiert empfindlicher.",
  "Die Energie schwankt.",
  "Die Regeneration dauert länger.",
] as const;

export const home = {
  // Hero-Umbau Oktober 2026 (BIO-192, zuletzt 2026-10-08 BIO-194-Follow-up).
  // Copy wortgleich wie von Milva vorgegeben, keine eigene Formulierung.
  // Gesundheitsbezogen → vor Veröffentlichung Jurist-Review Pflicht (siehe
  // Issue-Kommentar).
  hero: {
    eyebrow: "Biochemische Gesundheitsberatung",
    title: "Wenn Sie viele Antworten bekommen – aber noch keine klare Richtung haben.",
    subtitle: "Gesundheit braucht nicht mehr Informationen – sondern bessere Einordnung.",
    description:
      "Ich helfe Ihnen, Zusammenhänge zu verstehen, Informationen wissenschaftlich einzuordnen und daraus sinnvolle nächste Schritte abzuleiten.",
    secondaryCtaLabel: "Meinen Ansatz kennenlernen",
    secondaryCtaHref: "/#ansatz",
  },
  // Abschnitt direkt unter dem Hero (BIO-206). Wortlaut identisch mit der
  // vorherigen Hero-Zweispalten-Fassung (home.hero.left/.right), nur in
  // eine eigene Sektion mit Farn-Hintergrund verschoben.
  situation: {
    eyebrow: "Ihre Ausgangssituation",
    headline: "Sie investieren viel in Ihre Gesundheit.",
    body: "Sie investieren Zeit, Geld und Disziplin in Ihre Gesundheit. Sie verändern Ernährung, nehmen Supplemente, buchen Behandlungen, lassen Werte kontrollieren – und trotzdem bleibt oft die Frage:",
    question: "Welche Maßnahmen passen eigentlich wirklich zu Ihrer Situation?",
    approach: {
      eyebrow: "Zusammenhänge verstehen",
      headline: "Warum biochemische Gesundheitsberatung?",
      lead: "Genau hier setzt das Konzept an:",
      body: "Ich helfe Ihnen, Zusammenhänge zu verstehen, Informationen wissenschaftlich einzuordnen und daraus sinnvolle nächste Schritte abzuleiten.",
      ctaLabel: "Meinen Ansatz kennenlernen",
      ctaHref: "/#ansatz",
    },
  },
  // Neue Sektion „Über mich & meine Vision" direkt unter dem Hero (BIO-194).
  // Copy + exakte Fettmarkierungen wortgleich wie von Milva vorgegeben, keine
  // eigene Formulierung. Gesundheitsbezogen → vor Veröffentlichung
  // Jurist-Review Pflicht (siehe Issue-Kommentar).
  visionIntro: {
    eyebrow: "Über mich & meine Vision",
    headline: "Verstehen, was Ihr Körper gerade braucht – statt weiter zu raten.",
    introHeading: "Ich bin Milva.",
    bio: [
      { text: "Biochemikerin", bold: true },
      { text: ", ", bold: false },
      { text: "leidenschaftliche Fitnesstrainerin", bold: true },
      {
        text: " und aktuell in Ausbildung zur Heilpraktikerin. Ich habe dieses Unternehmen gegründet, weil ich selbst jahrelang nach ",
        bold: false,
      },
      { text: "individuellen Antworten", bold: true },
      {
        text: " gesucht habe – und sie oft nicht bekommen habe. Zu häufig stecken hinter Gesundheitsversprechen nur ",
        bold: false,
      },
      { text: "leere Aussagen", bold: true },
      { text: ", fehlende Tiefe oder der nächste Trend.", bold: false },
    ],
    visionHeading: "Meine Vision.",
    vision: [
      { text: "Deshalb habe ich ", bold: false },
      { text: "Biochemie studiert", bold: true },
      {
        text: ": Ich wollte bis ins Detail verstehen, was im Körper überhaupt passiert. Dabei wurde mir bewusst, wie ",
        bold: false,
      },
      { text: "komplex", bold: true },
      {
        text: " unser Organismus ist – und dass sich Beschwerden nicht immer oberflächlich erklären lassen. Meine Vision ist, dass Menschen verstehen, was in ihrem Körper vor ",
        bold: false,
      },
      { text: "", bold: false, break: true },
      { text: "sich geht, um ", bold: false },
      { text: "fundierte und passende Entscheidungen", bold: true },
      { text: "", bold: false, break: true },
      { text: " treffen zu können. Weniger abhängig von Meinungen anderer", bold: false },
      { text: "", bold: false, break: true },
      { text: " – und Schritt für Schritt der ", bold: false },
      { text: "eigene Experte", bold: true },
      { text: " für den eigenen Körper.", bold: false },
    ],
    quote: "„Jeder sollte seinen Körper besser verstehen lernen – um sicherer entscheiden zu können.“",
    signatureName: "MILVA MÄRZ",
    signatureRole: "BIOCHEMISCHE GESUNDHEITSBERATUNG",
  },
  // "Biochemischer Kompass" (BIO-201, ersetzt die frühere Sektion "Ein Symptom
  // ist selten die ganze Geschichte"). Titel, beide Absätze, Button-Label und
  // der Hinweis-Satz sind wortgetreuer Pflichttext, zuletzt korrigiert in
  // BIO-202 (Jurist-Korrekturlauf, von Milva vollständig übernommen) — nicht
  // umformulieren, kürzen oder ergänzen ohne neuen Auftrag.
  system: {
    eyebrow: "Biochemischer Kompass",
    title: "Aus vielen Informationen wird Orientierung.",
    body: [
      "Beschwerden, Diagnosen, Laborwerte – häufig stehen viele Informationen nebeneinander. Der Biochemische Kompass hilft Ihnen, diese besser zu verstehen und mögliche biochemische Zusammenhänge nachzuvollziehen.",
      "Gemeinsam ordnen wir ein, was für Ihre Situation relevant ist, und entwickeln daraus ein fachlich fundiertes Konzept für Ihre nächsten Schritte.",
    ],
    buttonLabel: "Mehr über meinen Ansatz",
    buttonHref: "/ueber-mich",
    note: "Meine Beratung ergänzt die ärztliche Betreuung. Sie umfasst keine Diagnosestellung und keine Behandlung von Krankheiten und ersetzt keine ärztliche Diagnostik oder Behandlung.",
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
    intro:
      "Ich bin Milva März – Biochemikerin B.Sc., seit Jahren in der Fitness- und Gesundheitsbranche und aktuell in Ausbildung zur Heilpraktikerin.",
    highlight: "Mich interessiert nicht nur, dass etwas im Körper passiert, sondern warum.",
    closing: "Genau das gebe ich in der Beratung weiter.",
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
  // Ruhiger Einstieg im "layoutreferenz"-Stil (BIO-183): eigene Hero-Texte,
  // eine Vier-Beispiele-Sektion und ein kurzer Erstgespräch-Aufruf darunter.
  hero: {
    eyebrow: "Für Privatkunden",
    headline: [
      { text: "Noch ein Supplement.", tone: "dark" },
      { text: "Noch eine Ernährungsumstellung.", tone: "dark" },
      { text: "Und trotzdem keine Klarheit?", tone: "accent" },
    ],
    intro:
      "Sie investieren Zeit, Geld und Disziplin in Ihre Gesundheit. Aber wissen Sie, welche Maßnahmen zu Ihrer Situation passen?",
  },
  beispiele: {
    eyebrow: "Viel ausprobiert – aber was davon ist wirklich sinnvoll?",
    items: [
      {
        title: "Der Supplement-Schrank wird voller.",
        body: "Für Energie, Schlaf, Darm und Hormone steht etwas bereit. Doch welche Präparate Sie tatsächlich brauchen, bleibt unklar.",
        image: "supplements",
      },
      {
        title: "Die nächste Infusion ist schon gebucht.",
        body: "Sie hoffen auf mehr Energie und Belastbarkeit. Aber wie die Behandlung in einen längerfristigen Plan passt, ist offen.",
        image: "infusion",
      },
      {
        title: "Der Speiseplan wird immer kürzer.",
        body: "Glutenfrei, milchfrei, Low Carb – Sie haben vieles verändert. Was Ihnen wirklich bekommt, lässt sich kaum noch auseinanderhalten.",
        image: "teller",
      },
      {
        title: "Der nächste Gesundheitsplan beginnt am Montag.",
        body: "Mehr Training, neue Routinen, der nächste Selbstversuch. Sie setzen viel um – doch eine klare Richtung fehlt.",
        image: "plan",
      },
    ],
  },
  beispieleCta: {
    title: "Was ist für Ihren Körper gerade wirklich relevant?",
    body: "Gemeinsam entwickeln wir nachvollziehbare Prioritäten und konkrete Schritte, die zu Ihrer Situation passen.",
  },
  zielgruppen: {
    eyebrow: "FÜR WEN",
    title: "Sie müssen nicht in eine Schublade passen.",
    intro:
      "Vielleicht trifft mehr als eines davon auf Sie zu. Gemeinsam betrachten wir, was bei Ihnen zusammenkommt und welche nächsten Schritte zu Ihrer Situation passen.",
    items: [
      {
        title: "Im Alltag stark gefordert",
        body: "Beruf, Familie und wenig Zeit für sich.",
      },
      {
        title: "Sportlich aktiv",
        body: "Training, Leistungsfähigkeit und Regeneration.",
      },
      {
        title: "Wiederkehrende Beschwerden",
        body: "Veränderungen bei Energie, Schlaf oder Verdauung.",
      },
      {
        title: "Gesundheitsbewusst & neugierig",
        body: "Zusammenhänge verstehen und frühzeitig vorsorgen.",
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
  // BIO-214 (2026-10-23): "Was Sie mitnehmen" und "Ihr Ergebnis" sind jetzt
  // eine gemeinsame zweispaltige Kachel (Referenzbild "Beratung & Ergebnis").
  // `beratung` trägt den gemeinsamen Kopf, `nutzen` die linke Spalte,
  // `kompass` die rechte Spalte. Wortlaut exakt wie von Milva vorgegeben.
  beratung: {
    eyebrow: "Beratung & Ergebnis",
    title: "Verstehen, was Ihr Körper braucht.",
    intro:
      "In der Beratung betrachten wir Ihre Beschwerden, Ziele, Routinen und vorhandenen Werte im Zusammenhang. Daraus entstehen klare Prioritäten und nächste Schritte, die zu Ihrem Alltag passen.",
    button: "Leistungen & Preise ansehen",
  },
  nutzen: {
    title: "Was Sie mitnehmen",
    items: [
      {
        title: "Verständliche Einordnung",
        body: "Welche Prozesse bei Ihnen gerade im Vordergrund stehen.",
      },
      {
        title: "Klare Prioritäten",
        body: "Welche nächsten Schritte für Sie wirklich relevant sind.",
      },
      {
        title: "Empfehlungen für Ihren Alltag",
        body: "Für Ernährung, Bewegung, Schlaf, Stress und Regeneration.",
      },
      {
        title: "Wissen für eigene Entscheidungen",
        body: "Damit Sie Empfehlungen verstehen und bewusst umsetzen können.",
      },
    ],
  },
  kompass: {
    title: "Ihr Biochemischer Gesundheitskompass",
    paragraphs: [
      "Sie erhalten Ihre persönliche Einordnung schriftlich – individuell auf Ihre Situation abgestimmt.",
      "Ihr Kompass bündelt Ihre Ausgangslage, die wichtigsten Zusammenhänge und konkrete Empfehlungen. Auf Wunsch ergänzen wir passende Nährstoffstrategien.",
    ],
    highlight: "Ihr persönlicher Maßnahmenplan und Ihr Nachschlagewerk für den Alltag.",
  },
  // Operativer Ablauf — jetzt 6 Schritte: "Besprechung Ihres Kompasses" ist
  // ein eigener Schritt zwischen Kompass-Erstellung und Abschlussgespräch
  // (BIO-214, Referenzbild "Ablauf"). Als horizontaler Zeitstrahl dargestellt.
  process: {
    eyebrow: "Ablauf",
    title: "So läuft die Zusammenarbeit ab",
    steps: [
      { title: "Kostenloses Kennenlerngespräch", body: "Wir klären Ihr Anliegen und ob die Beratung passt. 15–20 Minuten, unverbindlich." },
      { title: "Anamnese", body: "Sie füllen einen ausführlichen Fragebogen aus – die Grundlage für alles Weitere." },
      { title: "Analysegespräch", body: "Wir gehen Ihre Beschwerden, Ziele, Routinen und Werte gemeinsam durch." },
      { title: "Ihr Gesundheitskompass", body: "Ich erstelle Ihren persönlichen Biochemischen Gesundheitskompass mit schriftlicher Einordnung und konkreten Empfehlungen." },
      { title: "Besprechung Ihres Kompasses", body: "Wir besprechen die Zusammenhänge und Empfehlungen, klären Ihre Fragen und legen die nächsten Schritte fest." },
      { title: "Abschlussgespräch & Ausblick", body: "Nach rund drei Monaten besprechen wir Ihre bisherigen Erfahrungen und die nächsten Schritte." },
    ],
  },
  // Eigenständige "Pakete im Vergleich"-Kachel für die Privatkunden-Seite
  // (BIO-214, Referenzbild "Pakete im Vergleich"). Bewusst getrennt von
  // `leistungen.pakete`, damit die Leistungen-&-Preise-Seite unverändert
  // bleibt. Preislogik identisch mit leistungen.basispaket.zusammensetzung
  // (150 + 250 + 120 + 120 = 640 €), nur anders benannt/sortiert gemäß Vorlage.
  pakete: {
    eyebrow: "Welche Zusammenarbeit passt zu Ihnen?",
    title: "Pakete im Vergleich",
    intro:
      "Je nach Anliegen unterschiedlich intensiv. Im kostenlosen Erstgespräch finden wir die passende Form.",
    subheading: "Ihr Basispaket für die ersten 3 Monate",
    billingHighlight: "640 € insgesamt – schrittweise abgerechnet, jeweils nach erbrachter Leistung.",
    items: [
      {
        title: "Gesundheitskompass",
        sub: "Das Basispaket",
        price: "640 €",
        priceSuffix: "für die ersten 3 Monate",
        weeklyPrice: "",
        body: "Ihre persönliche Einordnung und ein schriftlicher Plan – vom Erstanalyse-Gespräch bis zur Endbesprechung nach drei Monaten.",
        note: "Vier Leistungen. Transparent einzeln abgerechnet.",
        featured: false,
      },
      {
        title: "Performer",
        sub: "Basispaket + regelmäßige Begleitung",
        price: "640 €",
        priceSuffix: "Basispaket für die ersten 3 Monate",
        weeklyPrice: "zzgl. 90 € pro Woche",
        body: "Wöchentliche Begleitung und Anpassung für die Umsetzung in Ihrem Alltag.",
        note: "Mindestlaufzeit der Begleitung: 4 Wochen.",
        featured: true,
      },
      {
        title: "High Performer",
        sub: "Basispaket + persönliche tägliche Begleitung",
        price: "640 €",
        priceSuffix: "Basispaket für die ersten 3 Monate",
        weeklyPrice: "zzgl. 160 € pro Woche",
        body: "Enge Begleitung bei hohem Anspruch – beruflich, sportlich oder bei komplexen Themen.",
        note: "Mindestlaufzeit der Begleitung: 4 Wochen.",
        featured: false,
      },
    ],
    breakdown: {
      heading: "So setzen sich die 640 € zusammen",
      rows: [
        ["Erstanalyse-Gespräch", "150 €"],
        ["Biochemischer Kompass", "250 €"],
        ["Besprechung des Kompasses", "120 €"],
        ["Endbesprechung nach 3 Monaten", "120 €"],
      ],
      totalLabel: "Basispaket · erste 3 Monate",
      totalValue: "640 €",
      billingNote:
        "Die Rechnungen werden jeweils erst nach erbrachter Leistung gestellt. Der Gesamtbetrag wird nicht im Voraus fällig.",
      supplementNote:
        "Bei Performer und High Performer kommen die ausgewiesenen Kosten für die gebuchte Begleitung hinzu.",
    },
    link: "Alle Details zu Leistungen & Preisen ansehen",
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

// B2B-Seite (BIO-216): fünf Abschnitte nach verbindlichen Referenzbildern.
// Alle Texte sind wörtlich vorgegeben — keine Umformulierungen, keine
// zusätzlichen Absätze. Vor Live-Schaltung: Rechtscheck (HeilprG/Werberecht).
export const b2b = {
  hero: {
    eyebrow: "Für Unternehmen & Fachpersonen",
    title: "Mehr wissenschaftliche Kompetenz für Ihr Gesundheitsangebot.",
    subtitle: "Biochemische Expertise, die Ihr Unternehmen fachlich stärkt.",
    body: [
      "Sie möchten Ihr Gesundheitsangebot weiterentwickeln, wissenschaftliche Zusammenhänge fundiert einordnen oder hochwertige Fachinhalte erstellen lassen?",
      "Als Biochemikerin unterstütze ich Sie mit wissenschaftlicher Fachberatung, Konzeptentwicklung und professionellem Medical Writing.",
    ],
    ctaLabel: "Zusammenarbeit anfragen",
    competenceLine: "Biochemie · Fachberatung · Konzeptentwicklung · Medical Writing",
    tile: {
      title: "Fachwissen für Ihre nächsten Schritte.",
      items: [
        { icon: "connect", label: "Wissenschaftliche Fragen einordnen" },
        { icon: "compass", label: "Gesundheitsangebote weiterentwickeln" },
        { icon: "document", label: "Fachinhalte verständlich vermitteln" },
      ],
      footnote: "Für Gesundheitsunternehmen, Praxen, Labore und Fachpersonen.",
    },
  },
  leistungen: {
    eyebrow: "Leistungen",
    title: ["Wissenschaftliche Expertise.", "Individuell für Ihr Unternehmen."],
    intro:
      "Ob Fachfrage, Gesundheitskonzept oder Fachtext: biochemisches Wissen für Ihre konkrete Aufgabe.",
    cards: [
      {
        n: "01",
        title: "Wissenschaftliche Fachberatung",
        lead: "Komplexe Zusammenhänge fundiert bewerten.",
        body: "Biochemische Einordnung, wissenschaftliche Recherche und fachlicher Austausch zu anonymisierten Fällen.",
        points: [
          "Laborparameter und ihre biochemischen Zusammenhänge",
          "Biochemische und physiologische Zusammenhänge",
          "Literaturbewertung und wissenschaftliches Sparring",
        ],
      },
      {
        n: "02",
        title: "Konzeptentwicklung",
        lead: "Wissen in konkrete Angebote übersetzen.",
        body: "Fachliche Entwicklung und Überarbeitung von Gesundheits-, Ernährungs- und Präventionskonzepten.",
        points: [
          "Neue Beratungsangebote",
          "Gesundheits- und Präventionsprogramme",
          "Fachlich strukturierte Beratungsabläufe",
        ],
      },
      {
        n: "03",
        title: "Medical Writing & Scientific Content",
        lead: "Wissenschaft verständlich und präzise vermitteln.",
        body: "Wissenschaftlich fundierte Texte für Gesundheitsunternehmen, Labore und Nahrungsergänzungsmittelhersteller.",
        points: [
          "Fachartikel und medizinisch-biochemische Texte",
          "Produkt-, Inhaltsstoff- und Hintergrundinformationen",
          "Website-Inhalte und Unternehmenspublikationen",
          "Literaturrecherche und Quellenaufbereitung",
        ],
      },
      {
        n: "04",
        title: "Fachliche Schulung & Wissenstransfer",
        lead: "Wissen, das im Unternehmen ankommt.",
        body: "Komplexe Themen verständlich aufbereitet für Ihr Team und die Anwendung im Arbeitsalltag.",
        points: [
          "Schulungsunterlagen und interne Wissensgrundlagen",
          "Wissenschaftliche Themenaufbereitung",
          "Fachliche Workshops nach Vereinbarung",
        ],
      },
    ],
  },
  ansatz: {
    eyebrow: "Mein Ansatz",
    qualifikation: {
      name: "Milva März",
      degree: "B.Sc. Biochemie",
      since: "Seit 2016 in der Fitnessbranche",
      selfEmployed: "Selbstständige biochemische Gesundheitsberatung",
    },
    title: ["Wissenschaft verstehen.", "Wissen nutzbar machen."],
    body: "Ich verbinde biochemisches Fachwissen mit Erfahrung aus Training und Gesundheitsberatung. So werden wissenschaftliche Erkenntnisse zu einer verständlichen Grundlage für Ihre Arbeit.",
    rows: [
      {
        title: "Wissenschaftlich fundiert",
        body: "Biochemisches Fachwissen und kritisch eingeordnete Literatur.",
      },
      {
        title: "Praxisnah gedacht",
        body: "Erfahrung aus der Fitness- und Gesundheitsbranche.",
      },
      {
        title: "Individuell umgesetzt",
        body: "Ihre Fragestellung bestimmt die Zusammenarbeit.",
      },
    ],
  },
  zusammenarbeit: {
    eyebrow: "Zusammenarbeit",
    title: "Flexible Zusammenarbeit. Klar definierte Leistungen.",
    intro: "Wir stimmen Aufgabe, Ergebnis und Umfang vor Beginn gemeinsam ab.",
    rows: [
      {
        title: "Fachberatung & wissenschaftliches Sparring",
        body: "Konkrete Fachfragen und wissenschaftliche Einordnung.",
        price: "150 € pro Stunde",
      },
      {
        title: "Konzeptentwicklung",
        body: "Klar abgegrenzte Projekte; größere Vorhaben individuell kalkuliert.",
        price: "Ab 250 €",
      },
      {
        title: "Medical Writing & wissenschaftliche Ausarbeitungen",
        body: "Fachtexte, Produktinformationen und Literaturrecherche.",
        price: "Individuelles Angebot",
      },
      {
        title: "Schulungen & Workshops",
        body: "Fachliche Weiterbildung und interne Schulungsprojekte.",
        price: "Individuelles Angebot",
      },
    ],
    process: ["Anliegen klären", "Umfang und Angebot abstimmen", "Fachliche Umsetzung"],
  },
  kontakt: {
    eyebrow: "Kontakt",
    title: "Lassen Sie uns Ihr Vorhaben gemeinsam weiterdenken.",
    body: "In einem unverbindlichen Gespräch klären wir Ihre Fragestellung und wie ich Sie unterstützen kann.",
    ctaLabel: "Unverbindliche Zusammenarbeit anfragen",
    note: "Einzelprojekte und längerfristige Kooperationen möglich.",
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
