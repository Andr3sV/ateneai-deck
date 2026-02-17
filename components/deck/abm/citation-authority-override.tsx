"use client";

import { motion } from "framer-motion";

interface CitationAuthorityOverrideProps {
  headline: string;
  content: string;
  topics: string[];
}

export function CitationAuthorityOverride({ headline, content, topics }: CitationAuthorityOverrideProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-8 bg-[#151515] overflow-hidden">
      <div className="w-[80%] mx-auto text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white mb-6"
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm md:text-base text-[#C2C2E1] mb-8 max-w-3xl leading-relaxed"
        >
          {content}
        </motion.p>

        {/* Topics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 text-left"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{topic}</h3>
              <p className="text-sm text-[#C2C2E1]">
                Citation authority in this topic influences AI recommendation patterns
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
