import StorageTypePage from "@/src/components/StorageTypePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Container Storage Isle of Man — 20ft Units",
  description: "Compare container storage across the Isle of Man. 20ft container options, yard storage and trade containers.",
};

export default function Page() {
  return <StorageTypePage slug="container-storage-isle-of-man" />;
}
