import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You — Storyard",
  description: "Thank you for your submission. We will be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
        <CheckCircle className="h-8 w-8 text-teal-600" />
      </div>
      <h1 className="mt-6 text-3xl font-extrabold text-slate-900">Thank you</h1>
      <p className="mx-auto mt-3 max-w-lg text-slate-600">
        We have received your submission. We will review it and be in touch shortly. In the meantime, feel free to browse more storage options.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/storage/" className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
          Browse storage
        </Link>
        <Link href="/" className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
          Go home
        </Link>
      </div>
    </div>
  );
}
