import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

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

export const metadata: Metadata = {
  title: "Oro y Miel Spa",
  description: "El ritual que tu cuerpo merece",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <Header />
        {children}
      </body>
    </html>
  );
}
