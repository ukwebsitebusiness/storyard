import { Metadata } from "next";
import StorageSizeHelper from "./StorageSizeHelper";

export const metadata: Metadata = {
  title: "Storage Size Helper — What Size Do I Need?",
  description: "Answer a few quick questions and get a recommended storage type and size for your household, business, trade or vehicle storage needs.",
};

export default function StorageSizeHelperPage() {
  return <StorageSizeHelper />;
}
