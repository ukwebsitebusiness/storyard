import QuoteForm from "@/src/components/QuoteForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Storage Quote — Storyard",
  description: "Request quotes from storage operators across the Isle of Man. Tell us what you need and we will connect you.",
};

export default function RequestQuotePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-extrabold text-slate-900">Request a quote</h1>
        <p className="mt-2 text-slate-600">
          Tell us what you need and we will pass your enquiry to relevant storage operators on the Isle of Man.
        </p>
        <div className="mt-6">
          <QuoteForm sourcePage="/request-quote/" />
        </div>
      </div>
    </div>
  );
}
