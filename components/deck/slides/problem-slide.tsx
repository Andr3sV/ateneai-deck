"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function ProblemSlide() {
  const { language } = useLanguage();
  const t = translations[language].problem;
  const stats = translations[language].stats;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 md:px-6 py-4 md:py-6 bg-[#151515] overflow-hidden">
      <div className="scale-90 origin-center w-[80%] mx-auto flex flex-col items-center justify-center min-h-0">
        {/* Title block - same spacing as SolutionOverviewSlide (mb-6 md:mb-8) */}
        <div className="w-full mx-auto text-center mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2"
          >
            {t.title.split(". ")[0]}.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm md:text-base text-[#C2C2E1]"
          >
            {t.title.split(". ").slice(1).join(". ")}
          </motion.p>
        </div>
        
        {/* Combined grid: 4 market stats on top, 4 problem stats below */}
        <div className="w-full flex flex-col justify-center gap-2 md:gap-3">
          {/* Market stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 mb-1 md:mb-2 items-stretch">
            {stats.metrics.map((metric, i) => (
              <motion.div
                key={`market-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="min-h-0 flex"
              >
                <SpotlightCard spotlightColor="rgba(194, 194, 225, 0.2)" className="rounded-lg p-2 md:p-3 lg:p-4 h-full w-full flex flex-col">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#C2C2E1] mb-0.5 md:mb-1">
                    {metric.value}
                  </p>
                  <h3 className="text-xs md:text-sm font-semibold text-white mb-0.5">
                    {metric.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-[#A0A0A0] leading-tight flex-1">
                    {metric.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* Problem stats row - 2x2 grid */}
          <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4">
            {t.stats.map((stat, i) => (
              <motion.div
                key={`problem-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <SpotlightCard spotlightColor="rgba(194, 194, 225, 0.2)" className="rounded-lg p-3 md:p-4 lg:p-5">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#C2C2E1] mb-1 md:mb-2">
                    {stat.value}
                  </p>
                  <h3 className="text-sm md:text-base font-semibold text-white mb-0.5">
                    {stat.title}
                  </h3>
                  <p className="text-xs text-[#A0A0A0] leading-tight">
                    {stat.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
