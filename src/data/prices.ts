export interface PriceEntry {
  operatorSlug: string;
  location: string;
  sizeLabel: string;
  squareFeet?: number;
  dimensions?: string;
  price: number;
  period: "pcm" | "per week" | "per day" | "per month";
  deposit?: string;
  notes?: string;
  sourceUrl: string;
  verificationStatus: "PUBLIC_WEBSITE";
}

export const prices: PriceEntry[] = [
  // Elliott Storage
  { operatorSlug: "elliott-storage", location: "Ballasalla", sizeLabel: "26 sq ft", squareFeet: 26, dimensions: "4ft x 6.5ft", price: 75, period: "pcm", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Ballasalla", sizeLabel: "52 sq ft", squareFeet: 52, dimensions: "8ft x 6.5ft", price: 90, period: "pcm", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Ballasalla", sizeLabel: "80 sq ft", squareFeet: 80, dimensions: "10ft x 8ft", price: 105, period: "pcm", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Ballasalla", sizeLabel: "160 sq ft", squareFeet: 160, dimensions: "20ft x 8ft", price: 151, period: "pcm", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Braddan", sizeLabel: "160 sq ft upper floor", squareFeet: 160, dimensions: "20ft x 8ft", price: 136, period: "pcm", notes: "Upper floor unit", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Braddan", sizeLabel: "160 sq ft ground floor", squareFeet: 160, dimensions: "20ft x 8ft", price: 151, period: "pcm", notes: "Ground floor unit", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Douglas", sizeLabel: "26 sq ft", squareFeet: 26, price: 75, period: "pcm", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Douglas", sizeLabel: "52 sq ft", squareFeet: 52, price: 90, period: "pcm", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Douglas", sizeLabel: "80 sq ft upper floor", squareFeet: 80, price: 98, period: "pcm", notes: "Upper floor unit", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Douglas", sizeLabel: "80 sq ft ground floor", squareFeet: 80, price: 105, period: "pcm", notes: "Ground floor unit", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Douglas", sizeLabel: "160 sq ft upper floor", squareFeet: 160, price: 136, period: "pcm", notes: "Upper floor unit", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Douglas", sizeLabel: "160 sq ft ground floor", squareFeet: 160, price: 151, period: "pcm", notes: "Ground floor unit", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Foxdale", sizeLabel: "66 sq ft", squareFeet: 66, price: 94, period: "pcm", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Foxdale", sizeLabel: "160 sq ft", squareFeet: 160, price: 123, period: "pcm", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Jurby", sizeLabel: "80 sq ft upper floor", squareFeet: 80, price: 94, period: "pcm", notes: "Upper floor unit", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Jurby", sizeLabel: "80 sq ft ground floor", squareFeet: 80, price: 98, period: "pcm", notes: "Ground floor unit", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Jurby", sizeLabel: "160 sq ft upper floor", squareFeet: 160, price: 123, period: "pcm", notes: "Upper floor unit", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Jurby", sizeLabel: "160 sq ft ground floor", squareFeet: 160, price: 136, period: "pcm", notes: "Ground floor unit", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Crosby", sizeLabel: "80 sq ft", squareFeet: 80, price: 115, period: "pcm", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Crosby", sizeLabel: "160 sq ft upper floor", squareFeet: 160, price: 110, period: "pcm", notes: "Upper floor unit", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Crosby", sizeLabel: "160 sq ft ground floor", squareFeet: 160, price: 123, period: "pcm", notes: "Ground floor unit", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "elliott-storage", location: "Crosby", sizeLabel: "320 sq ft", squareFeet: 320, price: 220, period: "pcm", sourceUrl: "https://elliottstorage.im/", verificationStatus: "PUBLIC_WEBSITE" },
  // Containermann
  { operatorSlug: "containermann", location: "Isle of Man", sizeLabel: "20ft container upper-level unit", squareFeet: 160, price: 78, period: "per month", notes: "Upper-level unit", sourceUrl: "https://containermann.com/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "containermann", location: "Isle of Man", sizeLabel: "20ft container lower-level unit", squareFeet: 160, price: 120, period: "per month", notes: "Lower-level unit", sourceUrl: "https://containermann.com/", verificationStatus: "PUBLIC_WEBSITE" },
  // Manx Self Storage
  { operatorSlug: "manx-self-storage", location: "Douglas", sizeLabel: "2m x 2m", squareFeet: 43, price: 25, period: "per week", sourceUrl: "https://selfstorage.co.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "manx-self-storage", location: "Douglas", sizeLabel: "2m x 3m", squareFeet: 65, price: 30, period: "per week", sourceUrl: "https://selfstorage.co.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "manx-self-storage", location: "Douglas", sizeLabel: "2m x 4m", squareFeet: 86, price: 35, period: "per week", sourceUrl: "https://selfstorage.co.im/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "manx-self-storage", location: "Douglas", sizeLabel: "3m x 4m", squareFeet: 129, price: 50, period: "per week", sourceUrl: "https://selfstorage.co.im/", verificationStatus: "PUBLIC_WEBSITE" },
  // Storemann
  { operatorSlug: "storemann", location: "Peel", sizeLabel: "2m x 2m x 2m", squareFeet: 43, price: 25, period: "per week", sourceUrl: "https://www.storemann.com/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "storemann", location: "Peel", sizeLabel: "2m x 3m x 2m", squareFeet: 65, price: 32.5, period: "per week", sourceUrl: "https://www.storemann.com/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "storemann", location: "Peel", sizeLabel: "2m x 4m x 2m", squareFeet: 86, price: 37.5, period: "per week", sourceUrl: "https://www.storemann.com/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "storemann", location: "Peel", sizeLabel: "2m x 5m x 2m", squareFeet: 108, price: 42.5, period: "per week", sourceUrl: "https://www.storemann.com/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "storemann", location: "Peel", sizeLabel: "3m x 4m x 2m", squareFeet: 129, price: 47.5, period: "per week", sourceUrl: "https://www.storemann.com/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "storemann", location: "Peel", sizeLabel: "3m x 5m x 2m", squareFeet: 161, price: 52.5, period: "per week", sourceUrl: "https://www.storemann.com/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "storemann", location: "Peel", sizeLabel: "7m x 2.5m x 2m", squareFeet: 188, price: 57.5, period: "per week", sourceUrl: "https://www.storemann.com/", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "storemann", location: "Peel", sizeLabel: "7m x 5m x 2m", squareFeet: 376, price: 72.5, period: "per week", sourceUrl: "https://www.storemann.com/", verificationStatus: "PUBLIC_WEBSITE" },
  // Callister Removals
  { operatorSlug: "callister-removals-self-storage", location: "Isle of Man", sizeLabel: "25 sq ft", squareFeet: 25, price: 12, period: "per week", notes: "From £12 per week", sourceUrl: "https://www.callisterremovals.co.im/storageservices/self-storage", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "callister-removals-self-storage", location: "Isle of Man", sizeLabel: "50 sq ft", squareFeet: 50, price: 22, period: "per week", notes: "From £22 per week", sourceUrl: "https://www.callisterremovals.co.im/storageservices/self-storage", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "callister-removals-self-storage", location: "Isle of Man", sizeLabel: "75 sq ft", squareFeet: 75, price: 32, period: "per week", notes: "From £32 per week", sourceUrl: "https://www.callisterremovals.co.im/storageservices/self-storage", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "callister-removals-self-storage", location: "Isle of Man", sizeLabel: "100 sq ft", squareFeet: 100, price: 42, period: "per week", notes: "From £42 per week", sourceUrl: "https://www.callisterremovals.co.im/storageservices/self-storage", verificationStatus: "PUBLIC_WEBSITE" },
  { operatorSlug: "callister-removals-self-storage", location: "Isle of Man", sizeLabel: "150 sq ft", squareFeet: 150, price: 65, period: "per week", notes: "From £65 per week", sourceUrl: "https://www.callisterremovals.co.im/storageservices/self-storage", verificationStatus: "PUBLIC_WEBSITE" },
  // Hitchens
  { operatorSlug: "hitchens-removals-storage", location: "Isle of Man", sizeLabel: "Flexible", price: 1, period: "per day", notes: "From £1 per day + VAT. Unit size not specified.", sourceUrl: "https://www.hitchensremovals.com/page_337095.html", verificationStatus: "PUBLIC_WEBSITE" },
];

export function getPricesByOperator(slug: string): PriceEntry[] {
  return prices.filter((p) => p.operatorSlug === slug);
}

export function getPriceFromForOperator(slug: string): { price: number; period: string } | null {
  const operatorPrices = getPricesByOperator(slug);
  if (operatorPrices.length === 0) return null;
  const min = operatorPrices.reduce((a, b) => (a.price < b.price ? a : b));
  return { price: min.price, period: min.period };
}
