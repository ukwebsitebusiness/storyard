import { Metadata } from "next";
import { Suspense } from "react";
import SearchPageInner from "./SearchPageInner";

export const metadata: Metadata = {
  title: "Find Storage — Isle of Man",
  description:
    "Search and compare storage options across the Isle of Man. Filter by location, type, price and more.",
};

export default function StoragePage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-10 text-center text-slate-600">Loading…</div>}>
      <SearchPageInner />
    </Suspense>
  );
}
