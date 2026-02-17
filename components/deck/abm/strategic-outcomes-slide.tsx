"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

interface StrategicOutcomesSlideProps {
  headline: string;
  outcomes: string[];
}

export function StrategicOutcomesSlide({ headline, outcomes }: StrategicOutcomesSlideProps) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <SpotlightCard spotlightColor="rgba(194, 194, 225, 0.2)" className="rounded-lg p-5 h-full flex items-start gap-3">
                <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-sm md:text-base text-[#C2C2E1] leading-relaxed">{outcome}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
