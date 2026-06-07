import LocationPage from "@/src/components/LocationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage in Crosby — Central Isle of Man",
  description: "Find convenient storage in Crosby, centrally located between Douglas and the north-west.",
};

export default function Page() {
  return <LocationPage slug="crosby" />;
}
