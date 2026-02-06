"use client";

import { motion } from "framer-motion";
import ClientLogosMarquee from "@/components/ui/clients-logo-marquee";

export function ReputationSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 bg-[#151515] overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2 text-center"
        >
          Trusted by leading brands
          <span className="block text-[#C2C2E1]">in AI search</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm md:text-base text-[#E0E0E0] mb-8 md:mb-10 text-center"
        >
          Companies that trust us to optimize their presence in AI
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <ClientLogosMarquee variant="dark" />
        </motion.div>
      </div>
    </div>
  );
}
