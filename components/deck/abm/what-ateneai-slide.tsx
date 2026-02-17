"use client";

import { motion } from "framer-motion";

interface WhatAteneAISlideProps {
  title: string;
  layers: string[];
}

export function WhatAteneAISlide({ title, layers }: WhatAteneAISlideProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] overflow-hidden">
      <div className="w-[80%] mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-16 max-w-4xl text-center leading-tight"
        >
          {title}
        </motion.h2>

        {/* Four blocks - minimal, spacious */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="border border-white/10 rounded-lg p-8 bg-white/5"
            >
              <h3 className="text-xl md:text-2xl font-light text-white mb-4">{layer}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
