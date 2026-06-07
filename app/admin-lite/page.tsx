"use client";

import { useEffect, useState } from "react";
import { operators } from "@/src/data/operators";
import { prices } from "@/src/data/prices";

interface Submission {
  name?: string;
  businessName?: string;
  email?: string;
  type?: string;
  sourcePage?: string;
  submittedAt?: string;
}

export default function AdminLitePage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/quote")
      .then((r) => r.json())
      .then((data) => {
        if (data.submissions) setSubmissions(data.submissions as Submission[]);
      })
      .catch(() => setError("Could not load submissions. API routes are not available in static export mode."));
  }, []);

  const claimedCount = operators.filter((o) => o.claimed).length;
  const unclaimedCount = operators.length - claimedCount;
  const workingCount = operators.filter((o) => o.websiteStatus === "WORKING").length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-900">Admin Lite</h1>
      <p className="mt-1 text-sm text-slate-600">Overview of listings, prices and leads.</p>

      {error && (
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          {error} In production, connect a real database (PostgreSQL/Supabase/Neon) and replace the in-memory API route.
        </div>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-medium text-slate-500">Operators</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">{operators.length}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-medium text-slate-500">Claimed</p>
          <p className="mt-1 text-2xl font-bold text-teal-700">{claimedCount}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-medium text-slate-500">Unclaimed</p>
          <p className="mt-1 text-2xl font-bold text-amber-700">{unclaimedCount}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-medium text-slate-500">Working websites</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">{workingCount}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">Price overview by operator</h2>
        <p className="text-sm text-slate-600">{prices.length} public price records across {new Set(prices.map((p) => p.operatorSlug)).size} operators</p>
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Operator</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Locations</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Sizes offered</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Price range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {operators.map((op) => {
                const opPrices = prices.filter((p) => p.operatorSlug === op.slug);
                if (opPrices.length === 0) return null;
                const min = Math.min(...opPrices.map((p) => p.price));
                const max = Math.max(...opPrices.map((p) => p.price));
                const periods = Array.from(new Set(opPrices.map((p) => p.period))).join(", ");
                const locs = Array.from(new Set(opPrices.map((p) => p.location))).join(", ");
                const sizes = opPrices.length;
                return (
                  <tr key={op.slug}>
                    <td className="px-4 py-3 font-medium text-slate-900">{op.name}</td>
                    <td className="px-4 py-3 text-slate-600">{locs}</td>
                    <td className="px-4 py-3 text-slate-600">{sizes}</td>
                    <td className="px-4 py-3 font-medium text-slate-900">£{min} – £{max} ({periods})</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">Submissions</h2>
        {submissions.length === 0 ? (
          <p className="mt-2 text-sm text-slate-600">No submissions yet. In static export mode, API routes are not available.</p>
        ) : (
          <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Name</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Email</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Source</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {submissions.map((s, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 text-slate-900">{s.type || "quote"}</td>
                    <td className="px-4 py-3 text-slate-700">{s.name || s.businessName || "—"}</td>
                    <td className="px-4 py-3 text-slate-700">{s.email || "—"}</td>
                    <td className="px-4 py-3 text-slate-600">{s.sourcePage || "—"}</td>
                    <td className="px-4 py-3 text-slate-600">{s.submittedAt ? new Date(s.submittedAt).toLocaleString() : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-bold text-slate-900">Next steps</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
          <li>Connect PostgreSQL/Supabase/Neon for persistent data storage</li>
          <li>Replace the in-memory API route with a real backend endpoint</li>
          <li>Set up email integration (Resend, SendGrid, SMTP) to notify operators of new leads</li>
          <li>Add authentication to protect this admin page</li>
        </ul>
      </div>
    </div>
  );
}
