import StorageTypePage from "@/src/components/StorageTypePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Storage Isle of Man — CCTV & Alarms",
  description: "Find the most secure storage facilities on the Isle of Man with CCTV, alarms and controlled access.",
};

export default function Page() {
  return <StorageTypePage slug="secure-storage-isle-of-man" />;
}
