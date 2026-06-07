"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface QuoteFormProps {
  sourcePage: string;
  defaultStorageType?: string;
  defaultLocation?: string;
  operatorSlug?: string;
}

export default function QuoteForm({ sourcePage, defaultStorageType = "", defaultLocation = "", operatorSlug = "" }: QuoteFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: defaultLocation,
    storageType: defaultStorageType,
    size: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Enter your name";
    if (!form.email.trim()) e.email = "Enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.location.trim()) e.location = "Enter a location";
    if (!form.storageType.trim()) e.storageType = "Select a storage type";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, sourcePage, operatorSlug }),
      });
      router.push("/thank-you/");
    } catch {
      setSubmitting(false);
    }
  }

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((err) => {
      const copy = { ...err };
      delete copy[field];
      return copy;
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
          <input
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
            placeholder="Optional"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Location</label>
          <input
            value={form.location}
            onChange={(e) => update("location", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
            placeholder="e.g. Douglas"
          />
          {errors.location && <p className="mt-1 text-xs text-red-600">{errors.location}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Storage type</label>
          <select
            value={form.storageType}
            onChange={(e) => update("storageType", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
          >
            <option value="">Select type</option>
            <option value="Self-storage">Self-storage</option>
            <option value="Container storage">Container storage</option>
            <option value="Business storage">Business storage</option>
            <option value="Trade storage">Trade storage</option>
            <option value="Vehicle storage">Vehicle storage</option>
            <option value="Household storage">Household storage</option>
            <option value="Document storage">Document storage</option>
          </select>
          {errors.storageType && <p className="mt-1 text-xs text-red-600">{errors.storageType}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Unit size</label>
          <select
            value={form.size}
            onChange={(e) => update("size", e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
          >
            <option value="">Not sure yet</option>
            <option value="Small (up to 50 sq ft)">Small (up to 50 sq ft)</option>
            <option value="Medium (50-100 sq ft)">Medium (50-100 sq ft)</option>
            <option value="Large (100-200 sq ft)">Large (100-200 sq ft)</option>
            <option value="XL (200+ sq ft)">XL (200+ sq ft)</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Move-in date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={3}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
          placeholder="Tell us what you need to store..."
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Request quote"}
      </button>
      <p className="text-xs text-slate-500">
        By submitting, you agree to our <a href="/terms/" className="underline">terms</a> and{" "}
        <a href="/privacy/" className="underline">privacy policy</a>. We will share your enquiry with relevant operators.
      </p>
    </form>
  );
}
