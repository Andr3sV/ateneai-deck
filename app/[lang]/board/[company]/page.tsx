import { Suspense } from "react";
import { BoardView } from "@/components/deck/board-view";
import { getBoardPersonalization } from "@/lib/personalization";
import { getContent, hasContent } from "@/lib/content/index";
import type { Language } from "@/lib/content/index";

const fallback = (
  <div className="fixed inset-0 flex items-center justify-center bg-[#151515] text-white">
    Loading...
  </div>
);

export default async function BoardCompanyPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string; company: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedParams.lang === "es" ? "es" : "en") as Language;
  
  // Dev check: warn if content missing
  if (process.env.NODE_ENV === "development" && !hasContent(lang, "board")) {
    console.error(`[DEV] Missing board content for language: ${lang}`);
  }
  
  const content = getContent(lang, "board");
  const personalization = getBoardPersonalization(
    resolvedParams.company,
    resolvedSearchParams as Record<string, string | string[] | undefined>
  );
  const mode = resolvedSearchParams.mode === "pdf" ? "pdf" : "web";

  return (
    <Suspense fallback={fallback}>
      <BoardView personalization={personalization} mode={mode} language={lang} content={content} />
    </Suspense>
  );
}
