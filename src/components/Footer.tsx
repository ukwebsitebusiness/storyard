import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">Storyard</p>
            <p className="mt-2 text-sm text-slate-600">
              The storage marketplace for the Isle of Man. Find and compare secure storage across the Island.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Discover</p>
            <ul className="mt-2 space-y-2">
              <li><Link href="/storage/" className="text-sm text-slate-600 hover:text-slate-900">Find storage</Link></li>
              <li><Link href="/storage-size-helper/" className="text-sm text-slate-600 hover:text-slate-900">Storage size helper</Link></li>
              <li><Link href="/operators/" className="text-sm text-slate-600 hover:text-slate-900">Operators</Link></li>
              <li><Link href="/request-quote/" className="text-sm text-slate-600 hover:text-slate-900">Request a quote</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Storage types</p>
            <ul className="mt-2 space-y-2">
              <li><Link href="/container-storage-isle-of-man/" className="text-sm text-slate-600 hover:text-slate-900">Container storage</Link></li>
              <li><Link href="/self-storage-isle-of-man/" className="text-sm text-slate-600 hover:text-slate-900">Self-storage</Link></li>
              <li><Link href="/business-storage-isle-of-man/" className="text-sm text-slate-600 hover:text-slate-900">Business storage</Link></li>
              <li><Link href="/trade-storage-isle-of-man/" className="text-sm text-slate-600 hover:text-slate-900">Trade storage</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">For operators</p>
            <ul className="mt-2 space-y-2">
              <li><Link href="/list-your-storage-business/" className="text-sm text-slate-600 hover:text-slate-900">List your business</Link></li>
              <li><Link href="/claim-listing/" className="text-sm text-slate-600 hover:text-slate-900">Claim a listing</Link></li>
              <li><Link href="/about/" className="text-sm text-slate-600 hover:text-slate-900">About</Link></li>
              <li><Link href="/contact/" className="text-sm text-slate-600 hover:text-slate-900">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Storyard. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy/" className="text-xs text-slate-500 hover:text-slate-700">Privacy</Link>
            <Link href="/terms/" className="text-xs text-slate-500 hover:text-slate-700">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
