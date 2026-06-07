import StorageTypePage from "@/src/components/StorageTypePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade Storage Isle of Man — Tools & Materials",
  description: "Compare trade storage for builders, electricians, plumbers and landscapers on the Isle of Man.",
};

export default function Page() {
  return <StorageTypePage slug="trade-storage-isle-of-man" />;
}
