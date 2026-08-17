"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { decryptState, encryptState, isCryptoAvailable, sha256Hex, type EncryptedPayload } from "./crypto";

// Client-seitiges Passwort-Gate: schützt vor zufälligem/versehentlichem Aufruf
// des Links, ist aber KEIN sicherer Zugriffsschutz (Seitenquelltext ist
// einsehbar). Für echte Zugriffskontrolle wäre serverseitige Prüfung nötig.
// Gleicher Hash wie in der bisherigen claude.ai-Artefaktversion — dasselbe
// Passwort funktioniert unverändert weiter.
const GATE_HASH = "ad5eefdb697a73657707fdf043043569a0b7bdfdc20440c5a04ca485eed47d76";
const GATE_SESSION_KEY = "anamnesebogen_gate_unlocked";
const STORE_KEY = "anamnesebogen_v1";
const STORE_TS_KEY = `${STORE_KEY}_ts`;
const EXPIRY_MS = 24 * 60 * 60 * 1000; // Selbstlöschung nach 24 Stunden

type FormState = Record<string, unknown>;
type SaveStatus = "idle" | "saving" | "saved" | "expired" | "undecryptable" | "unavailable";

interface FormContextValue {
  getVal: <T>(name: string, fallback: T) => T;
  setVal: (name: string, value: unknown) => void;
  state: FormState;
  hydrated: boolean;
  saveStatus: SaveStatus;
  lastSavedAt: Date | null;
  resetAll: () => void;
  exportJson: () => void;
  cryptoAvailable: boolean;
}

const FormDataContext = createContext<FormContextValue | null>(null);

interface GateContextValue {
  unlocked: boolean;
  error: string;
  unlock: (password: string) => Promise<void>;
  browserSupported: boolean;
}

const GateContext = createContext<GateContextValue | null>(null);

export function GateProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  // Starts optimistic (true) so the server-rendered markup matches the client's
  // first hydration pass — `isCryptoAvailable()` reads `window` and would
  // otherwise differ between the SSR pass (no window) and hydration (window
  // present), causing a hydration-mismatch error on every load.
  const [browserSupported, setBrowserSupported] = useState(true);

  useEffect(() => {
    const supported = isCryptoAvailable();
    setBrowserSupported(supported);
    if (!supported) return;
    try {
      if (sessionStorage.getItem(GATE_SESSION_KEY) === "1") setUnlocked(true);
    } catch {
      // ignore
    }
  }, []);

  const unlock = useCallback(async (password: string) => {
    const hash = await sha256Hex(password);
    if (hash === GATE_HASH) {
      try {
        sessionStorage.setItem(GATE_SESSION_KEY, "1");
      } catch {
        // ignore
      }
      setError("");
      setUnlocked(true);
    } else {
      setError("Falsches Passwort. Bitte erneut versuchen.");
    }
  }, []);

  const value = useMemo(() => ({ unlocked, error, unlock, browserSupported }), [unlocked, error, unlock, browserSupported]);
  return <GateContext.Provider value={value}>{children}</GateContext.Provider>;
}

export function useGate(): GateContextValue {
  const ctx = useContext(GateContext);
  if (!ctx) throw new Error("useGate must be used within GateProvider");
  return ctx;
}

export function FormProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FormState>({});
  const [hydrated, setHydrated] = useState(false);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const cryptoAvailable = useMemo(() => isCryptoAvailable(), []);
  const skipNextSave = useRef(true);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load + decrypt any previously stored (and not-yet-expired) state on mount.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!cryptoAvailable) {
        setSaveStatus("unavailable");
        setHydrated(true);
        return;
      }
      try {
        const savedTs = Number(localStorage.getItem(STORE_TS_KEY));
        if (savedTs && Date.now() - savedTs > EXPIRY_MS) {
          localStorage.removeItem(STORE_KEY);
          localStorage.removeItem(STORE_TS_KEY);
          if (!cancelled) setSaveStatus("expired");
        } else {
          const savedRaw = localStorage.getItem(STORE_KEY);
          if (savedRaw) {
            try {
              const parsed = JSON.parse(savedRaw) as EncryptedPayload;
              const decrypted = await decryptState(parsed);
              if (!cancelled) setState(decrypted as FormState);
            } catch {
              localStorage.removeItem(STORE_KEY);
              localStorage.removeItem(STORE_TS_KEY);
              if (!cancelled) setSaveStatus("undecryptable");
            }
          }
        }
      } catch {
        // localStorage unavailable — form still works, just without persistence.
      }
      if (!cancelled) setHydrated(true);
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Debounced encrypted autosave whenever the form state changes.
  useEffect(() => {
    if (!hydrated) return;
    if (skipNextSave.current) {
      skipNextSave.current = false;
      return;
    }
    if (!cryptoAvailable) return;
    setSaveStatus("saving");
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      encryptState(state).then((payload) => {
        try {
          localStorage.setItem(STORE_KEY, JSON.stringify(payload));
          localStorage.setItem(STORE_TS_KEY, String(Date.now()));
        } catch {
          // ignore quota errors
        }
        setSaveStatus("saved");
        setLastSavedAt(new Date());
      });
    }, 350);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [state, hydrated, cryptoAvailable]);

  const getVal = useCallback(
    <T,>(name: string, fallback: T): T => (name in state ? (state[name] as T) : fallback),
    [state]
  );

  const setVal = useCallback((name: string, value: unknown) => {
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const resetAll = useCallback(() => {
    try {
      localStorage.removeItem(STORE_KEY);
      localStorage.removeItem(STORE_TS_KEY);
    } catch {
      // ignore
    }
    skipNextSave.current = true;
    setState({});
    setSaveStatus("idle");
    setLastSavedAt(null);
  }, []);

  const exportJson = useCallback(() => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    const stamp = new Date().toISOString().slice(0, 10);
    a.download = `gesundheitsfragebogen-${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  }, [state]);

  const value = useMemo(
    () => ({ getVal, setVal, state, hydrated, saveStatus, lastSavedAt, resetAll, exportJson, cryptoAvailable }),
    [getVal, setVal, state, hydrated, saveStatus, lastSavedAt, resetAll, exportJson, cryptoAvailable]
  );

  return <FormDataContext.Provider value={value}>{children}</FormDataContext.Provider>;
}

export function useFormData(): FormContextValue {
  const ctx = useContext(FormDataContext);
  if (!ctx) throw new Error("useFormData must be used within FormProvider");
  return ctx;
}
