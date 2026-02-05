"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function CtaSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 bg-[#151515]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <Image
            src="/ateneai-logo-circle.svg"
            alt="AteneAI"
            width={80}
            height={80}
            className="opacity-90"
            unoptimized
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-light text-white mb-4"
        >
          Ready to optimize your brand in AI?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#E0E0E0] mb-10"
        >
          Start monitoring and take control of your narrative.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            className="h-12 px-8 rounded-md text-black font-medium bg-[#C2C2E1] hover:bg-[#C2C2E1]/90 transition-all flex items-center gap-2 group"
          >
            Start Monitoring
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            type="button"
            className="h-12 px-8 rounded-md bg-white/10 text-white border border-white/30 font-medium hover:bg-white/20 transition-all"
          >
            Get a Demo
          </button>
        </motion.div>
      </div>
    </div>
  );
}
