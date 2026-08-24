// Inhalte des Online-Anamnesebogens (Gesundheits- und Ernährungsfragebogen).
// Quelle der Wahrheit: BIO-15-Anhang "Anamnesebogen_Online_standalone.html" (Version 2.3).
// Inhaltliche Änderungen (Text/Felder) laufen über BIO-15, nicht hier — siehe BIO-87.

import { site } from "@/content/site";

export type FieldType =
  | "text"
  | "textarea"
  | "check"
  | "radiotext"
  | "scale"
  | "table"
  | "note";

interface FieldBase {
  name: string;
  label: string;
  hint?: string;
}

export interface TextField extends FieldBase {
  type: "text";
  placeholder?: string;
}

export interface TextareaField extends FieldBase {
  type: "textarea";
  lines?: number;
}

export interface CheckField extends FieldBase {
  type: "check";
  cols: 1 | 2 | 3;
  options: string[];
  other?: boolean;
}

export interface RadioTextField extends FieldBase {
  type: "radiotext";
  options?: string[];
  withText?: boolean;
  textPlaceholder?: string;
}

export interface ScaleField extends FieldBase {
  type: "scale";
  lowLabel?: string;
  highLabel?: string;
}

export interface TableField extends FieldBase {
  type: "table";
  columns: string[];
  rows?: number;
}

export interface NoteField {
  type: "note";
  tone: "info" | "warn";
  title: string;
  text: string;
}

export type Field =
  | TextField
  | TextareaField
  | CheckField
  | RadioTextField
  | ScaleField
  | TableField
  | NoteField;

export interface Section {
  n: number;
  title: string;
  bodymap?: boolean;
  fields: Field[];
}

export const coverFields: { label: string; name: string }[] = [
  { label: "Name", name: "cover_name" },
  { label: "Geburtsdatum", name: "cover_geb" },
  { label: "Datum des Ausfüllens", name: "cover_datum" },
  { label: "Termin am", name: "cover_termin" },
  { label: "Telefon", name: "cover_tel" },
  { label: "E-Mail", name: "cover_email" },
];

export const bodyMapCategories = [
  { key: "schmerz", label: "Schmerz", sym: "X", color: "#B5652F" },
  { key: "verspannung", label: "Verspannung", sym: "O", color: "#3F5744" },
  { key: "kribbeln", label: "Kribbeln / Taubheit", sym: "~", color: "#A67C2E" },
  { key: "sonstiges", label: "Sonstiges", sym: "•", color: "#6B6560" },
] as const;

export type BodyMapCategoryKey = (typeof bodyMapCategories)[number]["key"];

