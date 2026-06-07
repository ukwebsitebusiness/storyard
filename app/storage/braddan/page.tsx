import LocationPage from "@/src/components/LocationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage in Braddan — Compare Facilities",
  description: "Explore storage options in Braddan near Douglas. Container and self-storage units available.",
};

export default function Page() {
  return <LocationPage slug="braddan" />;
}
