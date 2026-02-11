"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ElectricBorder } from "@/components/ui/electric-border";

export function PainPointsSlide() {
  const { language } = useLanguage();
  const t = translations[language].painPoints;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-white text-center mb-12"
        >
          {t.title}
        </motion.h2>
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
                <div className="absolute top-0 right-0 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"></path>
                    <path d="M12 14a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0v-2a5 5 0 0 1 5-5z"></path>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-emerald-500 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {t.withAteneAI}
                </h3>
                <ul className="space-y-4">
                  {t.points.map((point, i) => {
                    const solutions = language === "en"
                      ? ["→ Full visibility & metrics", "→ unlimited brands", "→ Full visibility & metrics", "→ Full visibility & metrics", "→ Full visibility & metrics"]
                      : ["→ Visibilidad completa y métricas", "→ marcas ilimitadas", "→ Visibilidad completa y métricas", "→ Visibilidad completa y métricas", "→ Visibilidad completa y métricas"];
                    return (
                      <li key={i} className="flex justify-between items-start gap-3 text-xs text-slate-300">
                        <div className="flex gap-3">
                          <span className="text-emerald-500 mt-0.5">✓</span>
                          <span>{point}</span>
                        </div>
                        <span className="text-emerald-500 opacity-60">{solutions[i] || solutions[0]}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </ElectricBorder>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
