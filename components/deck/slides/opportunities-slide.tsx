"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function OpportunitiesSlide() {
  const { language } = useLanguage();
  const t = translations[language].opportunities;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      <div className="w-[80%] mx-auto flex flex-col items-center text-center">
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

        {/* Execution Blocks */}
        {t.blocks && t.blocks.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full mt-6 md:mt-8">
            {t.blocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col h-full"
              >
                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold text-white mb-4 pb-4 border-b border-white/10">
                  {block.title}
                </h3>
                
                {/* Fix - Bold */}
                <div className="mb-4">
                  <p className="text-sm md:text-base font-semibold text-white leading-relaxed">
                    {block.fix}
                  </p>
                </div>
                
                {/* Why - Secondary text */}
                <div className="mb-6">
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    {block.why}
                  </p>
                </div>
                
                {/* Expected Impact - Green accent */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <p className="text-sm md:text-base font-medium text-emerald-400">
                    {block.expectedImpact}
                  </p>
                </div>
                
                {/* Owner and Due Date - Bottom aligned */}
                <div className="mt-auto flex justify-between items-center text-xs uppercase tracking-wider text-slate-500">
                  <span className="font-medium">{block.owner}</span>
                  <span className="font-medium">{block.dueDate}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
