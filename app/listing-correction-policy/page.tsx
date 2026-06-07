import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listing Correction, Claim and Removal Policy — Storyard",
  description: "How storage operators can request listing corrections, claims or removals on Storyard.",
};

export default function ListingCorrectionPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900">Storyard Listing Correction, Claim and Removal Policy</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: 06-06-2026</p>
      <p className="mt-4 text-slate-600">
        This policy explains how storage operators and other relevant parties can ask Storyard to correct, update, claim, suspend or remove a business listing. Storyard is a marketplace, directory and lead-generation platform. Some listings may be created using publicly available business information.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">1. Why listings may appear on Storyard</h2>
      <p className="mt-3 text-slate-600">Storyard may include storage-related businesses to help users find and compare storage options. Listings may be based on public business websites, public directories, public search results, public social media pages, public business registers, information supplied by users, or information supplied by operators.</p>
      <p className="mt-3 text-slate-600">An unclaimed listing does not mean the business has approved, endorsed or partnered with Storyard.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">2. What you can request</h2>
      <p className="mt-3 text-slate-600">If you own or represent a listed business, you may request that we:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>correct inaccurate information;</li>
        <li>update phone, email, website, address or service area;</li>
        <li>update storage types;</li>
        <li>update prices or remove outdated prices;</li>
        <li>add missing public information;</li>
        <li>remove information that should not be displayed;</li>
        <li>claim the listing;</li>
        <li>mark the listing as verified where appropriate checks are completed;</li>
        <li>suspend or remove the listing where appropriate.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">3. How to submit a request</h2>
      <p className="mt-3 text-slate-600">Send your request to: ukwebsitebusiness@gmail.com</p>
      <p className="mt-3 text-slate-600">Include:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>listing URL;</li>
        <li>business name;</li>
        <li>your full name;</li>
        <li>your role or relationship to the business;</li>
        <li>business email address or other proof of authority;</li>
        <li>details of the requested correction, claim or removal;</li>
        <li>supporting evidence where appropriate.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">4. Proof of authority</h2>
      <p className="mt-3 text-slate-600">Before approving a listing claim or major change, we may ask for proof that you are authorised to act for the business. This may include:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>email from the business domain;</li>
        <li>company officer confirmation;</li>
        <li>website contact confirmation;</li>
        <li>business documentation;</li>
        <li>other reasonable evidence.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">5. Review process</h2>
      <p className="mt-3 text-slate-600">We aim to review reasonable requests within 7 working days. Complex requests, disputes, ownership issues or legal complaints may take longer.</p>
      <p className="mt-3 text-slate-600">We may:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>approve the request;</li>
        <li>ask for more information;</li>
        <li>make a partial correction;</li>
        <li>suspend the listing while reviewing;</li>
        <li>refuse the request;</li>
        <li>remove the listing;</li>
        <li>retain factual public information where lawful and appropriate.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">6. Price corrections</h2>
      <p className="mt-3 text-slate-600">If you ask us to add or update prices, please provide the latest price table or public source. Storyard may show prices as guide prices only and may include wording such as:</p>
      <p className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">“Prices are based on publicly available or operator-supplied information and should be confirmed directly with the storage provider.”</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">7. Removal requests</h2>
      <p className="mt-3 text-slate-600">We will consider removal requests where:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>information is inaccurate and cannot reasonably be corrected;</li>
        <li>the listing creates a legal or safety concern;</li>
        <li>the business no longer operates;</li>
        <li>the listing uses information that should not be displayed;</li>
        <li>there is a valid rights complaint;</li>
        <li>removal is otherwise appropriate.</li>
      </ul>
      <p className="mt-3 text-slate-600">We do not guarantee removal of all factual public business information merely because a business dislikes being listed, but we will consider all reasonable requests fairly.</p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">8. Rights complaints</h2>
      <p className="mt-3 text-slate-600">If you believe a listing infringes intellectual property rights, privacy rights, confidentiality, passing off, trademark rights or other legal rights, contact us with:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>the listing URL;</li>
        <li>details of the rights you claim;</li>
        <li>the content complained about;</li>
        <li>evidence of ownership or authority;</li>
        <li>the action requested.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">9. Contact</h2>
      <p className="mt-3 text-slate-600">For listing corrections, claims and removal requests:</p>
      <p className="mt-2 text-slate-600">Storyard<br />Email: ukwebsitebusiness@gmail.com</p>
    </div>
  );
}