export const sections: Section[] = [
  {
    n: 1,
    title: "Angaben zur Person",
    fields: [
      { type: "text", label: "Vor- und Nachname", name: "s1_name" },
      { type: "text", label: "Geburtsdatum / Alter", name: "s1_geb" },
      { type: "text", label: "Adresse", name: "s1_adresse" },
      { type: "text", label: "Telefonnummer", name: "s1_tel" },
      { type: "text", label: "E-Mail-Adresse", name: "s1_email" },
      { type: "text", label: "Beruf / Tätigkeit", name: "s1_beruf" },
      { type: "text", label: "Körpergröße", name: "s1_groesse" },
      { type: "text", label: "Aktuelles Gewicht", name: "s1_gewicht" },
      {
        type: "check",
        label: "Gewichtsverlauf der letzten 12 Monate",
        name: "s1_gewichtsverlauf",
        cols: 3,
        options: ["stabil", "Zunahme", "Abnahme"],
      },
      { type: "text", label: "Veränderung (falls zutreffend)", name: "s1_gewicht_veraenderung" },
      { type: "text", label: "Hausarzt / behandelnde Ärzte / Therapeuten", name: "s1_hausarzt" },
      { type: "text", label: "Notfallkontakt, falls gewünscht", name: "s1_notfall" },
    ],
  },
  {
    n: 2,
    title: "Hauptanliegen und Erwartungen",
    fields: [
      {
        type: "textarea",
        label: "Was ist der Hauptgrund für Ihre Beratung? Bitte beschreiben Sie Ihr Anliegen in eigenen Worten.",
        name: "s2_hauptgrund",
        lines: 4,
      },
      {
        type: "table",
        label: "Welche drei Themen sind aktuell am wichtigsten für Sie?",
        name: "s2_top3",
        columns: ["#", "Thema"],
        rows: 3,
      },
      {
        type: "check",
        label: "Was möchten Sie durch die Zusammenarbeit erreichen?",
        name: "s2_ziele",
        cols: 2,
        other: true,
        options: [
          "mehr Energie",
          "bessere Verdauung",
          "weniger Beschwerden",
          "Gewichtsregulation",
          "hormonelle Balance",
          "bessere Regeneration",
          "bessere Leistungsfähigkeit",
          "weniger Entzündung oder Schmerzen",
          "Hautbild verbessern",
          "Schlaf verbessern",
          "Zyklus/PMS verbessern",
          "Laborwerte verstehen",
          "Ernährung strukturieren",
          "alltagstauglichen Plan",
          "mehr Sicherheit im Umgang mit Symptomen",
        ],
      },
      {
        type: "check",
        label: "Seit wann besteht Ihr Hauptproblem?",
        name: "s2_seitwann",
        cols: 2,
        options: ["Tage", "Wochen", "Monate", "Jahre"],
      },
      { type: "text", label: "Genauer Beginn", name: "s2_beginn_genauer" },
      { type: "scale", label: "Wie stark belastet es Sie aktuell?", name: "s2_belastung_skala" },
    ],
  },
  {
    n: 3,
    title: "Aktuelle Beschwerden und Symptome",
    bodymap: true,
    fields: [
      {
        type: "note",
        tone: "info",
        title: "Ausfüllhilfe",
        text: "Bitte nennen Sie Ihre wichtigsten Beschwerden möglichst konkret: Seit wann? Wie häufig? Wie stark? Was verbessert oder verschlechtert die Beschwerden? Treten sie in Zusammenhang mit Essen, Stress, Zyklus, Schlaf, Belastung oder bestimmten Situationen auf?",
      },
      {
        type: "table",
        label: "Symptome im Überblick",
        name: "s3_symptome",
        columns: ["Symptom", "Seit wann?", "Häufigkeit", "Stärke 0–10", "Auslöser / Muster", "Besser durch", "Schlechter durch"],
        rows: 5,
      },
      {
        type: "textarea",
        label: "Gibt es Begleitsymptome oder Zusammenhänge, die Ihnen auffallen?",
        name: "s3_begleit",
        lines: 3,
      },
      {
        type: "check",
        label: "Allgemeine Symptome",
        name: "s3_allgemein",
        cols: 3,
        other: true,
        options: [
          "Müdigkeit",
          "Erschöpfung",
          "Brain Fog",
          "Konzentrationsprobleme",
          "Schwindel",
          "Kopfschmerzen",
          "Migräne",
          "Herzklopfen",
          "Atembeschwerden",
          "Wassereinlagerungen",
          "Nachtschweiß",
          "Fiebergefühl",
          "Frieren",
          "Hitzegefühl",
          "Heißhunger",
          "Appetitlosigkeit",
          "ungewollte Gewichtsveränderung",
        ],
      },
    ],
  },
  {
    n: 4,
    title: "Zeitlicher Verlauf und mögliche Auslöser",
    fields: [
      {
        type: "check",
        label: "Wie haben sich Ihre Beschwerden entwickelt?",
        name: "s4_verlauf",
        cols: 3,
        options: [
          "plötzlich begonnen",
          "schleichend begonnen",
          "seit Beginn ähnlich",
          "zunehmend stärker",
          "in Schüben",
          "wechselnd",
          "zyklusabhängig",
          "stressabhängig",
          "ernährungsabhängig",
          "belastungsabhängig",
          "jahreszeitlich",
          "unklar",
        ],
      },
      {
        type: "check",
        label: "Mögliche Auslöser oder relevante Ereignisse vor Beginn/Verschlechterung",
        name: "s4_ausloeser",
        cols: 2,
        other: true,
        options: [
          "Infekt",
          "Antibiotika",
          "neues Medikament",
          "Hormonpräparat / Pille",
          "Impfung",
          "Operation / Narkose",
          "Unfall / Verletzung",
          "Schwangerschaft / Geburt",
          "starke Stressphase",
          "Trauer / emotionale Belastung",
          "Umzug / Arbeitsplatzwechsel",
          "Diät / Ernährungsumstellung",
          "Auslandsreise",
          "Schimmel / Umweltbelastung",
          "Zahnbehandlung",
        ],
      },
      {
        type: "textarea",
        label: "Bitte beschreiben Sie den zeitlichen Verlauf genauer. Gab es bessere oder schlechtere Phasen? Was war in diesen Phasen anders?",
        name: "s4_verlauf_text",
        lines: 4,
      },
    ],
  },
  {
    n: 5,
    title: "Medizinische Vorgeschichte",
    fields: [
      {
        type: "table",
        label: "Erkrankungen / Diagnosen",
        name: "s5_diagnosen",
        columns: ["Erkrankung / Diagnose", "Seit wann?", "Behandlung / Medikamente", "Aktueller Status"],
        rows: 4,
      },
      {
        type: "table",
        label: "Operationen / Krankenhausaufenthalte",
        name: "s5_ops",
        columns: ["Operation / Krankenhausaufenthalt", "Jahr", "Grund", "Auffälligkeiten danach?"],
        rows: 3,
      },
      {
        type: "textarea",
        label: "Unfälle, Verletzungen, Narben, chronische Schmerzen oder länger bestehende körperliche Einschränkungen",
        name: "s5_unfaelle",
        lines: 3,
      },
      {
        type: "check",
        label: "Besondere Infekte oder wiederkehrende Krankheitsphasen",
        name: "s5_infekte",
        cols: 2,
        other: true,
        options: [
          "häufige Infekte",
          "lange Erholung nach Infekten",
          "EBV / Pfeiffersches Drüsenfieber",
          "Corona",
          "Borreliose",
          "Mandelentzündungen",
          "Blasenentzündungen",
          "Magen-Darm-Infekte",
          "Nebenhöhlenentzündungen",
          "Pilzinfektionen",
          "Parasiten / Auslandsinfekte",
        ],
      },
      {
        type: "check",
        label: "Bekannte Autoimmun- oder chronisch-entzündliche Erkrankungen",
        name: "s5_autoimmun",
        cols: 2,
        other: true,
        options: [
          "Hashimoto / Schilddrüse",
          "Morbus Basedow",
          "Zöliakie",
          "Colitis ulcerosa",
          "Morbus Crohn",
          "Psoriasis",
          "Rheuma / Gelenkentzündungen",
          "Diabetes Typ 1",
          "Asthma / Allergien",
          "Endometriose",
          "Lupus",
          "Neurodermitis",
          "Fibromyalgie",
          "Multiple Sklerose",
        ],
      },
      {
        type: "check",
        label: "Bekannte Volkskrankheiten",
        name: "s5_volkskrankheiten",
        cols: 2,
        other: true,
        options: [
          "Bluthochdruck (Hypertonie)",
          "Diabetes Typ 2",
          "Angina Pectoris / koronare Herzkrankheit",
          "Gicht",
          "Herzinfarkt / Schlaganfall",
          "Fettstoffwechselstörung (hohes Cholesterin)",
          "Osteoporose",
          "COPD / chronische Bronchitis",
        ],
      },
      {
        type: "table",
        label: "Erkrankungen in der Familie (genetische Vorgeschichte)",
        name: "s5_familienanamnese",
        hint: "Freiwillige Angabe, hilft bei der Einschätzung erblicher Veranlagungen.",
        columns: ["Erkrankung", "Verwandtschaftsgrad (z. B. Mutter, Vater, Geschwister)", "Alter bei Diagnose (falls bekannt)"],
        rows: 3,
      },
      {
        type: "check",
        label: "Tumor- / Krebserkrankung",
        name: "s5_tumor",
        hint: "Freiwillige Angabe als Hintergrundinformation für das Beratungsgespräch – keine Diagnosestellung.",
        cols: 1,
        other: true,
        options: [
          "keine bekannt",
          "eigene Vorgeschichte (aktuell oder früher)",
          "in der Familie bekannt (z. B. Eltern, Geschwister)",
        ],
      },
      { type: "textarea", label: "Sonstiges", name: "s5_sonstiges", lines: 2 },
    ],
  },
  {
    n: 6,
    title: "Medikamente, Nahrungsergänzung, Allergien und Unverträglichkeiten",
    fields: [
      {
        type: "table",
        label: "Medikamente",
        name: "s6_medikamente",
        columns: ["Medikament", "Dosierung", "Seit wann?", "Grund", "Wirkung / Nebenwirkung"],
        rows: 4,
      },
      {
        type: "table",
        label: "Nahrungsergänzungsmittel",
        name: "s6_nem",
        columns: ["Nahrungsergänzungsmittel", "Dosierung", "Seit wann?", "Grund", "Verträglichkeit"],
        rows: 4,
      },
      {
        type: "radiotext",
        label: "Antibiotika in den letzten 5 Jahren",
        name: "s6_antibiotika",
        options: ["nein", "ja"],
        textPlaceholder: "wann und warum",
      },
      {
        type: "radiotext",
        label: "Cortison / Immunsuppressiva / Biologika",
        name: "s6_cortison",
        options: ["nein", "ja"],
        textPlaceholder: "welche",
      },
      {
        type: "check",
        label: "Hormonpräparate aktuell oder früher",
        name: "s6_hormone",
        cols: 2,
        other: true,
        options: [
          "Pille",
          "Hormonspirale",
          "Progesteron",
          "Östrogene",
          "Schilddrüsenhormone",
          "Cortison",
          "Testosteron / DHEA",
          "Kinderwunschbehandlung",
          "keine",
        ],
      },
      {
        type: "check",
        label: "Allergien",
        name: "s6_allergien",
        cols: 3,
        other: true,
        options: [
          "keine bekannt",
          "Medikamente",
          "Pollen",
          "Hausstaub",
          "Tiere",
          "Nahrungsmittel",
          "Kontaktallergien",
          "Insektengift",
          "Latex",
          "Metalle",
          "Kosmetik",
        ],
      },
      {
        type: "check",
        label: "Unverträglichkeiten oder Sensitivitäten",
        name: "s6_unvertraeglichkeiten",
        cols: 3,
        other: true,
        options: [
          "Gluten",
          "Laktose",
          "Fruktose",
          "Histamin",
          "Sorbit",
          "FODMAPs",
          "Milchprodukte",
          "Eier",
          "Nüsse",
          "Hülsenfrüchte",
          "Alkohol",
          "Kaffee",
          "Zucker",
          "Fettiges Essen",
          "Rohkost",
        ],
      },
      {
        type: "textarea",
        label: "Bitte beschreiben Sie bekannte Reaktionen auf Lebensmittel, Medikamente oder Supplemente genauer.",
        name: "s6_reaktionen",
        lines: 3,
      },
    ],
  },
  {
    n: 7,
    title: "Verdauung, Darm und Bauchbeschwerden",
    fields: [
      {
        type: "check",
        label: "Stuhlgang-Häufigkeit",
        name: "s7_haeufigkeit",
        cols: 3,
        options: ["mehrmals täglich", "täglich", "alle 2 Tage", "seltener", "wechselnd"],
      },
      {
        type: "check",
        label: "Stuhlkonsistenz",
        name: "s7_konsistenz",
        cols: 3,
        options: ["hart", "geformt", "weich", "breiig", "flüssig", "wechselnd"],
      },
      {
        type: "check",
        label: "Auffälligkeiten und Beschwerden",
        name: "s7_auffaelligkeiten",
        cols: 2,
        other: true,
        options: [
          "Blähbauch",
          "Blähungen",
          "Bauchschmerzen",
          "Krämpfe",
          "Übelkeit",
          "Reflux / Sodbrennen",
          "Völlegefühl",
          "frühe Sättigung",
          "Durchfall",
          "Verstopfung",
          "Schleim im Stuhl",
          "Blut im Stuhl",
          "schwarzer Stuhl",
          "fettig / glänzend",
          "auffälliger Geruch",
          "unverdaute Nahrung",
          "Afterjucken",
          "Hämorrhoiden",
          "Nahrungsmittelreaktionen",
        ],
      },
      {
        type: "check",
        label: "Wann treten Beschwerden besonders auf?",
        name: "s7_wann",
        cols: 3,
        other: true,
        options: [
          "direkt nach dem Essen",
          "1–3 Stunden nach dem Essen",
          "abends",
          "nachts",
          "morgens",
          "zyklusabhängig",
          "stressabhängig",
          "nach bestimmten Lebensmitteln",
          "nach Sport",
          "nach Alkohol",
          "nach Kaffee",
          "unklar",
        ],
      },
      {
        type: "textarea",
        label: "Welche Lebensmittel, Situationen oder Tageszeiten stehen aus Ihrer Sicht mit den Beschwerden in Verbindung?",
        name: "s7_zusammenhang",
        lines: 3,
      },
      { type: "scale", label: "Verträglichkeit: Milchprodukte (0 = gar nicht, 10 = sehr gut)", name: "s7_v_milch" },
      { type: "scale", label: "Verträglichkeit: Gluten / Getreide", name: "s7_v_gluten" },
      { type: "scale", label: "Verträglichkeit: Obst", name: "s7_v_obst" },
      { type: "scale", label: "Verträglichkeit: Rohkost", name: "s7_v_rohkost" },
      { type: "scale", label: "Verträglichkeit: Hülsenfrüchte", name: "s7_v_huelsen" },
      { type: "scale", label: "Verträglichkeit: Fettige Speisen", name: "s7_v_fett" },
      { type: "scale", label: "Verträglichkeit: Kaffee", name: "s7_v_kaffee" },
      { type: "scale", label: "Verträglichkeit: Alkohol", name: "s7_v_alkohol" },
    ],
  },
  {
    n: 8,
    title: "Ernährung und Trinkverhalten",
    fields: [
      {
        type: "check",
        label: "Aktuelle Ernährungsform",
        name: "s8_form",
        cols: 2,
        other: true,
        options: [
          "Mischkost",
          "vegetarisch",
          "vegan",
          "glutenfrei",
          "laktosefrei",
          "histaminarm",
          "low carb",
          "ketogen",
          "kalorienreduziert",
          "Intervallfasten",
          "intuitiv",
          "keine bestimmte Ernährungsform",
        ],
      },
      {
        type: "textarea",
        label: "Typischer Ernährungstag: Frühstück, Mittagessen, Abendessen, Snacks, Getränke",
        name: "s8_typischer_tag",
        lines: 4,
      },
      { type: "text", label: "Wasser / ungesüßte Getränke pro Tag", name: "s8_wasser" },
      { type: "text", label: "Kaffee / koffeinhaltige Getränke", name: "s8_kaffee" },
      { type: "text", label: "Alkohol: Häufigkeit und Menge", name: "s8_alkohol" },
      { type: "text", label: "Süßigkeiten / Snacks / stark verarbeitete Lebensmittel", name: "s8_suessigkeiten" },
      { type: "text", label: "Essrhythmus / Mahlzeitenabstände", name: "s8_essrhythmus" },
      {
        type: "note",
        tone: "info",
        title: "Genussmittel und Substanzen",
        text: "Alkohol ist oben bereits erfasst. Ergänzend zu Nikotin/Rauchen und allgemeinem Substanzkonsum — freiwillige Angabe, dient nur als Hintergrundinformation, keine Wertung.",
      },
      {
        type: "radiotext",
        label: "Nikotin / Rauchen",
        name: "s8_nikotin",
        options: ["nein", "gelegentlich", "regelmäßig"],
        textPlaceholder: "Menge, seit wann (z. B. Zigaretten/Tag, Vape, seit wann)",
      },
      {
        type: "radiotext",
        label: "Andere Substanzen (z. B. Cannabis, weitere Freizeitsubstanzen)",
        name: "s8_substanzen",
        options: ["nein", "ja"],
        textPlaceholder: "welche, wie häufig (freiwillige Angabe)",
      },
      {
        type: "text",
        label: "Praktische Rahmenbedingungen für Ernährungsempfehlungen (z. B. Budget, Kochzeit, Verfügbarkeit)",
        name: "s8_rahmenbedingungen",
        hint: "Hilft, Empfehlungen alltagstauglich zu gestalten.",
      },
      {
        type: "textarea",
        label: "Gibt es Essverhalten, Diäten oder Einschränkungen, die für die Beratung wichtig sind?",
        name: "s8_diaeten",
        lines: 3,
      },
    ],
  },
  {
    n: 9,
    title: "Energie, Schlaf, Stress und Nervensystem",
    fields: [
      { type: "scale", label: "Energielevel tagsüber", name: "s9_energie" },
      { type: "scale", label: "Aktuelle Stressbelastung", name: "s9_stress" },
      { type: "scale", label: "Schlafqualität", name: "s9_schlafqualitaet" },
      { type: "text", label: "Schlafdauer durchschnittlich", name: "s9_schlafdauer" },
      { type: "text", label: "Einschlafzeit / Aufwachzeit", name: "s9_zeiten" },
      {
        type: "text",
        label: "Bildschirmzeit am Abend vor dem Schlafengehen",
        name: "s9_bildschirmzeit_abends",
        hint: "z. B. Handy/PC/TV in der letzten Stunde vor dem Einschlafen — relevant für Melatonin und Schlafqualität.",
      },
      {
        type: "check",
        label: "Wann ist Ihre Energie am niedrigsten?",
        name: "s9_energie_tief",
        cols: 2,
        options: [
          "morgens",
          "vormittags",
          "nach dem Essen",
          "nachmittags",
          "abends",
          "wechselnd",
          "nach Sport",
          "nach Stress",
          "zyklusabhängig",
          "unklar",
        ],
      },
      {
        type: "check",
        label: "Müdigkeit und Leistungsfähigkeit",
        name: "s9_muedigkeit",
        cols: 2,
        other: true,
        options: [
          "bleierne Müdigkeit",
          "Einschlafen tagsüber",
          "Brain Fog",
          "Konzentrationsprobleme",
          "Antriebslosigkeit",
          "körperliche Schwäche",
          "Leistungseinbruch beim Sport",
          "Erschöpfung nach Belastung",
          "lange Regenerationszeit",
        ],
      },
      {
        type: "check",
        label: "Schlafprobleme",
        name: "s9_schlafprobleme",
        cols: 2,
        other: true,
        options: [
          "Einschlafprobleme",
          "Durchschlafprobleme",
          "frühes Erwachen",
          "Nachtschweiß",
          "Herzklopfen nachts",
          "nächtliches Wasserlassen",
          "unruhige Beine",
          "Zähneknirschen",
          "nicht erholt trotz Schlaf",
          "Albträume",
          "Schnarchen",
        ],
      },
      {
        type: "check",
        label: "Stressquellen und Nervensystem",
        name: "s9_stressquellen",
        cols: 2,
        other: true,
        options: [
          "Arbeit",
          "Familie",
          "Beziehung",
          "finanzielle Themen",
          "Gesundheitssorgen",
          "Pflege / Verantwortung",
          "Prüfung / Studium",
          "Schlafmangel",
          "emotionale Belastung",
          "innere Unruhe",
          "Reizbarkeit",
          "Angst / Panik",
          "depressive Verstimmung",
          "Stimmungsschwankungen",
          "Überforderung",
          "Geräusch- oder Lichtempfindlichkeit",
          "starkes Grübeln",
        ],
      },
      { type: "textarea", label: "Was tut Ihnen spürbar gut? Was raubt Ihnen Energie?", name: "s9_gut_schlecht", lines: 3 },
    ],
  },
  {
    n: 10,
    title: "Hormone, Zyklus, Schilddrüse und Stoffwechsel",
    fields: [
      {
        type: "note",
        tone: "info",
        title: "Hinweis",
        text: "Bitte beantworten Sie nur die Fragen, die für Sie relevant sind. Angaben zu Zyklus, Schwangerschaft oder Verhütung können frei gelassen werden, wenn sie nicht zutreffen oder Sie sie nicht angeben möchten.",
      },
      { type: "text", label: "Zykluslänge", name: "s10_zykluslaenge" },
      {
        type: "check",
        label: "Regelmäßigkeit",
        name: "s10_regelmaessigkeit",
        cols: 3,
        options: ["regelmäßig", "unregelmäßig", "nicht beurteilbar"],
      },
      { type: "text", label: "Dauer der Blutung", name: "s10_dauer" },
      {
        type: "check",
        label: "Stärke der Blutung",
        name: "s10_staerke",
        cols: 3,
        options: ["schwach", "mittel", "stark", "sehr stark"],
      },
      { type: "radiotext", label: "Regelschmerzen", name: "s10_regelschmerzen", options: ["nein", "ja"], textPlaceholder: "Stärke 0–10" },
      { type: "text", label: "Datum der letzten Periode", name: "s10_letzte_periode" },
      { type: "text", label: "Menopause / Perimenopause / Postmenopause", name: "s10_menopause" },
      {
        type: "check",
        label: "PMS / Zyklusbeschwerden / Menopause",
        name: "s10_pms",
        cols: 2,
        other: true,
        options: [
          "Brustspannen",
          "Wassereinlagerungen",
          "Stimmungsschwankungen",
          "Reizbarkeit",
          "depressive Verstimmung",
          "Heißhunger",
          "Migräne / Kopfschmerzen",
          "Schlafprobleme",
          "Akne",
          "Unterleibsschmerzen",
          "starke Blutung",
          "Zwischenblutungen",
          "Schmierblutungen",
          "Zyklusabhängige Verdauungsbeschwerden",
        ],
      },
      {
        type: "check",
        label: "Verhütung aktuell oder früher",
        name: "s10_verhuetung",
        cols: 3,
        other: true,
        options: ["keine", "Pille aktuell", "Pille früher", "Hormonspirale", "Kupferspirale"],
      },
      {
        type: "textarea",
        label: "Schwangerschaften / Geburten / Fehlgeburten / Abbrüche, falls relevant",
        name: "s10_schwangerschaften",
        lines: 2,
      },
      {
        type: "check",
        label: "Schilddrüse und Stoffwechsel",
        name: "s10_schilddruese",
        cols: 2,
        options: [
          "keine bekannte Schilddrüsenerkrankung",
          "Hashimoto",
          "Unterfunktion",
          "Überfunktion",
          "Knoten",
          "Operation",
          "Schilddrüsenmedikamente",
          "unklare Werte",
          "Frieren",
          "kalte Hände/Füße",
          "Haarausfall",
          "trockene Haut",
          "Gewichtszunahme trotz wenig Essen",
          "ungewollte Gewichtsabnahme",
          "Herzrasen",
          "Zittern",
          "Schwitzen",
          "Wassereinlagerungen",
          "niedriger Blutdruck",
          "Schwindel beim Aufstehen",
        ],
      },
      { type: "textarea", label: "Weitere hormonelle oder stoffwechselbezogene Beobachtungen", name: "s10_weitere", lines: 3 },
    ],
  },
  {
    n: 11,
    title: "Haut, Schleimhäute, Immunsystem und Entzündung",
    fields: [
      {
        type: "check",
        label: "Haut",
        name: "s11_haut",
        cols: 3,
        other: true,
        options: [
          "Akne",
          "Rosazea",
          "Ekzeme",
          "Neurodermitis",
          "Psoriasis",
          "Juckreiz",
          "Quaddeln / Nesselsucht",
          "trockene Haut",
          "schlechte Wundheilung",
          "Hämatomneigung",
          "Hautrötungen",
          "Pigmentveränderungen",
          "Haarausfall",
          "brüchige Nägel",
        ],
      },
      {
        type: "check",
        label: "Schleimhäute",
        name: "s11_schleimhaeute",
        cols: 2,
        other: true,
        options: [
          "trockene Augen",
          "trockener Mund",
          "Aphthen",
          "Zahnfleischbluten",
          "belegte Zunge",
          "wiederkehrende Halsschmerzen",
          "Nebenhöhlenprobleme",
          "wiederkehrende Scheideninfektionen",
          "wiederkehrende Blasenentzündungen",
          "Mundgeruch",
        ],
      },
      {
        type: "check",
        label: "Immunsystem / Entzündungszeichen",
        name: "s11_immun",
        cols: 2,
        other: true,
        options: [
          "häufig krank",
          "lange Erholungszeit nach Infekten",
          "chronisch erhöhte Entzündungswerte",
          "Allergien",
          "Asthma",
          "Autoimmunerkrankung",
          "geschwollene Lymphknoten",
          "Fieber / subfebrile Temperaturen",
          "Nachtschweiß",
          "Gelenkschmerzen",
          "Muskelschmerzen",
        ],
      },
      {
        type: "textarea",
        label: "Gibt es bekannte Laborauffälligkeiten oder Diagnosen in diesem Bereich?",
        name: "s11_labor",
        lines: 3,
      },
    ],
  },
  {
    n: 12,
    title: "Bewegung, Schmerzen und Regeneration",
    fields: [
      {
        type: "check",
        label: "Bewegung aktuell",
        name: "s12_bewegung",
        cols: 2,
        other: true,
        options: [
          "kaum Bewegung",
          "Spaziergänge",
          "Krafttraining",
          "Ausdauertraining",
          "Yoga / Pilates",
          "Vereinssport",
          "körperliche Arbeit",
          "Reha / Physiotherapie",
        ],
      },
      { type: "text", label: "Trainingshäufigkeit pro Woche", name: "s12_haeufigkeit" },
      { type: "text", label: "Schritte / Alltagsbewegung", name: "s12_schritte" },
      {
        type: "check",
        label: "Regeneration nach Sport",
        name: "s12_regeneration",
        cols: 3,
        options: ["gut", "mittel", "schlecht", "sehr wechselnd"],
      },
      {
        type: "check",
        label: "Schmerzen oder Beschwerden am Bewegungsapparat",
        name: "s12_schmerzen",
        cols: 3,
        other: true,
        options: [
          "Nacken",
          "Rücken",
          "Schulter",
          "Ellenbogen",
          "Handgelenk",
          "Kiefer",
          "Kopfschmerzen / Migräne",
          "Hüfte",
          "Knie",
          "Fuß",
          "Gelenkschmerzen",
          "Muskelschmerzen",
          "Sehnenprobleme",
          "Taubheit / Kribbeln",
          "Schwächegefühl",
        ],
      },
      {
        type: "table",
        label: "Schmerzen im Detail",
        name: "s12_schmerz_tabelle",
        columns: ["Schmerz / Bereich", "Seit wann?", "Stärke 0–10", "Auslöser", "Besser durch", "Schlechter durch"],
        rows: 3,
      },
      {
        type: "textarea",
        label: "Gab es Verletzungen, Operationen, Narben oder Diagnosen, die mit Bewegung/Schmerzen zusammenhängen?",
        name: "s12_verletzungen",
        lines: 3,
      },
    ],
  },
  {
    n: 13,
    title: "Alltag, Lebensstil und Ressourcen",
    fields: [
      {
        type: "check",
        label: "Arbeitsalltag",
        name: "s13_arbeitsalltag",
        cols: 2,
        other: true,
        options: [
          "überwiegend sitzend",
          "überwiegend stehend",
          "körperlich aktiv",
          "Schichtarbeit",
          "viel Bildschirmzeit",
          "viel Reisen",
          "hoher mentaler Druck",
          "unregelmäßige Pausen",
          "flexibel",
        ],
      },
      { type: "text", label: "Übliche Aufstehzeit", name: "s13_aufstehzeit" },
      { type: "text", label: "Übliche Schlafenszeit", name: "s13_schlafenszeit" },
      { type: "text", label: "Übliche Essenszeiten", name: "s13_essenszeiten" },
      { type: "text", label: "Pausen im Alltag", name: "s13_pausen" },
      { type: "textarea", label: "Welche Belastungen prägen Ihren Alltag aktuell?", name: "s13_belastungen", lines: 3 },
      {
        type: "textarea",
        label: "Welche Ressourcen, Routinen oder unterstützenden Personen helfen Ihnen aktuell?",
        name: "s13_ressourcen",
        lines: 3,
      },
      { type: "textarea", label: "Was lässt sich realistisch in Ihrem Alltag verändern?", name: "s13_veraenderung", lines: 3 },
    ],
  },
  {
    n: 14,
    title: "Laborwerte, Diagnostik und Befunde",
    fields: [
      {
        type: "check",
        label: "Welche Befunde oder Laborwerte liegen vor?",
        name: "s14_befunde",
        cols: 2,
        other: true,
        options: [
          "Blutbild",
          "Ferritin / Eisenstatus",
          "Schilddrüse",
          "Vitamin D",
          "B12 / Folat",
          "Leberwerte",
          "Nierenwerte",
          "Blutzucker / Insulin / HbA1c",
          "Lipide",
          "CRP / Entzündungswerte",
          "Hormone",
          "Stuhldiagnostik",
          "Mikrobiomtest",
          "SIBO-Atemtest",
          "Laktose-/Fruktose-Atemtest",
          "Allergietest",
          "Ultraschall",
          "MRT / CT / Röntgen",
          "Arztbrief",
        ],
      },
      { type: "textarea", label: "Welche Diagnosen wurden bereits bestätigt oder ausgeschlossen?", name: "s14_diagnosen", lines: 3 },
      {
        type: "textarea",
        label: "Welche Laborwerte oder Befunde erscheinen Ihnen besonders wichtig?",
        name: "s14_wichtig",
        lines: 3,
      },
      {
        type: "note",
        tone: "info",
        title: "Bitte mitsenden",
        text: "Wenn möglich, fügen Sie relevante Befunde als PDF oder gut lesbares Foto bei. Besonders hilfreich sind aktuelle Laborwerte, Verlaufslabore, Medikamentenpläne, Arztbriefe, Stuhl-/Atemtests und Befunde aus Facharztterminen.",
      },
    ],
  },
  {
    n: 15,
    title: "Bisherige Maßnahmen und Verträglichkeit",
    fields: [
      {
        type: "check",
        label: "Was wurde bereits ausprobiert?",
        name: "s15_massnahmen",
        cols: 2,
        other: true,
        options: [
          "Ernährungsumstellung",
          "Supplemente",
          "Medikamente",
          "Physiotherapie",
          "Osteopathie",
          "Psychotherapie / Coaching",
          "Heilpraktiker / Naturheilkunde",
          "Fasten",
          "Darmkur",
          "Sportprogramm",
          "Schlafoptimierung",
          "Laboranalysen",
          "Stressmanagement",
          "Entspannungsverfahren",
        ],
      },
      { type: "textarea", label: "Was hat geholfen?", name: "s15_geholfen", lines: 3 },
      { type: "textarea", label: "Was hat nicht geholfen oder Beschwerden verschlechtert?", name: "s15_nicht_geholfen", lines: 3 },
      {
        type: "textarea",
        label: "Gab es Nebenwirkungen, Unverträglichkeiten oder Gründe, warum Sie Maßnahmen abgebrochen haben?",
        name: "s15_nebenwirkungen",
        lines: 3,
      },
    ],
  },
  {
    n: 16,
    title: "Ziele, Prioritäten und Zusammenarbeit",
    fields: [
      { type: "textarea", label: "Was erwarten Sie sich von der Beratung?", name: "s16_erwartung", lines: 3 },
      {
        type: "check",
        label: "Wie viel Zeit und Energie können Sie realistisch pro Woche investieren?",
        name: "s16_zeit",
        cols: 1,
        options: [
          "wenig: bitte möglichst einfache Schritte",
          "mittel: regelmäßige Umsetzung ist möglich",
          "viel: intensive Veränderung ist gewünscht",
          "aktuell unklar / wechselnd",
        ],
      },
      {
        type: "check",
        label: "Welche Art der Begleitung passt zu Ihnen?",
        name: "s16_begleitung",
        cols: 2,
        other: true,
        options: [
          "klare Pläne",
          "viel Hintergrundwissen",
          "kleine Schritte",
          "detaillierte Analyse",
          "regelmäßige Kontrolle",
          "flexible Empfehlungen",
          "strukturiertes Protokoll",
          "alltagstaugliche Umsetzung",
        ],
      },
      {
        type: "textarea",
        label: "Was sollte unbedingt berücksichtigt werden, damit die Empfehlungen für Sie realistisch umsetzbar sind?",
        name: "s16_beruecksichtigen",
        lines: 3,
      },
      {
        type: "textarea",
        label: "Gibt es etwas, das für die Beratung wichtig ist und bisher nicht abgefragt wurde?",
        name: "s16_fehlt",
        lines: 3,
      },
    ],
  },
  {
    n: 17,
    title: "Sicherheitsabfrage und ärztliche Abklärung",
    fields: [
      {
        type: "note",
        tone: "warn",
        title: "Wichtiger Hinweis",
        text: "Dieser Bogen ersetzt keine ärztliche Abklärung und keine Notfallversorgung. Bei akuten, starken, neu auftretenden oder sich rasch verschlechternden Beschwerden wenden Sie sich bitte an den Hausarzt, den ärztlichen Bereitschaftsdienst oder in Notfällen an den Notruf.",
      },
      {
        type: "check",
        label: "Bitte kreuzen Sie an, wenn aktuell oder kürzlich eines der folgenden Symptome besteht/bestand",
        name: "s17_symptome",
        cols: 2,
        options: [
          "akute starke Schmerzen",
          "Brustschmerz / Engegefühl",
          "Atemnot",
          "Ohnmacht / Bewusstseinsstörung",
          "Blut im Stuhl oder Urin",
          "schwarzer Stuhl",
          "ungewollter starker Gewichtsverlust",
          "anhaltendes Fieber",
          "starke neurologische Symptome",
          "Suizidgedanken",
          "starke allergische Reaktion",
          "Schwangerschaft mit akuten Beschwerden",
          "keines davon",
          "ärztlich bereits abgeklärt",
        ],
      },
      {
        type: "textarea",
        label: "Falls Sie etwas angekreuzt haben: Bitte beschreiben Sie kurz, was genau vorliegt und ob bereits eine ärztliche Abklärung erfolgt ist.",
        name: "s17_beschreibung",
        lines: 3,
      },
    ],
  },
];

