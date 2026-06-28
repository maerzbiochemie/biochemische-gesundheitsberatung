// Zentrale Inhalts- und Navigationsdaten der Website (Deutsch).

export const site = {
  name: "Milva März",
  role: "Biochemikerin B.Sc.",
  tagline: "Biochemische Gesundheitsberatung",
  email: "maerz.biochemie@gmail.com",
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

// Körper-Signale — geteilt zwischen Landing-B2C-Sektion und Privatkunden-Hero.
export const koerperSignale = [
  "Man schläft etwas schlechter.",
  "Die Verdauung ist empfindlicher.",
  "Die Energie schwankt.",
  "Stress wirkt stärker nach.",
  "Training fühlt sich anders an.",
  "Regeneration dauert länger.",
  "Der Zyklus verändert sich.",
] as const;

export const home = {
  hero: {
    eyebrow: "Biochemische Gesundheitsberatung",
    title:
      "Wissenschaftlich fundierte Gesundheitsberatung für Prävention, Gesundheit und Verständnis.",
    body: [
      "Aus dem Verständnis Ihrer körperlichen Zusammenhänge entsteht ein individueller Plan – wissenschaftlich fundiert, statt pauschale Standardlösung.",
    ],
    heroQuote: "Wer Gesundheit verstehen will, muss den Körper als System betrachten.",
    facts: [
      ["Fachlicher Hintergrund", "Biochemie Bachelor of Science · Fitnesstrainerin"],
      ["Fokus", "Einordnung · Struktur · Umsetzung"],
      ["Arbeitsweise", "Individuell & wissenschaftlich fundiert"],
    ],
  },
  // Section formerly "Der Körper im Zusammenspiel" — now "Bedeutung von Gesundheit"
  system: {
    eyebrow: "Bedeutung von Gesundheit",
    title: "Der Körper funktioniert nicht isoliert – sondern im Verbund.",
    body: [
      "Gesundheit bedeutet mehr als die Abwesenheit von Krankheit. Körperliche, mentale und alltägliche Faktoren beeinflussen sich gegenseitig – genau deshalb lässt sich Gesundheit nicht an einer einzelnen Stelle verstehen.",
      "Wer Gesundheit verstehen will, muss den Körper als System betrachten: Verdauung, Energiehaushalt, Hormonregulation, Nervensystem, Belastung und Regeneration arbeiten nicht getrennt, sondern im Verbund.",
    ],
    pullquote: "Entscheidend sind deshalb die Prozesse dahinter – nicht nur das einzelne Symptom.",
    heroQuote: "Wer Gesundheit verstehen will, muss den Körper als System betrachten.",
    more: {
      label: "Mehr erfahren",
      title: "Der Körper als zusammenhängendes Gefüge",
      body: [
        "Beschwerden zeigen sich oft an einer Stelle, entstehen aber im Zusammenspiel mehrerer Prozesse: Stoffwechsel, Verdauung, Hormonhaushalt, Nervensystem und Regeneration greifen ineinander.",
        "Eine biochemische Einordnung betrachtet diese Zusammenhänge gemeinsam. Statt einzelne Symptome isoliert zu behandeln, rücken die zugrunde liegenden Abläufe in den Blick.",
        "Daraus entsteht eine Strategie, die an den Ursachen ansetzt – nachvollziehbar, individuell und im Alltag umsetzbar.",
      ],
    },
  },
  approach: {
    eyebrow: "Mein Ansatz",
    title: "Drei Schritte zu echter Klarheit",
    steps: [
      {
        n: "01",
        title: "Verstehen",
        body: "Körperliche Prozesse sichtbar machen – von Energieproduktion und Verdauung bis Nährstoffversorgung, Stressreaktion und Regeneration.",
      },
      {
        n: "02",
        title: "Verbinden",
        body: "Beschwerden, Laborwerte, Gewohnheiten und Lebensstilfaktoren nicht isoliert betrachten, sondern in einen sinnvollen Zusammenhang bringen.",
      },
      {
        n: "03",
        title: "Umsetzen",
        body: "Aus komplexen Informationen konkrete Schritte ableiten, die zu Ihrem Körper, Ihrem Alltag und Ihren Zielen passen.",
      },
    ],
  },
  // B2C-Entscheidungssektion (ersetzt den früheren kurzen Privatkunden-Block)
  b2cLanding: {
    headline: "Vielleicht ist es nicht ein einzelnes Problem. Vielleicht hängt mehr zusammen.",
    intro: [
      "Viele Menschen machen bereits vieles richtig – und merken trotzdem, dass ihr Körper nicht mehr so klar, stabil oder belastbar reagiert, wie sie es erwarten.",
      "Oft beginnt es nicht mit einem klaren Auslöser.",
    ],
    signals: koerperSignale,
    followup: [
      "Wenn mehrere kleine Veränderungen zusammenkommen, entsteht schnell das Gefühl: Irgendetwas passt nicht mehr – aber es ist schwer zu greifen, wo man anfangen soll.",
      "Vielleicht haben Sie Laborwerte, Empfehlungen oder Gesundheitsinformationen gesammelt, aber keine klare Einordnung.",
      "Oder Sie haben gar keine akuten Beschwerden – sondern einfach den Wunsch, Ihren Körper besser zu verstehen und Gesundheit bewusster zu gestalten.",
    ],
    solution:
      "Biochemische Gesundheitsberatung hilft dabei, diese Signale nicht isoliert zu betrachten, sondern körperliche Zusammenhänge verständlich einzuordnen und daraus sinnvolle nächste Schritte abzuleiten.",
    button: { label: "Zur Beratung für Privatkunden", href: "/privatkunden" },
  },
  // B2B-Entscheidungssektion
  b2bLanding: {
    headline: "Sie arbeiten mit Menschen und möchten fachlich tiefer einordnen?",
    text: [
      "Kunden und Klienten bringen heute immer häufiger eigene Recherchen, Laborwerte, Beschwerden, Supplementlisten, Ernährungspläne oder widersprüchliche Empfehlungen mit.",
      "Nicht jeder Körper reagiert gleich. Nicht jede Lösung passt zu jedem Menschen. Und nicht jeder Fall lässt sich mit einem Standardschema sinnvoll begleiten.",
    ],
    button: { label: "Mehr für Unternehmen erfahren", href: "/unternehmen" },
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
      "Ich bin Milva März, Biochemikerin B.Sc. und seit vielen Jahren in der Fitness- und Gesundheitsbranche tätig. Ergänzend befinde ich mich in der Ausbildung zur Heilpraktikerin. Ich verbinde wissenschaftliches Verständnis mit praktischer Umsetzung – damit Gesundheitsstrategien nicht nur fachlich sinnvoll sind, sondern auch im Alltag funktionieren.",
    ],
  },
  finalCta: {
    eyebrow: "Der nächste Schritt",
    title: "Klarheit schaffen",
    body: [
      "Ein kostenloses Erstgespräch ist der passende Einstieg, wenn Ihnen bisher die klare Einordnung fehlt.",
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
    title: "Vielleicht ist es nicht ein einzelnes Problem. Vielleicht hängt mehr zusammen.",
    intro: "Oft beginnt es nicht mit einem klaren Auslöser.",
    signals: koerperSignale,
    afterSignals: [
      "Gleichzeitig gibt es viele mögliche Erklärungen und Empfehlungen. Ernährung, Mikronährstoffe, Schlaf, Stress, Hormone, Darm, Training, Laborwerte – alles scheint wichtig zu sein.",
    ],
    questionLead: "Die entscheidende Frage ist:",
    question: "Was ist für Ihren Körper jetzt wirklich relevant?",
  },
  catcher: {
    title: "Vielleicht brauchen Sie nicht mehr Disziplin – sondern mehr Verständnis.",
    body: [
      "Viele Menschen versuchen, ihre Gesundheit über noch mehr Kontrolle zu verbessern: bessere Ernährung, mehr Bewegung, mehr Schlaf, weniger Stress, gezieltere Supplemente oder strengere Routinen.",
      "Das kann sinnvoll sein. Aber manchmal ist nicht die nächste Maßnahme entscheidend, sondern die Frage, warum der Körper überhaupt so reagiert.",
      "Wenn Energie, Verdauung, Schlaf, Stress, Zyklus, Regeneration oder Belastbarkeit aus dem Gleichgewicht geraten, lohnt sich ein Blick auf die Zusammenhänge dahinter.",
      "Biochemische Gesundheitsberatung hilft dabei, diese Zusammenhänge verständlich einzuordnen und daraus eine Strategie zu entwickeln, die zu Ihrem Körper und Ihrem Alltag passt.",
    ],
  },
  praevention: {
    title: "Nicht erst handeln, wenn der Körper laut wird.",
    body: [
      "Gesundheit bedeutet nicht nur, Beschwerden zu reduzieren. Gesundheit bedeutet auch, den eigenen Körper besser kennenzulernen, Belastungsgrenzen zu verstehen und Routinen aufzubauen, die langfristig tragen.",
      "Biochemische Gesundheitsberatung kann deshalb auch dann sinnvoll sein, wenn Sie keine akuten Beschwerden haben, sondern Ihren Gesundheitsstatus bewusster einordnen möchten.",
      "Es geht um Prävention, Verständnis und eine Strategie, die zu Ihrem Leben passt.",
    ],
  },
  zielgruppen: {
    title: "Für wen ist die Beratung geeignet?",
    intro:
      "Die Beratung eignet sich für Menschen, die ihre Gesundheit nicht pauschal betrachten möchten, sondern verstehen wollen, welche körperlichen Zusammenhänge bei ihnen eine Rolle spielen können.",
    items: [
      {
        title: "Leistungsorientierte Menschen mit wenig Zeit",
        body: "Für Menschen, die viel leisten, Verantwortung tragen und merken, dass Energie, Schlaf, Verdauung, Stress oder Belastbarkeit nicht mehr selbstverständlich funktionieren.",
      },
      {
        title: "Sportlich aktive Menschen und ehemalige Leistungssportler",
        body: "Für Menschen, die ihren Körper gut kennen, aber merken, dass frühere Strategien heute nicht mehr ausreichen. Wenn Training allein nicht mehr alles reguliert, werden Regeneration, Ernährung, Stress, Schlaf, Zyklus, Alltag und Belastungssteuerung wichtiger.",
      },
      {
        title: "Menschen mit wiederkehrenden Beschwerden",
        body: "Für Menschen, die immer wieder an ähnlichen Themen hängen bleiben und bereits vieles ausprobiert haben. Hier geht es nicht darum, noch mehr einzelne Tipps zu sammeln, sondern körperliche Zusammenhänge verständlich einzuordnen und daraus eine sinnvolle Strategie abzuleiten.",
      },
      {
        title: "Gesundheitsbewusste und neugierige Menschen",
        body: "Für Menschen, die nicht erst warten möchten, bis etwas nicht mehr funktioniert. Wenn Sie Ihren Gesundheitsstatus besser verstehen, Ihre Routinen gezielter gestalten oder Ihren Körper präventiv unterstützen möchten, kann die Beratung helfen, vorhandene Informationen sinnvoll zu sortieren und Ihre nächsten Schritte bewusster zu wählen.",
      },
    ],
  },
  nutzen: {
    title: "Was Sie konkret aus der Beratung mitnehmen",
    intro:
      "Ziel ist nicht, möglichst viele Maßnahmen gleichzeitig umzusetzen. Ziel ist, besser zu verstehen, welche nächsten Schritte für Ihren Körper, Ihren Alltag und Ihre Ziele wirklich relevant sind.",
    items: [
      {
        title: "Verständliche Einordnung",
        body: "Sie verstehen, welche körperlichen Prozesse und Einflussfaktoren bei Ihrer Situation eine Rolle spielen können.",
      },
      {
        title: "Klare Prioritäten",
        body: "Aus vielen Informationen entsteht eine klare Struktur: Was ist jetzt wichtig, was kann warten und was passt realistisch in Ihren Alltag?",
      },
      {
        title: "Biochemischer Gesundheitskompass",
        body: "Sie erhalten eine schriftliche Ausarbeitung mit biochemischer Einordnung, individueller Strategie und konkreten Empfehlungen zum Nachlesen.",
      },
      {
        title: "Alltagstaugliche Umsetzung",
        body: "Die Empfehlungen werden so aufgebaut, dass sie zu Ihrer Belastbarkeit, Ihren Routinen und Ihren Zielen passen.",
      },
      {
        title: "Mehr Verständnis für Ihren Körper",
        body: "Sie sollen nicht nur Empfehlungen erhalten, sondern verstehen, warum bestimmte Schritte für Ihren Körper sinnvoll sein können.",
      },
    ],
  },
  process: {
    eyebrow: "So läuft die Zusammenarbeit ab",
    title: "In fünf Schritten zu Ihrer Strategie",
    steps: [
      { title: "Kostenloses Erstgespräch", body: "Ihr Anliegen, Ihre Erwartungen und die Passung zur Beratung werden geklärt." },
      { title: "Anamnese", body: "Sie erhalten einen ausführlichen Fragebogen als Grundlage für die Analyse." },
      { title: "Analysegespräch", body: "Ihre Beschwerden, Ziele, Routinen und relevanten Einflussfaktoren werden im Detail besprochen." },
      { title: "Biochemischer Gesundheitskompass", body: "Sie erhalten eine schriftliche Ausarbeitung mit biochemischer Einordnung, individueller Strategie und konkreten Empfehlungen." },
      { title: "Abschlussgespräch & Ausblick", body: "Das Abschlussgespräch findet nach drei Monaten statt. Wir werten Ihre bisherige Entwicklung aus, ordnen Veränderungen ein und strukturieren die nächsten sinnvollen Schritte." },
    ],
  },
  finalCta: {
    title: "Sie möchten wissen, was für Ihren Körper relevant ist?",
    body: [
      "Im kostenlosen Erstgespräch klären wir gemeinsam, worum es bei Ihnen geht, welche Themen im Vordergrund stehen und ob die biochemische Gesundheitsberatung zu Ihrer Situation passt.",
      "Sie müssen vorab nicht wissen, welche Leistung die richtige ist.",
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
    meta: "ca. 15–20 Minuten",
    body: "Das kostenlose Erstgespräch dient dazu, Ihr Anliegen kennenzulernen und einzuschätzen, ob meine biochemische Gesundheitsberatung zu Ihrer Situation passt.",
    listIntro: "Diese Fragen klären wir gemeinsam:",
    list: [
      "Worum geht es bei Ihnen?",
      "Welche Themen stehen im Vordergrund?",
      "Ist eine Zusammenarbeit sinnvoll?",
      "Welcher nächste Schritt passt?",
    ],
    footnote:
      "Das Erstgespräch ist keine ausführliche Beratung, sondern eine erste Orientierung für beide Seiten.",
  },
  basispaket: {
    eyebrow: "Das Herzstück",
    title: "Das Basispaket",
    intro:
      "Das Basispaket bildet den strukturierten Einstieg in die biochemische Gesundheitsberatung. Es besteht aus Analysegespräch, Biochemischem Gesundheitskompass und Abschlussgespräch & Ausblick und kann nur gemeinsam gebucht werden.",
    gesamt: "520 €",
    gesamtLabel: "Gesamtumfang",
    gesamtNote: "Abrechnung erfolgt schrittweise nach erbrachter Leistung.",
    zusammensetzung: [
      ["Analysegespräch", "150 €"],
      ["Biochemischer Gesundheitskompass", "250 €"],
      ["Abschlussgespräch & Ausblick", "120 €"],
    ],
    billing: {
      title: "Hinweis zur Abrechnung",
      body: [
        "Der Gesamtpreis von 520 € beschreibt den Umfang des Basispakets. Die einzelnen Bestandteile werden jeweils erst nach Durchführung des jeweiligen Termins beziehungsweise nach Bereitstellung der schriftlichen Ausarbeitung abgerechnet. So zahlen Sie nur für Leistungen, die tatsächlich stattgefunden haben oder erbracht wurden.",
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
        meta: "schriftliche Ausarbeitung",
        body: "Nach dem Analysegespräch erhalten Sie Ihren individuell ausgearbeiteten Biochemischen Gesundheitskompass. Er verbindet Ihre Ausgangssituation mit einer verständlichen biochemischen Einordnung und konkreten Handlungsschritten für Ihren Alltag.",
        note: "Der Gesundheitskompass dient nicht nur als Maßnahmenplan, sondern auch als persönliche Wissensgrundlage, die Sie jederzeit nachlesen können.",
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
    title: "Unterstützung in der Umsetzung",
    intro: [
      "Ein schriftlicher Gesundheitskompass schafft Klarheit. Die eigentliche Veränderung entsteht jedoch im Alltag: bei der Umsetzung, bei Rückfragen, bei Stressphasen, bei unerwarteten Reaktionen oder wenn Empfehlungen angepasst werden müssen.",
      "Deshalb können nach dem Basispaket weitere Unterstützungsangebote ergänzt werden.",
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
        sub: "Analysegespräch + Biochemischer Gesundheitskompass + Abschlussgespräch & Ausblick",
        price: "520 €",
        priceSuffix: "Gesamtumfang",
        body: "Der strukturierte Einstieg in die biochemische Gesundheitsberatung. Geeignet, wenn Sie Ihre Situation fundiert verstehen, körperliche Zusammenhänge nachvollziehen und einen klaren schriftlichen Plan erhalten möchten.",
        note: "Abrechnung erfolgt schrittweise nach erbrachter Leistung.",
        featured: false,
      },
      {
        title: "Performer",
        sub: "Gesundheitskompass + regelmäßige Begleitung",
        price: "520 €",
        priceSuffix: "zzgl. 90 € pro Woche",
        body: "Geeignet, wenn Sie Ihr Konzept nicht nur erhalten, sondern aktiv und strukturiert umsetzen möchten – mit regelmäßiger Unterstützung, fachlicher Einordnung und Anpassung einzelner Empfehlungen.",
        note: "Mindestlaufzeit der Begleitung: 4 Wochen.",
        featured: true,
      },
      {
        title: "High Performer",
        sub: "Gesundheitskompass + persönliche und tägliche Begleitung",
        price: "520 €",
        priceSuffix: "zzgl. 160 € pro Woche",
        body: "Geeignet, wenn Sie eine persönliche und tägliche Begleitung wünschen, beruflich oder sportlich stark eingespannt sind oder komplexere Themen mitbringen. Im Vordergrund stehen die persönliche, tägliche Begleitung sowie engere Verlaufseinordnung und Anpassung der Strategie.",
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
    eyebrow: "Über mich und meine Vorgehensweise",
    title: "Gesundheit verständlich machen – von Zellprozessen bis zum Alltag",
    body: [
      "Zwischen Trends, Laborwerten, Diagnosen, Empfehlungen und widersprüchlichen Informationen bleibt oft eine entscheidende Frage offen: Was ist für den eigenen Körper wirklich relevant?",
      "Genau hier setzt meine Arbeit an. Ich verbinde biochemisches Verständnis mit praktischer Gesundheitsberatung, um Zusammenhänge sichtbar zu machen, Informationen einzuordnen und daraus eine Strategie zu entwickeln, die zum Menschen und seinem Alltag passt.",
    ],
  },
  person: {
    eyebrow: "Über mich",
    name: "Milva März",
    role: "Biochemikerin B.Sc. · in Ausbildung zur Heilpraktikerin",
    body: [
      "Ich bin Milva März, Biochemikerin B.Sc. und seit vielen Jahren in der Fitness- und Gesundheitsbranche tätig. Ergänzend befinde ich mich in der Ausbildung zur Heilpraktikerin.",
      "Mich hat der menschliche Körper schon immer fasziniert. Ich wollte nicht nur wissen, dass etwas funktioniert oder nicht funktioniert – sondern warum. Warum entstehen Krankheiten? Welche Prozesse laufen im Hintergrund ab? Wie beeinflussen sich Zellen, Organe, Stoffwechsel, Hormone, Immunsystem und Nervensystem gegenseitig? Und an welchen Stellen kann man den Körper sinnvoll unterstützen?",
      "Diese Neugier hat mich zur Biochemie geführt. Dort beginnt für mich das Verständnis von Gesundheit: nicht an der Oberfläche einzelner Symptome, sondern bei den Prozessen, die im Körper im Hintergrund ablaufen.",
      "Durch meine langjährige Erfahrung in der Fitness- und Gesundheitsbranche habe ich außerdem gelernt, wie entscheidend Prävention, Bewegung, Regeneration und Alltag für langfristige Gesundheit sind. Gleichzeitig habe ich gesehen, dass Wissen allein nicht reicht. Strategien müssen verständlich, realistisch und umsetzbar sein.",
      "Deshalb verbinde ich wissenschaftliches Verständnis mit praktischer Umsetzung – damit Gesundheitsstrategien nicht nur fachlich sinnvoll sind, sondern auch im Alltag funktionieren.",
    ],
  },
  biochemie: {
    eyebrow: "Wissenschaftliche Grundlage",
    title: "Warum Biochemie und Gesundheit zusammengehören",
    body: [
      "Biochemie verbindet Biologie und Chemie. Sie erklärt, wie biologische Prozesse im Körper auf molekularer Ebene funktionieren – also wie Zellen Energie gewinnen, Nährstoffe verwerten, Signale weitergeben, auf Belastung reagieren und miteinander kommunizieren.",
      "Der Körper ist kein einzelnes Organ und keine isolierte Beschwerde. Er ist ein komplexes Netzwerk aus Stoffwechselwegen, Zellfunktionen, Hormonsignalen, Immunreaktionen, Organen und Regulationsmechanismen. Diese Ebenen beeinflussen sich ständig gegenseitig.",
      "Genau deshalb reicht es oft nicht, nur ein Symptom oder einen einzelnen Laborwert zu betrachten. Entscheidend ist die Frage: Welche Prozesse stehen dahinter? Welche Systeme sind beteiligt? Und welche Faktoren im Alltag können diese Prozesse unterstützen oder zusätzlich belasten?",
      "Ein besonderer Schwerpunkt meiner Arbeit liegt dabei auf dem Immunsystem. Es überwacht, reguliert, kommuniziert und reagiert auf Belastungen. Bei vielen Beschwerden, Entzündungsprozessen oder chronischen Themen wird seine Rolle jedoch unterschätzt.",
      "Biochemische Gesundheitsberatung bedeutet für mich deshalb: Stoffwechsel, Immunsystem, Hormone, Zellgesundheit, Organe, Nervensystem und Alltag nicht getrennt zu betrachten, sondern ihre Verbindung verständlich zu machen.",
    ],
    pullquote: "So entsteht Orientierung statt Informationsüberflutung.",
  },
  prinzip: {
    eyebrow: "Mein Arbeitsprinzip",
    title: "Verstehen → Einordnen → Strukturieren → Umsetzen",
    steps: [
      {
        n: "1",
        title: "Verstehen",
        phase: "Start der Zusammenarbeit",
        body: "Zuerst geht es darum, Ihre aktuelle Situation wirklich zu verstehen: Beschwerden, Ziele, Routinen, Ernährung, Bewegung, Schlaf, Stress, bisherige Maßnahmen und vorhandene Informationen wie Laborwerte.",
      },
      {
        n: "2",
        title: "Einordnen",
        phase: "Analysephase",
        body: "Diese Informationen werden in einen körperlichen Zusammenhang gebracht. Im Mittelpunkt stehen Stoffwechselprozesse, Energiehaushalt, Nährstoffversorgung, Belastung, Regeneration, Hormone, Immunsystem und Alltag.",
      },
      {
        n: "3",
        title: "Strukturieren",
        phase: "Biochemischer Gesundheitskompass",
        body: "Aus der Einordnung entsteht eine klare Priorisierung: Was ist jetzt wichtig? Was kann warten? Welche Maßnahmen passen zu Ihrem Körper, Ihrer Situation und Ihrem Alltag?",
      },
      {
        n: "4",
        title: "Umsetzen",
        phase: "Beginn der Veränderung",
        body: "Am Ende steht eine konkrete Strategie mit verständlichen Schritten für Ernährung, Bewegung, Schlaf, Stressregulation, Regeneration und auf Wunsch ergänzende Nährstoffstrategien.",
      },
    ],
    notes: [
      "Nach den ersten Wochen: Erste Veränderungen können spürbar werden – zum Beispiel bei Energie, Verdauung, Schlaf, Wasserhaushalt oder Belastbarkeit.",
      "Nach ca. 4 Wochen: Umsetzungserfahrungen lassen sich besser einordnen; bei Bedarf können Empfehlungen angepasst werden.",
      "Nach 8–12 Wochen: Viele körperliche Prozesse brauchen Zeit, um sich stabiler anzupassen – deshalb ist der Blick auf Verlauf und Alltag entscheidend.",
      "Nach 3 Monaten: Die Entwicklung wird ausgewertet und die nächsten Schritte können sinnvoll geplant werden.",
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
    title: "Biochemische Gesundheitsberatung für Unternehmen & Fachpersonen",
    subtitle: "Wenn Gesundheitswissen Tiefe braucht – aber im Alltag funktionieren muss.",
    body: [
      "Immer mehr Informationen bedeuten nicht automatisch mehr Klarheit. Für Praxen, Studios, Coaches und Fachpersonen wird es zunehmend anspruchsvoll, Laborwerte, Empfehlungen, gesundheitliche Fragestellungen und bestehende Konzepte fachlich sauber einzuordnen.",
      "Genau hier setzt meine Arbeit an: Ich unterstütze gesundheitsnahe Unternehmen und Fachpersonen dabei, biochemisches Fachwissen verständlich, strukturiert und praxisnah in ihre Arbeit zu integrieren – ohne Standardsystem, sondern passend zu Zielgruppe, Angebot und fachlichem Anspruch.",
    ],
  },
  herausforderung: {
    eyebrow: "Die Herausforderung",
    title: "Wenn Kundenfälle komplexer werden, braucht Beratung mehr Tiefe.",
    body: [
      "Der Gesundheitsmarkt verändert sich. Kunden und Klienten bringen heute immer häufiger eigene Recherchen, Laborwerte, Beschwerden, Supplementlisten, Trainingspläne oder widersprüchliche Empfehlungen mit.",
      "Gleichzeitig wächst der Anspruch an Unternehmen, Studios, Praxen, Trainer und Coaches: Menschen möchten individueller begleitet werden, Empfehlungen besser verstehen und Lösungen erhalten, die zu ihrem Körper und Alltag passen.",
      "Genau hier entsteht die Herausforderung.",
      "Nicht jeder Körper reagiert gleich. Nicht jede Lösung passt zu jedem Menschen. Und nicht jeder Fall lässt sich mit einem Standardschema sinnvoll begleiten.",
      "Biochemische Gesundheitsberatung unterstützt dabei, komplexe Informationen zu sortieren, körperliche Zusammenhänge verständlich einzuordnen und Empfehlungen fachlich fundierter aufzubauen.",
      "Ziel ist nicht, Ihre bestehende Arbeit zu ersetzen.",
      "Ziel ist, Ihre Arbeit fachlich zu stärken – damit Sie Ihre Kunden individueller, strukturierter und sicherer begleiten können.",
    ],
  },
  zielgruppe: {
    eyebrow: "Für wen",
    title: "Für wen ist die Zusammenarbeit geeignet?",
    intro:
      "Die Zusammenarbeit richtet sich an gesundheitsnahe Unternehmen und Fachpersonen, die ihre Arbeit fachlich vertiefen, bestehende Angebote schärfen oder komplexe Gesundheitsfragen besser einordnen möchten.",
    categories: [
      {
        title: "Praxen & therapeutische Einrichtungen",
        body: "Für Praxen und therapeutische Einrichtungen, die komplexe Beschwerden, wiederkehrende Themen oder vorhandene Informationen ihrer Patienten fachlich tiefer einordnen möchten.",
        roles: ["Heilpraktiker", "Osteopathen", "Physiotherapeuten", "Therapeuten", "Praxisteams"],
      },
      {
        title: "Training, Coaching & Performance",
        body: "Für Trainer, Coaches und Studios, die Bewegung, Regeneration, Ernährung und Belastbarkeit nicht isoliert betrachten, sondern wissenschaftlich fundierter in ihre Arbeit integrieren möchten.",
        roles: [
          "Personal Trainer",
          "Fitness Coaches",
          "Athletiktrainer",
          "Gesundheitscoaches",
          "Studios",
          "performance-orientierte Anbieter",
        ],
      },
      {
        title: "Unternehmen, Konzepte & Teams",
        body: "Für Unternehmen und Teams, die bestehende Konzepte fachlich schärfen, neue Angebote entwickeln oder interne Wissensgrundlagen verständlich und biochemisch fundiert aufbauen möchten.",
        roles: [
          "Gesundheitszentren",
          "Ernährungsberatungen",
          "Präventionsanbieter",
          "kleine Gesundheitsunternehmen",
          "Teams im gesundheitsnahen Bereich",
          "Anbieter mit bestehenden Beratungs- oder Workshopformaten",
        ],
      },
    ],
  },
  formen: {
    eyebrow: "Mögliche Formen der Zusammenarbeit",
    title: "Tiefe nach Bedarf",
    items: [
      {
        n: "01",
        title: "Fachliche Beratung",
        body: "Für konkrete Fragestellungen, Fallbesprechungen, fachliche Unsicherheiten oder wiederkehrende Themen in der Arbeit mit Kunden, Klienten oder Patienten.",
      },
      {
        n: "02",
        title: "Konzeptentwicklung",
        body: "Für bestehende Angebote, Workshops, Beratungsprozesse oder fachliche Materialien, die strukturiert überarbeitet oder neu aufgebaut werden sollen.",
      },
      {
        n: "03",
        title: "Schriftliche Ausarbeitung",
        body: "Für individuelle Ausarbeitungen zu Fachthemen, Fällen, Konzepten oder internen Wissensgrundlagen – verständlich, wissenschaftlich fundiert und praxisnah.",
      },
    ],
    footnote:
      "Die Zusammenarbeit kann einmalig stattfinden oder in regelmäßigen Meetings fortgeführt werden – je nachdem, wie viel fachliche Tiefe und Begleitung benötigt wird.",
  },
  staerken: {
    eyebrow: "Nutzen",
    title: "Fachliche Tiefe, die Ihre Arbeit stärkt",
    body: [
      "Bei Fragestellungen, Konzepten und Fallbesprechungen geht es nicht darum, noch mehr Informationen zu sammeln. Entscheidend ist, Informationen verständlich zu sortieren, fachlich einzuordnen und daraus klare Handlungsschritte abzuleiten.",
      "Meine Arbeit hilft Unternehmen und Fachpersonen dabei, biochemisches Wissen nicht nur theoretisch zu verstehen, sondern in der täglichen Praxis sicherer anzuwenden.",
      "So entstehen Konzepte, Beratungsansätze und fachliche Grundlagen, die verständlicher, strukturierter und individueller werden – für Sie, Ihr Team und die Menschen, mit denen Sie arbeiten.",
    ],
  },
  gewinn: {
    eyebrow: "Ihr Mehrwert",
    title: "Was Sie durch die Zusammenarbeit gewinnen",
    items: [
      {
        title: "Mehr fachliche Sicherheit",
        body: "Sie erhalten eine fundierte zweite Perspektive auf komplexe Themen, Fälle oder Konzepte.",
      },
      {
        title: "Klare Struktur",
        body: "Aus vielen Informationen entsteht eine klare Entscheidungsgrundlage für Beratung, Coaching, Training oder interne Arbeit.",
      },
      {
        title: "Individuelle Tiefe",
        body: "Die Zusammenarbeit wird an Ihr Angebot, Ihre Zielgruppe und Ihren fachlichen Bedarf angepasst.",
      },
      {
        title: "Praxisnahe Umsetzung",
        body: "Biochemisches Wissen wird so aufbereitet, dass es im Alltag, im Team oder in der Arbeit mit Klienten wirklich nutzbar wird.",
      },
      {
        title: "Bessere Zielorientierung",
        body: "Empfehlungen können individueller begründet, verständlicher erklärt und gezielter auf die Ziele Ihrer Kunden ausgerichtet werden.",
      },
      {
        title: "Stärkere Angebotsqualität",
        body: "Bestehende Beratungsprozesse, Workshops, Konzepte oder Programme können fachlich geschärft und hochwertiger positioniert werden.",
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
    title: "Sie möchten Ihr Angebot fachlich vertiefen?",
    body: "Im kostenlosen Erstgespräch klären wir, wobei Sie Unterstützung benötigen und welche Form der Zusammenarbeit sinnvoll ist.",
  },
} as const;

export const faq = {
  eyebrow: "Häufige Fragen",
  title: "Häufige Fragen",
  subtitle:
    "Antworten auf die wichtigsten Fragen zur biochemischen Gesundheitsberatung, zum Ablauf und zur Zusammenarbeit.",
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
        "Das kostenlose Erstgespräch dauert ca. 15–20 Minuten und dient der ersten Orientierung.",
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
        "Nein. Analysegespräch, Biochemischer Gesundheitskompass und Abschlussgespräch & Ausblick bilden gemeinsam das Basispaket.",
        "Diese drei Bestandteile gehören zusammen, weil eine sinnvolle Strategie zuerst eine ausführliche Einordnung braucht, anschließend schriftlich ausgearbeitet wird und im Abschlussgespräch gemeinsam eingeordnet werden sollte.",
      ],
    },
    {
      q: "Wie läuft die Zusammenarbeit ab?",
      a: [
        "Die Zusammenarbeit beginnt mit einem kostenlosen Erstgespräch. Danach erhalten Sie einen ausführlichen Anamnesebogen.",
        "Auf dieser Grundlage findet das Analysegespräch statt. Anschließend wird Ihr Biochemischer Gesundheitskompass schriftlich ausgearbeitet. Im Abschlussgespräch besprechen wir die wichtigsten Punkte, ordnen Ihre nächsten Schritte ein und schauen, wie der weitere Weg sinnvoll gestaltet werden kann.",
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
        "Das Basispaket hat einen Gesamtumfang von 520 €.",
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
      ],
      email: "maerz.biochemie@gmail.com",
    },
    {
      heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      lines: ["Milva März", "Jurastraße 27-1", "72072 Tübingen-Derendingen"],
    },
  ],
} as const;
