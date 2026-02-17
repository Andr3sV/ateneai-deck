"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function CitationTrackingSlide() {
  const { language } = useLanguage();
  const t = translations[language].citationTracking;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-6 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      <div className="w-[75%] max-w-4xl mx-auto text-center flex flex-col items-center">
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
        
        <div className="flex flex-wrap gap-2 justify-center mb-5 w-full max-w-2xl mt-6 md:mt-8">
          {t.points.map((point, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="text-sm text-slate-300 bg-white/5 border-white/10 border rounded-full px-4 py-1.5"
            >
              {point}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative w-full max-w-4xl rounded-xl overflow-hidden border-2 border-[#C2C2E1]/50"
        >
          <div className="bg-white/5 flex items-center justify-center relative">
            <Image
              src="/citations.png"
              alt={t.imageAlt}
              width={1200}
              height={675}
              className="w-full h-full object-contain"
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
            <div className="placeholder absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
              <p className="text-[#A0A0A0] text-sm text-center">
                {t.imageAlt}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
