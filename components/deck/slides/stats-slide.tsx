"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function StatsSlide() {
  const { language } = useLanguage();
  const t = translations[language].stats;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-10 bg-[#151515] overflow-auto max-md:pb-24">
      <div className="w-[80%] mx-auto w-full text-center">
        {/* Título y subtítulo */}
        <div className="mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-sm md:text-base text-[#C2C2E1]"
          >
            {t.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm md:text-base text-[#C2C2E1] max-w-2xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>

        {/* Cuatro métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {t.metrics.map((metric, i) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {metric.value}
              </p>
              <p className="text-base md:text-lg font-bold text-white mb-2">
                {metric.title}
              </p>
              <p className="text-sm md:text-base text-[#A0A0A0] leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
