"use client";

import { motion } from "framer-motion";

interface MangoRiskSlideProps {
  headline: string;
  risks: string[];
}

export function MangoRiskSlide({ headline, risks }: MangoRiskSlideProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] overflow-hidden">
      <div className="w-[80%] mx-auto text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-8 max-w-4xl"
        >
          {headline}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          {risks.map((risk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-rose-900/5 border-rose-900/20 border rounded-lg p-6 text-left"
            >
              <p className="text-sm md:text-base text-rose-400">{risk}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
