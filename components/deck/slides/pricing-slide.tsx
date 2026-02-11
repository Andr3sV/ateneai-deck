"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const PLAN_IDS = ["business", "growth", "enterprise"] as const;
const PRICES = [
  { priceMonthly: "40.83", priceMonthlyOriginal: "49.00", priceYearly: "490.00", showPrice: true, popular: false },
  { priceMonthly: "82.50", priceMonthlyOriginal: "99.00", priceYearly: "990.00", showPrice: true, popular: true },
  { priceMonthly: null, priceMonthlyOriginal: null, priceYearly: null, showPrice: false, popular: false },
];

export function PricingSlide() {
  const { language } = useLanguage();
  const t = translations[language].pricing;
  const plans = t.plans.map((plan, i) => ({
    id: PLAN_IDS[i],
    ...plan,
    ...PRICES[i],
  }));

  return (
    <div className="relative w-full h-full flex items-center justify-center px-4 py-6 bg-[#151515] overflow-auto max-md:items-start max-md:justify-center max-md:pt-8 max-md:pb-24">
      <div className="w-[80%] mx-auto">
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
                  {t.mostPopular}
                </span>
              )}
              <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
              <p className="text-xs text-[#A0A0A0] mb-4 line-clamp-2">{plan.description}</p>
              {plan.showPrice ? (
                <>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white">{plan.priceMonthly} €</span>
                    <span className="text-sm text-[#A0A0A0]"> {t.perMonth}</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-[#606060] line-through">
                        {plan.priceMonthlyOriginal} €{t.perMonth}
                      </span>
                      <span className="text-xs text-[#A0A0A0]">{plan.priceYearly} €{t.perYear}</span>
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
                    {t.startFreeTrial}
                  </button>
                </>
              ) : (
                <>
                  <div className="mb-4 min-h-[4.5rem] flex items-center">
                    <span className="text-lg text-[#A0A0A0]">{t.customPricing}</span>
                  </div>
                  <button
                    type="button"
                    className="w-full py-2.5 rounded-lg text-sm font-medium bg-transparent border border-[#C2C2E1]/50 text-white hover:border-[#C2C2E1] transition-colors"
                  >
                    {t.contactUs}
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
