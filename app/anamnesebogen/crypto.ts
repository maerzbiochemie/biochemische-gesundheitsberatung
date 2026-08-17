// Rein clientseitige Verschlüsselung der Anamnesebogen-Eingaben.
// Der AES-GCM-Schlüssel liegt nur im sessionStorage (an den offenen Tab
// gebunden, verschwindet beim Schließen). Die Formulardaten liegen
// verschlüsselt im localStorage und werden nie an einen Server gesendet.

const SESSION_KEY_STORAGE = "anamnesebogen_sesskey_v1";

export interface EncryptedPayload {
  enc: 1;
  iv: string;
  data: string;
}

function bytesToBase64(bytes: Uint8Array): string {
  let s = "";
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s);
}

function base64ToBytes(b64: string): Uint8Array {
  const s = atob(b64);
  const arr = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) arr[i] = s.charCodeAt(i);
  return arr;
}

let sessionKeyPromise: Promise<CryptoKey> | null = null;

function getSessionKey(): Promise<CryptoKey> {
  if (sessionKeyPromise) return sessionKeyPromise;
  sessionKeyPromise = (async () => {
    let raw: string | null = null;
    try {
      raw = sessionStorage.getItem(SESSION_KEY_STORAGE);
    } catch {
      // sessionStorage unavailable (private mode etc.) — key stays in-memory only.
    }
    let keyBytes: Uint8Array;
    if (raw) {
      keyBytes = base64ToBytes(raw);
    } else {
      keyBytes = crypto.getRandomValues(new Uint8Array(32));
      try {
        sessionStorage.setItem(SESSION_KEY_STORAGE, bytesToBase64(keyBytes));
      } catch {
        // ignore
      }
    }
    return crypto.subtle.importKey("raw", keyBytes, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
  })();
  return sessionKeyPromise;
}

export function isCryptoAvailable(): boolean {
  return typeof window !== "undefined" && !!window.crypto?.subtle;
}

export async function sha256Hex(input: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function encryptState(obj: unknown): Promise<EncryptedPayload> {
  const key = await getSessionKey();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = new TextEncoder().encode(JSON.stringify(obj));
  const cipher = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, data);
  return { enc: 1, iv: bytesToBase64(iv), data: bytesToBase64(new Uint8Array(cipher)) };
}

export async function decryptState(raw: EncryptedPayload): Promise<Record<string, unknown>> {
  const key = await getSessionKey();
  const iv = base64ToBytes(raw.iv);
  const cipherBytes = base64ToBytes(raw.data);
  const plainBuf = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, cipherBytes);
  return JSON.parse(new TextDecoder().decode(plainBuf));
}
