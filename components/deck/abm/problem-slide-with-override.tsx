"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";

interface ProblemSlideWithOverrideProps {
  headline: string;
  queries: string[];
}

export function ProblemSlideWithOverride({ headline, queries }: ProblemSlideWithOverrideProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 md:px-6 py-4 md:py-6 bg-[#151515] overflow-hidden">
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center min-h-0">
        {/* Title block */}
        <div className="w-full mx-auto text-center mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-6"
          >
            {headline}
          </motion.h2>
        </div>
        
        {/* Query examples grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
          {queries.map((query, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <SpotlightCard spotlightColor="rgba(194, 194, 225, 0.2)" className="rounded-lg p-4 md:p-5">
                <p className="text-sm md:text-base text-[#C2C2E1] italic">"{query}"</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
