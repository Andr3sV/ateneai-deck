"use client";

import { motion } from "framer-motion";

interface ExecutiveRiskOverrideProps {
  headline: string;
  subheadline: string;
}

export function ExecutiveRiskOverride({ headline, subheadline }: ExecutiveRiskOverrideProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] overflow-hidden">
      <div className="w-[80%] mx-auto text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 max-w-4xl"
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-[#C2C2E1] max-w-3xl"
        >
          {subheadline}
        </motion.p>
      </div>
    </div>
  );
}
