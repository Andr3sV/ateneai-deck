"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const LightRays = dynamic(() => import("@/components/ui/light-rays"), {
  ssr: false,
});

interface MangoHeroFullSlideProps {
  headline: string;
  subheadline: string;
  cta: string;
}

export function MangoHeroFullSlide({ headline, subheadline, cta }: MangoHeroFullSlideProps) {
  return (
    <div className="relative w-full h-full bg-[#151515] overflow-hidden max-md:overflow-y-auto max-md:overflow-x-hidden max-md:pb-24">
      {/* Light rays: capa de fondo */}
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

      {/* Co-branded header */}
      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
        {/* Mango logo placeholder */}
        <div className="h-10 w-28 bg-white/10 rounded flex items-center justify-center">
          <span className="text-white text-xs font-semibold">Mango</span>
        </div>
        <Image
          src="/logoateneaip.svg"
          alt="AteneAI"
          width={120}
          height={120}
          className="h-6 w-auto"
          unoptimized
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 md:px-6 py-4 md:py-6">
        <div className="w-[80%] mx-auto flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 max-w-4xl"
          >
            {headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-[#C2C2E1] max-w-3xl mb-8"
          >
            {subheadline}
          </motion.p>
          <motion.a
            href="https://www.ateneai.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-8 py-4 bg-[#C2C2E1] text-black rounded-md hover:bg-[#C2C2E1]/90 transition-colors text-lg font-medium"
          >
            {cta}
          </motion.a>
        </div>
      </div>
    </div>
  );
}
