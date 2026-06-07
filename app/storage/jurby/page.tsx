import LocationPage from "@/src/components/LocationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage in Jurby — Large Units & Containers",
  description: "Discover container and self-storage in Jurby, north Isle of Man. Large units and yard storage available.",
};

export default function Page() {
  return <LocationPage slug="jurby" />;
}
