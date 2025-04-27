import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | JSON & XML Comparator",
  description:
    "Our privacy policy explains how the JSON & XML Comparator tool processes your data. Learn about our client-side processing approach and commitment to data privacy.",
  keywords:
    "privacy policy, data privacy, client-side processing, no data storage, secure comparison tool",
  alternates: {
    canonical: "https://jsonxmlcompare.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
            Privacy Policy
          </h1>

          <div className="prose prose-invert prose-sm max-w-none">
            <p className="text-gray-300">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2
              className="text-xl font-semibold text-cyan-300 mt-6"
              id="data-processing"
            >
              Data Processing
            </h2>
            <p className="text-gray-300">
              Our{" "}
              <Link
                href="/json-comparator"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                JSON comparison tool
              </Link>{" "}
              and{" "}
              <Link
                href="/xml-comparator"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                XML comparison tool
              </Link>{" "}
              operate entirely on the client side. All files and data you
              provide are processed exclusively in your browser and are never
              sent to our servers. This includes any JSON or XML content you
              paste in for comparison.
            </p>

            <h2
              className="text-xl font-semibold text-cyan-300 mt-6"
              id="information-collection"
            >
              Information Collection
            </h2>
            <p className="text-gray-300">
              We do not collect any personally identifiable information. The
              tool does not use cookies or similar technologies to track users
              or store preferences. Your comparison history is never saved
              between sessions.
            </p>

            <h2
              className="text-xl font-semibold text-cyan-300 mt-6"
              id="analytics"
            >
              Analytics and Metrics
            </h2>
            <p className="text-gray-300">
              We might use anonymous analytics tools to better understand the
              usage of our application with the sole purpose of improving the
              user experience. These tools do not collect personal information
              and are configured to anonymize IP addresses and other identifying
              data.
            </p>

            <h2
              className="text-xl font-semibold text-cyan-300 mt-6"
              id="updates"
            >
              Changes to This Policy
            </h2>
            <p className="text-gray-300">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              Any changes will be effective immediately upon posting.
            </p>

            <h2
              className="text-xl font-semibold text-cyan-300 mt-6"
              id="contact"
            >
              Contact
            </h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, you can
              contact us through our{" "}
              <a
                href="https://github.com/xcladev/json-xml-comparator"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                GitHub repository
              </a>
              .
            </p>
          </div>

          <nav className="mt-10 pt-6 border-t border-white/10">
            <h2 className="sr-only">Privacy Policy Navigation</h2>
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              <li>
                <a
                  href="#data-processing"
                  className="text-gray-400 hover:text-cyan-300"
                >
                  Data Processing
                </a>
              </li>
              <li>
                <a
                  href="#information-collection"
                  className="text-gray-400 hover:text-cyan-300"
                >
                  Information Collection
                </a>
              </li>
              <li>
                <a
                  href="#analytics"
                  className="text-gray-400 hover:text-cyan-300"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#updates"
                  className="text-gray-400 hover:text-cyan-300"
                >
                  Updates
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-cyan-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              Back to main page
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
