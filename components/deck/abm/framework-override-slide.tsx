"use client";

import { motion } from "framer-motion";

interface FrameworkOverrideSlideProps {
  headline: string;
  steps: Array<{ step: string; description: string }>;
}

export function FrameworkOverrideSlide({ headline, steps }: FrameworkOverrideSlideProps) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{item.step}</h3>
              <p className="text-sm text-[#C2C2E1] leading-relaxed flex-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
