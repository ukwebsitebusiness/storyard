import LocationPage from "@/src/components/LocationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage in Castletown — Southern Options",
  description: "Find storage facilities in Castletown, the historic former capital in the south of the Island.",
};

export default function Page() {
  return <LocationPage slug="castletown" />;
}
