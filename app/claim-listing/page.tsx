import { Metadata } from "next";
import ClaimListingFormWrapper from "./ClaimListingFormWrapper";

export const metadata: Metadata = {
  title: "Claim Your Listing — Storyard",
  description: "Own a storage business listed on Storyard? Claim your listing to manage your profile and receive enquiries.",
};

export default function ClaimListingPage() {
  return <ClaimListingFormWrapper />;
}
