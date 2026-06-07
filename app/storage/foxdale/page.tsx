import LocationPage from "@/src/components/LocationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage in Foxdale — Central Location",
  description: "Compare storage options in Foxdale, a central village with easy access across the Isle of Man.",
};

export default function Page() {
  return <LocationPage slug="foxdale" />;
}
