import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/lib/site-data";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading"
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "recolha de entulhos lisboa",
    "limpeza de terrenos lisboa",
    "escavações lisboa",
    "terrplanagem lisboa",
    "remodelações lisboa"
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ],
    locale: "pt_PT",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/og-cover.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    image: `${siteConfig.url}images/og-cover.jpg`,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Lisboa",
      addressCountry: "PT"
    },
    areaServed: siteConfig.region,
    sameAs: [siteConfig.url],
    serviceType: [
      "Recolha de entulhos",
      "Recolha de madeiras",
      "Escavações",
      "Terraplanagem",
      "Limpeza de terrenos",
      "Remodelações",
      "Pinturas"
    ]
  };

  return (
    <html lang="pt-PT" className={`${heading.variable} ${body.variable}`}>
      <body className="font-[var(--font-body)] antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
