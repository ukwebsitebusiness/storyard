import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Storyard",
  description: "Read the Storyard privacy policy. How we collect, use and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-slate-600">
        This privacy policy explains how Storyard collects, uses and protects your personal information when you use our website.
      </p>
      <h2 className="mt-8 text-xl font-bold text-slate-900">Information we collect</h2>
      <p className="mt-3 text-slate-600">
        When you request a quote or contact us, we may collect your name, email address, phone number and details about your storage requirements.
      </p>
      <h2 className="mt-8 text-xl font-bold text-slate-900">How we use your information</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>To pass your quote request to relevant storage operators</li>
        <li>To respond to your enquiries and feedback</li>
        <li>To improve our website and services</li>
        <li>To comply with legal obligations</li>
      </ul>
      <h2 className="mt-8 text-xl font-bold text-slate-900">Sharing your information</h2>
      <p className="mt-3 text-slate-600">
        We share your contact details with storage operators when you request a quote so they can respond directly. We do not sell your data to third parties.
      </p>
      <h2 className="mt-8 text-xl font-bold text-slate-900">Your rights</h2>
      <p className="mt-3 text-slate-600">
        You have the right to access, correct or delete your personal information. Contact us at any time to exercise these rights.
      </p>
    </div>
  );
}
