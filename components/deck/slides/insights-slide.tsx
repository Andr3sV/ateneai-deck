"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function InsightsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:items-start max-md:pb-24">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-2"
        >
          Real-Time Insights
          <span className="block text-[#C2C2E1]">Competitive Advantage</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base text-[#E0E0E0] mb-8 max-w-xl"
        >
          Discover opportunities and gain strategic insights to outperform
          competitors
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden border-2 border-[#C2C2E1]/50"
        >
          <Image
            src="/images/web-page/opportunity.png"
            alt="Real-Time Insights Dashboard"
            width={1200}
            height={675}
            className="w-full h-auto object-contain"
            unoptimized
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-[#A0A0A0] mt-6 max-w-2xl"
        >
          AteneAI delivers <strong className="text-white">real-time insights and opportunities</strong> that
          give you a significant competitive advantage in LLMs and the digital
          ecosystem.
        </motion.p>
      </div>
    </div>
  );
}
