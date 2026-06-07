export interface Location {
  slug: string;
  name: string;
  description: string;
  nearby: string[];
  intro: string;
  storageTypesAvailable: string[];
  populationNote?: string;
  landmarks?: string[];
}

export const locations: Location[] = [
  {
    slug: "douglas",
    name: "Douglas",
    description: "The capital and largest town of the Isle of Man, with strong demand for personal and business storage.",
    nearby: ["braddan", "ronaldsway", "crosby"],
    intro: "Douglas is the busiest storage market on the Isle of Man. With a mix of residential areas, retail businesses and light industry, demand spans from small household units to larger commercial spaces. Whether you are moving home near Derby Road, expanding a business on the Promenade or need temporary storage during renovations, Douglas has several options to compare.",
    storageTypesAvailable: ["self-storage", "container storage", "business storage"],
    populationNote: "Largest town on the Island",
    landmarks: ["Douglas Promenade", "Sea Terminal", "Chester Street"],
  },
  {
    slug: "braddan",
    name: "Braddan",
    description: "A central parish between Douglas and the south, popular for accessible storage with good road links.",
    nearby: ["douglas", "ballasalla", "ronaldsway"],
    intro: "Braddan offers convenient storage locations close to the Island's main arterial roads. Its position between Douglas and the south makes it popular for residents in the central corridor who need quick access to their stored goods.",
    storageTypesAvailable: ["container storage", "self-storage"],
    landmarks: ["Braddan Bridge", "TT Course"],
  },
  {
    slug: "ballasalla",
    name: "Ballasalla",
    description: "A village in the south with industrial and residential storage options near Ronaldsway.",
    nearby: ["ronaldsway", "braddan", "castletown"],
    intro: "Ballasalla and the wider south of the Island offer a mix of container yards and self-storage facilities. Proximity to Ronaldsway Airport makes this area practical for both local residents and businesses needing logistics-friendly storage.",
    storageTypesAvailable: ["container storage", "self-storage", "trade storage"],
    landmarks: ["Ronaldsway Airport", "Ballasalla Industrial Estate"],
  },
  {
    slug: "ronaldsway",
    name: "Ronaldsway",
    description: "Airport area with trade and business storage options in the south.",
    nearby: ["ballasalla", "castletown", "braddan"],
    intro: "The Ronaldsway area, centred around the Isle of Man Airport, is a growing hub for trade and business storage. With industrial estates nearby, this is a practical choice for contractors, e-commerce operators and small businesses needing accessible unit storage.",
    storageTypesAvailable: ["self-storage", "trade storage", "business storage"],
    landmarks: ["Isle of Man Airport", "Southside Industrial Estate"],
  },
  {
    slug: "jurby",
    name: "Jurby",
    description: "North of the Island with larger yard and container storage options.",
    nearby: ["peel", "ramsey", "crosby"],
    intro: "Jurby, in the north of the Island, offers larger-scale storage options including container yards and spacious units. The area is well suited to vehicle storage, trade inventory and anyone needing generous ground-level access.",
    storageTypesAvailable: ["container storage", "self-storage", "vehicle storage"],
    landmarks: ["Jurby Airfield", "Jurby Industrial Park"],
  },
  {
    slug: "crosby",
    name: "Crosby",
    description: "Central parish with convenient access to Douglas and western locations.",
    nearby: ["douglas", "braddan", "jurby"],
    intro: "Crosby sits conveniently between Douglas and the north-west, making it a practical choice for anyone living along the central corridor. Storage facilities here benefit from straightforward road access and proximity to the Island's main population centres.",
    storageTypesAvailable: ["self-storage", "container storage"],
    landmarks: ["Crosby Village", "Union Mills"],
  },
  {
    slug: "foxdale",
    name: "Foxdale",
    description: "Historic mining village in the centre of the Island.",
    nearby: ["peel", "douglas", "castletown"],
    intro: "Foxdale, once a mining village in the heart of the Island, offers storage options with a central location that is easy to reach from most parishes. It is a practical choice for residents in the midlands and west who want to avoid travelling into Douglas.",
    storageTypesAvailable: ["self-storage", "container storage"],
    landmarks: ["Foxdale Village Centre", "Old Mines"],
  },
  {
    slug: "peel",
    name: "Peel",
    description: "The western city with fishing and heritage character, and local storage facilities.",
    nearby: ["jurby", "foxdale", "crosby"],
    intro: "Peel, known as the Sunset City, has its own local storage providers serving residents along the west coast. From decluttering a cottage near the beach to storing fishing or marine equipment, Peel's storage options keep your belongings close to home.",
    storageTypesAvailable: ["self-storage", "household storage"],
    landmarks: ["Peel Castle", "Peel Harbour", "House of Manannan"],
  },
  {
    slug: "ramsey",
    name: "Ramsey",
    description: "The second largest town in the north, serving the Island's northern parishes.",
    nearby: ["jurby", "douglas", "peel"],
    intro: "Ramsey is the largest town in the north of the Isle of Man and a natural service centre for the surrounding parishes. Storage demand here comes from residents, rural businesses and hobbyists who need secure space without travelling south to Douglas.",
    storageTypesAvailable: ["self-storage", "container storage", "business storage"],
    landmarks: ["Ramsey Quay", "Mooragh Park", "Queen's Pier"],
  },
  {
    slug: "castletown",
    name: "Castletown",
    description: "Historic capital in the south, with residential and small business storage needs.",
    nearby: ["ballasalla", "ronaldsway", "port-erin"],
    intro: "Castletown, the former capital of the Isle of Man, combines historic charm with modern practical needs. Residents and small businesses in the south can find storage solutions without travelling far from home.",
    storageTypesAvailable: ["self-storage", "household storage"],
    landmarks: ["Rushen Castle", "Castletown Square", "Old House of Keys"],
  },
  {
    slug: "port-erin",
    name: "Port Erin",
    description: "The southernmost village, popular with tourists and retirees needing seasonal storage.",
    nearby: ["port-st-mary", "castletown", "ronaldsway"],
    intro: "Port Erin, at the southern tip of the Island, attracts visitors and retirees who sometimes need seasonal or transitional storage. Whether storing holiday equipment or downsizing a coastal property, options are available within reach.",
    storageTypesAvailable: ["self-storage", "household storage"],
    landmarks: ["Calf of Man View", "Port Erin Station", "Railway Museum"],
  },
  {
    slug: "port-st-mary",
    name: "Port St Mary",
    description: "Southern fishing port with local and marine storage needs.",
    nearby: ["port-erin", "castletown", "ballasalla"],
    intro: "Port St Mary is a working harbour village in the south where storage needs often relate to marine equipment, seasonal gear and household overflow. Nearby facilities in Ballasalla and Ronaldsway serve the wider south.",
    storageTypesAvailable: ["self-storage", "trade storage"],
    landmarks: ["Port St Mary Harbour", "Chapel Bay"],
  },
  {
    slug: "isle-of-man",
    name: "Isle of Man",
    description: "All storage options across the entire Island.",
    nearby: ["douglas", "peel", "ramsey", "jurby"],
    intro: "The Isle of Man has a growing storage market spanning container yards, self-storage facilities, removals storage and specialist archive services. From Douglas to Peel, and Ramsey to Port Erin, you can find secure storage solutions across the Island.",
    storageTypesAvailable: ["container storage", "self-storage", "business storage", "trade storage", "vehicle storage", "document storage", "archive storage", "household storage", "removals storage"],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
