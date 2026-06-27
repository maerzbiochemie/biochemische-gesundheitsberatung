import { NextResponse } from "next/server";
import { Resend } from "resend";

// Edge runtime so this route also runs on Cloudflare (Pages/Workers). The Resend
// SDK is fetch-based and works on the edge; no Node-only APIs are used here.
export const runtime = "edge";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  anliegen?: string;
  message?: string;
  // Honeypot field — bots fill this, humans never see it.
  website?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Spam honeypot — silently accept so bots don't retry.
  if (data.website && data.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const anliegen = (data.anliegen ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Bitte geben Sie Ihren Namen an.";
  if (!isEmail(email)) errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  if (message.length < 10) errors.message = "Bitte beschreiben Sie Ihr Anliegen kurz.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const to = process.env.CONTACT_TO_EMAIL || "maerz.biochemie@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Website <onboarding@resend.dev>";
  const apiKey = process.env.RESEND_API_KEY;

  const subject = `Neue Anfrage über die Website${anliegen ? ` — ${anliegen}` : ""}`;
  const text = [
    `Name:     ${name}`,
    `E-Mail:   ${email}`,
    phone ? `Telefon:  ${phone}` : null,
    anliegen ? `Anliegen: ${anliegen}` : null,
    "",
    "Nachricht:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  // No API key configured (e.g. local dev) — log instead of sending so the
  // form still works end-to-end without external setup.
  if (!apiKey) {
    console.log("\n──── Neue Kontaktanfrage (Dev-Fallback, keine E-Mail gesendet) ────");
    console.log(text);
    console.log("───────────────────────────────────────────────────────────────────\n");
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Nachricht konnte nicht gesendet werden. Bitte später erneut versuchen." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail send failed:", err);
    return NextResponse.json(
      { error: "Nachricht konnte nicht gesendet werden. Bitte später erneut versuchen." },
      { status: 500 }
    );
  }
}
