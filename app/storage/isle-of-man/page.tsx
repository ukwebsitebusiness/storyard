import LocationPage from "@/src/components/LocationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isle of Man Storage — All Locations",
  description: "Browse every storage option across the Isle of Man including container, self-storage, business and trade storage.",
};

export default function Page() {
  return <LocationPage slug="isle-of-man" />;
}
