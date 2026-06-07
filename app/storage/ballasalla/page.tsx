import LocationPage from "@/src/components/LocationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage in Ballasalla & Ronaldsway",
  description: "Compare storage facilities in Ballasalla and Ronaldsway. Container and self-storage near the airport.",
};

export default function Page() {
  return <LocationPage slug="ballasalla" />;
}
