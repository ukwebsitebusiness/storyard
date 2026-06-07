import LocationPage from "@/src/components/LocationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage in Ramsey — Northern Facilities",
  description: "Discover storage options in Ramsey, serving the north of the Isle of Man.",
};

export default function Page() {
  return <LocationPage slug="ramsey" />;
}
