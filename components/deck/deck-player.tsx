"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
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
import { CompetitiveDifferentiatorsSlide } from "./slides/competitive-differentiators-slide";
import { UseCasesSlide } from "./slides/use-cases-slide";
import { RoiValueSlide } from "./slides/roi-value-slide";
import { IntegrationSlide } from "./slides/integration-slide";

// All available slides
const ALL_SLIDES = {
  hero: { id: "hero", Component: HeroSlide },
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
    ALL_SLIDES.roiValue,
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
    ALL_SLIDES.competitiveDifferentiators,
    ALL_SLIDES.painPoints,
    ALL_SLIDES.useCases,
    ALL_SLIDES.roiValue,
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
    ALL_SLIDES.competitiveDifferentiators,
    ALL_SLIDES.useCases,
    ALL_SLIDES.roiValue,
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

type VersionType = keyof typeof VERSIONS;

export function DeckPlayer() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const versionParam = (searchParams.get("version") || "default") as VersionType;
  const version = Object.keys(VERSIONS).includes(versionParam) ? versionParam : "default";
  const SLIDES = VERSIONS[version];
  const TOTAL = SLIDES.length;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isBarVisible, setIsBarVisible] = useState(false);
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

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
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

        {/* Navigation arrows - always visible on desktop, visible on mobile */}
        <div className="absolute inset-y-0 left-0 flex items-center z-10 pointer-events-none">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="pointer-events-auto ml-4 p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white/80 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
            <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white/60 whitespace-nowrap hidden md:block">
              ← Anterior
            </span>
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center z-10 pointer-events-none">
          <button
            type="button"
            onClick={goNext}
            disabled={currentIndex === TOTAL - 1}
            className="pointer-events-auto mr-4 p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white/80 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all group"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
            <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white/60 whitespace-nowrap hidden md:block">
              Siguiente →
            </span>
          </button>
        </div>
      </div>

      {/* Zona inferior: barra de navegación siempre visible */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20"
        onMouseEnter={() => setIsBarVisible(true)}
        onMouseLeave={() => setIsBarVisible(false)}
      >
        {/* Navigation hint - visible on hover */}
        {isBarVisible && (
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 px-4 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg border border-white/20 text-xs text-white/80 whitespace-nowrap">
            Usa las flechas ← → o la barra espaciadora para navegar
          </div>
        )}
        
        {/* Canva-like bottom bar: siempre visible pero con opacidad reducida cuando no hay hover */}
        <div
          className={`h-14 md:h-16 px-4 flex items-center justify-between bg-[#1F2023] border-t border-white/10 relative transition-all duration-300 ease-out ${
            isBarVisible ? "opacity-100" : "opacity-60 md:opacity-40"
          }`}
        >
        <div className="flex items-center gap-2 flex-1 min-w-0 justify-start">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-white/90 tabular-nums min-w-[4rem] text-center">
            {currentIndex + 1} / {TOTAL}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={currentIndex === TOTAL - 1}
            className="p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Progress bar - centrada en desktop, a la derecha en móvil */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-0.5 w-48 justify-center">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className="h-1.5 rounded-sm min-w-[8px] flex-1 max-w-[24px] transition-colors focus:outline-none focus:ring-1 focus:ring-white/50"
              style={{
                backgroundColor: i === currentIndex ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
          {/* Progress bar móvil - a la izquierda del botón expandir */}
          <div className="flex md:hidden items-center gap-0.5 w-24 shrink-0">
            {Array.from({ length: TOTAL }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className="h-1.5 rounded-sm min-w-[6px] flex-1 max-w-[12px] transition-colors focus:outline-none focus:ring-1 focus:ring-white/50"
                style={{
                  backgroundColor: i === currentIndex ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          >
            {isFullscreen ? (
              <Minimize2 className="h-5 w-5" />
            ) : (
              <Maximize2 className="h-5 w-5" />
            )}
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
