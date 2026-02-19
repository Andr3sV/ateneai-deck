"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations-context";

/** Imagen de mapa mundial estilo red/conectividad (referencia del usuario) */
const WORLD_MAP_IMAGE = "/images/mango/world-map-network.png";

interface GlobalIntelligenceContent {
  title: string;
  subtitle: string;
  points: string[];
  belowMapText: string;
}

export function SlideGlobalIntelligenceLocalReachES() {
  const { language } = useLanguage();
  const translations = useTranslations();
  const t = (translations[language] as { globalIntelligence?: GlobalIntelligenceContent })
    .globalIntelligence as GlobalIntelligenceContent;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      {/* Soft vignette on slide */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-0"
        aria-hidden
      />
      <div className="relative z-10 w-[80%] mx-auto text-center flex flex-col items-center">
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

        <div className="flex flex-wrap gap-3 justify-center mb-6 md:mb-8 w-full max-w-3xl mt-6 md:mt-8">
          {t.points.map((point: string, i: number) => (
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

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5"
        >
          <Image
            src={WORLD_MAP_IMAGE}
            alt=""
            width={1200}
            height={600}
            className="w-full h-auto max-h-[280px] md:max-h-[320px] object-contain"
            unoptimized
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 md:mt-6 text-base md:text-lg text-[#C2C2E1] font-light italic max-w-2xl"
        >
          {t.belowMapText}
        </motion.p>
      </div>
    </div>
  );
}
