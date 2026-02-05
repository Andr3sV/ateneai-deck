"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "Real-time", label: "Tracking" },
  { value: "AI Platforms", label: "Coverage" },
  { value: "Brand", label: "Intelligence" },
];

export function StatsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 bg-[#151515]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#C2C2E1] text-sm font-medium uppercase tracking-widest mb-4"
        >
          Trusted by brands
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-light text-white mb-16"
        >
          Data-driven decisions for your brand
        </motion.h2>
        <div className="grid grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-light text-[#C2C2E1] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[#A0A0A0]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
