"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { Zap, Users, Folder, Code } from "lucide-react";

const icons = [Zap, Users, Folder, Code];

export function IntegrationSlide() {
  const { language } = useLanguage();
  const t = translations[language].integration;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      <div className="w-[80%] mx-auto text-center flex flex-col items-center">
        <div className="w-full mx-auto text-center mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2"
          >
            {t.title}
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full max-w-3xl">
          {t.points.map((point, i) => {
            const Icon = icons[i] || Zap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-left flex items-start gap-4"
              >
                <div className="h-10 w-10 rounded-full bg-[#C2C2E1]/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-[#C2C2E1]" />
                </div>
                <p className="text-base md:text-lg text-[#E0E0E0] leading-relaxed">
                  {point}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative w-full max-w-5xl rounded-2xl overflow-hidden border-2 border-[#C2C2E1]/50"
        >
          <div className="bg-white/5 flex items-center justify-center relative">
            <Image
              src="/images/dashboard/onboarding.png"
              alt={t.imageAlt}
              width={1200}
              height={675}
              className="w-full h-full object-contain"
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
            <div className="placeholder absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
              <p className="text-[#A0A0A0] text-sm text-center">
                {t.imageAlt}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
