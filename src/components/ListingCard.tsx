"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, MapPin, Tag } from "lucide-react";
import { Operator } from "@/src/data/operators";
import { getPriceFromForOperator } from "@/src/data/prices";

export default function ListingCard({ operator }: { operator: Operator }) {
  const priceFrom = getPriceFromForOperator(operator.slug);

  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-lg hover:border-slate-300">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{operator.name}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            {operator.locations.slice(0, 3).map((loc) => (
              <span key={loc} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                <MapPin className="h-3 w-3" /> {loc}
              </span>
            ))}
            {operator.locations.length > 3 && (
              <span className="text-xs text-slate-500">+{operator.locations.length - 3} more</span>
            )}
          </div>
        </div>
        {!operator.claimed && (
          <span className="shrink-0 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 border border-amber-100">
            Listing not yet claimed
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-slate-600 line-clamp-2">{operator.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {operator.storageTypes.map((t) => (
          <span key={t} className="inline-flex items-center gap-1 rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-800">
            <Tag className="h-3 w-3" /> {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          {priceFrom ? (
            <div className="text-sm text-slate-900">
              From <span className="text-lg font-bold">£{priceFrom.price}</span>{" "}
              <span className="text-xs text-slate-500">{priceFrom.period}</span>
            </div>
          ) : (
            <span className="text-sm font-medium text-slate-500">Request quote</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {operator.websiteStatus === "WORKING" && operator.website && (
            <a
              href={operator.website.startsWith("http") ? operator.website : `https://${operator.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Website
            </a>
          )}
          <Link
            href={`/storage/${operator.slug}/`}
            className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white hover:bg-slate-800"
          >
            View <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
