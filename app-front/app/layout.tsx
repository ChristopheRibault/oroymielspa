import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSiteSettings } from "@/lib/sanity";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  if (!settings) {
    return {};
  }

  const title = settings.siteTitle;
  const description = settings.siteDescription;
  const imageUrl = settings.logo?.asset?.url;

  return {
    title,
    description,
    openGraph: {
      title: title ?? undefined,
      description: description ?? undefined,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: settings.logo?.alt ?? title ?? "Oro y Miel Spa",
            },
          ]
        : undefined,
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: title ?? undefined,
      description: description ?? undefined,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oroymiel.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Spa",
    name: settings?.siteTitle ?? "Oro y Miel Spa",
    description: settings?.siteDescription,
    url: siteUrl,
    telephone: settings?.phone,
    email: settings?.email,
    address: settings?.address,
    openingHours: settings?.openingHours,
    image: settings?.logo?.asset?.url,
    sameAs: [
      settings?.socialMedia?.instagram?.url,
      settings?.socialMedia?.facebook?.url,
    ].filter(Boolean),
  };

  return (
    <html
      lang="es-MX"
      className={cn(
        "h-full antialiased font-sans",
        nunitoSans.variable,
        cormorantGaramond.variable,
      )}
    >
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header settings={settings} />
        <div className="flex-1">{children}</div>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
