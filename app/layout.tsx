import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { resolveSiteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = resolveSiteUrl();

const titleDefault =
  "Satrn — Centralizza richieste, follow-up e processi operativi";

const description =
  "Satrn aiuta agenzie, studi e società di servizi a centralizzare richieste, follow-up e attività in un unico sistema ordinato e tracciabile.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f8fafc",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: "%s · Satrn",
  },
  description,
  applicationName: "Satrn",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: titleDefault,
    description,
    url: "/",
    siteName: "Satrn",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: titleDefault,
    description,
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
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full antialiased pb-[env(safe-area-inset-bottom,0px)]">
        {children}
      </body>
    </html>
  );
}
