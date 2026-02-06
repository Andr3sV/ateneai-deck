"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const plans = [
  {
    id: "business",
    name: "Business",
    description: "For individuals and small teams getting started with AI search brand tracking.",
    priceMonthly: "40.83",
    priceMonthlyOriginal: "49.00",
    priceYearly: "490.00",
    showPrice: true,
    popular: false,
    features: [
      { text: "1 Project", included: true },
      { text: "40 Tracked Prompts (40 AI responses/week per model)", included: true },
      { text: "Weekly tracking · 5 Competitors", included: true },
      { text: "Models: ChatGPT, Perplexity, Gemini, Google AI", included: true },
      { text: "Data exports (CSV, Excel) · Unlimited team", included: true },
      { text: "Brand sentiment analysis", included: false },
      { text: "App stores citations · Looker Studio", included: false },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    description: "For growing businesses that need more prompts, team members and support.",
    priceMonthly: "82.50",
    priceMonthlyOriginal: "99.00",
    priceYearly: "990.00",
    showPrice: true,
    popular: true,
    features: [
      { text: "2 Projects", included: true },
      { text: "100 Tracked Prompts (100 AI responses/week per model)", included: true },
      { text: "Weekly tracking · 10 Competitors", included: true },
      { text: "Brand sentiment analysis · App stores citations", included: true },
      { text: "Data exports · Unlimited team · Higher priority support", included: true },
      { text: "Looker Studio connector", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations requiring extensive tracking and premium support.",
    priceMonthly: null,
    priceMonthlyOriginal: null,
    priceYearly: null,
    showPrice: false,
    popular: false,
    features: [
      { text: "5 Projects", included: true },
      { text: "300 Tracked Prompts (300 AI responses/week per model)", included: true },
      { text: "Weekly tracking · 15 Competitors", included: true },
      { text: "Brand sentiment · App stores · Looker Studio connector", included: true },
      { text: "Data exports · Unlimited team", included: true },
      { text: "Support (highest priority)", included: true },
    ],
  },
];

export function PricingSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-4 py-6 bg-[#151515] overflow-auto">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className={`relative flex flex-col rounded-2xl border p-5 md:p-6 bg-white/[0.03] min-h-[420px] ${
                plan.popular
                  ? "border-[#C2C2E1] shadow-[0_0_0_1px_rgba(194,194,225,0.3)]"
                  : "border-white/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 rounded-bl-lg rounded-tr-2xl bg-[#C2C2E1] px-3 py-1 text-xs font-medium text-[#151515]">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
              <p className="text-xs text-[#A0A0A0] mb-4 line-clamp-2">{plan.description}</p>
              {plan.showPrice ? (
                <>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white">{plan.priceMonthly} €</span>
                    <span className="text-sm text-[#A0A0A0]"> / month</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-[#606060] line-through">
                        {plan.priceMonthlyOriginal} €/month
                      </span>
                      <span className="text-xs text-[#A0A0A0]">{plan.priceYearly} €/year</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      plan.popular
                        ? "bg-[#C2C2E1] text-[#151515] hover:bg-[#C2C2E1]/90"
                        : "bg-transparent border border-[#C2C2E1]/50 text-white hover:border-[#C2C2E1]"
                    }`}
                  >
                    Start free trial
                  </button>
                </>
              ) : (
                <>
                  <div className="mb-4 min-h-[4.5rem] flex items-center">
                    <span className="text-lg text-[#A0A0A0]">Custom pricing</span>
                  </div>
                  <button
                    type="button"
                    className="w-full py-2.5 rounded-lg text-sm font-medium bg-transparent border border-[#C2C2E1]/50 text-white hover:border-[#C2C2E1] transition-colors"
                  >
                    Contact us
                  </button>
                </>
              )}
              <ul className="mt-4 space-y-2 flex-1 text-xs text-[#E0E0E0]">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    {f.included ? (
                      <Check className="h-3.5 w-3.5 text-[#C2C2E1] flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-3.5 w-3.5 text-[#606060] flex-shrink-0 mt-0.5" />
                    )}
                    <span className={f.included ? "" : "text-[#606060]"}>{f.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
