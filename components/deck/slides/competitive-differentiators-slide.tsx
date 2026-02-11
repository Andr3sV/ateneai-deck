"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { Check } from "lucide-react";

export function CompetitiveDifferentiatorsSlide() {
  const { language } = useLanguage();
  const t = translations[language].competitiveDifferentiators;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      <div className="w-[80%] mx-auto text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-8 md:mb-12"
        >
          {t.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-3xl">
          {t.points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-xl border border-[#C2C2E1]/30 bg-white/5 p-5 backdrop-blur-sm flex items-start gap-3 text-left"
            >
              <Check className="h-5 w-5 text-[#C2C2E1] flex-shrink-0 mt-0.5" />
              <p className="text-base md:text-lg text-[#E0E0E0] leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
