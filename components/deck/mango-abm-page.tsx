"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MangoHeroExecutive } from "./abm/mango-hero-executive";
import { ContextShiftSlide } from "./abm/context-shift-slide";
import { StructuralRiskSlide } from "./abm/structural-risk-slide";
import { CompetitivePerceptionSlide } from "./abm/competitive-perception-slide";
import { WhatAteneAISlide } from "./abm/what-ateneai-slide";
import { EnterpriseImplementationSlide } from "./abm/enterprise-implementation-slide";
import { StrategicOutcomesExecutive } from "./abm/strategic-outcomes-executive";
import { EngagementProposalExecutive } from "./abm/engagement-proposal-executive";
import { mangoABMOverrides } from "@/lib/content/mango-overrides";
import { SlideTransition } from "./slide-transition";

const TOTAL_SLIDES = 8;

export function MangoABMPage() {
  const overrides = mangoABMOverrides;
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
    <section key="1" className="min-h-screen w-full flex items-center justify-center">
      <MangoHeroExecutive
        headline={overrides.hero.headline}
        subheadline={overrides.hero.subheadline}
        cta={overrides.hero.cta}
      />
    </section>,
    <section key="2" className="min-h-screen w-full flex items-center justify-center">
      <ContextShiftSlide
        headline={overrides.contextShift.headline}
        subheadline={overrides.contextShift.subheadline}
      />
    </section>,
    <section key="3" className="min-h-screen w-full flex items-center justify-center">
      <StructuralRiskSlide
        headline={overrides.structuralRisk.headline}
        subheadline={overrides.structuralRisk.subheadline}
        statements={overrides.structuralRisk.statements}
      />
    </section>,
    <section key="4" className="min-h-screen w-full flex items-center justify-center">
      <CompetitivePerceptionSlide
        headline={overrides.competitivePerception.headline}
        subheadline={overrides.competitivePerception.subheadline}
        note={overrides.competitivePerception.note}
      />
    </section>,
    <section key="5" className="min-h-screen w-full flex items-center justify-center">
      <WhatAteneAISlide
        title={overrides.whatAteneAI.title}
        layers={overrides.whatAteneAI.layers}
      />
    </section>,
    <section key="6" className="min-h-screen w-full flex items-center justify-center">
      <EnterpriseImplementationSlide
        headline={overrides.enterpriseImplementation.headline}
        blocks={overrides.enterpriseImplementation.blocks}
      />
    </section>,
    <section key="7" className="min-h-screen w-full flex items-center justify-center">
      <StrategicOutcomesExecutive
        headline={overrides.strategicOutcomes.headline}
        outcomes={overrides.strategicOutcomes.outcomes}
      />
    </section>,
    <section key="8" className="min-h-screen w-full flex items-center justify-center">
      <EngagementProposalExecutive
        headline={overrides.engagementProposal.headline}
        deliverables={overrides.engagementProposal.deliverables}
        cta={overrides.engagementProposal.cta}
      />
    </section>,
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex flex-col bg-[#151515] text-white overflow-hidden"
    >
      <div className="flex-1 relative min-h-0 overflow-hidden">
        <SlideTransition currentIndex={safeIndex} direction={direction}>
          <div key={safeIndex} className="absolute inset-0 flex items-center justify-center">
            {slides[safeIndex]}
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
  );
}
