"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function BrandStorytellingSlide() {
  const { language } = useLanguage();
  const t = translations[language].brandStorytelling;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:items-start max-md:pb-24">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2"
        >
          {t.title}
          <span className="block text-[#C2C2E1]">{t.titleHighlight}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base text-[#E0E0E0] mb-8 max-w-xl"
        >
          {t.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden border-2 border-[#C2C2E1]/50"
        >
          <Image
            src="/images/web-page/attributes.png"
            alt={t.imageAlt}
            width={1200}
            height={675}
            className="w-full h-auto object-contain"
            unoptimized
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-[#A0A0A0] mt-6 max-w-2xl"
        >
          {t.footer} <strong className="text-white">{t.footerBold}</strong> {t.footerEnd}
        </motion.p>
      </div>
    </div>
  );
}
