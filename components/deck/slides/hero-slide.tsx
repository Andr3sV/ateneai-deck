"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const brands = ["Gemini", "ChatGPT"];

export function HeroSlide() {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandIndex((prev) => (prev + 1) % brands.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 bg-[#151515]">
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
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
          Become the brand everyone is talking about on
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
  );
}
