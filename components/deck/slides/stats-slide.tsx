"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "4.5x",
    title: "AI Conversion Value",
    description: "AI traffic converts better than traditional search.",
  },
  {
    value: "9.7x",
    title: "AI Traffic Growth",
    description: "AI traffic is surging across all platforms.",
  },
  {
    value: "60%",
    title: "Zero-Click Searches",
    description: "Most searches end without clicks, answers live in AI results.",
  },
  {
    value: "1.5 bn",
    title: "Monthly Users",
    description: "Billions interact with AI search results monthly.",
  },
];

export function StatsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-10 bg-[#151515] overflow-auto max-md:pb-24">
      <div className="max-w-5xl mx-auto w-full text-center">
        {/* Título y subtítulo */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1"
        >
          AI Search:
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light text-[#C2C2E1] mb-6"
        >
          The Future of Growth
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base md:text-lg text-[#E0E0E0] mb-12 max-w-2xl mx-auto"
        >
          The numbers that prove AI search is transforming how brands reach
          customers
        </motion.p>

        {/* Cuatro métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {metric.value}
              </p>
              <p className="text-base md:text-lg font-bold text-white mb-2">
                {metric.title}
              </p>
              <p className="text-sm md:text-base text-[#A0A0A0] leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
