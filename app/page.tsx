import { Suspense } from "react";
import { DeckViewSelector } from "@/components/deck/deck-view-selector";

export default function Home() {
  return (
    <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center bg-[#151515] text-white">Loading...</div>}>
      <DeckViewSelector />
    </Suspense>
  );
}
