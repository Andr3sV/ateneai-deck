"use client";

import { useEffect } from "react";
import { MangoHeroExecutive } from "./abm/mango-hero-executive";
import { ContextShiftSlide } from "./abm/context-shift-slide";
import { StructuralRiskSlide } from "./abm/structural-risk-slide";
import { CompetitivePerceptionSlide } from "./abm/competitive-perception-slide";
import { WhatAteneAISlide } from "./abm/what-ateneai-slide";
import { EnterpriseImplementationSlide } from "./abm/enterprise-implementation-slide";
import { StrategicOutcomesExecutive } from "./abm/strategic-outcomes-executive";
import { EngagementProposalExecutive } from "./abm/engagement-proposal-executive";
import { mangoABMOverrides } from "@/lib/content/mango-overrides";

export function MangoABMPage() {
  useEffect(() => {
    // Ensure scrolling is enabled
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  const overrides = mangoABMOverrides;

  return (
    <div className="bg-[#151515] text-white min-h-screen overflow-auto">
      {/* SLIDE 1 — HERO */}
      <section className="min-h-screen">
        <MangoHeroExecutive
          headline={overrides.hero.headline}
          subheadline={overrides.hero.subheadline}
          cta={overrides.hero.cta}
        />
      </section>

      {/* SLIDE 2 — CONTEXT SHIFT */}
      <section className="min-h-screen">
        <ContextShiftSlide
          headline={overrides.contextShift.headline}
          subheadline={overrides.contextShift.subheadline}
        />
      </section>

      {/* SLIDE 3 — STRUCTURAL RISK */}
      <section className="min-h-screen">
        <StructuralRiskSlide
          headline={overrides.structuralRisk.headline}
          subheadline={overrides.structuralRisk.subheadline}
          statements={overrides.structuralRisk.statements}
        />
      </section>

      {/* SLIDE 4 — COMPETITIVE PERCEPTION */}
      <section className="min-h-screen">
        <CompetitivePerceptionSlide
          headline={overrides.competitivePerception.headline}
          subheadline={overrides.competitivePerception.subheadline}
          note={overrides.competitivePerception.note}
        />
      </section>

      {/* SLIDE 5 — WHAT ATENEAI INTRODUCES */}
      <section className="min-h-screen">
        <WhatAteneAISlide
          title={overrides.whatAteneAI.title}
          layers={overrides.whatAteneAI.layers}
        />
      </section>

      {/* SLIDE 6 — ENTERPRISE IMPLEMENTATION */}
      <section className="min-h-screen">
        <EnterpriseImplementationSlide
          headline={overrides.enterpriseImplementation.headline}
          blocks={overrides.enterpriseImplementation.blocks}
        />
      </section>

      {/* SLIDE 7 — STRATEGIC OUTCOMES */}
      <section className="min-h-screen">
        <StrategicOutcomesExecutive
          headline={overrides.strategicOutcomes.headline}
          outcomes={overrides.strategicOutcomes.outcomes}
        />
      </section>

      {/* SLIDE 8 — ENGAGEMENT PROPOSAL */}
      <section className="min-h-screen">
        <EngagementProposalExecutive
          headline={overrides.engagementProposal.headline}
          deliverables={overrides.engagementProposal.deliverables}
          cta={overrides.engagementProposal.cta}
        />
      </section>
    </div>
  );
}
