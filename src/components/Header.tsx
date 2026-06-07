"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-slate-900">
          <Image
            src="/images/stlogo1.png"
            alt="Storyard"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/storage/" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Find storage
          </Link>
          <Link href="/storage-size-helper/" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Size helper
          </Link>
          <Link href="/operators/" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Operators
          </Link>
          <Link href="/list-your-storage-business/" className="text-sm font-medium text-teal-700 hover:text-teal-800">
            List your business
          </Link>
          <Link
            href="/request-quote/"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Request quote
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link href="/storage/" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700">
              Find storage
            </Link>
            <Link href="/storage-size-helper/" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700">
              Size helper
            </Link>
            <Link href="/operators/" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700">
              Operators
            </Link>
            <Link href="/list-your-storage-business/" onClick={() => setOpen(false)} className="text-sm font-medium text-teal-700">
              List your business
            </Link>
            <Link
              href="/request-quote/"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-slate-900 px-4 py-2 text-center text-sm font-medium text-white"
            >
              Request quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
