"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations-context";
import { Users, Target, TrendingUp, Search } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const icons = [Users, Target, TrendingUp, Search];

export function UseCasesSlide() {
  const { language } = useLanguage();
  const translations = useTranslations();
  const t = translations[language].useCases;

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl">
          {t.cases.map((useCase, i) => {
            const Icon = icons[i] || Users;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="min-h-0 flex"
              >
                <SpotlightCard spotlightColor="rgba(194, 194, 225, 0.2)" className="h-full w-full flex flex-col items-center justify-center text-center p-4 md:p-5 aspect-square">
                  <div className="w-10 h-10 rounded-full bg-white/[0.08] border border-[#C2C2E1]/20 flex items-center justify-center text-[#C2C2E1] flex-shrink-0 mb-3">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{useCase.role}</h3>
                  <p className="text-xs text-[#A0A0A0] leading-snug mt-1">{useCase.description}</p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
