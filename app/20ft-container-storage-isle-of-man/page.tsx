import StorageTypePage from "@/src/components/StorageTypePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "20ft Container Storage Isle of Man",
  description: "Compare 20ft container storage options across the Isle of Man. Ideal for house moves and business stock.",
};

export default function Page() {
  return <StorageTypePage slug="20ft-container-storage-isle-of-man" />;
}
