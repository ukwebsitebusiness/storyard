import { operators } from "@/src/data/operators";
import ListingCard from "@/src/components/ListingCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage Operators on the Isle of Man — Storyard",
  description: "Browse storage operators across the Isle of Man. Compare facilities, locations and storage types.",
};

export default function OperatorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-extrabold text-slate-900">Storage operators</h1>
      <p className="mt-2 text-slate-600">
        Browse all storage operators listed on Storyard across the Isle of Man.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {operators.map((op) => (
          <ListingCard key={op.slug} operator={op} />
        ))}
      </div>
    </div>
  );
}
