"use client";

import { motion } from "framer-motion";

interface StrategicOutcomesExecutiveProps {
  headline: string;
  outcomes: string[];
}

export function StrategicOutcomesExecutive({ headline, outcomes }: StrategicOutcomesExecutiveProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] overflow-hidden">
      <div className="w-[80%] mx-auto flex flex-col items-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-16 max-w-4xl text-center leading-tight"
        >
          {headline}
        </motion.h2>

        {/* Three centered statements */}
        <div className="space-y-12 w-full max-w-3xl">
          {outcomes.map((outcome, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="text-xl md:text-2xl text-[#C2C2E1] text-center font-light leading-relaxed"
            >
              {outcome}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
