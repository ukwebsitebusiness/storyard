"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "@/src/data/faqs";

export default function FAQSection({ faqs, title = "Frequently asked questions" }: { faqs: FAQ[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="px-5 py-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-sm font-semibold text-slate-900">{faq.question}</span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 shrink-0 text-slate-500" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-slate-500" />
                  )}
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
