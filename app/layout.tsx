import type { Metadata } from "next";
// Fonts are self-hosted: next/font downloads the font files at build time and
// serves them from this origin. No request is made to Google Fonts / gstatic at
// runtime, so no external font provider is contacted (privacy-friendly).
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biochemische-gesundheitsberatung.com"),
  title: {
    default: "Milva März — Biochemische Gesundheitsberatung",
    template: "%s — Milva März",
  },
  description:
    "Wissenschaftlich fundierte Gesundheitsberatung für Prävention, Gesundheit und Verständnis. Biochemische Gesundheitsberatung von Milva März, Biochemikerin B.Sc.",
  keywords: [
    "Biochemische Gesundheitsberatung",
    "Gesundheitsberatung",
    "Prävention",
    "Mikronährstoffe",
    "Regeneration",
    "Milva März",
  ],
  openGraph: {
    title: "Milva März — Biochemische Gesundheitsberatung",
    description:
      "Wissenschaftlich fundierte Gesundheitsberatung für Prävention, Gesundheit und Verständnis.",
    url: "https://biochemische-gesundheitsberatung.com",
    siteName: "Milva März — Biochemische Gesundheitsberatung",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${display.variable} ${inter.variable}`}>
      <body>
        <div className="grain-overlay" aria-hidden />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
