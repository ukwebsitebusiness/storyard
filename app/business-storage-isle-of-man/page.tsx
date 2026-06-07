import StorageTypePage from "@/src/components/StorageTypePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Storage Isle of Man — Stock & Archive",
  description: "Compare business storage for stock, documents and equipment on the Isle of Man.",
};

export default function Page() {
  return <StorageTypePage slug="business-storage-isle-of-man" />;
}
