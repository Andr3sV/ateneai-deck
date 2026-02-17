"use client";

import { motion } from "framer-motion";

interface EngagementProposalExecutiveProps {
  headline: string;
  deliverables: string[];
  cta: string;
}

export function EngagementProposalExecutive({ headline, deliverables, cta }: EngagementProposalExecutiveProps) {
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

        {/* Deliverables - minimal list */}
        <div className="space-y-6 w-full max-w-2xl mb-12">
          {deliverables.map((deliverable, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="border-l-2 border-[#C2C2E1]/30 pl-6 py-2"
            >
              <p className="text-base md:text-lg text-[#C2C2E1] font-light">{deliverable}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="https://www.ateneai.com/demo"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="px-10 py-4 bg-[#C2C2E1] text-black rounded-md hover:bg-[#C2C2E1]/90 transition-colors text-lg font-medium"
        >
          {cta}
        </motion.a>
      </div>
    </div>
  );
}
