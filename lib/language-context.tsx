"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";

export type Language = "en" | "es";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ateneai-deck-lang";

function langFromPathname(pathname: string | null): Language {
  if (!pathname) return "en";
  if (pathname.startsWith("/es")) return "es";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const urlLang = langFromPathname(pathname);

  const [language, setLanguageState] = useState<Language>(() => urlLang);

  // Sincronizar con la URL: si entras en /es/... se muestra español
  useEffect(() => {
    setLanguageState(urlLang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = urlLang === "es" ? "es" : "en";
    }
  }, [urlLang]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang === "es" ? "es" : "en";
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
