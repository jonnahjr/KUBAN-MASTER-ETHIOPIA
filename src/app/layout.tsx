import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { COMPANY } from "@/config/company";

export const viewport: Viewport = {
  themeColor: "#2D1B08",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.seo.siteUrl),
  title: {
    default: COMPANY.seo.defaultTitle,
    template: COMPANY.seo.titleTemplate,
  },
  description: COMPANY.seo.defaultDescription,
  keywords: [
    "Kuban Master Ethiopia",
    "Kuban Coffee Processing Master Ethiopia",
    "Coffee roasters Ethiopia",
    "Coffee roasting machine Ethiopia",
    "Coffee roaster Addis Ababa",
    "Commercial coffee roaster Ethiopia",
    "Coffee processing equipment Ethiopia",
    "Industrial coffee roaster Ethiopia",
    "Coffee machinery Addis Ababa",
    "Specialty coffee roaster Addis Ababa",
    "Kuban Supreme 6kg",
    "Kuban Base",
  ],
  authors: [{ name: "Kuban Master Ethiopia" }],
  creator: "Kuban Master Ethiopia",
  publisher: "Kuban Master Ethiopia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: COMPANY.seo.defaultTitle,
    description: COMPANY.seo.defaultDescription,
    url: COMPANY.seo.siteUrl,
    siteName: COMPANY.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo/main-logo.png",
        width: 1200,
        height: 630,
        alt: "Kuban Coffee Roasters in Ethiopia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.seo.defaultTitle,
    description: COMPANY.seo.defaultDescription,
    images: ["/images/logo/main-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${COMPANY.seo.siteUrl}/#organization`,
        name: COMPANY.name,
        legalName: COMPANY.legalName,
        url: COMPANY.seo.siteUrl,
        logo: `${COMPANY.seo.siteUrl}/images/hero/hero_kuban_roaster.jpg`,
        sameAs: [COMPANY.socials.instagram, COMPANY.socials.linkedin],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: COMPANY.phones.sales[0].raw,
            contactType: "sales",
            areaServed: "ET",
            availableLanguage: ["English", "Amharic"],
          },
          {
            "@type": "ContactPoint",
            telephone: COMPANY.phones.support[0].raw,
            contactType: "technical support",
            areaServed: "ET",
            availableLanguage: ["English", "Amharic"],
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${COMPANY.seo.siteUrl}/#localbusiness`,
        name: COMPANY.legalName,
        image: `${COMPANY.seo.siteUrl}/images/showroom/kuban_sarbet_showroom.jpg`,
        telephone: COMPANY.phones.primarySalesRaw,
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY.location.address,
          addressLocality: COMPANY.location.city,
          addressCountry: "ET",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: COMPANY.location.coordinates.lat,
          longitude: COMPANY.location.coordinates.lng,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:30",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "14:00",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        <Navbar />
        <main>{children}</main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
