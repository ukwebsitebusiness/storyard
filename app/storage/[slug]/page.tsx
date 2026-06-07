import Link from "next/link";
import { notFound } from "next/navigation";
import { getOperatorBySlug, operators } from "@/src/data/operators";
import { getPricesByOperator } from "@/src/data/prices";
import { generalFaqs } from "@/src/data/faqs";
import FAQSection from "@/src/components/FAQSection";
import QuoteForm from "@/src/components/QuoteForm";
import JsonLd from "@/src/components/JsonLd";
import { MapPin, Tag, ExternalLink, ArrowRight, CheckCircle } from "lucide-react";

export function generateStaticParams() {
  return operators.map((o) => ({ slug: o.slug }));
}

export function generateMetadata() {
  return {
    title: "Operator Details",
  };
}

export default async function OperatorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const operator = getOperatorBySlug(slug);
  if (!operator) notFound();

  const prices = getPricesByOperator(operator.slug);
  const related = operators
    .filter((o) => o.slug !== operator.slug)
    .slice(0, 3);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://storyard.im/" },
      { "@type": "ListItem", position: 2, name: "Storage", item: "https://storyard.im/storage/" },
      { "@type": "ListItem", position: 3, name: operator.name },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: operator.name,
    url: operator.website,
    areaServed: operator.locations.join(", "),
    description: operator.description,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: generalFaqs.slice(0, 4).map((f) => ({
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
      <JsonLd data={[breadcrumb, localBusiness, faqPage]} />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="text-sm text-slate-500">
          <Link href="/" className="hover:underline">Home</Link> <span className="mx-1">/</span>{" "}
          <Link href="/storage/" className="hover:underline">Storage</Link> <span className="mx-1">/</span>{" "}
          <span className="text-slate-700">{operator.name}</span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-extrabold text-slate-900">{operator.name}</h1>
              {!operator.claimed && (
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 border border-amber-100">
                  Listing not yet claimed
                </span>
              )}
              {operator.verified && (
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 border border-teal-100">
                  Verified
                </span>
              )}
            </div>

            <p className="mt-4 text-slate-600">{operator.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {operator.storageTypes.map((t) => (
                <span key={t} className="inline-flex items-center gap-1 rounded-md bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">
                  <Tag className="h-3 w-3" /> {t}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-bold text-slate-900">Service areas</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {operator.locations.map((loc) => (
                  <Link
                    key={loc}
                    href={`/storage/${loc.toLowerCase().replace(/\s+/g, "-")}/`}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-teal-300 hover:bg-teal-50"
                  >
                    <MapPin className="h-3.5 w-3.5" /> {loc}
                  </Link>
                ))}
              </div>
            </div>

            {operator.features && operator.features.length > 0 && (
              <div className="mt-6">
                <h2 className="text-lg font-bold text-slate-900">Features</h2>
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                  {operator.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-teal-600" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {prices.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-bold text-slate-900">Pricing</h2>
                <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-700">Size</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-700">Price</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-700">Period</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-700">Locations</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {Object.values(
                        prices.reduce<Record<string, { sizeLabel: string; min: number; max: number; period: string; locations: string[]; notes?: string }>>((acc, p) => {
                          const key = p.sizeLabel;
                          if (!acc[key]) {
                            acc[key] = { sizeLabel: p.sizeLabel, min: p.price, max: p.price, period: p.period, locations: [p.location], notes: p.notes };
                          } else {
                            acc[key].min = Math.min(acc[key].min, p.price);
                            acc[key].max = Math.max(acc[key].max, p.price);
                            if (!acc[key].locations.includes(p.location)) acc[key].locations.push(p.location);
                          }
                          return acc;
                        }, {})
                      ).map((row) => (
                        <tr key={row.sizeLabel}>
                          <td className="px-4 py-3 text-slate-700">{row.sizeLabel}</td>
                          <td className="px-4 py-3 font-medium text-slate-900">
                            £{row.min}{row.max !== row.min ? ` – £${row.max}` : ""}
                          </td>
                          <td className="px-4 py-3 text-slate-600">{row.period}</td>
                          <td className="px-4 py-3 text-slate-600">{row.locations.join(", ")}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs text-slate-500">Prices from public sources. Confirm directly with the operator.</p>
              </div>
            )}

            {!operator.claimed && (
              <div className="mt-8 rounded-xl border border-amber-100 bg-amber-50 p-5">
                <p className="text-sm text-amber-900">
                  <span className="font-semibold">Disclaimer:</span> This listing may use publicly available business information and is not yet managed directly by the operator. Prices and availability should be confirmed with the storage provider.
                </p>
              </div>
            )}

            {/* Related nearby */}
            {related.length > 0 && (
              <div className="mt-10">
                <h2 className="text-lg font-bold text-slate-900">Related storage options</h2>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  {related.map((op) => (
                    <div key={op.slug} className="rounded-xl border border-slate-200 bg-white p-4">
                      <h3 className="text-sm font-semibold text-slate-900">{op.name}</h3>
                      <p className="mt-1 text-xs text-slate-600 line-clamp-2">{op.description}</p>
                      <Link href={`/storage/${op.slug}/`} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-teal-700 hover:underline">
                        View details <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10">
              <FAQSection faqs={generalFaqs.slice(0, 4)} title="Frequently asked questions" />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            {operator.websiteStatus === "WORKING" && (
              <a
                href={operator.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <ExternalLink className="h-4 w-4" /> Visit website
              </a>
            )}

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">Request a quote</h3>
              <p className="mt-1 text-xs text-slate-600">Send an enquiry to {operator.name}.</p>
              <div className="mt-3">
                <QuoteForm sourcePage={`/storage/${operator.slug}/`} operatorSlug={operator.slug} />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">Own this business?</h3>
              <p className="mt-1 text-xs text-slate-600">Claim your listing to manage your profile, respond to enquiries and update your details.</p>
              <Link
                href="/claim-listing/"
                className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
              >
                Claim listing
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
