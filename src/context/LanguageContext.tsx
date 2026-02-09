"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Locale, translations } from "@/lib/translations";

type Translations = (typeof translations)[Locale];

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const t = translations[locale];
  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
