import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Satrn — Sistema operativo per flussi operativi dispersi",
    template: "%s · Satrn",
  },
  description:
    "Richieste, follow-up e operatività in un solo sistema. Per agenzie, studi e società di servizi.",
  metadataBase: new URL("https://satrn.tech"),
  openGraph: {
    title: "Satrn — Sistema operativo per flussi operativi dispersi",
    description:
      "Richieste, follow-up e operatività in un solo sistema.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
