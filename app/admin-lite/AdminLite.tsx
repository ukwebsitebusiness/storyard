"use client";

import { useEffect, useState } from "react";
import { operators } from "@/src/data/operators";
import { prices } from "@/src/data/prices";
import { getSupabaseClient } from "@/src/lib/getSupabaseClient";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  storage_type: string | null;
  location: string | null;
  notes: string | null;
  status: string | null;
  assigned_to: string | null;
  created_at: string;
}

const STATUS_OPTIONS = ["new", "contacted", "converted", "archived"];
const STATUS_COLORS: Record<string, string> = {
  new: "bg-amber-50 text-amber-700 border-amber-100",
  contacted: "bg-blue-50 text-blue-700 border-blue-100",
  converted: "bg-teal-50 text-teal-700 border-teal-100",
  archived: "bg-slate-100 text-slate-600 border-slate-200",
};

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "storyard2024";

export default function AdminLite() {
  const [submissions, setSubmissions] = useState<Lead[]>([]);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [updateMsg, setUpdateMsg] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("admin_auth") === "1") {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!authenticated) return;
    getSupabaseClient().then((client) =>
      client
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false })
        .then(({ data, error }) => {
          if (error) setError(error.message);
          else if (data) setSubmissions(data as Lead[]);
        })
    );
  }, [authenticated]);

  async function updateStatus(id: string, status: string) {
    const { error } = await (await getSupabaseClient()).from("leads").update({ status }).eq("id", id);
    if (error) {
      setUpdateMsg("Failed to update status: " + error.message);
    } else {
      setSubmissions((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
      setUpdateMsg("Status updated");
      setTimeout(() => setUpdateMsg(""), 2000);
    }
  }

  async function assignLead(id: string, assigned_to: string) {
    const { error } = await (await getSupabaseClient()).from("leads").update({ assigned_to }).eq("id", id);
    if (error) {
      setUpdateMsg("Failed to assign: " + error.message);
    } else {
      setSubmissions((prev) => prev.map((s) => (s.id === id ? { ...s, assigned_to } : s)));
      setUpdateMsg("Assigned updated");
      setTimeout(() => setUpdateMsg(""), 2000);
    }
  }

  const filtered =
    filter === "all" ? submissions : submissions.filter((s) => (s.status || "new") === filter);

  const statusCounts = STATUS_OPTIONS.reduce<Record<string, number>>((acc, s) => {
    acc[s] = submissions.filter((l) => (l.status || "new") === s).length;
    return acc;
  }, {});

  const claimedCount = operators.filter((o) => o.claimed).length;
  const unclaimedCount = operators.length - claimedCount;
  const workingCount = operators.filter((o) => o.websiteStatus === "WORKING").length;

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setAuthError("");
      sessionStorage.setItem("admin_auth", "1");
    } else {
      setAuthError("Incorrect password.");
    }
  }

  if (!authenticated) {
    return (
      <div className="mx-auto max-w-sm px-4 py-20">
        <h1 className="text-2xl font-bold text-slate-900">Admin Lite</h1>
        <p className="mt-1 text-sm text-slate-600">Enter the admin password to view leads and listings.</p>
        <form onSubmit={login} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
              placeholder="Admin password"
            />
            {authError && <p className="mt-1 text-xs text-red-600">{authError}</p>}
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Admin Lite</h1>
          <p className="mt-1 text-sm text-slate-600">Overview of listings, prices and leads.</p>
        </div>
        <button
          onClick={() => {
            setAuthenticated(false);
            sessionStorage.removeItem("admin_auth");
          }}
          className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
        >
          Sign out
        </button>
      </div>

      {error && (
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          {error}
        </div>
      )}

      {updateMsg && (
        <div className="mt-4 rounded-lg border border-teal-200 bg-teal-50 p-4 text-sm text-teal-800">
          {updateMsg}
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
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-slate-900">Leads</h2>
          <div className="flex flex-wrap gap-2">
            {(["all", ...STATUS_OPTIONS] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`rounded-full px-3 py-1 text-xs font-semibold border ${
                  filter === s
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}{" "}
                {s !== "all" ? `(${statusCounts[s] || 0})` : `(${submissions.length})`}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-2 text-sm text-slate-600">No leads in this status.</p>
        ) : (
          <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Status</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Name</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Email</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Phone</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Location</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Assigned</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((s) => {
                  const meta = (() => {
                    try { return JSON.parse(s.notes || "{}"); } catch { return {}; }
                  })();
                  const status = s.status || "new";
                  return (
                    <tr key={s.id}>
                      <td className="px-4 py-3">
                        <select
                          value={status}
                          onChange={(e) => updateStatus(s.id, e.target.value)}
                          className={`rounded-full border px-2 py-1 text-[11px] font-semibold cursor-pointer ${STATUS_COLORS[status] || STATUS_COLORS.new}`}
                        >
                          {STATUS_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt.charAt(0).toUpperCase() + opt.slice(1)}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3 text-slate-900">{meta.type || "quote"}</td>
                      <td className="px-4 py-3 text-slate-700">{s.name || meta.businessName || "—"}</td>
                      <td className="px-4 py-3 text-slate-700">{s.email || "—"}</td>
                      <td className="px-4 py-3 text-slate-700">{s.phone || "—"}</td>
                      <td className="px-4 py-3 text-slate-600">{s.location || meta.sourcePage || "—"}</td>
                      <td className="px-4 py-3">
                        <select
                          value={s.assigned_to || ""}
                          onChange={(e) => assignLead(s.id, e.target.value)}
                          className="rounded-lg border border-slate-200 px-2 py-1 text-xs text-slate-700 cursor-pointer"
                        >
                          <option value="">Unassigned</option>
                          {operators.map((op) => (
                            <option key={op.slug} value={op.name}>
                              {op.name}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3 text-slate-600">{s.created_at ? new Date(s.created_at).toLocaleString() : "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-bold text-slate-900">Next steps</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
          <li>Add your Resend API key and NOTIFY_TO_EMAIL to Vercel environment variables to enable email notifications</li>
          <li>Set up a custom domain in Resend for the from-email address</li>
          <li>Review and assign leads using the status and assignment filters above</li>
        </ul>
      </div>
    </div>
  );
}
