"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabase";

export default function ClaimListingPage() {
  const router = useRouter();
  const [form, setForm] = useState({ businessName: "", contactName: "", email: "", phone: "", website: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.businessName.trim()) e.businessName = "Enter your business name";
    if (!form.contactName.trim()) e.contactName = "Enter your name";
    if (!form.email.trim()) e.email = "Enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      name: form.contactName || form.businessName,
      email: form.email,
      phone: form.phone || null,
      storage_type: null,
      location: null,
      notes: JSON.stringify({ type: "claim-listing", sourcePage: "/claim-listing/", businessName: form.businessName, website: form.website, message: form.message }),
    });
    if (error) {
      setSubmitting(false);
      return;
    }
    fetch("/api/notify/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.contactName || form.businessName,
        email: form.email,
        phone: form.phone,
        storage_type: "Claim listing",
        location: null,
        message: `Business: ${form.businessName}\nWebsite: ${form.website}\n\n${form.message}`,
        sourcePage: "/claim-listing/",
      }),
    }).catch(() => {});
    router.push("/thank-you/");
  }

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((err) => { const c = { ...err }; delete c[field]; return c; });
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-extrabold text-slate-900">Claim your listing</h1>
        <p className="mt-2 text-slate-600">
          If your storage business is already listed on Storyard, fill in the details below and we will verify your ownership and transfer control to you.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Business name</label>
            <input value={form.businessName} onChange={(e) => update("businessName", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none" placeholder="Your business name" />
            {errors.businessName && <p className="mt-1 text-xs text-red-600">{errors.businessName}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Your name</label>
            <input value={form.contactName} onChange={(e) => update("contactName", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none" placeholder="Your name" />
            {errors.contactName && <p className="mt-1 text-xs text-red-600">{errors.contactName}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none" placeholder="you@example.com" />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Phone</label>
            <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none" placeholder="Optional" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Website</label>
            <input value={form.website} onChange={(e) => update("website", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none" placeholder="https://..." />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
            <textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows={3} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none" placeholder="Anything else we should know?" />
          </div>
          <button type="submit" disabled={submitting} className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60">
            {submitting ? "Sending..." : "Submit claim request"}
          </button>
        </form>
      </div>
    </div>
  );
}
