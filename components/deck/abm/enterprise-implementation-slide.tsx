"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface EnterpriseImplementationSlideProps {
  headline: string;
  blocks: string[];
}

export function EnterpriseImplementationSlide({ headline, blocks }: EnterpriseImplementationSlideProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] overflow-hidden">
      <div className="w-[80%] mx-auto flex flex-col items-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-12 max-w-4xl text-center leading-tight"
        >
          {headline}
        </motion.h2>

        {/* Three blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-12">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="border border-white/10 rounded-lg p-8 bg-white/5"
            >
              <p className="text-base md:text-lg text-[#C2C2E1] font-light leading-relaxed">{block}</p>
            </motion.div>
          ))}
        </div>

        {/* Dashboard image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative w-full max-w-5xl h-80 md:h-96 rounded-lg overflow-hidden border border-white/10 bg-white/5"
        >
          <Image
            src="/images/mango/executive-dashboard.png"
            alt="Executive dashboard"
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
            <p className="text-[#A0A0A0] text-sm text-center">Executive Dashboard</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
