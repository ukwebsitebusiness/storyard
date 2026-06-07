"use client";

import dynamic from "next/dynamic";

const AdminLite = dynamic(() => import("./AdminLite"), { ssr: false });

export default function AdminLiteWrapper() {
  return <AdminLite />;
}
