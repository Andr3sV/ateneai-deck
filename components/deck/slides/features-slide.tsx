"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const MagicBento = dynamic(() => import("@/components/ui/magic-bento"), {
  ssr: false,
});

export function FeaturesSlide() {
  return (
    <div className="relative w-full h-full min-h-0 flex items-center justify-center px-6 py-6 bg-[#151515] overflow-hidden max-md:overflow-y-auto max-md:overflow-x-hidden max-md:items-start max-md:py-8">
      <div className="flex flex-col items-center w-full max-w-[70rem]">
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2"
          >
            Everything you need to
            <span className="block text-[#C2C2E1]">optimize your brand</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-[#E0E0E0]"
          >
            Comprehensive tools to track, analyze, and improve your presence in AI
            responses
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-full flex justify-center max-md:pb-24"
        >
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="194, 194, 225"
          />
        </motion.div>
      </div>
    </div>
  );
}
