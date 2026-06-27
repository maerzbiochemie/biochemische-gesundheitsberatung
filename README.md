# Milva März — Biochemische Gesundheitsberatung

Persönliche Website für Milva März (Biochemikerin B.Sc.). Editoriales, ruhiges
Design im Stil „Warm Sage & Cream“ — wissenschaftlich, klar, individuell.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-basiertes Theme in `app/globals.css`)
- **Fraunces** (Display-Serif) + **Inter** (Sans) via `next/font`
- **Resend** für den E-Mail-Versand des Kontaktformulars (mit Dev-Fallback)

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
```

Produktions-Build:

```bash
npm run build
npm run start
```

## Struktur

```
app/
  page.tsx                 Startseite
  leistungen/              Leistungen & Preise
  ueber-mich/              Über mich
  fuer-unternehmen/        B2B
  kontakt/                 Kontakt + Formular
  api/kontakt/route.ts     Formular-Endpoint (Resend / Dev-Fallback)
  globals.css              Design-Tokens & Utilities
components/                Header, Footer, Reveal, UI-Bausteine, ContactForm
content/site.ts            Sämtliche Inhalte (Deutsch) zentral gepflegt
```

## Inhalte ändern

Alle Texte liegen in `content/site.ts`. Anpassungen dort wirken automatisch auf
allen Seiten.

## Kontaktformular aktivieren

1. Account bei [resend.com](https://resend.com) anlegen, API-Key erstellen.
2. `.env.example` nach `.env.local` kopieren und Werte eintragen.
3. Absender-Domain bei Resend verifizieren und `CONTACT_FROM_EMAIL` setzen.

Ohne API-Key werden Anfragen serverseitig in der Konsole protokolliert, sodass
das Formular auch lokal ohne Setup funktioniert.

## To-do für den Livegang

- Porträtfoto auf „Über mich“ einsetzen (Platzhalter aktuell).
- E-Mail-Adresse / Domain in `content/site.ts` und `.env.local` final setzen.
- Impressum & Datenschutz ergänzen (rechtlich erforderlich in DE).
```
