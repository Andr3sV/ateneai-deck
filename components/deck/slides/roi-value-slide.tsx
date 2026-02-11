"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { TrendingUp } from "lucide-react";

export function RoiValueSlide() {
  const { language } = useLanguage();
  const t = translations[language].roiValue;

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-4xl">
          {t.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-xl border border-[#C2C2E1]/30 bg-white/5 p-6 backdrop-blur-sm text-center"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C2C2E1]/20">
                <TrendingUp className="h-6 w-6 text-[#C2C2E1]" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                {metric.value}
              </p>
              <p className="text-sm md:text-base text-[#E0E0E0] leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
