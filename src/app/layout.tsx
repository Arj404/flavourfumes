import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlavourFumes",
  description: "FlavourFumes is a homemade belgian chocolate bussiness.",
  keywords:
    "Chocolate, Homemade Belgian Chocolate, Chocolate Wedding Orders, Theme Based Chocolate, FlavourFumes.com",
  applicationName: "flavourfumes",
  colorScheme: "light",
  viewport: { width: "device-width", initialScale: 1 },
  creator: "Arjav Jain",
  publisher: "flavourfumes team",
  category: "Chocolate",
  icons: "",
  openGraph: {
    url: "https://www.flavourfumes.com",
    type: "website",
    title: "FlavourFumes",
    description: "FlavourFumes is a homemade belgian chocolate bussiness.",
    siteName: "FlavourFumes",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
