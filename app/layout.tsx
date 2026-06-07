import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Storyard — Find Secure Storage Across the Isle of Man",
  description:
    "Compare container storage, self-storage, business storage and trade storage near Douglas, Braddan, Ballasalla, Jurby and beyond.",
  metadataBase: new URL("https://storyard.im"),
  openGraph: {
    title: "Storyard — Find Secure Storage Across the Isle of Man",
    description:
      "Compare container storage, self-storage, business storage and trade storage near Douglas, Braddan, Ballasalla, Jurby and beyond.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storyard — Find Secure Storage Across the Isle of Man",
    description:
      "Compare container storage, self-storage, business storage and trade storage near Douglas, Braddan, Ballasalla, Jurby and beyond.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
