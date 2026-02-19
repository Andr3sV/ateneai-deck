"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MangoHeroExecutive } from "./abm/mango-hero-executive";
import { mangoABMOverrides } from "@/lib/content/mango-overrides";
import { mangoTranslations } from "@/lib/content/mango-translations";
import { TranslationsOverrideProvider } from "@/lib/translations-context";
import { MangoImagesProvider } from "@/lib/mango-images-context";
import { useLanguage } from "@/lib/language-context";
import { SlideTransition } from "./slide-transition";
import { ProblemSlide } from "./slides/problem-slide";
import { SolutionOverviewSlide } from "./slides/solution-overview-slide";
import { ShareOfVoiceSlide } from "./slides/share-of-voice-slide";
import { CitationTrackingSlide } from "./slides/citation-tracking-slide";
import { SentimentAnalysisSlide } from "./slides/sentiment-analysis-slide";
import { PlatformPerformanceSlide } from "./slides/platform-performance-slide";
import { SlideGlobalIntelligenceLocalReachES } from "./slides/global-intelligence-slide";
import { ExecutiveOverviewSlide } from "./slides/executive-overview-slide";
import { ReportsSlide } from "./slides/reports-slide";
import { OpportunitiesSlide } from "./slides/opportunities-slide";
import { CitationEvidenceSlide } from "./slides/citation-evidence-slide";
import { CompetitiveDifferentiatorsSlide } from "./slides/competitive-differentiators-slide";
import { PainPointsSlide } from "./slides/pain-points-slide";
import { UseCasesSlide } from "./slides/use-cases-slide";
import { CtaSlide } from "./slides/cta-slide";

const TOTAL_SLIDES = 16;

export function MangoABMPage() {
  const { language } = useLanguage();
  const overrides = mangoABMOverrides;
  const hero = overrides.heroByLang[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const goNext = useCallback(() => {
    if (currentIndex >= TOTAL_SLIDES - 1) return;
    setDirection(1);
    setCurrentIndex((i) => i + 1);
  }, [currentIndex]);

  const goPrev = useCallback(() => {
    if (currentIndex <= 0) return;
    setDirection(-1);
    setCurrentIndex((i) => i - 1);
  }, [currentIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const safeIndex = Math.min(Math.max(0, currentIndex), TOTAL_SLIDES - 1);

  const slides: React.ReactNode[] = [
    <section key="0" className="min-h-screen w-full flex items-center justify-center">
      <MangoHeroExecutive
        headline={hero.headline}
        subheadline={hero.subheadline}
        cta={hero.cta}
      />
    </section>,
    <section key="1" className="min-h-screen w-full flex items-center justify-center">
      <ProblemSlide />
    </section>,
    <section key="2" className="min-h-screen w-full flex items-center justify-center">
      <SolutionOverviewSlide />
    </section>,
    <section key="3" className="min-h-screen w-full flex items-center justify-center">
      <ShareOfVoiceSlide />
    </section>,
    <section key="4" className="min-h-screen w-full flex items-center justify-center">
      <CitationTrackingSlide />
    </section>,
    <section key="5" className="min-h-screen w-full flex items-center justify-center">
      <SentimentAnalysisSlide />
    </section>,
    <section key="6" className="min-h-screen w-full flex items-center justify-center">
      <PlatformPerformanceSlide />
    </section>,
    <section key="7" className="min-h-screen w-full flex items-center justify-center">
      <SlideGlobalIntelligenceLocalReachES />
    </section>,
    <section key="8" className="min-h-screen w-full flex items-center justify-center">
      <ExecutiveOverviewSlide />
    </section>,
    <section key="9" className="min-h-screen w-full flex items-center justify-center">
      <ReportsSlide />
    </section>,
    <section key="10" className="min-h-screen w-full flex items-center justify-center">
      <OpportunitiesSlide />
    </section>,
    <section key="11" className="min-h-screen w-full flex items-center justify-center">
      <CitationEvidenceSlide />
    </section>,
    <section key="12" className="min-h-screen w-full flex items-center justify-center">
      <CompetitiveDifferentiatorsSlide />
    </section>,
    <section key="13" className="min-h-screen w-full flex items-center justify-center">
      <PainPointsSlide />
    </section>,
    <section key="14" className="min-h-screen w-full flex items-center justify-center">
      <UseCasesSlide />
    </section>,
    <section key="15" className="min-h-screen w-full flex items-center justify-center">
      <CtaSlide />
    </section>,
  ];

  const currentSlide = slides[safeIndex];

  return (
    <TranslationsOverrideProvider translations={mangoTranslations}>
      <MangoImagesProvider>
      <div
        ref={containerRef}
        className="fixed inset-0 flex flex-col bg-[#151515] text-white overflow-hidden"
      >
        <div className="flex-1 relative min-h-0 overflow-hidden">
          <SlideTransition currentIndex={safeIndex} direction={direction}>
            <div key={safeIndex} className="absolute inset-0 flex items-center justify-center">
              {currentSlide}
            </div>
          </SlideTransition>

          <div className="absolute inset-y-0 left-0 flex items-center z-10 pointer-events-none">
            <button
              type="button"
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="pointer-events-auto ml-4 md:ml-6 p-3 rounded-full bg-white/[0.06] hover:bg-[#C2C2E1]/15 border border-white/10 hover:border-[#C2C2E1]/40 text-white/70 hover:text-[#C2C2E1] disabled:opacity-25 disabled:pointer-events-none transition-all duration-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.75} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-10 pointer-events-none">
            <button
              type="button"
              onClick={goNext}
              disabled={currentIndex >= TOTAL_SLIDES - 1}
              className="pointer-events-auto mr-4 md:mr-6 p-3 rounded-full bg-white/[0.06] hover:bg-[#C2C2E1]/15 border border-white/10 hover:border-[#C2C2E1]/40 text-white/70 hover:text-[#C2C2E1] disabled:opacity-25 disabled:pointer-events-none transition-all duration-200"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
      </MangoImagesProvider>
    </TranslationsOverrideProvider>
  );
}
