"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import type { Language } from "@/lib/language-context";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full bg-white/[0.04] border border-white/10 p-0.5 backdrop-blur-sm shadow-[0_0_24px_-4px_rgba(194,194,225,0.15)]">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#C2C2E1]/50 focus:ring-offset-1 focus:ring-offset-[#151515]"
          aria-pressed={language === code}
          aria-label={`Select ${label}`}
        >
          {language === code && (
            <motion.span
              layoutId="lang-bg"
              className="absolute inset-0.5 rounded-full bg-[#C2C2E1]/20 border border-[#C2C2E1]/30"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span
            className={`relative z-10 transition-colors duration-200 ${
              language === code ? "text-[#C2C2E1]" : "text-white/60 hover:text-white/90"
            }`}
          >
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}
