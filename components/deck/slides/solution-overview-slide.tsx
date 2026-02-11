"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const MagicBento = dynamic(() => import("@/components/ui/magic-bento"), {
  ssr: false,
});

export function SolutionOverviewSlide() {
  const { language } = useLanguage();
  const t = translations[language].solutionOverview;

  return (
    <div className="relative w-full h-full min-h-0 flex items-center justify-center px-6 py-6 bg-[#151515] overflow-hidden max-md:overflow-y-auto max-md:overflow-x-hidden max-md:items-start max-md:py-8">
      <div className="flex flex-col items-center w-[80%]">
        <div className="w-full mx-auto text-center mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-[#C2C2E1]"
          >
            {t.subtitle}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-full flex justify-center max-md:pb-24"
        >
          <MagicBento
            cards={t.cards}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="194, 194, 225"
          />
        </motion.div>
      </div>
    </div>
  );
}
