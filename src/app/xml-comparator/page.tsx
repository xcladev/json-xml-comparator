import { Metadata } from "next";
import Link from "next/link";
import Comparator from "@/components/Comparator";

export const metadata: Metadata = {
  title: "XML Comparator | Free Online XML Diff Tool",
  description:
    "Compare XML files side by side with our free online XML comparison tool. Highlight differences, analyze structure changes, and identify additions or deletions in your XML data.",
  keywords:
    "xml comparator, xml diff, compare xml files, xml diff tool, xml comparison online, free xml comparator",
  alternates: {
    canonical: "https://jsonxmlcompare.com/xml-comparator",
  },
};

export default function XmlComparatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "XML Comparator",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Free online tool to compare XML files, identify differences, and visualize changes between XML documents.",
            featureList: [
              "Side-by-side XML comparison",
              "Element and attribute difference highlighting",
              "Client-side processing for data privacy",
              "Support for large XML documents",
              "Color-coded difference visualization",
            ],
            url: "https://jsonxmlcompare.com/xml-comparator",
          }),
        }}
      />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-10">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600 mb-4">
              XML Comparator
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Compare your XML files with precision. Our specialized XML
              comparison tool highlights additions, deletions, and structural
              changes between XML documents.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              <p>
                ✨ XML syntax validation • 🔍 Element-level difference detection
                • 💻 100% browser-based
              </p>
            </div>

            {/* Navigation Menu */}
            <nav className="mt-6 flex justify-center space-x-4">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 border border-white/10 text-sm text-gray-200 hover:text-white transition-colors"
              >
                Main Tool
              </Link>
              <Link
                href="/json-comparator"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 border border-white/10 text-sm text-gray-200 hover:text-white transition-colors"
              >
                JSON Comparator
              </Link>
              <Link
                href="/xml-comparator"
                className="px-4 py-2 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 text-sm text-white font-medium transition-colors shadow-lg shadow-purple-500/20"
                aria-current="page"
              >
                XML Comparator
              </Link>
            </nav>
          </header>

          <section className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-10">
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-4">
              Why Use an XML Comparator?
            </h2>
            <p className="text-gray-300 mb-4">
              XML (eXtensible Markup Language) remains an essential format for
              many applications, especially in enterprise environments,
              configuration files, and data exchange. Comparing XML documents
              manually can be challenging due to their hierarchical structure.
            </p>
            <p className="text-gray-300">
              Our XML comparator tool simplifies the process by automatically
              analyzing two XML documents and highlighting the differences
              between them. This makes it easy to identify changes in elements,
              attributes, and values, saving you valuable development time.
            </p>
          </section>

          <section aria-label="xml-comparison-tool">
            <Comparator initialType="xml" />
          </section>

          <section className="mt-12 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-4">
              Common XML Comparison Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-300 mb-2">
                  Configuration Management
                </h3>
                <p className="text-gray-300">
                  Compare XML configuration files between different environments
                  or application versions to identify potential configuration
                  issues.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-300 mb-2">
                  SOAP API Testing
                </h3>
                <p className="text-gray-300">
                  Analyze SOAP request and response differences to debug API
                  integration issues and ensure consistent behavior.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-300 mb-2">
                  Document Processing
                </h3>
                <p className="text-gray-300">
                  When working with XML-based document formats (like DOCX, SVG,
                  or HTML), compare different versions to track changes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-300 mb-2">
                  Data Migration
                </h3>
                <p className="text-gray-300">
                  During data migration projects, compare source and target XML
                  data structures to validate successful transformation.
                </p>
              </div>
            </div>
          </section>

          <div className="text-center mt-10">
            <Link
              href="/"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-300 hover:to-purple-400 font-medium transition-all duration-200 underline underline-offset-4 decoration-purple-500/30 hover:decoration-purple-500/50"
            >
              Return to main comparison tool
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
