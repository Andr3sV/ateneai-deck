"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations-context";
export function CtaSlide() {
  const { language } = useLanguage();
  const translations = useTranslations();
  const t = translations[language].cta;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:py-8 max-md:pb-24">
      <div className="w-[80%] mx-auto text-center">
        {/* Logo igual que en la primera slide */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-16 flex flex-col items-center justify-center gap-3"
        >
          <Image
            src="/logoateneaip.svg"
            alt=""
            width={280}
            height={280}
            className="h-20 md:h-24 lg:h-28 w-auto object-contain"
            unoptimized
          />
          <span className="text-[#C2C2E1] font-light text-4xl md:text-5xl tracking-tight">
            AteneAI
          </span>
        </motion.div>
        {/* Texto y degradados de la slide AEO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed mb-14 md:mb-16"
        >
          {t.quotePart1}
          <br />
          {t.quotePart2}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.ateneai.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-8 rounded-md text-black font-medium bg-[#C2C2E1] hover:bg-[#C2C2E1]/90 transition-all flex items-center gap-2 group"
          >
            {t.startMonitoring}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://www.ateneai.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-8 rounded-md bg-white/10 text-white border border-white/30 font-medium hover:bg-white/20 transition-all flex items-center justify-center min-w-[180px]"
          >
            {t.getDemo}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
