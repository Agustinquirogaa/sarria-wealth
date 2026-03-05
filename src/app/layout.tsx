import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sarriawealth.com"),
  title: {
    template: "%s | Sarria Wealth",
    default: "Sarria Wealth",
  },
  description: "Análisis financiero independiente. Claridad en tus números para tomar mejores decisiones.",
  openGraph: {
    siteName: "Sarria Wealth",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
