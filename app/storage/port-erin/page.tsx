import LocationPage from "@/src/components/LocationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage in Port Erin — Southern Tip",
  description: "Explore storage options near Port Erin, the southernmost village on the Isle of Man.",
};

export default function Page() {
  return <LocationPage slug="port-erin" />;
}
