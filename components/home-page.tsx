"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#151515] flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8"
      >
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logoateneaip.svg"
            alt="AteneAI"
            width={320}
            height={320}
            className="h-32 md:h-40 lg:h-48 w-auto object-contain"
            priority
            unoptimized
          />
          <span className="text-[#C2C2E1] font-light text-4xl md:text-5xl lg:text-6xl tracking-tight">
            AteneAI
          </span>
        </div>

        <a
          href="https://ateneai.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-medium hover:text-white/90 transition-colors group"
        >
          Discover AteneAI
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </div>
  );
}
