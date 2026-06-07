import StorageTypePage from "@/src/components/StorageTypePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Storage Isle of Man — Units & Prices",
  description: "Find and compare self-storage units across the Isle of Man. Prices, sizes and locations.",
};

export default function Page() {
  return <StorageTypePage slug="self-storage-isle-of-man" />;
}
