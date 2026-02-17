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
          className="text-sm md:text-base text-[#C2C2E1]"
        >
          {t.subtitle}
        </motion.p>
        
        <div className="flex flex-wrap gap-3 justify-center mb-8 w-full max-w-3xl mt-6 md:mt-8">
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

        {/* Two image boxes: fill container with object-cover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {/* Market Positioning Matrix */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden border-2 border-[#C2C2E1]/50 bg-white/5"
          >
            <Image
              src="/bat.png"
              alt="Market Positioning Matrix"
              fill
              className="object-cover"
              unoptimized
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const placeholder = target.parentElement?.querySelector('.placeholder');
                if (placeholder) {
                  (placeholder as HTMLElement).style.display = 'flex';
                }
              }}
            />
            <div className="placeholder absolute inset-0 flex items-center justify-center p-4 bg-[#151515]/80" style={{ display: 'none' }}>
              <p className="text-[#A0A0A0] text-sm text-center">
                Market Positioning Matrix
              </p>
            </div>
          </motion.div>

          {/* Right: white background with image on top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden border-2 border-[#C2C2E1]/50 bg-white"
          >
            <Image
              src="/bat2.png"
              alt="Mentions Evolution"
              fill
              className="object-contain"
              unoptimized
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </motion.div>
        </div>

        {"belowImageText" in t && t.belowImageText && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 md:mt-8 text-base md:text-lg text-[#C2C2E1] font-light italic max-w-2xl"
          >
            {t.belowImageText}
          </motion.p>
        )}
      </div>
    </div>
  );
}
