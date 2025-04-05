import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSON & XML Comparator | Online Diff Tool",
  description:
    "Compare JSON and XML files easily with our online comparison tool. Visualize differences instantly with a clear and precise interface. Free and efficient file comparison.",
  keywords:
    "json comparator, xml comparator, file diff tool, json diff, xml diff, online comparison tool",
  openGraph: {
    title: "JSON & XML Comparator | Online Diff Tool",
    description:
      "Compare JSON and XML files easily with our online comparison tool. Visualize differences instantly.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON & XML Comparator | Online Diff Tool",
    description:
      "Compare JSON and XML files easily with our online comparison tool.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://json-xml-comparator.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
