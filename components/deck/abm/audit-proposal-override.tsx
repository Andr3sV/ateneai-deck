"use client";

import { motion } from "framer-motion";

interface AuditProposalOverrideProps {
  headline: string;
  deliverables: string[];
  cta: string;
}

export function AuditProposalOverride({ headline, deliverables, cta }: AuditProposalOverrideProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] overflow-hidden">
      <div className="w-[80%] mx-auto text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-8 max-w-4xl"
        >
          {headline}
        </motion.h2>

        {/* Deliverables grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mb-8 text-left">
          {deliverables.map((deliverable, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg p-4 md:p-5"
            >
              <p className="text-sm md:text-base text-[#C2C2E1]">{deliverable}</p>
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="px-8 py-4 bg-[#C2C2E1] text-black rounded-md hover:bg-[#C2C2E1]/90 transition-colors text-lg font-medium"
        >
          {cta}
        </motion.a>
      </div>
    </div>
  );
}
