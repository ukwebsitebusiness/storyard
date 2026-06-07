"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { operators } from "@/src/data/operators";
import { getPriceFromForOperator } from "@/src/data/prices";
import ListingCard from "@/src/components/ListingCard";
import { SlidersHorizontal, X } from "lucide-react";

export default function SearchPageInner() {
  const searchParams = useSearchParams();
  const [locationFilter, setLocationFilter] = useState(searchParams.get("location") || "");
  const [typeFilter, setTypeFilter] = useState(searchParams.get("type") || "");
  const [priceFrom, setPriceFrom] = useState("");
  const [showUnclaimed, setShowUnclaimed] = useState(false);
  const [showWithPrice, setShowWithPrice] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState<"relevance" | "price-asc" | "price-desc">("relevance");

  const allLocations = Array.from(new Set(operators.flatMap((o) => o.locations))).sort();
  const allTypes = Array.from(new Set(operators.flatMap((o) => o.storageTypes))).sort();

  const filtered = useMemo(() => {
    let results = [...operators];

    if (locationFilter) {
      results = results.filter((o) =>
        o.locations.some((l) => l.toLowerCase().includes(locationFilter.toLowerCase()))
      );
    }
    if (typeFilter) {
      results = results.filter((o) =>
        o.storageTypes.some((t) => t.toLowerCase().includes(typeFilter.toLowerCase()))
      );
    }
    if (showUnclaimed) {
      results = results.filter((o) => !o.claimed);
    }
    if (showWithPrice) {
      results = results.filter((o) => getPriceFromForOperator(o.slug) !== null);
    }

    if (sortBy === "price-asc") {
      results.sort((a, b) => {
        const pa = getPriceFromForOperator(a.slug)?.price ?? Infinity;
        const pb = getPriceFromForOperator(b.slug)?.price ?? Infinity;
        return pa - pb;
      });
    } else if (sortBy === "price-desc") {
      results.sort((a, b) => {
        const pa = getPriceFromForOperator(a.slug)?.price ?? -Infinity;
        const pb = getPriceFromForOperator(b.slug)?.price ?? -Infinity;
        return pb - pa;
      });
    }

    return results;
  }, [locationFilter, typeFilter, showUnclaimed, showWithPrice, sortBy]);

  const activeFiltersCount = [locationFilter, typeFilter, priceFrom, showUnclaimed, showWithPrice].filter(Boolean).length;

  function clearFilters() {
    setLocationFilter("");
    setTypeFilter("");
    setPriceFrom("");
    setShowUnclaimed(false);
    setShowWithPrice(false);
    setSortBy("relevance");
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Find storage</h1>
          <p className="mt-1 text-sm text-slate-600">{filtered.length} option{filtered.length !== 1 ? "s" : ""} found</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
          >
            <option value="relevance">Sort by relevance</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>
        </div>
      </div>

      <div className="mt-5 flex gap-6">
        {/* Desktop filters */}
        <aside className="hidden w-64 shrink-0 md:block">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900">Filters</h3>
              {activeFiltersCount > 0 && (
                <button onClick={clearFilters} className="text-xs text-teal-700 hover:underline">
                  Clear all
                </button>
              )}
            </div>

            <div className="mt-4">
              <label className="text-xs font-medium text-slate-500">Location</label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
              >
                <option value="">All locations</option>
                {allLocations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <label className="text-xs font-medium text-slate-500">Storage type</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
              >
                <option value="">All types</option>
                {allTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="mt-4 space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showUnclaimed}
                  onChange={(e) => setShowUnclaimed(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-teal-600"
                />
                <span className="text-sm text-slate-700">Unclaimed listings</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showWithPrice}
                  onChange={(e) => setShowWithPrice(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-teal-600"
                />
                <span className="text-sm text-slate-700">Has price data</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Results */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
              <p className="text-lg font-semibold text-slate-900">No results found</p>
              <p className="mt-2 text-sm text-slate-600">Try adjusting your filters or request a quote and we will help you find storage.</p>
              <button
                onClick={clearFilters}
                className="mt-4 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {filtered.map((op) => (
                <ListingCard key={op.slug} operator={op} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 rounded-t-2xl bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-slate-500">Location</label>
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900"
                >
                  <option value="">All locations</option>
                  {allLocations.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500">Storage type</label>
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900"
                >
                  <option value="">All types</option>
                  {allTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={showUnclaimed} onChange={(e) => setShowUnclaimed(e.target.checked)} className="h-4 w-4" />
                  <span className="text-sm text-slate-700">Unclaimed listings</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={showWithPrice} onChange={(e) => setShowWithPrice(e.target.checked)} className="h-4 w-4" />
                  <span className="text-sm text-slate-700">Has price data</span>
                </label>
              </div>
              <div className="flex gap-2 pt-2">
                <button onClick={clearFilters} className="flex-1 rounded-lg border border-slate-200 py-2.5 text-sm font-medium text-slate-700">
                  Clear
                </button>
                <button onClick={() => setMobileFiltersOpen(false)} className="flex-1 rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white">
                  Show {filtered.length} results
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
