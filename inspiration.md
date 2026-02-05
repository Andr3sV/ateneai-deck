"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  Shield,
  Globe
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LandingHeader from "@/components/landing/landing-header";
import LandingFooter from "@/components/landing/landing-footer";
import LandingBackground from "@/components/landing/landing-background";
import ClientLogosMarquee from "@/components/landing/client-logos-marquee";
import StatsSection from "@/components/landing/stats-section";
import CtaSection from "@/components/landing/cta-section";
import GradualBlur from "@/components/landing/gradual-blur";
import MagicBento from "@/components/landing/magic-bento";
import SpotlightCard from "@/components/landing/spotlight-card";

const brands = ["Gemini", "ChatGPT"];

export default function Home() {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col relative">
      <LandingBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-[#151515]">
        {/* Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#7c3aed]/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <LandingHeader navLinks={[{ href: "#optimize-your-brand", label: "Features" }, { href: "/for-agencies", label: "For Agencies" }]} />

        <div className="container relative mx-auto px-4 max-w-6xl text-center z-10 pt-24 lg:pt-28 flex flex-col min-h-[calc(100vh-6rem)]">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-default bg-transparent text-white whitespace-nowrap border border-white">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#D0D0D0]"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D0D0D0]"></span>
              </span>
              AI Search Optimization Intelligence
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light font-display tracking-tight leading-[1.1] mb-8 text-white">
            Become the brand everyone
            <br />
            is talking about on
            <br />
            <span className="inline-block relative overflow-hidden h-[1.2em] align-middle">
              {" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={brands[currentBrandIndex]}
                  initial={{
                    opacity: 0,
                    filter: "blur(8px)"
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)"
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(8px)"
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  className="text-gradient"
                >
                  {brands[currentBrandIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light text-[#E0E0E0]">
          We help your brand show up and be recommended in AI chatbots,<strong className="font-semibold text-[#E0E0E0]"> turning that visibility into intelligence for smarter marketing.</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link href="/demo">
              <button className="w-full sm:w-auto h-12 px-8 rounded-md text-black font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 group bg-[#C2C2E1]">
                Start Monitoring
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="/demo">
              <button className="w-full sm:w-auto h-12 px-8 rounded-md bg-white text-slate-600 border border-slate-200 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all">
                Get a Demo
              </button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-4xl mx-auto mt-auto overflow-hidden animated-border">
            <div className="border-scan-left"></div>
            <Image
              src="/images/web-page/heroimage.png"
              alt="AteneAI Dashboard"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover relative z-0"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      <StatsSection />

      <ClientLogosMarquee />

      {/* Magic Bento Section */}
      <section id="optimize-your-brand" className="py-12 md:py-16 relative bg-[#151515]">
        <div className="container mx-auto px-4 max-w-[70rem]">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge variant="outline" className="mb-4 text-white border-white/50">
              Features
            </Badge>
            <h2 className="mb-4 text-3xl font-light tracking-tight sm:text-4xl md:text-5xl text-white">
              Everything you need to
              <span className="block text-[#C2C2E1]">optimize your brand</span>
            </h2>
            <p className="text-lg text-[#E0E0E0]">
              Comprehensive tools to track, analyze, and improve your presence in AI responses
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="194, 194, 225"
            />
          </div>
        </div>
      </section>

      {/* Brand Storytelling Control Section */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
              Take Control of Your
              <span className="block text-[#C2C2E1]">Brand Storytelling</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Monitor and optimize how your brand and competitors are positioned across AI platforms
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative overflow-hidden border-[3px] border-[#C2C2E1] rounded-3xl">
              <Image
                src="/images/web-page/attributes.png"
                alt="Brand Storytelling Control Dashboard"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                priority
                unoptimized
              />
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-center mt-12">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Gain complete visibility into how AI platforms position your brand and competitors.
              <strong className="font-semibold text-foreground"> Control your narrative</strong> by understanding
              which themes and attributes are associated with your brand, and strategically optimize your
              positioning to stand out in AI-generated responses.
            </p>
          </div>
        </div>
      </section>

      {/* Real-Time Insights Section */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
              Real-Time Insights
              <span className="block text-[#C2C2E1]">Competitive Advantage</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover opportunities and gain strategic insights to outperform competitors
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative overflow-hidden border-[3px] border-[#C2C2E1] rounded-3xl">
              <Image
                src="/images/web-page/opportunity.png"
                alt="Real-Time Insights and Opportunities Dashboard"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                priority
                unoptimized
              />
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-center mt-12">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              AteneAI delivers <strong className="font-semibold text-foreground">real-time insights and opportunities</strong> that give you a
              significant competitive advantage. Identify gaps, track competitor strategies, and discover
              untapped opportunities to position your brand more effectively in LLMs and across the entire
              digital ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-3">
              <BenefitCard
                icon={Zap}
                title="Lightning Fast"
                description="Real-time tracking and instant notifications when your brand is mentioned"
              />
              <BenefitCard
                icon={Shield}
                title="Secure & Private"
                description="Enterprise-grade security to protect your data and brand information"
              />
              <BenefitCard
                icon={Globe}
                title="Multi-Platform"
                description="Track across all major AI platforms from a single unified dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
              What brands say
            </h2>
            <p className="text-lg text-muted-foreground">
              See how companies are transforming their AI visibility strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <SpotlightCard className="!bg-white !border-slate-200" spotlightColor="rgba(194, 194, 225, 0.5)">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/testimonial/guaya.png"
                      alt="Carlos Guayara"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Carlos Guayara</h3>
                    <p className="text-sm text-muted-foreground">Cofounder - CMO, Trii (YC S21)</p>
                  </div>
                  <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/testimonial/trii.png"
                      alt="Company logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  &ldquo;AteneAI has transformed how we understand our brand&apos;s presence in AI responses. The real-time insights help us make data-driven decisions that actually move the needle.&rdquo;
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="!bg-white !border-slate-200" spotlightColor="rgba(194, 194, 225, 0.5)">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/testimonial/juan.png"
                      alt="Juan Cardozo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Juan Cardozo</h3>
                    <p className="text-sm text-muted-foreground">Chief Executive Officer, Intercard</p>
                  </div>
                  <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/testimonial/intercard.png"
                      alt="Intercard Solutions"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  &ldquo;The competitive intelligence features are game-changing. We can track our AI visibility against competitors and identify opportunities before they do. It&apos;s become essential to our strategy.&rdquo;
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      <CtaSection />

      <GradualBlur
        position="bottom"
        height="8rem"
        strength={2.5}
        divCount={6}
        curve="bezier"
        exponential={true}
        opacity={1}
        target="page"
        style={{ zIndex: 10 }}
      />

      <LandingFooter productLinks={[{ href: "#optimize-your-brand", label: "Features" }]} />
    </div>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#C2C2E1]/20">
        <Icon className="h-7 w-7 text-[#C2C2E1]" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
