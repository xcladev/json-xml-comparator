import { Metadata } from "next";
import Link from "next/link";
import Comparator from "@/components/Comparator";

export const metadata: Metadata = {
  title: "JSON Comparator | Free Online JSON Diff Tool",
  description:
    "Compare JSON files side by side with our free online JSON comparison tool. Highlight differences, analyze structure changes, and identify additions or deletions in your JSON data.",
  keywords:
    "json comparator, json diff, compare json files, json diff tool, json comparison online, free json comparator",
  alternates: {
    canonical: "https://jsonxmlcompare.com/json-comparator",
  },
};

export default function JsonComparatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "JSON Comparator",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Free online tool to compare JSON files, identify differences, and visualize changes between JSON structures.",
            featureList: [
              "Side-by-side JSON comparison",
              "Structure and content difference highlighting",
              "Client-side processing for data privacy",
              "Support for large JSON files",
              "Color-coded difference visualization",
            ],
            url: "https://jsonxmlcompare.com/json-comparator",
          }),
        }}
      />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-10">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 mb-4">
              JSON Comparator
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Compare your JSON files with precision. Our specialized JSON
              comparison tool highlights additions, deletions, and structural
              changes between JSON data.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              <p>
                ✨ JSON syntax validation • 🔍 Precise difference detection • 💻
                100% browser-based
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
                className="px-4 py-2 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 text-sm text-white font-medium transition-colors shadow-lg shadow-blue-500/20"
                aria-current="page"
              >
                JSON Comparator
              </Link>
              <Link
                href="/xml-comparator"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 border border-white/10 text-sm text-gray-200 hover:text-white transition-colors"
              >
                XML Comparator
              </Link>
            </nav>
          </header>

          <section className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-10">
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-4">
              Why Use a JSON Comparator?
            </h2>
            <p className="text-gray-300 mb-4">
              JSON (JavaScript Object Notation) has become the standard data
              format for APIs, configuration files, and data exchange. When
              working with JSON data across different environments or versions,
              identifying changes is crucial for debugging and validation.
            </p>
            <p className="text-gray-300">
              Our JSON comparator tool makes it easy to spot differences between
              two JSON files, whether they&apos;re API responses, configuration
              files, or any other JSON data. The color-coded display immediately
              highlights additions, deletions, and modifications.
            </p>
          </section>

          <section aria-label="json-comparison-tool">
            <Comparator initialType="json" />
          </section>

          <section className="mt-12 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-4">
              Common JSON Comparison Scenarios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-300 mb-2">
                  API Testing
                </h3>
                <p className="text-gray-300">
                  Compare API responses between development, staging, and
                  production environments to ensure consistency across your
                  deployment pipeline.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-300 mb-2">
                  Configuration Management
                </h3>
                <p className="text-gray-300">
                  Track changes in configuration files across different
                  application versions or environments to identify potential
                  issues.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-300 mb-2">
                  Code Review
                </h3>
                <p className="text-gray-300">
                  When reviewing pull requests that modify JSON data, use our
                  tool to visualize the exact changes being proposed.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-300 mb-2">
                  Debugging
                </h3>
                <p className="text-gray-300">
                  When an application behaves differently across environments,
                  comparing the underlying JSON data can quickly reveal the
                  source of the problem.
                </p>
              </div>
            </div>
          </section>

          <div className="text-center mt-10">
            <Link
              href="/"
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 font-medium transition-all duration-200 underline underline-offset-4 decoration-cyan-500/30 hover:decoration-blue-500/50"
            >
              Return to main comparison tool
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
