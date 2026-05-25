import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oroymiel",
  description: "Site de presentation Oroymiel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
