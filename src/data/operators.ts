export interface Operator {
  slug: string;
  name: string;
  website: string;
  storageTypes: string[];
  locations: string[];
  claimed: boolean;
  verified: boolean;
  websiteStatus: "WORKING" | "UNKNOWN" | "DOWN";
  listingDataSource: "public_website";
  description?: string;
  features?: string[];
  phone?: string;
  email?: string;
}

export const operators: Operator[] = [
  {
    slug: "elliott-storage",
    name: "Elliott Storage",
    website: "https://elliottstorage.im/",
    storageTypes: ["container storage", "self-storage"],
    locations: ["Ballasalla", "Braddan", "Crosby", "Douglas", "Foxdale", "Jurby"],
    claimed: false,
    verified: false,
    websiteStatus: "WORKING",
    listingDataSource: "public_website",
    description:
      "Elliott Storage offers container storage and self-storage units across multiple Isle of Man locations including Ballasalla, Braddan, Crosby, Douglas, Foxdale and Jurby.",
    features: ["Multiple locations", "Container storage", "Self-storage units", "Flexible sizes"],
  },
  {
    slug: "containermann",
    name: "Containermann",
    website: "https://containermann.com/",
    storageTypes: ["container storage"],
    locations: ["Isle of Man"],
    claimed: false,
    verified: false,
    websiteStatus: "WORKING",
    listingDataSource: "public_website",
    description:
      "Containermann specialises in 20ft container storage with upper and lower level unit options for secure, flexible storage.",
    features: ["20ft containers", "Upper/lower level units", "Secure storage"],
  },
  {
    slug: "manx-self-storage",
    name: "Manx Self Storage",
    website: "https://selfstorage.co.im/",
    storageTypes: ["self-storage"],
    locations: ["Douglas"],
    claimed: false,
    verified: false,
    websiteStatus: "WORKING",
    listingDataSource: "public_website",
    description:
      "Manx Self Storage provides clean, secure self-storage units in Douglas, Isle of Man, with a range of unit sizes to suit personal and business needs.",
    features: ["Douglas location", "Clean units", "Secure facility", "Multiple sizes"],
  },
  {
    slug: "big-red-self-storage",
    name: "Big Red Self Storage",
    website: "https://www.bigred.im/",
    storageTypes: ["self-storage"],
    locations: ["Ronaldsway", "Ballasalla", "Tromode", "Douglas"],
    claimed: false,
    verified: false,
    websiteStatus: "WORKING",
    listingDataSource: "public_website",
    description:
      "Big Red Self Storage operates facilities in Ronaldsway/Ballasalla and Tromode/Douglas, offering accessible self-storage for residents and businesses.",
    features: ["Ronaldsway/Ballasalla", "Tromode/Douglas", "Accessible units", "Self-storage"],
  },
  {
    slug: "storemann",
    name: "Storemann",
    website: "https://www.storemann.com/",
    storageTypes: ["self-storage"],
    locations: ["Peel"],
    claimed: false,
    verified: false,
    websiteStatus: "WORKING",
    listingDataSource: "public_website",
    description:
      "Storemann provides self-storage solutions in Peel, Isle of Man, with competitively priced units ranging from small to large sizes.",
    features: ["Peel location", "Competitive pricing", "Range of sizes"],
  },
  {
    slug: "callister-removals-self-storage",
    name: "Callister Removals Self Storage",
    website: "https://www.callisterremovals.co.im/storageservices/self-storage",
    storageTypes: ["self-storage", "removals storage"],
    locations: ["Isle of Man"],
    claimed: false,
    verified: false,
    websiteStatus: "WORKING",
    listingDataSource: "public_website",
    description:
      "Callister Removals offers self-storage and removals storage services, ideal for house moves, decluttering and temporary storage needs.",
    features: ["Self-storage", "Removals storage", "House move friendly"],
  },
  {
    slug: "corkill-removals-storage",
    name: "Corkill Removals & Storage",
    website: "https://www.corkillremovals.com/storage.html",
    storageTypes: ["removals storage", "household storage"],
    locations: ["Isle of Man"],
    claimed: false,
    verified: false,
    websiteStatus: "WORKING",
    listingDataSource: "public_website",
    description:
      "Corkill Removals & Storage provides household and removals storage for Isle of Man residents, with experience in secure handling and storage.",
    features: ["Household storage", "Removals storage", "Experienced handling"],
  },
  {
    slug: "corkill-datasafe",
    name: "Corkill Datasafe",
    website: "https://www.datasafe.co.im/",
    storageTypes: ["document storage", "archive storage"],
    locations: ["Isle of Man"],
    claimed: false,
    verified: false,
    websiteStatus: "WORKING",
    listingDataSource: "public_website",
    description:
      "Corkill Datasafe offers secure document and archive storage for businesses needing compliant records management on the Isle of Man.",
    features: ["Document storage", "Archive storage", "Business records", "Compliance"],
  },
  {
    slug: "hitchens-removals-storage",
    name: "Hitchens Removals & Storage",
    website: "https://www.hitchensremovals.com/page_337095.html",
    storageTypes: ["removals storage", "storage containers"],
    locations: ["Isle of Man"],
    claimed: false,
    verified: false,
    websiteStatus: "WORKING",
    listingDataSource: "public_website",
    description:
      "Hitchens Removals & Storage offers removals storage and container storage options, with flexible daily rates for short and long term needs.",
    features: ["Removals storage", "Container storage", "Flexible daily rates"],
  },
  {
    slug: "mann-crane-hire",
    name: "Mann Crane Hire",
    website: "https://www.manncranehire.im/services/",
    storageTypes: ["secure self-storage", "site accommodation", "container-style units"],
    locations: ["Isle of Man"],
    claimed: false,
    verified: false,
    websiteStatus: "WORKING",
    listingDataSource: "public_website",
    description:
      "Mann Crane Hire provides secure self-storage, site accommodation and container-style units, serving construction, trade and personal storage needs.",
    features: ["Secure self-storage", "Site accommodation", "Container-style units", "Trade friendly"],
  },
  {
    slug: "easymix-storage-solutions",
    name: "EasyMix Storage Solutions",
    website: "https://www.easymix.im/storage-solutions/",
    storageTypes: ["self-storage"],
    locations: ["Isle of Man"],
    claimed: false,
    verified: false,
    websiteStatus: "WORKING",
    listingDataSource: "public_website",
    description:
      "EasyMix Storage Solutions offers self-storage options for personal and business use on the Isle of Man.",
    features: ["Self-storage", "Personal and business use"],
  },
];

export function getOperatorBySlug(slug: string): Operator | undefined {
  return operators.find((o) => o.slug === slug);
}

export function getOperatorsByLocation(location: string): Operator[] {
  return operators.filter((o) =>
    o.locations.some((l) => l.toLowerCase() === location.toLowerCase())
  );
}

export function getOperatorsByStorageType(type: string): Operator[] {
  return operators.filter((o) =>
    o.storageTypes.some((t) => t.toLowerCase().includes(type.toLowerCase()))
  );
}
