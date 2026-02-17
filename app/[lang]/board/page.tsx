import { Suspense } from "react";
import { BoardView } from "@/components/deck/board-view";
import { getPersonalizationFromParams } from "@/lib/personalization";

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
  const personalization = getPersonalizationFromParams(resolvedSearchParams);
  const mode = resolvedSearchParams.mode === "pdf" ? "pdf" : "web";

  return (
    <Suspense fallback={fallback}>
      <BoardView personalization={personalization} mode={mode} />
    </Suspense>
  );
}
