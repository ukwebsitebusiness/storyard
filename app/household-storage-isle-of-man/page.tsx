import StorageTypePage from "@/src/components/StorageTypePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Household Storage Isle of Man — Moving & Renovating",
  description: "Find household storage for moves, renovations and downsizing across the Isle of Man.",
};

export default function Page() {
  return <StorageTypePage slug="household-storage-isle-of-man" />;
}
