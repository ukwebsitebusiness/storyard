import StorageTypePage from "@/src/components/StorageTypePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Storage Isle of Man — Cars, Bikes & Vans",
  description: "Find secure vehicle storage for cars, motorbikes, vans and caravans on the Isle of Man.",
};

export default function Page() {
  return <StorageTypePage slug="vehicle-storage-isle-of-man" />;
}
