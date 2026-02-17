"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { Check } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function CompetitiveDifferentiatorsSlide() {
  const { language } = useLanguage();
  const t = translations[language].competitiveDifferentiators;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      <div className="w-[80%] mx-auto text-center flex flex-col items-center">
        <div className="w-full mx-auto text-center mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2"
          >
            {t.title}
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-5xl">
          {t.cards.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="min-h-0 flex"
              >
                <SpotlightCard
                  spotlightColor="rgba(194, 194, 225, 0.2)"
                  className="h-full w-full flex flex-col items-center justify-center text-center p-4 md:p-5 rounded-xl"
                >
                  <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-[#C2C2E1]/20 flex items-center justify-center text-[#C2C2E1] flex-shrink-0 mb-2 md:mb-3">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                  <p className="text-xs md:text-sm text-[#E0E0E0] leading-relaxed">
                    {text}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
