"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { Users, Target, TrendingUp, Search } from "lucide-react";

const icons = [Users, Target, TrendingUp, Search];

export function UseCasesSlide() {
  const { language } = useLanguage();
  const t = translations[language].useCases;

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
          {t.cases.map((useCase, i) => {
            const Icon = icons[i] || Users;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="p-6 border border-white/10 rounded-lg flex items-center gap-4 bg-[#0a0a0a] hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{useCase.role}</h3>
                  <p className="text-xs text-slate-500">{useCase.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
