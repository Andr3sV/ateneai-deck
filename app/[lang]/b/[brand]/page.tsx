import { Suspense } from "react";
import { MangoABMPage } from "@/components/deck/mango-abm-page";
import { getContent, hasContent } from "@/lib/content/index";
import type { Language } from "@/lib/content/index";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const fallback = (
  <div className="fixed inset-0 flex items-center justify-center bg-[#151515] text-white">
    Loading...
  </div>
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; brand: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang === "es" ? "es" : "en";
  
  // Only Mango is supported for now
  if (resolvedParams.brand !== "mango") {
    return {
      title: "Brand Page Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  
  try {
    const content = getContent(lang, "abm", "mango");
    return {
      title: `AI Visibility Report: Mango Group`,
      description: content.hero.subheadline,
      robots: {
        index: false,
        follow: false,
      },
    };
  } catch {
    return {
      title: "AI Visibility Report",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function ABMBrandPageRoute({
  params,
}: {
  params: Promise<{ lang: string; brand: string }>;
}) {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === "es" ? "es" : "en") as Language;
  
  // Only Mango is supported for now
  if (resolvedParams.brand !== "mango") {
    return (
      <div className="bg-[#151515] text-white min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <h1 className="text-3xl font-semibold mb-4">Brand page not found</h1>
          <p className="text-[#C2C2E1] mb-6">
            The brand page for "{resolvedParams.brand}" is not available.
          </p>
          <a
            href="https://www.ateneai.com/demo"
            className="px-6 py-3 bg-[#C2C2E1] text-black rounded-md hover:bg-[#C2C2E1]/90 transition-colors inline-block"
          >
            Request AI Visibility Audit
          </a>
        </div>
      </div>
    );
  }
  
  // Dev check: warn if content missing
  if (process.env.NODE_ENV === "development" && !hasContent(lang, "abm", "mango")) {
    console.error(`[DEV] Missing mango ABM content for language: ${lang}`);
  }
  
  const content = getContent(lang, "abm", "mango");

  return (
    <Suspense fallback={fallback}>
      <MangoABMPage language={lang} content={content} />
    </Suspense>
  );
}
