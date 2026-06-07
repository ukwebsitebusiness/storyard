"use client";

import dynamic from "next/dynamic";

const ListBusinessForm = dynamic(() => import("./ListBusinessForm"), { ssr: false });

export default function ListBusinessFormWrapper() {
  return <ListBusinessForm />;
}
