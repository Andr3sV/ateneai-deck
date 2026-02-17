"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";

interface CompetitiveBattlefieldOverrideProps {
  headline: string;
  topics: string[];
  competitors: string[];
}

export function CompetitiveBattlefieldOverride({ headline, topics, competitors }: CompetitiveBattlefieldOverrideProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] overflow-hidden">
      <div className="w-[80%] mx-auto text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-6"
        >
          Who dominates AI fashion answers?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm md:text-base text-[#C2C2E1] mb-8 max-w-3xl"
        >
          {headline}
        </motion.p>

        {/* Topics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl mb-8">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <SpotlightCard spotlightColor="rgba(194, 194, 225, 0.2)" className="rounded-lg p-4 md:p-5 text-center">
                <p className="text-xs md:text-sm text-[#C2C2E1]">{topic}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Competitors grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-3xl">
          {competitors.map((competitor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            >
              <SpotlightCard spotlightColor="rgba(194, 194, 225, 0.2)" className="rounded-lg p-4 md:p-5 text-center">
                <p className="text-sm md:text-base font-semibold text-white">{competitor}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
