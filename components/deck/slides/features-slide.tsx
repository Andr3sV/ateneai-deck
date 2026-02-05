"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function FeaturesSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 bg-[#151515]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mb-6 text-white border-white/50 bg-transparent"
          >
            Features
          </Badge>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-4"
        >
          Everything you need to
          <span className="block text-[#C2C2E1]">optimize your brand</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-[#E0E0E0]"
        >
          Comprehensive tools to track, analyze, and improve your presence in AI
          responses
        </motion.p>
      </div>
    </div>
  );
}
