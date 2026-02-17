"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MangoHeroSlideProps {
  headline: string;
  subheadline: string;
  cta: string;
}

export function MangoHeroSlide({ headline, subheadline, cta }: MangoHeroSlideProps) {
  return (
    <div className="relative w-full h-full bg-[#151515] overflow-hidden">
      <div className="w-[80%] mx-auto py-8 px-6 min-h-screen flex flex-col justify-center">
        {/* Co-branded header */}
        <div className="flex items-center justify-between mb-12">
          {/* Mango logo placeholder - replace with actual logo when available */}
          <div className="h-12 w-32 bg-white/10 rounded flex items-center justify-center">
            <span className="text-white text-sm font-semibold">Mango</span>
          </div>
          <Image
            src="/logoateneaip.svg"
            alt="AteneAI"
            width={120}
            height={120}
            className="h-8 w-auto"
            unoptimized
          />
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 max-w-4xl"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base md:text-lg text-[#C2C2E1] max-w-3xl mb-8"
        >
          {subheadline}
        </motion.p>

        {/* CTA */}
        <motion.a
          href="https://www.ateneai.com/demo"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-8 py-4 bg-[#C2C2E1] text-black rounded-md hover:bg-[#C2C2E1]/90 transition-colors text-lg font-medium inline-block w-fit"
        >
          {cta}
        </motion.a>
      </div>
    </div>
  );
}
