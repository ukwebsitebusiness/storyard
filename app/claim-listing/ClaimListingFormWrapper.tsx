"use client";

import dynamic from "next/dynamic";

const ClaimListingForm = dynamic(() => import("./ClaimListingForm"), { ssr: false });

export default function ClaimListingFormWrapper() {
  return <ClaimListingForm />;
}
