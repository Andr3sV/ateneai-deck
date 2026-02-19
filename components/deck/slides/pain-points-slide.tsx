"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations-context";
import { ElectricBorder } from "@/components/ui/electric-border";

export function PainPointsSlide() {
  const { language } = useLanguage();
  const translations = useTranslations();
  const t = translations[language].painPoints;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      <div className="max-w-5xl mx-auto w-full">
        <div className="w-full mx-auto text-center mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2 text-center"
          >
            {t.title}
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Without AteneAI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-rose-900/5 border-rose-900/20 border rounded-xl pt-8 pr-8 pb-8 pl-8"
          >
            <h3 className="text-sm font-semibold text-rose-500 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
              {t.withoutAteneAI}
            </h3>
            <ul className="space-y-4">
              {t.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-rose-200/60">
                  <span className="text-rose-500 mt-0.5">✕</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With AteneAI - Electric Border */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <ElectricBorder
              color="#10b981"
              speed={1}
              chaos={0.12}
              borderRadius={16}
              className="w-full"
              style={{ borderRadius: 16 }}
            >
              <div className="bg-emerald-900/5 rounded-xl pt-8 pr-8 pb-8 pl-8 relative min-h-[280px]">
                <h3 className="text-sm font-semibold text-emerald-500 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {t.withAteneAI}
                </h3>
                <ul className="space-y-4">
                  {t.withAteneAIPoints && t.withAteneAIPoints.length > 0 ? (
                    t.withAteneAIPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-slate-300">
                        <span className="text-emerald-500 mt-0.5">✓</span>
                        <span>{point}</span>
                      </li>
                    ))
                  ) : (
                    t.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-slate-300">
                        <span className="text-emerald-500 mt-0.5">✓</span>
                        <span>{point}</span>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </ElectricBorder>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
