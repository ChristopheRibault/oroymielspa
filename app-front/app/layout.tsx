import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
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

  const title = settings.seoTitle ?? settings.siteTitle;
  const description = settings.seoDescription ?? settings.siteDescription;
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

  return (
    <html
      lang="fr"
      className={cn(
        "h-full antialiased font-sans",
        nunitoSans.variable,
        cormorantGaramond.variable,
      )}
    >
      <body className="min-h-full">
        <Header settings={settings} />
        {children}
      </body>
    </html>
  );
}
