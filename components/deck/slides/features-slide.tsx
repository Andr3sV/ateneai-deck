"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";

const MagicBento = dynamic(() => import("@/components/ui/magic-bento"), {
  ssr: false,
});

export function FeaturesSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center px-6 py-6 bg-[#151515] overflow-hidden">
      <div className="flex-shrink-0 max-w-3xl mx-auto text-center mb-4 md:mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mb-4 text-white border-white/50 bg-transparent"
          >
            Features
          </Badge>
        </motion.div>
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
      <div className="flex-1 min-h-0 w-full max-w-[70rem] mx-auto flex items-center justify-center overflow-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-full h-full min-h-[280px] flex items-center justify-center [&_.bento-section]:max-h-full"
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
