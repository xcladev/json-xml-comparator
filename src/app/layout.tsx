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
  title: "JSON & XML Comparator | Free Online Difference Analyzer",
  description:
    "Compare JSON and XML files instantly with our free online tool. Identify differences in structure and content with color-coded highlighting. No data uploads required - 100% client-side processing.",
  keywords:
    "json comparator, xml comparator, file diff tool, json diff, xml diff, online comparison tool, compare json files, compare xml structure, code difference tool, free json analyzer",
  creator: "xcladev",
  publisher: "xcladev",
  metadataBase: new URL("https://jsonxmlcompare.com"),
  openGraph: {
    title: "JSON & XML Comparator | Free Online Difference Analyzer",
    description:
      "Compare JSON and XML files instantly with our free online tool. Identify differences with color-coded highlighting.",
    type: "website",
    locale: "en_US",
    url: "https://jsonxmlcompare.com",
    siteName: "JSON/XML Comparator",
    images: [
      {
        url: "https://jsonxmlcompare.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "JSON & XML Comparator Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON & XML Comparator | Free Online Difference Analyzer",
    description:
      "Compare JSON and XML files easily with our online comparison tool.",
    images: ["https://jsonxmlcompare.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How does the JSON & XML Comparator work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our tool processes your JSON and XML files entirely in your browser. Simply paste your content into the editors and click compare. Differences are highlighted instantly with color-coding for additions and deletions.",
                },
              },
              {
                "@type": "Question",
                name: "Is my data secure when using this comparison tool?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. All processing happens entirely in your browser. We never store, transmit, or access your data on our servers.",
                },
              },
              {
                "@type": "Question",
                name: "Can I compare large JSON or XML files?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, our tool is optimized to handle large files efficiently. Since all processing happens in your browser, the only limitation is your device's memory and processing power.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to create an account to use the comparator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, our tool is completely free to use without any registration or account creation. Simply visit the website and start comparing your files immediately.",
                },
              },
            ],
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
