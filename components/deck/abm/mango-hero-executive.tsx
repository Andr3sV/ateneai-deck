"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MangoHeroExecutiveProps {
  headline: string;
  subheadline: string;
  cta: string;
}

export function MangoHeroExecutive({ headline, subheadline, cta }: MangoHeroExecutiveProps) {
  return (
    <div className="relative w-full h-full bg-[#151515] overflow-hidden">
      <div className="w-[80%] mx-auto py-16 px-6 min-h-screen flex flex-col justify-center">
        {/* Co-branded header */}
        <div className="flex items-center justify-between mb-16">
          <Image
            src="/images/mango/mango-logo.svg"
            alt="Mango"
            width={140}
            height={60}
            className="h-12 w-auto"
            unoptimized
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const placeholder = document.createElement('div');
                placeholder.className = 'h-12 w-32 bg-white/10 rounded flex items-center justify-center';
                placeholder.innerHTML = '<span class="text-white text-sm font-semibold">Mango</span>';
                parent.appendChild(placeholder);
              }
            }}
          />
          <Image
            src="/logoateneaip.svg"
            alt="AteneAI"
            width={120}
            height={120}
            className="h-8 w-auto opacity-80"
            unoptimized
          />
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-8 max-w-5xl leading-tight"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-[#C2C2E1] max-w-4xl mb-12 font-light leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {/* CTA (solo si hay texto) */}
        {cta ? (
          <motion.a
            href="https://www.ateneai.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-10 py-4 bg-[#C2C2E1] text-black rounded-md hover:bg-[#C2C2E1]/90 transition-colors text-lg font-medium w-fit"
          >
            {cta}
          </motion.a>
        ) : null}
      </div>
    </div>
  );
}
