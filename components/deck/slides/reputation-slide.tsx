"use client";

import { motion } from "framer-motion";
import ClientLogosMarquee from "@/components/ui/clients-logo-marquee";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function ReputationSlide() {
  const { language } = useLanguage();
  const t = translations[language].reputation;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 bg-[#151515] overflow-hidden max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      <div className="flex flex-col items-center w-[80%] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2 text-center"
        >
          {t.title}
          <span className="block text-[#C2C2E1]">{t.titleHighlight}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm md:text-base text-[#C2C2E1] mb-6 md:mb-8 text-center"
        >
          {t.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <ClientLogosMarquee variant="dark" />
        </motion.div>
      </div>
    </div>
  );
}
