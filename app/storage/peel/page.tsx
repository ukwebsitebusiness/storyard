import LocationPage from "@/src/components/LocationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage in Peel — West Coast Options",
  description: "Find self-storage and household storage in Peel, the western city of the Isle of Man.",
};

export default function Page() {
  return <LocationPage slug="peel" />;
}
