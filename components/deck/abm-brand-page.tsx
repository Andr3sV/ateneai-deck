"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { PersonalizationConfig } from "@/lib/personalization";
import Image from "next/image";

interface ABMBrandPageProps {
  personalization?: PersonalizationConfig;
}

export function ABMBrandPage({ personalization }: ABMBrandPageProps) {
  const { language } = useLanguage();
  const config = personalization || {};
  const companyName = config.companyName || "your company";
  const industry = config.industry || "your industry";
  const competitors = config.topCompetitors || ["Competitor A", "Competitor B"];

  return (
    <div className="bg-[#151515] text-white min-h-screen">
      <div className="w-[80%] mx-auto py-8 px-6">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6"
          >
            AI Visibility Report: {companyName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-[#C2C2E1] max-w-3xl"
          >
            How {companyName} appears in AI search results across ChatGPT, Gemini, and Claude
          </motion.p>
        </section>

        {/* Industry AI Battlefield */}
        <section className="min-h-screen flex flex-col justify-center mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
          >
            The {industry} AI Battlefield
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-[#C2C2E1] mb-8 leading-relaxed"
          >
            AI search is reshaping how customers discover and evaluate {industry} solutions. 
            When AI answers cite competitors more frequently, you lose market share in the fastest-growing channel.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitors.map((competitor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{competitor}</h3>
                <p className="text-sm text-[#C2C2E1]">
                  Higher citation frequency in AI responses for key {industry} queries
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Competitor AI Dominance */}
        <section className="min-h-screen flex flex-col justify-center mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
          >
            Competitive AI Dominance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-[#C2C2E1] mb-8 leading-relaxed"
          >
            In high-intent {industry} queries, competitors are cited 3x more frequently than {companyName} 
            in AI-generated responses. This represents a significant competitive displacement risk.
          </motion.p>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Citation Gap Analysis</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#C2C2E1]">
                <span className="text-rose-500 mt-0.5">✕</span>
                <span>Lower citation share in "best {industry} solutions" queries</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#C2C2E1]">
                <span className="text-rose-500 mt-0.5">✕</span>
                <span>Missing from AI recommendations for key use cases</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#C2C2E1]">
                <span className="text-rose-500 mt-0.5">✕</span>
                <span>Competitors mentioned first in comparative queries</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Citation Gap Examples */}
        <section className="min-h-screen flex flex-col justify-center mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
          >
            Citation Gap Examples
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                query: "What are the best {industry} solutions?",
                gap: "{companyName} is not cited in top 3 AI responses",
              },
              {
                query: "Compare {industry} providers",
                gap: "Competitors mentioned 2x more frequently than {companyName}",
              },
              {
                query: "Top {industry} companies",
                gap: "{companyName} appears in 30% fewer AI-generated lists",
              },
            ].map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {example.query.replace(/{industry}/g, industry).replace(/{companyName}/g, companyName)}
                </h3>
                <p className="text-sm text-rose-400">{example.gap.replace(/{companyName}/g, companyName)}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Executive Implications */}
        <section className="min-h-screen flex flex-col justify-center mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
          >
            Executive Implications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-rose-900/5 border-rose-900/20 border rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-rose-500 mb-3">Risk</h3>
              <p className="text-sm text-[#C2C2E1]">
                AI-driven market discovery is accelerating. Without AI visibility governance, 
                {companyName} risks losing market share to competitors who appear more frequently in AI responses.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-emerald-900/5 border-emerald-900/20 border rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-emerald-500 mb-3">Opportunity</h3>
              <p className="text-sm text-[#C2C2E1]">
                Systematic AI visibility monitoring and optimization can recover lost citation share 
                and position {companyName} as a category leader in AI search results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
          >
            Run AI Visibility Audit for {companyName}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-[#C2C2E1] mb-8 max-w-2xl"
          >
            Get a comprehensive analysis of how {companyName} appears in AI search results, 
            competitive positioning, and actionable recommendations.
          </motion.p>
          <motion.a
            href="https://www.ateneai.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-8 py-4 bg-[#C2C2E1] text-black rounded-md hover:bg-[#C2C2E1]/90 transition-colors text-lg font-medium"
          >
            Request AI Visibility Audit
          </motion.a>
        </section>
      </div>
    </div>
  );
}
