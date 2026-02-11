"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { LanguageSelector } from "@/components/ui/language-selector";
import { ChevronRight } from "lucide-react";

const VERSIONS = [
  { path: "/short", label: "Short", slides: 8 },
  { path: "/full", label: "Full", slides: 15 },
  { path: "/hybrid", label: "Hybrid", slides: 12 },
  { path: "/default", label: "Default", slides: 7 },
] as const;

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#151515] flex flex-col items-center justify-center px-6 relative">
      {/* Language selector - top right */}
      <div className="absolute top-6 right-6 z-10">
        <LanguageSelector />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center w-full max-w-md"
      >
        <div className="mb-12 flex flex-col items-center gap-3">
          <Image
            src="/logoateneaip.svg"
            alt="AteneAI"
            width={200}
            height={200}
            className="h-20 md:h-24 w-auto object-contain"
            priority
            unoptimized
          />
          <span className="text-[#C2C2E1] font-light text-3xl md:text-4xl tracking-tight">
            AteneAI
          </span>
        </div>

        <p className="text-white/70 text-sm mb-8 text-center">
          Choose a presentation version
        </p>

        <nav className="w-full space-y-3" aria-label="Presentation versions">
          {VERSIONS.map((v, i) => (
            <motion.div
              key={v.path}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={v.path}
                className="flex items-center justify-between w-full px-5 py-4 rounded-xl bg-white/[0.06] border border-white/10 text-white/90 hover:text-[#C2C2E1] hover:bg-white/[0.1] hover:border-[#C2C2E1]/30 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#C2C2E1]/50"
              >
                <span className="font-medium">{v.label}</span>
                <span className="text-xs text-white/50 tabular-nums">
                  {v.slides} slides
                </span>
                <ChevronRight className="h-5 w-5 text-white/50" />
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </div>
  );
}
