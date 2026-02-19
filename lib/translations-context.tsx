"use client";

import React, { createContext, useContext, useMemo } from "react";
import { translations } from "@/lib/translations";

export type TranslationsShape = typeof translations;

const TranslationsOverrideContext = createContext<TranslationsShape | null>(null);

/**
 * When provided, slide components use this object instead of global `translations`.
 * Used by Mango ABM so /en/b/mango and /es/b/mango use mango-translations.
 * Accepts a subset of translations (e.g. mangoTranslations) for flexibility.
 */
export function TranslationsOverrideProvider({
  children,
  translations: override,
}: {
  children: React.ReactNode;
  translations: TranslationsShape | { en: Record<string, unknown>; es: Record<string, unknown> };
}) {
  const value = useMemo(() => override as TranslationsShape, [override]);
  return (
    <TranslationsOverrideContext.Provider value={value}>
      {children}
    </TranslationsOverrideContext.Provider>
  );
}

/**
 * Returns override translations when inside TranslationsOverrideProvider, otherwise global translations.
 */
export function useTranslations(): TranslationsShape {
  const override = useContext(TranslationsOverrideContext);
  return override ?? translations;
}
