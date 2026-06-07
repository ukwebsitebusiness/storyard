"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Box, Ruler, Calendar, Search } from "lucide-react";

const locations = [
  "Douglas",
  "Braddan",
  "Ballasalla",
  "Ronaldsway",
  "Jurby",
  "Crosby",
  "Foxdale",
  "Peel",
  "Ramsey",
  "Castletown",
  "Port Erin",
  "Port St Mary",
];

const storageTypes = ["Self-storage", "Container storage", "Business storage", "Trade storage", "Vehicle storage"];

const sizes = ["Small (up to 50 sq ft)", "Medium (50-100 sq ft)", "Large (100-200 sq ft)", "XL (200+ sq ft)"];

export default function SearchBox() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (type) params.set("type", type);
    if (size) params.set("size", size);
    if (date) params.set("date", date);
    router.push(`/storage/?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative">
          <label className="mb-1 block text-xs font-medium text-slate-500">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full appearance-none rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
            >
              <option value="">Any location</option>
              {locations.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="relative">
          <label className="mb-1 block text-xs font-medium text-slate-500">Storage type</label>
          <div className="relative">
            <Box className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full appearance-none rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
            >
              <option value="">Any type</option>
              {storageTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="relative">
          <label className="mb-1 block text-xs font-medium text-slate-500">Unit size</label>
          <div className="relative">
            <Ruler className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full appearance-none rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
            >
              <option value="">Any size</option>
              {sizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="relative">
          <label className="mb-1 block text-xs font-medium text-slate-500">Move-in date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 focus:border-teal-500 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
        >
          <Search className="h-4 w-4" /> Find storage
        </button>
        <a href="/storage-size-helper/" className="text-sm font-medium text-slate-600 hover:text-slate-900 underline underline-offset-2">
          Get help choosing a size
        </a>
      </div>
    </form>
  );
}
