"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabase";

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Enter your name";
    if (!form.email.trim()) e.email = "Enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Enter a message";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name,
      email: form.email,
      phone: null,
      storage_type: null,
      location: null,
      notes: JSON.stringify({ type: "contact", sourcePage: "/contact/", subject: form.subject, message: form.message }),
    });
    if (error) {
      setSubmitting(false);
      return;
    }
    fetch("/api/notify/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        storage_type: "Contact form",
        location: null,
        message: `Subject: ${form.subject}\n\n${form.message}`,
        sourcePage: "/contact/",
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
        <h1 className="text-3xl font-extrabold text-slate-900">Contact us</h1>
        <p className="mt-2 text-slate-600">Send us a message and we will get back to you as soon as we can.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
            <input value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none" placeholder="Your name" />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none" placeholder="you@example.com" />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Subject</label>
            <input value={form.subject} onChange={(e) => update("subject", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none" placeholder="What is this about?" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
            <textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows={4} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none" placeholder="Your message..." />
            {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
          </div>
          <button type="submit" disabled={submitting} className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60">
            {submitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
}
