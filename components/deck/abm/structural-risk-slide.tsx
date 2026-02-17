"use client";

import { motion } from "framer-motion";
import { MangoArchitectureDiagramInline } from "./mango-architecture-diagram-inline";

interface StructuralRiskSlideProps {
  headline: string;
  subheadline: string;
  statements: string[];
}

export function StructuralRiskSlide({ headline, subheadline, statements }: StructuralRiskSlideProps) {
  return (
    <div className="relative w-full h-full min-h-0 flex flex-col items-center justify-center px-4 py-4 md:px-6 md:py-6 bg-[#151515] overflow-hidden">
      <div className="w-[90%] max-w-4xl mx-auto flex flex-col items-center flex-1 min-h-0 justify-center gap-0">
        {/* Headline - compacto para caber en viewport */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-white mb-1 max-w-4xl text-center leading-tight shrink-0"
        >
          {headline}
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-base text-[#C2C2E1] mb-3 max-w-3xl text-center font-light leading-snug shrink-0"
        >
          {subheadline}
        </motion.p>

        {/* Inline diagram - versión compacta */}
        <div className="w-full flex-1 min-h-0 flex items-center justify-center shrink">
          <MangoArchitectureDiagramInline />
        </div>

        {/* Statements - compactos */}
        <div className="space-y-1 w-full max-w-2xl shrink-0 mt-2">
          {statements.map((statement, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="text-sm md:text-base text-[#C2C2E1] text-center font-light"
            >
              {statement}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
