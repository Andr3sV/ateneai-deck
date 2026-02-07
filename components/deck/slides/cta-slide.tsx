"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function CtaSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 bg-[#151515] max-md:overflow-y-auto max-md:overflow-x-hidden max-md:py-8 max-md:pb-24">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo igual que en la primera slide */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-16 flex flex-col items-center justify-center gap-2"
        >
          <Image
            src="/logoateneaip.svg"
            alt=""
            width={200}
            height={200}
            className="h-16 md:h-20 w-auto object-contain"
            unoptimized
          />
          <span className="text-[#C2C2E1] font-light text-3xl md:text-4xl tracking-tight">
            AteneAI
          </span>
        </motion.div>
        {/* Texto y degradados de la slide AEO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed mb-14 md:mb-16"
        >
          2026: AEO no longer says{" "}
          <span className="inline-block bg-gradient-to-r from-[#C2C2E1] to-white bg-clip-text text-transparent">
            &lsquo;what people search for&rsquo;
          </span>
          <br />
          <span className="text-white">It says </span>
          <span className="inline-block bg-gradient-to-r from-[#C2C2E1] to-white bg-clip-text text-transparent">
            &lsquo;what they&apos;re going to buy&rsquo;
          </span>
          .
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