export const optionalProtocol = {
  columns: ["Tag / Datum", "Schlaf", "Essen / Getränke", "Stuhlgang", "Symptome 0–10", "Stress 0–10", "Bewegung / Besonderheiten"],
  rows: 7,
  name: "s19_protokoll",
};

// ---- Abschnitt 18: Einwilligung + Datenschutzerklärung (verbatim aus dem Anhang) ----

export const consentIntro = {
  heading: "Einwilligung zur Verarbeitung meiner Gesundheitsdaten",
  paragraphs: [
    "Ich willige ausdrücklich ein, dass Milva März, Biochemische Gesundheitsberatung, Jurastraße 27-1, 72072 Tübingen-Derendingen die von mir in diesem Gesundheits- und Ernährungsfragebogen angegebenen Gesundheitsdaten (u. a. Vorerkrankungen, Symptome, Medikamenteneinnahme, Laborwerte, Ernährungs- und Lebensgewohnheiten) zum Zweck der individuellen biochemischen Gesundheits- und Ernährungsberatung verarbeitet und speichert.",
    "Sofern ich im Abschnitt „Erkrankungen in der Familie“ Angaben zu Verwandten mache, willige ich zudem ein, dass diese Angaben (ohne Namen, nur Verwandtschaftsgrad, Erkrankung und Diagnosealter) ausschließlich zur Einschätzung meiner eigenen gesundheitlichen Veranlagung verarbeitet werden.",
    "Mir ist bekannt, dass:",
  ],
  bullets: [
    "die Angabe der Gesundheitsdaten freiwillig ist; ohne diese Angaben ist eine individuelle Beratung jedoch ggf. nicht oder nur eingeschränkt möglich;",
    `ich diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen kann, formlos per E-Mail an ${site.email}, ohne dass dadurch die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung berührt wird;`,
    "weitere Informationen zur Datenverarbeitung in der ausführlichen Datenschutzerklärung (siehe unten) stehen.",
  ],
};

