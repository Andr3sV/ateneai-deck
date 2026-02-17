"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function CitationEvidenceSlide() {
  const { language } = useLanguage();
  const t = translations[language].citationEvidence;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      <div className="w-[80%] mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2"
        >
          {t.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm md:text-base text-[#C2C2E1]"
        >
          {t.subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full max-w-6xl rounded-xl overflow-hidden border-2 border-[#C2C2E1]/50 bg-white/5 shadow-lg"
        >
          <Image
            src="/op.png"
            alt={t.imageAlt}
            width={1200}
            height={675}
            className="w-full h-auto block"
            unoptimized
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const placeholder = target.parentElement?.querySelector('.placeholder');
              if (placeholder) {
                (placeholder as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div className="placeholder absolute inset-0 flex items-center justify-center bg-[#151515]/80" style={{ display: 'none' }}>
            <p className="text-[#A0A0A0] text-sm text-center">{t.imageAlt}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
