"use client";

import { motion } from "framer-motion";

const BRAND_LINES = ["Mango", "Mango Man", "Mango Kids", "Mango Teen", "Mango Home"];

/**
 * Inline diagram: Mango Group brands → AI Answers.
 * Rendered with HTML/CSS so it stays sharp at any resolution (no raster image).
 */
export function MangoArchitectureDiagramInline() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-3xl rounded-lg border border-white/10 bg-white/[0.03] p-3 md:p-4"
    >
      <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 md:gap-4">
        {/* Left: Mango Group + brand lines */}
        <div className="flex flex-col items-center sm:items-end gap-1.5">
          <div className="text-xs md:text-sm font-semibold text-white/90 uppercase tracking-wider px-3 py-1.5 rounded-md bg-white/10 border border-white/10">
            Mango Group
          </div>
          <div className="flex flex-col gap-0.5">
            {BRAND_LINES.map((brand) => (
              <div
                key={brand}
                className="text-xs md:text-sm text-[#C2C2E1] font-medium px-3 py-1 rounded bg-white/5 border border-white/10 text-right min-w-[100px] md:min-w-[120px]"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Dotted lines (visual connector) */}
        <div className="hidden sm:flex flex-col justify-center py-1">
          {BRAND_LINES.map((_, i) => (
            <div key={i} className="border-t border-dashed border-[#C2C2E1]/40 w-6 md:w-8" />
          ))}
        </div>

        {/* Right: AI Answers box */}
        <div className="flex flex-col justify-center">
          <div className="px-4 md:px-5 py-4 md:py-5 rounded-lg border-2 border-[#C2C2E1]/30 bg-[#C2C2E1]/5 shadow-[0_0_16px_rgba(194,194,225,0.06)] min-h-[80px] md:min-h-[90px] flex items-center justify-center">
            <span className="text-sm md:text-base font-semibold text-[#C2C2E1] tracking-tight">
              AI Answers
            </span>
          </div>
        </div>
      </div>

      {/* Caption lines below diagram - compacto */}
      <div className="mt-3 pt-3 border-t border-white/10 space-y-0.5 text-center">
        <p className="text-xs md:text-sm text-[#C2C2E1]/90 font-light">
          AI visibility is not hierarchical.
        </p>
        <p className="text-xs md:text-sm text-[#C2C2E1]/90 font-light">
          Each brand line competes independently.
        </p>
        <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#C2C2E1]/70 font-medium mt-1">
          Fragmented visibility risk
        </p>
      </div>
    </motion.div>
  );
}
