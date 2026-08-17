import type { Metadata } from "next";
import { GateProvider } from "./FormContext";
import { AnamnesebogenApp } from "./AnamnesebogenApp";

export const metadata: Metadata = {
  title: "Anamnesebogen",
  description: "Passwortgeschützter Online-Anamnesebogen zur Vorbereitung Ihres Ersttermins.",
  robots: { index: false, follow: false },
};

export default function AnamnesebogenPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] pt-16 md:pt-20 print:pt-0">
      <GateProvider>
        <AnamnesebogenApp />
      </GateProvider>
    </div>
  );
}
