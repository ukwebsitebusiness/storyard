export interface StorageType {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  whoFor: string[];
  useCases: string[];
  comparePoints: string[];
  icon: string;
}

export const storageTypes: StorageType[] = [
  {
    slug: "container-storage-isle-of-man",
    title: "Container Storage on the Isle of Man",
    shortTitle: "Container Storage",
    description:
      "Container storage uses shipping-style containers, typically 20ft or 40ft, to store goods securely. These are often located in storage yards or industrial sites and are ideal for large volumes, trade inventory and long-term storage where you do not need frequent access.",
    whoFor: [
      "Businesses with large inventory",
      "Tradespeople with tools and materials",
      "House movers needing temporary overflow",
      "Anyone storing vehicles or bulky items",
    ],
    useCases: [
      "Storing construction materials between jobs",
      "Business stock overflow during busy periods",
      "House contents during renovation",
      "Vehicle and equipment storage",
    ],
    comparePoints: [
      "Ground-level access is usually available",
      "Typically more cost-effective per square foot",
      "Security depends on yard gates and container locks",
      "Check whether the container is weatherproof and ventilated",
    ],
    icon: "container",
  },
  {
    slug: "self-storage-isle-of-man",
    title: "Self-Storage on the Isle of Man",
    shortTitle: "Self-Storage",
    description:
      "Self-storage gives you a private, lockable unit within a secure facility. You hold the key and can usually access your unit during set hours. It is the most flexible option for personal and small business use.",
    whoFor: [
      "People moving home or downsizing",
      "Students between terms",
      "Small businesses with documents or stock",
      "Anyone decluttering or renovating",
    ],
    useCases: [
      "Temporary storage during a house move",
      "Seasonal item storage (garden furniture, decorations)",
      "Small business stock and archive storage",
      "Keeping belongings safe during extended travel",
    ],
    comparePoints: [
      "Look for CCTV, gated access and individual alarms",
      "Climate control is useful for documents and electronics",
      "Check access hours match your schedule",
      "Ask about insurance requirements",
    ],
    icon: "box",
  },
  {
    slug: "business-storage-isle-of-man",
    title: "Business Storage on the Isle of Man",
    shortTitle: "Business Storage",
    description:
      "Business storage covers units and containers used by companies to manage stock, equipment, archives and overflow. It can include self-storage, containers and specialist document storage.",
    whoFor: [
      "Retailers managing seasonal stock",
      "E-commerce businesses needing dispatch space",
      "Offices archiving paperwork",
      "Construction firms storing tools and materials",
    ],
    useCases: [
      "Holding extra stock before peak season",
      "Archiving financial and legal records",
      "Storing marketing materials and event equipment",
      "Keeping trade tools secure off-site",
    ],
    comparePoints: [
      "Consider proximity to your main premises",
      "Check if the facility offers business rates or VAT receipts",
      "Look for units with power if you need it",
      "Verify access hours suit your business schedule",
    ],
    icon: "briefcase",
  },
  {
    slug: "household-storage-isle-of-man",
    title: "Household Storage on the Isle of Man",
    shortTitle: "Household Storage",
    description:
      "Household storage is designed for personal belongings during life changes such as moving, renovating, downsizing or bereavement. It includes self-storage units and removals storage.",
    whoFor: [
      "Families moving to a new home",
      "Downsizers who need to keep heirlooms",
      "Renovators protecting furniture from dust",
      "Executors managing a deceased estate",
    ],
    useCases: [
      "Storing furniture during a renovation",
      "Keeping belongings safe between exchange and completion",
      "Storing sentimental items while downsizing",
      "Temporary storage during a rental gap",
    ],
    comparePoints: [
      "Ask about pest control and humidity management",
      "Check if trolleys and lifts are available",
      "Look for flexible contracts in case dates change",
      "Pack fragile items carefully and label boxes",
    ],
    icon: "home",
  },
  {
    slug: "trade-storage-isle-of-man",
    title: "Trade Storage on the Isle of Man",
    shortTitle: "Trade Storage",
    description:
      "Trade storage provides secure space for builders, plumbers, electricians, landscapers and other tradespeople to keep tools, materials and equipment. Container and yard storage are common.",
    whoFor: [
      "Builders and construction firms",
      "Landscapers and gardeners",
      "Electricians and plumbers",
      "Painters and decorators",
    ],
    useCases: [
      "Keeping tools safe overnight instead of in a van",
      "Storing bulk materials bought at trade prices",
      "Holding equipment between contracts",
      "Managing job-site overflow materials",
    ],
    comparePoints: [
      "24/7 access is often important for early starts",
      "Ground-level access makes loading easier",
      "Check if the site has CCTV and secure gates",
      "Ask whether VAT invoices are provided",
    ],
    icon: "wrench",
  },
  {
    slug: "vehicle-storage-isle-of-man",
    title: "Vehicle Storage on the Isle of Man",
    shortTitle: "Vehicle Storage",
    description:
      "Vehicle storage covers secure parking and storage for cars, motorbikes, vans, caravans and classic vehicles. Options range from open yards to covered or indoor units.",
    whoFor: [
      "Classic car owners needing secure winter storage",
      "Motorbike riders with limited home parking",
      "Caravan owners during off-season",
      "Commercial fleet operators needing overflow parking",
    ],
    useCases: [
      "Protecting a classic car through winter months",
      "Storing a motorbike securely away from home",
      "Keeping a caravan safe during the off-season",
      "Parking a commercial van when not in use",
    ],
    comparePoints: [
      "Check if the storage is covered, indoor or open",
      "Ask about battery maintenance options",
      "Verify the site has secure fencing and CCTV",
      "Check insurance requirements for stored vehicles",
    ],
    icon: "car",
  },
  {
    slug: "20ft-container-storage-isle-of-man",
    title: "20ft Container Storage on the Isle of Man",
    shortTitle: "20ft Container Storage",
    description:
      "A 20ft container provides roughly 160 square feet of secure, weatherproof storage. It is one of the most popular sizes for both domestic and commercial use on the Isle of Man.",
    whoFor: [
      "House movers storing the contents of a 2-3 bedroom home",
      "Businesses with palletised stock",
      "Tradespeople with bulky equipment",
      "Anyone needing outdoor secure storage",
    ],
    useCases: [
      "Holding the contents of an average house move",
      "Storing palletised goods for a small business",
      "Keeping building materials dry and secure",
      "Long-term storage for seasonal stock",
    ],
    comparePoints: [
      "A 20ft container holds roughly 160 sq ft / 1,170 cubic ft",
      "Check whether the container is new or used",
      "Ask if the yard has hardstanding and good drainage",
      "Verify lock quality and whether a lockbox is fitted",
    ],
    icon: "container",
  },
  {
    slug: "secure-storage-isle-of-man",
    title: "Secure Storage on the Isle of Man",
    shortTitle: "Secure Storage",
    description:
      "Secure storage facilities feature controlled access, CCTV, alarm systems and often individual unit alarms. This category covers any storage type where security is the primary selling point.",
    whoFor: [
      "Businesses storing valuable stock or documents",
      "Homeowners with high-value belongings",
      "Anyone who prioritises safety over cost",
      "Professionals storing confidential files",
    ],
    useCases: [
      "Storing business records with controlled access",
      "Keeping jewellery, art or collectibles safe",
      "Protecting tools and equipment from theft",
      "Confidential document archiving",
    ],
    comparePoints: [
      "Ask about CCTV coverage and retention periods",
      "Check for gated access, PIN entry or fobs",
      "Individual unit alarms add an extra layer",
      "Look for fire detection and suppression systems",
    ],
    icon: "shield",
  },
];

export function getStorageTypeBySlug(slug: string): StorageType | undefined {
  return storageTypes.find((s) => s.slug === slug);
}
