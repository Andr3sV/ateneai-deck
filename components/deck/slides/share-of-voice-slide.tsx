"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function ShareOfVoiceSlide() {
  const { language } = useLanguage();
  const t = translations[language].shareOfVoice;

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
          className="text-base md:text-lg text-[#C2C2E1] mb-8"
        >
          {t.subtitle}
        </motion.p>
        
        <div className="flex flex-wrap gap-3 justify-center mb-8 w-full max-w-3xl">
          {t.points.map((point, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="text-sm text-slate-300 bg-white/5 border-white/10 border rounded-full px-4 py-1.5"
            >
              {point}
            </motion.span>
          ))}
        </div>

        {/* Two image boxes at the bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {/* Market Positioning Matrix */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full rounded-2xl overflow-hidden border-2 border-[#C2C2E1]/50 bg-white/5"
          >
            <div className="relative">
              <Image
                src="/images/dashboard/market-positioning-matrix.png"
                alt="Market Positioning Matrix"
                fill
                className="object-contain"
                unoptimized
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.parentElement?.querySelector('.placeholder');
                  if (placeholder) {
                    (placeholder as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              <div className="placeholder absolute inset-0 flex items-center justify-center p-4" style={{ display: 'none' }}>
                <p className="text-[#A0A0A0] text-sm text-center">
                  Market Positioning Matrix
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mentions Evolution */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative w-full rounded-2xl overflow-hidden border-2 border-[#C2C2E1]/50 bg-white/5"
          >
            <div className="relative">
              <Image
                src="/images/dashboard/mentions-evolution.png"
                alt="Mentions Evolution"
                fill
                className="object-contain"
                unoptimized
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.parentElement?.querySelector('.placeholder');
                  if (placeholder) {
                    (placeholder as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              <div className="placeholder absolute inset-0 flex items-center justify-center p-4" style={{ display: 'none' }}>
                <p className="text-[#A0A0A0] text-sm text-center">
                  Mentions Evolution
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