export const consentCheckboxes: { name: string; label: string }[] = [
  { name: "s18_bestaetigung", label: "Ich bestätige, dass ich die Angaben nach bestem Wissen gemacht habe." },
  { name: "s18_verwendung", label: "Ich bin damit einverstanden, dass die Angaben zur Vorbereitung des Ersttermins verwendet werden." },
  { name: "s18_bewusst", label: "Mir ist bewusst, dass akute oder schwerwiegende Beschwerden ärztlich abgeklärt werden müssen." },
];

type LegalBlock =
  | { type: "h4"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export const privacyNoticeBlocks: LegalBlock[] = [
  { type: "h4", text: "Datenschutzerklärung — Gesundheits- und Ernährungsfragebogen" },
  { type: "p", text: "(Stand: 13.08.2026, Rechtsgrundlage: DSGVO, BDSG in der aktuell geltenden Fassung)" },
  {
    type: "p",
    text: `1. Verantwortliche — Milva März, Biochemische Gesundheitsberatung, Jurastraße 27-1, 72072 Tübingen-Derendingen, E-Mail: ${site.email}. Ein Datenschutzbeauftragter ist nicht bestellt, da bei einer Einzelunternehmerin mit dieser Betriebsgröße gesetzlich nicht erforderlich (§ 38 BDSG).`,
  },
  {
    type: "p",
    text: "2. Zweck der Verarbeitung — Erhebung und Verarbeitung Ihrer Angaben (inkl. Gesundheitsdaten) zur Vorbereitung und Durchführung einer individuellen biochemischen Gesundheits- und Ernährungsberatung sowie zur Erstellung individueller Empfehlungen.",
  },
  {
    type: "p",
    text: "3. Kategorien personenbezogener Daten — Kontaktdaten (Name, Anschrift, E-Mail, Telefon); Gesundheitsdaten i. S. v. Art. 9 DSGVO (Vorerkrankungen, Symptome, Medikamente, Laborwerte, Ernährungs- und Lebensgewohnheiten, Beschwerden) sowie ggf. anonymisierte Angaben zu Erkrankungen bei Familienangehörigen (nur Verwandtschaftsgrad, keine Namen), sofern freiwillig angegeben.",
  },
  { type: "p", text: "4. Rechtsgrundlage" },
  {
    type: "ul",
    items: [
      "Kontaktdaten: Art. 6 Abs. 1 lit. b DSGVO (Vertrag/vorvertragliche Maßnahmen zur Beratung).",
      "Gesundheitsdaten: Art. 9 Abs. 2 lit. a DSGVO — Ihre ausdrückliche, gesonderte Einwilligung. Ohne diese Einwilligung findet keine Verarbeitung Ihrer Gesundheitsdaten statt. Zusätzlich werden die Anforderungen nach § 22 Abs. 2 BDSG (technische und organisatorische Maßnahmen) beachtet.",
    ],
  },
  {
    type: "p",
    text: "5. Empfänger / Weitergabe — Eine Weitergabe Ihrer Angaben aus diesem Fragebogen an Dritte — insbesondere an Ärzt:innen oder andere Behandelnde — erfolgt nicht. Der Fragebogen und die daraus abgeleitete Beratung bleiben ausschließlich zwischen Ihnen und Milva März. Eine Weitergabe an Dritte (z. B. Laborpartner) erfolgt nur, wenn dies für die Beratung erforderlich ist und Sie hierfür gesondert eingewilligt haben.",
  },
  {
    type: "p",
    text: "Diese Seite wird über die Website biochemische-gesundheitsberatung.com ausgeliefert (Hosting: Cloudflare) — nähere Angaben dazu finden Sie in der allgemeinen Datenschutzerklärung dieser Website, Abschnitt „Hosting, Content Delivery und Server-Logfiles“. Ihre Eingaben in diesem Fragebogen selbst werden dabei nicht an den Server übertragen (siehe Ziffer 6).",
  },
  {
    type: "p",
    text: "6. Speicherdauer — Beim Ausfüllen dieses Online-Bogens: Ihre Eingaben werden ausschließlich lokal, verschlüsselt (AES-256) in Ihrem Browser zwischengespeichert, nie an einen Server übertragen und automatisch 24 Stunden nach Ihrer letzten Eingabe von selbst gelöscht; über „Zurücksetzen“ können Sie sie jederzeit sofort löschen. Erst nachdem Sie mir den ausgedruckten/exportierten Bogen zukommen lassen — per Post oder über einen von mir bereitgestellten, passwortgeschützten und zeitlich befristeten Freigabe-Link zu einem eigens dafür angelegten Ordner in meinem eigenen, verschlüsselten Cloud-Speicher (Proton Drive), gleichwertig zur postalischen Zusendung — werden Ihre Gesundheitsdaten für die Dauer des Beratungsverhältnisses und bis zu 3 Jahre danach gespeichert, sofern keine gesetzliche Aufbewahrungspflicht entgegensteht (z. B. handels-/steuerrechtliche Fristen für Rechnungsunterlagen, § 147 AO, § 257 HGB: 6–10 Jahre). Danach werden die Daten gelöscht oder anonymisiert. Für den Freigabe-Link-Weg richte ich Ihnen den Link ein (Gültigkeit z. B. 7 Tage) und teile ihn Ihnen per E-Mail mit; das zugehörige Passwort teile ich Ihnen über einen anderen Kanal mit (z. B. Telefon oder SMS). Laden Sie darüber bitte ausschließlich Ihren fertig ausgefüllten Fragebogen als PDF hoch. Ab dem Zeitpunkt, zu dem ich Ihre Datei aus diesem Ordner herunterlade und übernehme, gelten für die weitere Aufbewahrung wieder die vorstehend genannten Fristen und Löschpflichten; den Ordner samt Inhalt lösche ich spätestens nach Ablauf der Gültigkeitsdauer.",
  },
  { type: "p", text: "(Hinweis: Als nicht-ärztliche Beratung gilt hier NICHT die ärztliche 10-Jahres-Dokumentationspflicht nach § 630f BGB.)" },
  {
    type: "p",
    text: `7. Ihre Rechte — Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21) gegen die Verarbeitung. Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO), formlos per E-Mail an ${site.email}. Sie haben zudem ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde: Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW), Königstraße 10a, 70173 Stuttgart.`,
  },
  {
    type: "p",
    text: "8. Freiwilligkeit — Die Angabe Ihrer Daten ist freiwillig. Ohne bestimmte Angaben (insbesondere Gesundheitsdaten) ist eine individuelle Beratung ggf. nicht oder nur eingeschränkt möglich.",
  },
  {
    type: "p",
    text: "9. Automatisierte Entscheidungsfindung — Es findet keine automatisierte Entscheidungsfindung oder Profiling im Sinne von Art. 22 DSGVO statt.",
  },
  {
    type: "p",
    text: "10. Datensicherheit — Ihre Daten werden durch technische und organisatorische Maßnahmen (Art. 32 DSGVO) gegen unbefugten Zugriff geschützt (z. B. verschlossene Aufbewahrung physischer Bögen, Zugriffsbeschränkung, Verschlüsselung bei digitaler Speicherung).",
  },
];
