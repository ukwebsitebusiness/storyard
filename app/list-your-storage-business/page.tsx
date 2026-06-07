import { Metadata } from "next";
import ListBusinessFormWrapper from "./ListBusinessFormWrapper";

export const metadata: Metadata = {
  title: "List Your Storage Business — Storyard",
  description: "Get more qualified storage enquiries by listing your business on Storyard, the Isle of Man storage marketplace.",
};

export default function ListYourBusinessPage() {
  return <ListBusinessFormWrapper />;
}
