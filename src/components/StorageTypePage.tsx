import Link from "next/link";
import { getStorageTypeBySlug } from "@/src/data/storageTypes";
import { operators, getOperatorsByStorageType } from "@/src/data/operators";
import { locations } from "@/src/data/locations";
import { prices } from "@/src/data/prices";
import { storageTypeFaqs } from "@/src/data/faqs";
import ListingCard from "@/src/components/ListingCard";
import FAQSection from "@/src/components/FAQSection";
import QuoteForm from "@/src/components/QuoteForm";
import JsonLd from "@/src/components/JsonLd";
import { MapPin, CheckCircle } from "lucide-react";

export default function StorageTypePage({ slug }: { slug: string }) {
  const st = getStorageTypeBySlug(slug);
  if (!st) return <div className="py-20 text-center text-slate-600">Storage type not found</div>;

  const relevantOperators = getOperatorsByStorageType(st.shortTitle);
  const relevantPrices = prices.filter((p) =>
    relevantOperators.some((o) => o.slug === p.operatorSlug)
  );

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://storyard.im/" },
      { "@type": "ListItem", position: 2, name: st.shortTitle },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: storageTypeFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumb, faqPage]} />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="text-sm text-slate-500">
          <Link href="/" className="hover:underline">Home</Link> <span className="mx-1">/</span>{" "}
          <span className="text-slate-700">{st.shortTitle}</span>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold text-slate-900">{st.title}</h1>
        <p className="mt-3 max-w-3xl text-slate-600">{st.description}</p>

        {/* Who it is for */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">Who is this for?</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {st.whoFor.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Common use cases */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">Common use cases</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {st.useCases.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What to compare */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">What to compare</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {st.comparePoints.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing insight */}
        {relevantPrices.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">Pricing insight</h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Operator</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Size</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Price</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {relevantPrices.slice(0, 8).map((p, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 text-slate-900">{operators.find((o) => o.slug === p.operatorSlug)?.name || p.operatorSlug}</td>
                      <td className="px-4 py-3 text-slate-600">{p.sizeLabel}</td>
                      <td className="px-4 py-3 font-medium text-slate-900">£{p.price}</td>
                      <td className="px-4 py-3 text-slate-600">{p.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-500">Prices from public sources. Confirm directly with the operator.</p>
          </section>
        )}

        {/* Relevant listings */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">Relevant operators</h2>
          {relevantOperators.length === 0 ? (
            <p className="mt-4 text-sm text-slate-600">No operators currently listed for this type. Request a quote and we will help you find options.</p>
          ) : (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relevantOperators.map((op) => (
                <ListingCard key={op.slug} operator={op} />
              ))}
            </div>
          )}
        </section>

        {/* Location links */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">Browse by location</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {locations
              .filter((l) => l.slug !== "isle-of-man")
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/storage/${loc.slug}/`}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-teal-300 hover:bg-teal-50"
                >
                  <MapPin className="h-3.5 w-3.5" /> {loc.name}
                </Link>
              ))}
          </div>
        </section>

        {/* FAQs */}
        <div className="mt-12">
          <FAQSection faqs={storageTypeFaqs} title={`FAQs about ${st.shortTitle.toLowerCase()}`} />
        </div>

        {/* Quote CTA */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">Request a quote for {st.shortTitle.toLowerCase()}</h2>
          <div className="mt-4 max-w-xl">
            <QuoteForm sourcePage={`/${slug}/`} defaultStorageType={st.shortTitle} />
          </div>
        </section>
      </div>
    </>
  );
}
