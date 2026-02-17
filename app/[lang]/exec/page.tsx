import { Suspense } from "react";
import { DeckViewSelector } from "@/components/deck/deck-view-selector";

const fallback = (
  <div className="fixed inset-0 flex items-center justify-center bg-[#151515] text-white">
    Loading...
  </div>
);

export default async function ExecPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  return (
    <Suspense fallback={fallback}>
      <DeckViewSelector version="exec" />
    </Suspense>
  );
}
