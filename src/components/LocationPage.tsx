import Link from "next/link";
import { getLocationBySlug } from "@/src/data/locations";
import { operators, getOperatorsByLocation } from "@/src/data/operators";
import { storageTypes } from "@/src/data/storageTypes";
import { prices } from "@/src/data/prices";
import { locationFaqs } from "@/src/data/faqs";
import ListingCard from "@/src/components/ListingCard";
import FAQSection from "@/src/components/FAQSection";
import QuoteForm from "@/src/components/QuoteForm";
import JsonLd from "@/src/components/JsonLd";
import { MapPin, ArrowRight, Box } from "lucide-react";

export default function LocationPage({ slug }: { slug: string }) {
  const location = getLocationBySlug(slug);
  if (!location) return <div className="py-20 text-center text-slate-600">Location not found</div>;

  const relevantOperators = getOperatorsByLocation(location.name);
  const relevantPrices = prices.filter((p) =>
    relevantOperators.some((o) => o.slug === p.operatorSlug)
  );

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://storyard.im/" },
      { "@type": "ListItem", position: 2, name: "Storage", item: "https://storyard.im/storage/" },
      { "@type": "ListItem", position: 3, name: location.name },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: locationFaqs.map((f) => ({
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
          <Link href="/storage/" className="hover:underline">Storage</Link> <span className="mx-1">/</span>{" "}
          <span className="text-slate-700">{location.name}</span>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold text-slate-900">Storage in {location.name}</h1>
        <p className="mt-3 max-w-3xl text-slate-600">{location.intro}</p>

        {location.landmarks && location.landmarks.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {location.landmarks.map((lm) => (
              <span key={lm} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                <MapPin className="h-3 w-3" /> {lm}
              </span>
            ))}
          </div>
        )}

        {/* Listings */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">Storage options in {location.name}</h2>
          {relevantOperators.length === 0 ? (
            <p className="mt-4 text-sm text-slate-600">No listings found specifically in {location.name}. Nearby options may be available.</p>
          ) : (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relevantOperators.map((op) => (
                <ListingCard key={op.slug} operator={op} />
              ))}
            </div>
          )}
        </section>

        {/* Storage type comparison */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">What storage types are available?</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {location.storageTypesAvailable.map((st) => {
              const type = storageTypes.find((s) => s.shortTitle.toLowerCase() === st.toLowerCase()) || storageTypes[0];
              return (
                <Link
                  key={st}
                  href={`/${type.slug}/`}
                  className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300 hover:bg-teal-50"
                >
                  <Box className="mt-0.5 h-5 w-5 text-teal-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{st}</p>
                    <p className="mt-1 text-xs text-slate-600">Compare options and prices</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Pricing notes */}
        {relevantPrices.length > 0 && (
          <section className="mt-12">
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

        {/* Size helper CTA */}
        <section className="mt-12 rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-6">
          <h3 className="text-lg font-bold text-slate-900">Not sure what size you need?</h3>
          <p className="mt-2 text-sm text-slate-600">
            Use our storage size helper to get a recommendation based on what you need to store.
          </p>
          <Link href="/storage-size-helper/" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700">
            Try the size helper <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {/* Quote form */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">Request a quote in {location.name}</h2>
          <div className="mt-4 max-w-xl">
            <QuoteForm sourcePage={`/storage/${slug}/`} defaultLocation={location.name} />
          </div>
        </section>

        {/* Nearby areas */}
        {location.nearby.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-slate-900">Nearby areas</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {location.nearby.map((n) => (
                <Link
                  key={n}
                  href={`/storage/${n}/`}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-teal-300 hover:bg-teal-50"
                >
                  <MapPin className="h-3.5 w-3.5" /> {n.charAt(0).toUpperCase() + n.slice(1).replace("-", " ")}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        <div className="mt-12">
          <FAQSection faqs={locationFaqs} title={`FAQs about storage in ${location.name}`} />
        </div>
      </div>
    </>
  );
}
