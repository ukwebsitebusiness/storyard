export interface FAQ {
  question: string;
  answer: string;
}

export const generalFaqs: FAQ[] = [
  {
    question: "What is Storyard?",
    answer:
      "Storyard is a storage marketplace for the Isle of Man. We help you find and compare storage options including container storage, self-storage, business storage and trade storage. We do not own or operate storage facilities ourselves; we connect you with operators who can help.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use our quote request form to tell us what you need to store, where you are based and when you need it. We will pass your enquiry to relevant storage operators who will contact you directly with availability and pricing.",
  },
  {
    question: "Is Storyard a storage company?",
    answer:
      "No. Storyard is a marketplace and directory. We help you discover storage providers, compare options and request quotes. The storage operator owns the facility and manages your contract directly.",
  },
  {
    question: "Are the prices shown guaranteed?",
    answer:
      "Prices shown are taken from publicly available sources or provided by operators. They are a guide only. Prices and availability should always be confirmed directly with the storage operator before booking.",
  },
  {
    question: "What areas of the Isle of Man do you cover?",
    answer:
      "We list storage options across the Isle of Man including Douglas, Braddan, Ballasalla, Ronaldsway, Jurby, Crosby, Foxdale, Peel, Ramsey, Castletown, Port Erin and Port St Mary.",
  },
  {
    question: "How do I claim a listing for my storage business?",
    answer:
      "If you own or operate a storage business listed on Storyard, you can claim your listing by filling out our claim form. We will verify your details and give you control over your listing content.",
  },
  {
    question: "Do you store my belongings?",
    answer:
      "No. Storyard does not store anything. We introduce you to storage operators who provide the facility, contract and service.",
  },
  {
    question: "Can I get help choosing the right size?",
    answer:
      "Yes. Use our Storage Size Helper to get recommendations based on what you are storing, how many rooms of furniture you have and whether it is for personal, business or vehicle use.",
  },
];

export const storageTypeFaqs: FAQ[] = [
  {
    question: "What is the difference between self-storage and container storage?",
    answer:
      "Self-storage is typically an indoor unit in a secure building with individual locks and shared access corridors. Container storage uses external shipping containers, often in a yard, and is usually more cost-effective for larger volumes but may have less frequent access.",
  },
  {
    question: "Do I need insurance for my stored items?",
    answer:
      "Most operators require or strongly recommend insurance. Some include basic cover in the price; others ask you to arrange your own. Check with the operator before signing.",
  },
  {
    question: "Can I access my storage unit at any time?",
    answer:
      "Access hours vary by facility. Some offer 24/7 access; others have set hours. If you need flexibility, ask the operator about their access policy before committing.",
  },
  {
    question: "What is the minimum rental period?",
    answer:
      "Minimum rental periods vary. Some operators offer weekly contracts; others prefer monthly minimums. Ask the operator about notice periods and flexibility if your plans may change.",
  },
];

export const locationFaqs: FAQ[] = [
  {
    question: "How do I choose the best location for my storage?",
    answer:
      "Consider how often you will visit, traffic routes and proximity to your home or business. A slightly cheaper unit far away may cost more in time and fuel if you visit regularly.",
  },
  {
    question: "Are there storage options outside Douglas?",
    answer:
      "Yes. The Isle of Man has storage facilities in Peel, Ramsey, Jurby, Ballasalla, Braddan, Foxdale and other areas. Use our search to compare locations.",
  },
];

export const operatorFaqs: FAQ[] = [
  {
    question: "How can I list my storage business on Storyard?",
    answer:
      "Fill out our 'List Your Storage Business' form with your company details, locations, storage types and contact information. We will review and add your listing.",
  },
  {
    question: "Is there a cost to be listed on Storyard?",
    answer:
      "Basic listings are currently free during our launch phase. We will introduce paid plans with enhanced features in the future. Claiming and managing your listing will always remain free for verified operators.",
  },
];
