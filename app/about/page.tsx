import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Storyard — Isle of Man Storage Marketplace",
  description: "Learn about Storyard, the marketplace helping Isle of Man residents and businesses find secure storage.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900">About Storyard</h1>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Helping people find storage, one trusted search at a time</h2>
      <p className="mt-4 text-slate-600">
        Storyard is a storage marketplace built to make it easier for people, families, trades and businesses to find secure storage options in their area.
      </p>
      <p className="mt-4 text-slate-600">
        We launched with a focus on the <strong>Isle of Man</strong>, helping users compare container storage, self-storage, business storage, household storage, trade storage, vehicle storage and related storage services across locations such as Douglas, Braddan, Ballasalla, Jurby, Peel, Ramsey and beyond.
      </p>
      <p className="mt-4 text-slate-600">
        Our aim is simple: to bring storage options into one clear, easy-to-use place so customers can compare providers, understand available unit types, check public pricing where available, and request quotes with less hassle.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Why Storyard exists</h2>
      <p className="mt-4 text-slate-600">
        Finding storage can be surprisingly difficult. Customers often have to search across multiple websites, call different operators, compare unit sizes manually, and work out whether a container, indoor unit or business storage option is the right fit.
      </p>
      <p className="mt-4 text-slate-600">
        Storyard helps solve that problem by bringing useful storage information together in one marketplace.
      </p>
      <p className="mt-3 text-slate-600">We help users:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>compare local storage providers;</li>
        <li>understand different storage types;</li>
        <li>view public price information where available;</li>
        <li>request quotes from relevant operators;</li>
        <li>choose a suitable storage size;</li>
        <li>discover storage options near their preferred location.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-900">What Storyard is — and what it is not</h2>
      <p className="mt-4 text-slate-600">
        Storyard is a <strong>marketplace, directory and technology platform</strong>. We help customers discover and compare storage options, but unless clearly stated otherwise, Storyard does <strong>not</strong> own or operate the storage facilities listed on the website.
      </p>
      <p className="mt-4 text-slate-600">
        Storage services are provided by the relevant storage operators. Prices, availability, access arrangements, deposits, insurance requirements and storage terms should always be confirmed directly with the provider before making a booking.
      </p>
      <p className="mt-4 text-slate-600">
        Some listings on Storyard may be based on publicly available business information and may not yet be managed directly by the operator. Where this is the case, we aim to make that clear and give operators a route to claim, update or correct their listing.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Supporting local storage operators</h2>
      <p className="mt-4 text-slate-600">
        Storyard is also designed to support storage businesses. Many storage operators still rely on phone calls, contact forms, spreadsheets and manual follow-ups to manage enquiries. Storyard gives operators another route to reach customers who are actively looking for storage.
      </p>
      <p className="mt-3 text-slate-600">Operators can use Storyard to:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>increase visibility;</li>
        <li>receive qualified storage enquiries;</li>
        <li>claim and update their listing;</li>
        <li>show storage types and service areas;</li>
        <li>publish public price information where appropriate;</li>
        <li>connect future enquiries into modern digital tools.</li>
      </ul>
      <p className="mt-4 text-slate-600">
        As the platform grows, Storyard is being developed alongside operator technology that can support lead management, customer enquiries, unit availability, reservations, billing workflows and digital customer journeys.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Isle of Man first, UK-wide next</h2>
      <p className="mt-4 text-slate-600">
        We are starting with the Isle of Man because it is a clear, local market with real storage demand across households, trades, businesses and relocation needs.
      </p>
      <p className="mt-4 text-slate-600">
        Our long-term vision is to expand Storyard into a wider UK storage marketplace, helping users compare storage options across more towns, cities and regions.
      </p>
      <p className="mt-4 text-slate-600">
        The goal is to create a better search and enquiry experience for customers, while giving storage operators better digital visibility and tools.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Built around clarity and trust</h2>
      <p className="mt-4 text-slate-600">We believe storage marketplaces should be clear, honest and useful. That means:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>no fake reviews;</li>
        <li>no fake live availability;</li>
        <li>no misleading partnership claims;</li>
        <li>public pricing shown only where available;</li>
        <li>unclaimed listings clearly marked;</li>
        <li>customers encouraged to confirm details directly with operators;</li>
        <li>operators given a way to claim, correct or update listings.</li>
      </ul>
      <p className="mt-4 text-slate-600">
        Storyard is built to make storage search easier, not to confuse customers with exaggerated claims.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Need storage?</h2>
      <p className="mt-4 text-slate-600">
        Use Storyard to <a href="/storage/" className="text-teal-700 underline">search storage options near you</a>, <a href="/operators/" className="text-teal-700 underline">compare providers</a> and <a href="/request-quote/" className="text-teal-700 underline">request a quote</a>.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Own or manage a storage business?</h2>
      <p className="mt-4 text-slate-600">
        You can <a href="/list-your-storage-business/" className="text-teal-700 underline">list your business</a>, <a href="/claim-listing/" className="text-teal-700 underline">claim an existing listing</a>, update your details or <a href="/contact/" className="text-teal-700 underline">speak to us</a> about receiving more qualified storage enquiries through Storyard.
      </p>
    </div>
  );
}
