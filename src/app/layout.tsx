import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

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
  creator: "xcladev",
  publisher: "xcladev",
  metadataBase: new URL("https://jsonxmlcompare.com"),
  openGraph: {
    title: "JSON & XML Comparator | Online Diff Tool",
    description:
      "Compare JSON and XML files easily with our online comparison tool. Visualize differences instantly.",
    type: "website",
    locale: "en_US",
    url: "https://jsonxmlcompare.com",
    siteName: "JSON/XML Comparator",
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
    canonical: "https://jsonxmlcompare.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "JSON/XML Comparator",
            url: "https://jsonxmlcompare.com",
            description: "Free tool to compare JSON and XML files online",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            creator: {
              "@type": "Person",
              name: "xcladev",
              url: "https://github.com/xcladev",
            },
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
