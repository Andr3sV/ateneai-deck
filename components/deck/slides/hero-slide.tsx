"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const LightRays = dynamic(() => import("@/components/ui/light-rays"), {
  ssr: false,
});

export function HeroSlide() {
  const { language } = useLanguage();
  const brands = translations[language].hero.brands;
  const tagline = translations[language].hero.tagline;
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandIndex((prev) => (prev + 1) % brands.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [brands.length]);

  return (
    <div className="relative w-full h-full bg-[#151515] overflow-hidden max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      {/* Light rays: capa de fondo, luz desde arriba iluminando todo */}
      <div className="absolute inset-0 z-[1]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#C2C2E1"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
          className="absolute inset-0"
        />
      </div>

      {/* Language selector - esquina superior derecha */}
      <div className="absolute top-6 right-6 z-20">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <LanguageSelector />
        </motion.div>
      </div>

      {/* Logo, nombre y título encima de los rayos para que la luz los ilumine */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="mb-14 md:mb-20 flex flex-col items-center justify-center gap-3">
          <Image
            src="/logoateneaip.svg"
            alt=""
            width={280}
            height={280}
            className="h-24 md:h-28 lg:h-32 w-auto object-contain"
            priority
            unoptimized
          />
          <span className="text-[#C2C2E1] font-light text-4xl md:text-5xl lg:text-6xl tracking-tight">
            AteneAI
          </span>
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight leading-[1.2] text-center text-white max-w-2xl">
          {tagline}
          <br />
          <span className="inline-block relative overflow-hidden h-[1.2em] align-middle">
            <AnimatePresence mode="wait">
              <motion.span
                key={brands[currentBrandIndex]}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-[#C2C2E1]"
              >
                {brands[currentBrandIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        </div>
      </div>
    </div>
  );
}
