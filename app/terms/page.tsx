import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Storyard",
  description: "Read the Storyard terms of use. By using our site you agree to these terms.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900">Terms of Use</h1>
      <p className="mt-4 text-slate-600">
        By using Storyard, you agree to the following terms. If you do not agree, please do not use our website.
      </p>
      <h2 className="mt-8 text-xl font-bold text-slate-900">What Storyard provides</h2>
      <p className="mt-3 text-slate-600">
        Storyard is a marketplace and directory. We help you find and compare storage operators. We do not own, operate or guarantee any storage facility.
      </p>
      <h2 className="mt-8 text-xl font-bold text-slate-900">Accuracy of information</h2>
      <p className="mt-3 text-slate-600">
        We aim to keep listings accurate, but information may change. Prices and availability should always be confirmed directly with the storage operator.
      </p>
      <h2 className="mt-8 text-xl font-bold text-slate-900">Quote requests</h2>
      <p className="mt-3 text-slate-600">
        When you request a quote, we share your contact details with relevant operators so they can respond. We are not responsible for their responses, pricing or service quality.
      </p>
      <h2 className="mt-8 text-xl font-bold text-slate-900">Intellectual property</h2>
      <p className="mt-3 text-slate-600">
        All content on Storyard is owned by us or our licensors. You may not copy or reuse it without permission.
      </p>
      <h2 className="mt-8 text-xl font-bold text-slate-900">Changes to terms</h2>
      <p className="mt-3 text-slate-600">
        We may update these terms from time to time. Continued use of the site means you accept the updated terms.
      </p>
    </div>
  );
}
