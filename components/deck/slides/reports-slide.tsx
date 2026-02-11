"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { FileText } from "lucide-react";

export function ReportsSlide() {
  const { language } = useLanguage();
  const t = translations[language].reports;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      <div className="w-[80%] mx-auto text-center flex flex-col items-center">
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
          className="text-sm md:text-base text-[#C2C2E1] mb-6 md:mb-8"
        >
          {t.subtitle}
        </motion.p>
        
        <div className="flex flex-nowrap gap-2 md:gap-3 justify-center w-full max-w-5xl overflow-x-auto pb-1">
          {t.points.map((point, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="text-xs md:text-sm text-slate-300 bg-white/5 border-white/10 border rounded-full px-3 md:px-4 py-1.5 inline-flex items-center gap-2 flex-shrink-0"
            >
              <FileText className="h-3 w-3 text-slate-300 flex-shrink-0" />
              {point}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
