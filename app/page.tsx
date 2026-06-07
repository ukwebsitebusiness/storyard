import { Metadata } from "next";
import Link from "next/link";
import { operators } from "@/src/data/operators";

export const metadata: Metadata = {
  title: "Storyard — Find Secure Storage Across the Isle of Man",
  description:
    "Compare container storage, self-storage, business storage, household storage and trade storage near Douglas, Braddan, Ballasalla, Jurby, Peel, Ramsey and beyond.",
};
import { locations } from "@/src/data/locations";
import { prices } from "@/src/data/prices";
import { storageTypes } from "@/src/data/storageTypes";
import { generalFaqs } from "@/src/data/faqs";
import SearchBox from "@/src/components/SearchBox";
import ListingCard from "@/src/components/ListingCard";
import FAQSection from "@/src/components/FAQSection";
import JsonLd from "@/src/components/JsonLd";
import {
  MapPin,
  Box,
  Shield,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle,
  ClipboardList,
  Phone,
} from "lucide-react";

export default function Home() {
  const featuredOperators = operators.slice(0, 4);
  const avgPrice = prices.length
    ? Math.round(prices.reduce((sum, p) => sum + p.price, 0) / prices.length)
    : 0;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Storyard",
          url: "https://storyard.im",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://storyard.im/storage/?q={search_term}",
            "query-input": "required name=search_term",
          },
        }}
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden bg-cover bg-center pb-20 pt-16 text-white"
        style={{ backgroundImage: "url(/images/herostoryard.png)" }}
      >
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Find secure storage across the Isle of Man
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
              Compare container storage, self-storage, business storage and trade storage near Douglas, Braddan, Ballasalla, Jurby and beyond.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-4xl">
            <SearchBox />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="/list-your-storage-business/" className="text-sm font-medium text-teal-300 hover:text-teal-200 underline underline-offset-2">
              List your storage business
            </a>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b border-slate-200 bg-white py-4">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {[
              { label: "Public price data", sub: "No hidden fees" },
              { label: "Local operators only", sub: "Isle of Man" },
              { label: "No fake reviews", sub: "Independent listings" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-teal-600" />
                <div>
                  <p className="text-xs font-semibold text-slate-900">{badge.label}</p>
                  <p className="text-[10px] text-slate-500">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular locations */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-xl font-bold text-slate-900">Popular locations</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {locations
              .filter((l) => l.slug !== "isle-of-man")
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/storage/${loc.slug}/`}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:bg-teal-50"
                >
                  <MapPin className="h-4 w-4 text-teal-600" /> {loc.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Storage type cards */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-xl font-bold text-slate-900">Storage types</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {storageTypes.slice(0, 4).map((st) => (
              <Link
                key={st.slug}
                href={`/${st.slug}/`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-lg hover:border-slate-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <Box className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{st.shortTitle}</h3>
                <p className="mt-1 text-sm text-slate-600 line-clamp-2">{st.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-teal-700 group-hover:underline">
                  Compare options <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured storage options */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-bold text-slate-900">Featured storage options</h2>
            <Link href="/storage/" className="text-sm font-medium text-teal-700 hover:underline">View all</Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredOperators.map((op) => (
              <ListingCard key={op.slug} operator={op} />
            ))}
          </div>
        </div>
      </section>

      {/* Price insight */}
      <section className="bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Transparent pricing insight</h2>
              <p className="mt-3 text-slate-300">
                We collect publicly available prices so you can compare before contacting an operator. Prices are a guide only — confirm directly with the provider.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <TrendingUp className="mt-0.5 h-5 w-5 text-teal-400" />
                  <span className="text-sm text-slate-200">Average price from public data: £{avgPrice} per period</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="mt-0.5 h-5 w-5 text-teal-400" />
                  <span className="text-sm text-slate-200">All prices sourced from operator websites</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-teal-400" />
                  <span className="text-sm text-slate-200">No hidden fees or fake discounts</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
              <h3 className="text-sm font-semibold text-slate-200">Price ranges by operator</h3>
              <div className="mt-4 space-y-3">
                {operators
                  .filter((op) => prices.some((p) => p.operatorSlug === op.slug))
                  .map((op) => {
                    const opPrices = prices.filter((p) => p.operatorSlug === op.slug);
                    const min = Math.min(...opPrices.map((p) => p.price));
                    const max = Math.max(...opPrices.map((p) => p.price));
                    const periods = Array.from(new Set(opPrices.map((p) => p.period))).join(", ");
                    return (
                      <div key={op.slug} className="flex items-center justify-between rounded-lg bg-slate-700/50 px-4 py-3">
                        <span className="text-sm text-slate-200">{op.name}</span>
                        <span className="text-sm font-semibold text-teal-300">£{min} – £{max} {periods}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI storage size helper */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-8 rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-8 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800">
                <Sparkles className="h-3.5 w-3.5" /> Storage size helper
              </div>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">Not sure what size you need?</h2>
              <p className="mt-3 text-slate-600">
                Tell us what you are storing and we will recommend the right unit or container size, plus questions to ask the operator.
              </p>
              <Link
                href="/storage-size-helper/"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
              >
                Get a recommendation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-xl border border-teal-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Example recommendation</p>
                <div className="mt-3 space-y-2">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">Storage type:</span> Self-storage
                  </p>
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">Suggested size:</span> 80 sq ft (10ft x 8ft)
                  </p>
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">Confidence:</span> High
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Storyard works */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold text-slate-900">How Storyard works</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <SearchBoxIcon />,
                title: "Search",
                text: "Browse storage options by location, type and size across the Isle of Man.",
              },
              {
                icon: <ClipboardList className="h-6 w-6 text-teal-700" />,
                title: "Compare",
                text: "See prices, features and locations side by side to find the best fit.",
              },
              {
                icon: <Phone className="h-6 w-6 text-teal-700" />,
                title: "Request a quote",
                text: "Contact operators directly. We pass your enquiry on so they can confirm availability and pricing.",
              },
            ].map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                  {step.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why use Storyard */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-slate-900">Why use Storyard?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "All major Isle of Man storage operators in one place",
              "Public price data where available — no guesswork",
              "Request quotes from multiple operators quickly",
              "Compare container, self-storage and business options",
              "Local area guides for Douglas, Peel, Ramsey and more",
              "No fake reviews or misleading availability",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For storage operators */}
      <section className="bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Get more qualified storage enquiries</h2>
              <p className="mt-3 text-slate-300">
                Storyard helps storage operators on the Isle of Man reach people actively looking for storage. List your business, manage your profile and receive quote requests.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/list-your-storage-business/"
                  className="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
                >
                  List your business
                </Link>
                <Link
                  href="/claim-listing/"
                  className="rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Claim a listing
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
              <div className="space-y-4">
                {[
                  { label: "Profile views", value: "Increase visibility" },
                  { label: "Quote requests", value: "Receive enquiries" },
                  { label: "Manage your listing", value: "Update details anytime" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-lg bg-slate-700/50 px-4 py-3">
                    <span className="text-sm font-medium text-slate-300">{item.label}</span>
                    <span className="text-sm font-semibold text-teal-300">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={generalFaqs} />

      {/* Final CTA */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Ready to find storage?</h2>
          <p className="mt-3 text-slate-600">
            Compare options across the Isle of Man and request quotes from operators near you.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/storage/"
              className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Find storage
            </Link>
            <Link
              href="/request-quote/"
              className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SearchBoxIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-teal-700">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
