"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const MagicBentoMinimal = dynamic(
  () =>
    import("@/components/ui/magic-bento-minimal").then((m) => m.MagicBentoMinimal),
  { ssr: false }
);

export function RoiValueSlide() {
  const { language } = useLanguage();
  const t = translations[language].roiValue;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      <div className="w-[80%] mx-auto text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-8 md:mb-10"
        >
          {t.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full flex justify-center"
        >
          <MagicBentoMinimal glowColor="194, 194, 225" spotlightRadius={300}>
            {t.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-1">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#C2C2E1] mb-2">
                  {metric.value}
                </p>
                <p className="text-xs md:text-sm text-[#A0A0A0] leading-snug">
                  {metric.description}
                </p>
              </div>
            ))}
          </MagicBentoMinimal>
        </motion.div>
      </div>
    </div>
  );
}
