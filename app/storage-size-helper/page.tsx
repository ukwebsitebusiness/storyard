"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Lightbulb, MessageCircle } from "lucide-react";

export default function StorageSizeHelperPage() {
  const [items, setItems] = useState("");
  const [rooms, setRooms] = useState("");
  const [category, setCategory] = useState("");
  const [urgency, setUrgency] = useState("");
  const [access, setAccess] = useState("");
  const [result, setResult] = useState<ReturnType<typeof computeRecommendation> | null>(null);

  function computeRecommendation() {
    const lowerItems = items.toLowerCase();
    const lowerRooms = rooms.toLowerCase();

    if (category === "vehicle" || lowerItems.includes("car") || lowerItems.includes("motorbike") || lowerItems.includes("bike") || lowerItems.includes("van")) {
      return {
        type: "Vehicle storage",
        size: "Depends on vehicle",
        confidence: "High" as const,
        advice: "Check whether the facility offers covered, indoor or open parking. Ask about battery maintenance and insurance requirements.",
        questions: ["Is the storage covered or open?", "Is there CCTV and secure fencing?", "Do I need separate vehicle insurance?"],
      };
    }

    if (category === "trade" || lowerItems.includes("tools") || lowerItems.includes("trade") || lowerItems.includes("building") || lowerItems.includes("materials")) {
      return {
        type: "Container or trade storage",
        size: "20ft container or large unit",
        confidence: "High" as const,
        advice: "Trade storage often needs ground-level access and 24/7 entry. Container yards are cost-effective for bulky materials.",
        questions: ["Can I access my unit outside business hours?", "Is there space to load/unload?", "Do you provide VAT invoices?"],
      };
    }

    if (lowerItems.includes("archive") || lowerItems.includes("document") || lowerItems.includes("box")) {
      return {
        type: "Document / archive storage",
        size: "Small unit or archive box service",
        confidence: "High" as const,
        advice: "Document storage should be dry and pest-free. Ask about fire detection and retrieval services.",
        questions: ["Is the storage climate-controlled?", "How do I retrieve documents?", "Is there a minimum contract length?"],
      };
    }

    if (rooms === "1" || lowerRooms.includes("one") || lowerRooms.includes("1")) {
      return {
        type: "Self-storage",
        size: "Small unit (up to 50 sq ft)",
        confidence: "Medium" as const,
        advice: "A single room of furniture typically fits in a 25–50 sq ft unit. If you have appliances, go up a size.",
        questions: ["Can I upgrade if the unit is too small?", "Are trolleys available?", "What are the access hours?"],
      };
    }

    if (rooms === "2" || lowerRooms.includes("two") || lowerRooms.includes("2") || lowerRooms.includes("flat")) {
      return {
        type: "Self-storage or 20ft container",
        size: "Medium–large unit (80–160 sq ft) or 20ft container",
        confidence: "Medium" as const,
        advice: "A 2-bedroom flat usually needs 80–160 sq ft. A 20ft container is a good alternative if you have outdoor space.",
        questions: ["Do you have ground-floor units?", "Is there a lift?", "Can I store a sofa and bed together?"],
      };
    }

    if (category === "business" || lowerItems.includes("stock") || lowerItems.includes("inventory") || lowerItems.includes("pallet")) {
      return {
        type: "Business storage or container",
        size: "Large unit (160+ sq ft) or 20ft container",
        confidence: "High" as const,
        advice: "Business stock often needs regular access. Choose a facility close to your premises with flexible contracts.",
        questions: ["Do you offer business rates?", "Can I receive deliveries?", "Is there power in the unit?"],
      };
    }

    return {
      type: "Self-storage",
      size: "Medium unit (80–100 sq ft)",
      confidence: "Low" as const,
      advice: "Based on limited information, a medium unit is a safe starting point. Use our quote request to get operator advice.",
      questions: ["Can you help me estimate the right size?", "Do you offer flexible contracts?", "Is insurance included?"],
    };
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(computeRecommendation());
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800">
          <Sparkles className="h-3.5 w-3.5" /> Storage size helper
        </div>
        <h1 className="mt-3 text-3xl font-extrabold text-slate-900">What size storage do I need?</h1>
        <p className="mt-2 text-slate-600">Answer a few quick questions and we will recommend the best storage type and size for your needs.</p>

        {!result ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-6">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">What do you need to store?</label>
              <textarea
                value={items}
                onChange={(e) => setItems(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                placeholder="e.g. furniture from a 2-bedroom flat, tools, car, archive boxes..."
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">How many rooms of items?</label>
              <input
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
                placeholder="e.g. 1, 2, 3+"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Is this for personal, business, trade or vehicle use?</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="personal">Personal / household</option>
                <option value="business">Business / stock</option>
                <option value="trade">Trade / tools</option>
                <option value="vehicle">Vehicle</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">How urgently do you need storage?</label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="asap">As soon as possible</option>
                <option value="2weeks">Within 2 weeks</option>
                <option value="1month">Within 1 month</option>
                <option value="planning">Just planning ahead</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">How often do you need access?</label>
              <select
                value={access}
                onChange={(e) => setAccess(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="rarely">Rarely / long-term</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700"
            >
              Get recommendation
            </button>
          </form>
        ) : (
          <div className="mt-8 space-y-5">
            <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-teal-700" />
                <h2 className="text-lg font-bold text-slate-900">Your recommendation</h2>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-medium text-slate-500">Recommended type</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">{result.type}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-medium text-slate-500">Suggested size</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">{result.size}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-medium text-slate-500">Confidence</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">{result.confidence}</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-start gap-2">
                  <Lightbulb className="mt-0.5 h-4 w-4 text-amber-600" />
                  <p className="text-sm text-slate-700">{result.advice}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">Questions to ask the operator</h3>
              <ul className="mt-3 space-y-2">
                {result.questions.map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-slate-700">
                    <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" /> {q}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/request-quote/"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => setResult(null)}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Start again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
