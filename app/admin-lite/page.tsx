import { Metadata } from "next";
import AdminLiteWrapper from "./AdminLiteWrapper";

export const metadata: Metadata = {
  title: "Admin Lite — Storyard",
  description: "Storyard admin dashboard for leads and listings.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLitePage() {
  return <AdminLiteWrapper />;
}
