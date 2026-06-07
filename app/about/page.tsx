import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Storyard — Isle of Man Storage Marketplace",
  description: "Learn about Storyard, the marketplace helping Isle of Man residents and businesses find secure storage.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900">About Storyard</h1>
      <p className="mt-4 text-slate-600">
        Storyard is a storage marketplace for the Isle of Man. We help people find and compare storage options including container storage, self-storage, business storage and trade storage.
      </p>
      <p className="mt-4 text-slate-600">
        We do not own or operate storage facilities. Storyard connects you with independent storage operators who manage their own premises, contracts and customer relationships.
      </p>
      <h2 className="mt-8 text-xl font-bold text-slate-900">What we do</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>Collect and organise publicly available storage information across the Isle of Man</li>
        <li>Help you compare locations, storage types and prices</li>
        <li>Pass your quote requests to relevant operators</li>
        <li>Provide local area guides and storage size recommendations</li>
      </ul>
      <h2 className="mt-8 text-xl font-bold text-slate-900">What we do not do</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>We do not store your belongings</li>
        <li>We do not set prices or availability</li>
        <li>We do not take payments or manage contracts</li>
        <li>We do not publish fake reviews or verified badges</li>
      </ul>
      <h2 className="mt-8 text-xl font-bold text-slate-900">Get in touch</h2>
      <p className="mt-3 text-slate-600">
        If you are a storage operator looking to list or claim your business, or if you have feedback about the site, please visit our <a href="/contact/" className="text-teal-700 underline">contact page</a>.
      </p>
    </div>
  );
}
