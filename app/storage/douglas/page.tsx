import LocationPage from "@/src/components/LocationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage in Douglas — Compare Units & Containers",
  description: "Find secure storage in Douglas, Isle of Man. Compare self-storage and container options with pricing and availability.",
};

export default function Page() {
  return <LocationPage slug="douglas" />;
}
