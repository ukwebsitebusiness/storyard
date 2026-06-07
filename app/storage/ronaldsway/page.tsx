import LocationPage from "@/src/components/LocationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage in Ronaldsway — Trade & Business",
  description: "Find trade and business storage near Ronaldsway Airport and Ballasalla.",
};

export default function Page() {
  return <LocationPage slug="ronaldsway" />;
}
