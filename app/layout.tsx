import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Data Growth Engine | Recover Revenue Lost to Bad Data",
    template: "%s | Data Growth Engine"
  },
  description:
    "Data Growth Engine helps B2B SaaS companies recover wasted ad spend and hidden pipeline by fixing bad data. Take the Bad Data Test.",
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Data Growth Engine | Recover Revenue Lost to Bad Data",
    description:
      "Recover wasted ad spend and hidden pipeline by fixing bad data across acquisition, attribution, and revenue systems.",
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Growth Engine | Recover Revenue Lost to Bad Data",
    description:
      "Recover wasted ad spend and hidden pipeline by fixing bad data across acquisition, attribution, and revenue systems."
  },
  alternates: {
    canonical: siteConfig.url
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <SiteHeader />
          <main className="flex-1 pb-24 lg:pb-0">{children}</main>
          <SiteFooter />
          <MobileStickyCta />
        </div>
      </body>
    </html>
  );
}
