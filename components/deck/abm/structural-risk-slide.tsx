"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface StructuralRiskSlideProps {
  headline: string;
  subheadline: string;
  statements: string[];
}

export function StructuralRiskSlide({ headline, subheadline, statements }: StructuralRiskSlideProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] overflow-hidden">
      <div className="w-[80%] mx-auto flex flex-col items-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 max-w-4xl text-center leading-tight"
        >
          {headline}
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-[#C2C2E1] mb-12 max-w-3xl text-center font-light leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-4xl h-64 md:h-80 rounded-lg overflow-hidden border border-white/10 bg-white/5 mb-12"
        >
          <Image
            src="/images/mango/mango-architecture-diagram.png"
            alt="Mango brand architecture"
            fill
            className="object-contain"
            unoptimized
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const placeholder = target.parentElement?.querySelector('.placeholder');
              if (placeholder) {
                (placeholder as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div className="placeholder absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
            <p className="text-[#A0A0A0] text-sm text-center">Mango Architecture Diagram</p>
          </div>
        </motion.div>

        {/* Statements */}
        <div className="space-y-6 w-full max-w-2xl">
          {statements.map((statement, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="text-lg md:text-xl text-[#C2C2E1] text-center font-light"
            >
              {statement}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
