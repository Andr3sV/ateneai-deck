import { Suspense } from "react";
import { BoardView } from "@/components/deck/board-view";
import { getPersonalizationFromParams } from "@/lib/personalization";
import { getContent, hasContent } from "@/lib/content/index";
import type { Language } from "@/lib/content/index";

const fallback = (
  <div className="fixed inset-0 flex items-center justify-center bg-[#151515] text-white">
    Loading...
  </div>
);

export default async function BoardPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedParams.lang === "es" ? "es" : "en") as Language;

  if (process.env.NODE_ENV === "development" && !hasContent(lang, "board")) {
    console.error(`[DEV] Missing board content for language: ${lang}`);
  }

  const content = getContent(lang, "board");
  const personalization = getPersonalizationFromParams(resolvedSearchParams);
  const mode = resolvedSearchParams.mode === "pdf" ? "pdf" : "web";

  return (
    <Suspense fallback={fallback}>
      <BoardView personalization={personalization} mode={mode} language={lang} content={content} />
    </Suspense>
  );
}
