import LocationPage from "@/src/components/LocationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage in Port St Mary — Southern Harbour",
  description: "Find trade and self-storage near Port St Mary in the south of the Isle of Man.",
};

export default function Page() {
  return <LocationPage slug="port-st-mary" />;
}
