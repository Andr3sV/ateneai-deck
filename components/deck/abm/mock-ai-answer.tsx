"use client";

import { motion } from "framer-motion";

export function MockAIAnswer() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8"
      >
        {/* Query */}
        <div className="mb-6">
          <p className="text-xs text-[#C2C2E1]/60 mb-2">Simulated query:</p>
          <p className="text-base md:text-lg font-medium text-white italic">
            "Best minimalist fashion brands"
          </p>
        </div>

        {/* AI Answer */}
        <div className="mb-6">
          <p className="text-xs text-[#C2C2E1]/60 mb-3">Simulated AI response:</p>
          <div className="space-y-2">
            {["Zara", "COS", "Uniqlo", "Massimo Dutti"].map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                className="flex items-center gap-3 text-sm md:text-base text-[#C2C2E1]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2C2E1]/40"></span>
                <span>{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Question */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-base md:text-lg font-semibold text-rose-400">
            Where is Mango?
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-[#C2C2E1]/40 mt-4 italic">
          This is illustrative only. No real data. No claims.
        </p>
      </motion.div>
    </div>
  );
}
