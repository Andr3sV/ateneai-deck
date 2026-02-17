"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SlideTransition } from "./slide-transition";
import { useLanguage } from "@/lib/language-context";
import { HeroSlide } from "./slides/hero-slide";
import { StatsSlide } from "./slides/stats-slide";
import { AeoQuoteSlide } from "./slides/aeo-quote-slide";
import { FeaturesSlide } from "./slides/features-slide";
import { BrandStorytellingSlide } from "./slides/brand-storytelling-slide";
import { InsightsSlide } from "./slides/insights-slide";
import { PricingSlide } from "./slides/pricing-slide";
import { ReputationSlide } from "./slides/reputation-slide";
import { TestimonialsSlide } from "./slides/testimonials-slide";
import { CtaSlide } from "./slides/cta-slide";
import { ProblemSlide } from "./slides/problem-slide";
import { PainPointsSlide } from "./slides/pain-points-slide";
import { SolutionOverviewSlide } from "./slides/solution-overview-slide";
import { ShareOfVoiceSlide } from "./slides/share-of-voice-slide";
import { CitationTrackingSlide } from "./slides/citation-tracking-slide";
import { SentimentAnalysisSlide } from "./slides/sentiment-analysis-slide";
import { PlatformPerformanceSlide } from "./slides/platform-performance-slide";
import { ExecutiveOverviewSlide } from "./slides/executive-overview-slide";
import { ReportsSlide } from "./slides/reports-slide";
import { OpportunitiesSlide } from "./slides/opportunities-slide";
import { CitationEvidenceSlide } from "./slides/citation-evidence-slide";
import { CompetitiveDifferentiatorsSlide } from "./slides/competitive-differentiators-slide";
import { UseCasesSlide } from "./slides/use-cases-slide";
import { RoiValueSlide } from "./slides/roi-value-slide";
import { IntegrationSlide } from "./slides/integration-slide";

// All available slides
const ALL_SLIDES = {
  hero: { id: "hero", Component: HeroSlide },
  aeoQuote: { id: "aeo-quote", Component: AeoQuoteSlide },
  problem: { id: "problem", Component: ProblemSlide },
  painPoints: { id: "pain-points", Component: PainPointsSlide },
  stats: { id: "stats", Component: StatsSlide },
  solutionOverview: { id: "solution-overview", Component: SolutionOverviewSlide },
  features: { id: "features", Component: FeaturesSlide },
  shareOfVoice: { id: "share-of-voice", Component: ShareOfVoiceSlide },
  citationTracking: { id: "citation-tracking", Component: CitationTrackingSlide },
  sentimentAnalysis: { id: "sentiment-analysis", Component: SentimentAnalysisSlide },
  platformPerformance: { id: "platform-performance", Component: PlatformPerformanceSlide },
  executiveOverview: { id: "executive-overview", Component: ExecutiveOverviewSlide },
  reports: { id: "reports", Component: ReportsSlide },
  opportunities: { id: "opportunities", Component: OpportunitiesSlide },
  citationEvidence: { id: "citation-evidence", Component: CitationEvidenceSlide },
  competitiveDifferentiators: { id: "competitive-differentiators", Component: CompetitiveDifferentiatorsSlide },
  useCases: { id: "use-cases", Component: UseCasesSlide },
  roiValue: { id: "roi-value", Component: RoiValueSlide },
  integration: { id: "integration", Component: IntegrationSlide },
  brand: { id: "brand", Component: BrandStorytellingSlide },
  insights: { id: "insights", Component: InsightsSlide },
  pricing: { id: "pricing", Component: PricingSlide },
  reputation: { id: "reputation", Component: ReputationSlide },
  testimonials: { id: "testimonials", Component: TestimonialsSlide },
  cta: { id: "cta", Component: CtaSlide },
};

// Version configurations
const VERSIONS = {
  short: [
    ALL_SLIDES.hero,
    ALL_SLIDES.problem,
    ALL_SLIDES.solutionOverview,
    ALL_SLIDES.features,
    ALL_SLIDES.executiveOverview,
    ALL_SLIDES.competitiveDifferentiators,
    ALL_SLIDES.cta,
  ],
  full: [
    ALL_SLIDES.hero,
    ALL_SLIDES.problem,
    ALL_SLIDES.solutionOverview,
    ALL_SLIDES.shareOfVoice,
    ALL_SLIDES.citationTracking,
    ALL_SLIDES.sentimentAnalysis,
    ALL_SLIDES.platformPerformance,
    ALL_SLIDES.executiveOverview,
    ALL_SLIDES.reports,
    ALL_SLIDES.opportunities,
    ALL_SLIDES.citationEvidence,
    ALL_SLIDES.competitiveDifferentiators,
    ALL_SLIDES.painPoints,
    ALL_SLIDES.useCases,
    ALL_SLIDES.cta,
  ],
  hybrid: [
    ALL_SLIDES.hero,
    ALL_SLIDES.problem,
    ALL_SLIDES.solutionOverview,
    ALL_SLIDES.features,
    ALL_SLIDES.shareOfVoice,
    ALL_SLIDES.executiveOverview,
    ALL_SLIDES.reports,
    ALL_SLIDES.opportunities,
    ALL_SLIDES.citationEvidence,
    ALL_SLIDES.competitiveDifferentiators,
    ALL_SLIDES.useCases,
    ALL_SLIDES.cta,
  ],
  default: [
    ALL_SLIDES.hero,
    ALL_SLIDES.aeoQuote,
    ALL_SLIDES.features,
    ALL_SLIDES.brand,
    ALL_SLIDES.insights,
    ALL_SLIDES.reputation,
    ALL_SLIDES.cta,
  ],
} as const;

export type VersionType = keyof typeof VERSIONS;

const VERSION_KEYS = Object.keys(VERSIONS) as VersionType[];

export function DeckPlayer({ version: versionProp }: { version?: VersionType } = {}) {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const versionParam = (versionProp ?? searchParams.get("version") ?? "default") as VersionType;
  const version = VERSION_KEYS.includes(versionParam) ? versionParam : "default";
  const SLIDES = VERSIONS[version];
  const TOTAL = SLIDES.length;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ensure body overflow is hidden in presentation mode
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const goNext = useCallback(() => {
    if (currentIndex >= TOTAL - 1) return;
    setDirection(1);
    setCurrentIndex((i) => i + 1);
  }, [currentIndex, TOTAL]);

  const goPrev = useCallback(() => {
    if (currentIndex <= 0) return;
    setDirection(-1);
    setCurrentIndex((i) => i - 1);
  }, [currentIndex]);

  // Reset index when version changes or ensure it's within bounds
  useEffect(() => {
    if (currentIndex >= TOTAL || currentIndex < 0) {
      setCurrentIndex(0);
      setDirection(0);
    }
  }, [version, TOTAL, currentIndex]);

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

  // Ensure currentIndex is always valid
  const safeIndex = Math.min(currentIndex, Math.max(0, TOTAL - 1));
  const CurrentSlide = SLIDES[safeIndex]?.Component;
  
  if (!CurrentSlide) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#151515] text-white">
        <div>Error: Slide not found</div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="fixed inset-0 flex flex-col bg-[#151515]">
      {/* Slide area: padding top en móvil; el scroll lo manejan las slides individuales */}
      <div className="flex-1 relative min-h-0 overflow-hidden max-md:pt-6">
        <SlideTransition currentIndex={currentIndex} direction={direction} language={language}>
          <CurrentSlide />
        </SlideTransition>

        {/* Navigation arrows - minimal, accent #C2C2E1 */}
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
            disabled={currentIndex === TOTAL - 1}
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
