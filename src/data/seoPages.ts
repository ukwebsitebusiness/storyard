export interface SEOPage {
  route: string;
  title: string;
  description: string;
  keywords?: string[];
}

export const seoPages: SEOPage[] = [
  { route: "/", title: "Storyard — Find Secure Storage Across the Isle of Man", description: "Compare container storage, self-storage, business storage and trade storage near Douglas, Braddan, Ballasalla, Jurby and beyond." },
  { route: "/storage/", title: "Compare Storage on the Isle of Man — Storyard", description: "Search and compare storage facilities across the Isle of Man. Filter by location, storage type, unit size and price." },
  { route: "/storage/isle-of-man/", title: "Isle of Man Storage — All Locations", description: "Browse every storage option across the Isle of Man including container, self-storage, business and trade storage." },
  { route: "/storage/douglas/", title: "Storage in Douglas — Compare Units & Containers", description: "Find secure storage in Douglas, Isle of Man. Compare self-storage and container options with pricing and availability." },
  { route: "/storage/braddan/", title: "Storage in Braddan — Compare Facilities", description: "Explore storage options in Braddan near Douglas. Container and self-storage units available." },
  { route: "/storage/ballasalla/", title: "Storage in Ballasalla & Ronaldsway", description: "Compare storage facilities in Ballasalla and Ronaldsway. Container and self-storage near the airport." },
  { route: "/storage/ronaldsway/", title: "Storage in Ronaldsway — Trade & Business", description: "Find trade and business storage near Ronaldsway Airport and Ballasalla." },
  { route: "/storage/jurby/", title: "Storage in Jurby — Large Units & Containers", description: "Discover container and self-storage in Jurby, north Isle of Man. Large units and yard storage available." },
  { route: "/storage/crosby/", title: "Storage in Crosby — Central Isle of Man", description: "Find convenient storage in Crosby, centrally located between Douglas and the north-west." },
  { route: "/storage/foxdale/", title: "Storage in Foxdale — Central Location", description: "Compare storage options in Foxdale, a central village with easy access across the Isle of Man." },
  { route: "/storage/peel/", title: "Storage in Peel — West Coast Options", description: "Find self-storage and household storage in Peel, the western city of the Isle of Man." },
  { route: "/storage/ramsey/", title: "Storage in Ramsey — Northern Facilities", description: "Discover storage options in Ramsey, serving the north of the Isle of Man." },
  { route: "/storage/castletown/", title: "Storage in Castletown — Southern Options", description: "Find storage facilities in Castletown, the historic former capital in the south of the Island." },
  { route: "/storage/port-erin/", title: "Storage in Port Erin — Southern Tip", description: "Explore storage options near Port Erin, the southernmost village on the Isle of Man." },
  { route: "/storage/port-st-mary/", title: "Storage in Port St Mary — Southern Harbour", description: "Find trade and self-storage near Port St Mary in the south of the Isle of Man." },
  { route: "/container-storage-isle-of-man/", title: "Container Storage Isle of Man — 20ft Units", description: "Compare container storage across the Isle of Man. 20ft container options, yard storage and trade containers." },
  { route: "/self-storage-isle-of-man/", title: "Self-Storage Isle of Man — Units & Prices", description: "Find and compare self-storage units across the Isle of Man. Prices, sizes and locations." },
  { route: "/business-storage-isle-of-man/", title: "Business Storage Isle of Man — Stock & Archive", description: "Compare business storage for stock, documents and equipment on the Isle of Man." },
  { route: "/household-storage-isle-of-man/", title: "Household Storage Isle of Man — Moving & Renovating", description: "Find household storage for moves, renovations and downsizing across the Isle of Man." },
  { route: "/trade-storage-isle-of-man/", title: "Trade Storage Isle of Man — Tools & Materials", description: "Compare trade storage for builders, electricians, plumbers and landscapers on the Isle of Man." },
  { route: "/vehicle-storage-isle-of-man/", title: "Vehicle Storage Isle of Man — Cars, Bikes & Vans", description: "Find secure vehicle storage for cars, motorbikes, vans and caravans on the Isle of Man." },
  { route: "/20ft-container-storage-isle-of-man/", title: "20ft Container Storage Isle of Man", description: "Compare 20ft container storage options across the Isle of Man. Ideal for house moves and business stock." },
  { route: "/secure-storage-isle-of-man/", title: "Secure Storage Isle of Man — CCTV & Alarms", description: "Find the most secure storage facilities on the Isle of Man with CCTV, alarms and controlled access." },
  { route: "/storage-size-helper/", title: "Storage Size Helper — What Size Do I Need?", description: "Use our storage size helper to find the right unit or container size for your belongings on the Isle of Man." },
  { route: "/request-quote/", title: "Request a Storage Quote — Storyard", description: "Request quotes from storage operators across the Isle of Man. Tell us what you need and we will connect you." },
  { route: "/operators/", title: "Storage Operators on the Isle of Man — Storyard", description: "Browse storage operators across the Isle of Man. Compare facilities, locations and storage types." },
  { route: "/claim-listing/", title: "Claim Your Storage Listing — Storyard", description: "Claim your storage business listing on Storyard and manage your profile, prices and availability." },
  { route: "/list-your-storage-business/", title: "List Your Storage Business — Storyard", description: "Add your storage business to Storyard, the Isle of Man storage marketplace. Get more qualified enquiries." },
  { route: "/about/", title: "About Storyard — Isle of Man Storage Marketplace", description: "Learn about Storyard, the marketplace helping Isle of Man residents and businesses find secure storage." },
  { route: "/contact/", title: "Contact Storyard — Isle of Man Storage", description: "Contact the Storyard team for support, partnership enquiries or feedback." },
  { route: "/privacy/", title: "Privacy Policy — Storyard", description: "Read the Storyard privacy policy. How we collect, use and protect your personal information." },
  { route: "/terms/", title: "Terms of Use — Storyard", description: "Read the Storyard terms of use. By using our site you agree to these terms." },
  { route: "/thank-you/", title: "Thank You — Storyard", description: "Thank you for your submission. We will be in touch shortly." },
];

export function getSEOPage(route: string): SEOPage | undefined {
  const normalized = route.replace(/\/$/, "");
  return seoPages.find((p) => p.route.replace(/\/$/, "") === normalized);
}
