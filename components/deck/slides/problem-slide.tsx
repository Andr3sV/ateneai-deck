"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function ProblemSlide() {
  const { language } = useLanguage();
  const t = translations[language].problem;
  const stats = translations[language].stats;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 md:px-6 py-4 md:py-6 bg-[#151515] overflow-hidden">
      <div className="w-[80%] mx-auto flex flex-col items-center h-full justify-center">
        {/* Subtitle - same style as StatsSlide */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light text-[#C2C2E1] mb-1 md:mb-2 text-center"
        >
          {t.title}
        </motion.p>
        
        {/* Combined grid: 4 market stats on top, 4 problem stats below */}
        <div className="w-full flex-shrink-0 flex-1 flex flex-col justify-center min-h-0">
          {/* Market stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 mb-2 md:mb-3 lg:mb-4">
            {stats.metrics.map((metric, i) => (
              <motion.div
                key={`market-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="rounded-xl border border-white/10 bg-white/5 p-3 md:p-4 lg:p-5 backdrop-blur-sm flex-shrink-0"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#C2C2E1] mb-1 md:mb-2">
                  {metric.value}
                </p>
                <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                  {metric.title}
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-tight">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Problem stats row - 2x2 grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-5">
            {t.stats.map((stat, i) => (
              <motion.div
                key={`problem-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4 md:p-5 lg:p-6 backdrop-blur-sm flex-shrink-0"
              >
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#C2C2E1] mb-2 md:mb-3">
                  {stat.value}
                </p>
                <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                  {stat.title}
                </h3>
                <p className="text-xs md:text-sm text-[#A0A0A0] leading-tight">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
