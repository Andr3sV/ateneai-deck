"use client";

import { motion } from "framer-motion";

interface BrandArchitectureDiagramProps {
  headline: string;
  risks: string[];
}

export function BrandArchitectureDiagram({ headline, risks }: BrandArchitectureDiagramProps) {
  const brandLines = ["Mango", "Mango Man", "Mango Kids", "Mango Teen", "Mango Home"];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 text-center"
      >
        {headline}
      </motion.h2>

      {/* Brand Hierarchy Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 mb-8"
      >
        <div className="flex flex-col items-center">
          {/* Mango Group */}
          <div className="mb-6">
            <div className="text-xl md:text-2xl font-semibold text-white px-6 py-3 bg-white/10 rounded-lg">
              Mango Group
            </div>
          </div>

          {/* Tree structure */}
          <div className="flex flex-col gap-2 w-full max-w-md">
            {brandLines.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-[#C2C2E1]">├</span>
                <span className="text-base md:text-lg text-[#C2C2E1]">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Risk bullets */}
      <div className="space-y-4">
        {risks.map((risk, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            className="bg-rose-900/5 border-rose-900/20 border rounded-lg p-4 md:p-6"
          >
            <p className="text-sm md:text-base text-rose-400">{risk}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
