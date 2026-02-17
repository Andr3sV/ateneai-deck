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
        <div className="w-[80%] mx-auto text-center flex flex-col items-center">
        <div className="mb-8 md:mb-12 flex flex-col items-center justify-center gap-3">
          <Image
            src="/logoateneaip.svg"
            alt=""
            width={280}
            height={280}
            className="h-16 md:h-20 lg:h-24 w-auto object-contain"
            priority
            unoptimized
          />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.2] text-center text-white w-full mb-6 md:mb-8">
          {tagline.includes(". ") ? (
            <>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-semibold block mb-2"
              >
                {tagline.split(". ")[0]}
                <span className="opacity-0">.</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="inline-block text-2xl md:text-3xl lg:text-4xl"
              >
                {tagline.split(". ").slice(1).join(". ")}{" "}
                <span className="inline-block ml-2 md:ml-3 relative overflow-hidden h-[1.2em] align-middle min-w-[120px] md:min-w-[140px] lg:min-w-[160px] text-left">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={brands[currentBrandIndex]}
                      initial={{ opacity: 0, filter: "blur(8px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(8px)" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="text-[#C2C2E1] inline-block"
                    >
                      {brands[currentBrandIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.span>
            </>
          ) : (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block"
            >
              {tagline}{" "}
          <span className="inline-block relative overflow-hidden h-[1.2em] align-middle min-w-[120px] md:min-w-[140px] lg:min-w-[160px] text-left">
            <AnimatePresence mode="wait">
              <motion.span
                key={brands[currentBrandIndex]}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-[#C2C2E1] inline-block"
              >
                {brands[currentBrandIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
            </motion.span>
          )}
        </h1>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#C2C2E1] font-light text-lg md:text-xl lg:text-2xl tracking-tight"
        >
          AteneAI
        </motion.span>
        </div>
      </div>
    </div>
  );
}
