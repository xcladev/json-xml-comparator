import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | JSON & XML Comparator",
  description: "Privacy policy for the JSON and XML comparison tool",
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

            <h2 className="text-xl font-semibold text-cyan-300 mt-6">
              Data Processing
            </h2>
            <p className="text-gray-300">
              JSON & XML Comparator is a tool that operates entirely on the
              client side. All files and data you provide are processed
              exclusively in your browser and are never sent to our servers.
            </p>

            <h2 className="text-xl font-semibold text-cyan-300 mt-6">
              Information Collection
            </h2>
            <p className="text-gray-300">
              We do not collect any personally identifiable information. The
              tool does not use cookies or similar technologies to track users.
            </p>

            <h2 className="text-xl font-semibold text-cyan-300 mt-6">
              Analytics and Metrics
            </h2>
            <p className="text-gray-300">
              We might use anonymous analytics tools to better understand the
              usage of our application with the sole purpose of improving the
              user experience. These tools do not collect personal information.
            </p>

            <h2 className="text-xl font-semibold text-cyan-300 mt-6">
              Changes to This Policy
            </h2>
            <p className="text-gray-300">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2 className="text-xl font-semibold text-cyan-300 mt-6">
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
