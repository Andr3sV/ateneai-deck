"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "berruslogo.png",
  "cimslogo.png",
  "expofastlogo.png",
  "primeplayerslogo.png",
  "ralogo.png",
  "simbiosialogo.png",
];

export function LogosSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 bg-[#151515] overflow-hidden">
      <div className="w-full mx-auto text-center mb-6 md:mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2 text-center"
        >
          Trusted by leading brands
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-10 md:gap-16"
      >
        {logos.map((logo, i) => (
          <motion.div
            key={logo}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
            className="grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={`/logos-reputation/${logo}`}
              alt=""
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
              unoptimized
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
