import { Metadata } from "next";
import ClaimListingForm from "./ClaimListingForm";

export const metadata: Metadata = {
  title: "Claim Your Listing — Storyard",
  description: "Own a storage business listed on Storyard? Claim your listing to manage your profile and receive enquiries.",
};

export default function ClaimListingPage() {
  return <ClaimListingForm />;
}
