"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PersonalizationConfig } from "@/lib/personalization";
import { Download } from "lucide-react";
import Image from "next/image";
import { BoardContent } from "@/lib/content/index";
import type { Language } from "@/lib/content/index";

interface BoardViewProps {
  personalization?: PersonalizationConfig;
  mode?: "web" | "pdf";
  language: Language;
  content: BoardContent;
}

export function BoardView({ personalization, mode = "web", language, content }: BoardViewProps) {
  const t = content;
  const config = personalization || {};
  const industry = config.industry || "your industry";
  const companyName = config.companyName || "your company";

  const isPdfMode = mode === "pdf";

  useEffect(() => {
    // Enable scrolling for Board view in web mode
    if (!isPdfMode) {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    
    return () => {
      // Cleanup if needed
    };
  }, [isPdfMode]);

  // Replace placeholders in text
  const replacePlaceholders = (text: string) => {
    return text
      .replace(/{industry}/g, industry)
      .replace(/{companyName}/g, companyName);
  };

  const handleDownloadPdf = () => {
    // PDF export will be implemented with react-pdf or similar
    window.print();
  };

  return (
    <div
      className={`${
        isPdfMode
          ? "bg-white text-black min-h-screen"
          : "bg-[#151515] text-white min-h-screen overflow-auto"
      }`}
    >
      {/* PDF mode: hide download button */}
      {!isPdfMode && (
        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={handleDownloadPdf}
            className="px-4 py-2 bg-[#C2C2E1] text-black rounded-md hover:bg-[#C2C2E1]/90 transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <Download className="h-4 w-4" />
            {t.downloadPdf}
          </button>
        </div>
      )}

      <div
        className={`${
          isPdfMode
            ? "max-w-4xl mx-auto py-16 px-12"
            : "w-[80%] mx-auto py-8 px-6"
        }`}
      >
        {/* Slide 1 - The Shift */}
        <section
          className={`${
            isPdfMode ? "min-h-[calc(100vh-8rem)]" : "min-h-screen"
          } flex flex-col justify-center`}
        >
          <div className="flex items-center justify-between mb-8">
            <Image
              src={config.logo || "/logoateneaip.svg"}
              alt="AteneAI"
              width={120}
              height={120}
              className="h-8 w-auto"
              unoptimized
            />
            {config.clientLogo && (
              <Image
                src={config.clientLogo}
                alt={companyName}
                width={120}
                height={120}
                className="h-8 w-auto"
                unoptimized
              />
            )}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              isPdfMode
                ? "text-4xl font-bold text-black mb-6"
                : "text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
            }`}
          >
            {replacePlaceholders(t.slide1.headline)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${
              isPdfMode
                ? "text-lg text-gray-700 leading-relaxed"
                : "text-base md:text-lg text-[#C2C2E1] leading-relaxed"
            }`}
          >
            {t.slide1.content}
          </motion.p>
        </section>

        {/* Slide 2 - The Risk */}
        <section
          className={`${
            isPdfMode ? "min-h-[calc(100vh-8rem)]" : "min-h-screen"
          } flex flex-col justify-center`}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              isPdfMode
                ? "text-4xl font-bold text-black mb-6"
                : "text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
            }`}
          >
            {replacePlaceholders(t.slide2.headline)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${
              isPdfMode
                ? "text-lg text-gray-700 leading-relaxed"
                : "text-base md:text-lg text-[#C2C2E1] leading-relaxed"
            }`}
          >
            {t.slide2.content}
          </motion.p>
        </section>

        {/* Slide 3 - The Metric */}
        <section
          className={`${
            isPdfMode ? "min-h-[calc(100vh-8rem)]" : "min-h-screen"
          } flex flex-col justify-center`}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              isPdfMode
                ? "text-4xl font-bold text-black mb-8"
                : "text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8"
            }`}
          >
            {replacePlaceholders(t.slide3.headline)}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.slide3.metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`${
                  isPdfMode
                    ? "border border-gray-300 rounded-lg p-6"
                    : "bg-white/5 border border-white/10 rounded-lg p-6"
                }`}
              >
                <h3
                  className={`${
                    isPdfMode
                      ? "text-xl font-semibold text-black mb-2"
                      : "text-lg font-semibold text-white mb-2"
                  }`}
                >
                  {metric.label}
                </h3>
                <p
                  className={`${
                    isPdfMode
                      ? "text-base text-gray-600"
                      : "text-sm text-[#C2C2E1]"
                  }`}
                >
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Slide 4 - The Governance Gap */}
        <section
          className={`${
            isPdfMode ? "min-h-[calc(100vh-8rem)]" : "min-h-screen"
          } flex flex-col justify-center`}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              isPdfMode
                ? "text-4xl font-bold text-black mb-6"
                : "text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
            }`}
          >
            {replacePlaceholders(t.slide4.headline)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${
              isPdfMode
                ? "text-lg text-gray-700 leading-relaxed"
                : "text-base md:text-lg text-[#C2C2E1] leading-relaxed"
            }`}
          >
            {t.slide4.content}
          </motion.p>
        </section>

        {/* Slide 5 - The Framework */}
        <section
          className={`${
            isPdfMode ? "min-h-[calc(100vh-8rem)]" : "min-h-screen"
          } flex flex-col justify-center`}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              isPdfMode
                ? "text-4xl font-bold text-black mb-8"
                : "text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8"
            }`}
          >
            {replacePlaceholders(t.slide5.headline)}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.slide5.framework.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`${
                  isPdfMode
                    ? "border border-gray-300 rounded-lg p-6"
                    : "bg-white/5 border border-white/10 rounded-lg p-6"
                }`}
              >
                <h3
                  className={`${
                    isPdfMode
                      ? "text-xl font-semibold text-black mb-2"
                      : "text-lg font-semibold text-white mb-2"
                  }`}
                >
                  {item.step}
                </h3>
                <p
                  className={`${
                    isPdfMode
                      ? "text-sm text-gray-600"
                      : "text-sm text-[#C2C2E1]"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Slide 6 - The Decision */}
        <section
          className={`${
            isPdfMode ? "min-h-[calc(100vh-8rem)]" : "min-h-screen"
          } flex flex-col justify-center`}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              isPdfMode
                ? "text-4xl font-bold text-black mb-8"
                : "text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8"
            }`}
          >
            {replacePlaceholders(t.slide6.headline)}
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.ateneai.com/demo"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isPdfMode
                  ? "px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-center font-medium"
                  : "px-6 py-3 bg-[#C2C2E1] text-black rounded-md hover:bg-[#C2C2E1]/90 transition-colors text-center font-medium"
              }`}
            >
              {replacePlaceholders(t.slide6.cta1)}
            </a>
            <a
              href="https://www.ateneai.com/demo"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isPdfMode
                  ? "px-6 py-3 border-2 border-black text-black rounded-md hover:bg-gray-100 transition-colors text-center font-medium"
                  : "px-6 py-3 bg-white/10 text-white border border-white/30 rounded-md hover:bg-white/20 transition-colors text-center font-medium"
              }`}
            >
              {replacePlaceholders(t.slide6.cta2)}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
