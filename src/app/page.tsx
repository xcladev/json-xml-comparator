import Comparator from "@/components/Comparator";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-400 mb-4">
            JSON and XML Comparator
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Compare your JSON or XML files easily and visualize differences with
            clarity and precision. Free online tool for developers.
          </p>
          <div className="mt-4 text-sm text-gray-400">
            <p>
              ✨ Instant comparison • 🔒 No data storage • 💻 100% client-side
              processing
            </p>
          </div>

          {/* Navigation Menu */}
          <nav className="mt-6 flex justify-center space-x-4">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 text-sm text-white font-medium transition-colors shadow-lg shadow-blue-500/20"
              aria-current="page"
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
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 border border-white/10 text-sm text-gray-200 hover:text-white transition-colors"
            >
              XML Comparator
            </Link>
          </nav>
        </header>

        <section aria-label="how-to-use" className="mb-12">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 mb-6 text-center">
            How to Use Our Comparison Tool
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-2">
                1. Paste Your Code
              </h3>
              <p className="text-gray-300">
                Paste your JSON or XML content into the appropriate input areas.
                You can format it manually or let our tool handle it.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-2">
                2. Compare
              </h3>
              <p className="text-gray-300">
                Click the compare button to analyze the differences between your
                files. Our algorithm will process them instantly.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 mb-2">
                3. Review Results
              </h3>
              <p className="text-gray-300">
                Examine the highlighted differences between your files. Added
                content appears in green, while removed content is shown in red.
              </p>
            </div>
          </div>
        </section>

        <section aria-label="file-comparison-tool">
          <Comparator isMainPage={true} />
        </section>

        <section aria-label="use-cases" className="mt-12">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 mb-6 text-center">
            Popular Use Cases
          </h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              <li className="flex items-start text-gray-300">
                <span className="text-cyan-400 mr-2">✓</span>
                <span>API response validation between environments</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-cyan-400 mr-2">✓</span>
                <span>Configuration file comparison during deployments</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-cyan-400 mr-2">✓</span>
                <span>Debugging differences in data structures</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-cyan-400 mr-2">✓</span>
                <span>Code review for JSON/XML changes</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-cyan-400 mr-2">✓</span>
                <span>Documentation verification and quality assurance</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-cyan-400 mr-2">✓</span>
                <span>Detecting changes between file versions</span>
              </li>
            </ul>
          </div>
        </section>

        <section aria-label="specialized-tools" className="mt-12">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 mb-6 text-center">
            Specialized Comparison Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-2">
                <Link
                  href="/json-comparator"
                  className="hover:underline flex items-center"
                >
                  JSON Comparator
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </h3>
              <p className="text-gray-300">
                Specialized tool for comparing JSON files with syntax validation
                and structural analysis. Perfect for API testing and
                configuration management.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-2">
                <Link
                  href="/xml-comparator"
                  className="hover:underline flex items-center"
                >
                  XML Comparator
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </h3>
              <p className="text-gray-300">
                Dedicated tool for XML comparison with element-level difference
                detection. Ideal for SOAP API testing and document format
                analysis.
              </p>
            </div>
          </div>
        </section>

        <section aria-label="benefits" className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 mb-6 text-center">
            Why Choose Our Comparator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-2">
                Privacy First
              </h3>
              <p className="text-gray-300">
                Your data never leaves your browser. We process everything
                locally, ensuring complete privacy and security.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-2">
                Developer Focused
              </h3>
              <p className="text-gray-300">
                Built by developers for developers. Our tool is optimized for
                the workflows and needs of software professionals.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 mb-2">
                Fast & Efficient
              </h3>
              <p className="text-gray-300">
                Our comparison algorithm is optimized for speed, providing
                instant results even for large files.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-rose-400 mb-2">
                Free to Use
              </h3>
              <p className="text-gray-300">
                No subscription, no registration, no limits. Our tool is
                completely free and accessible to everyone.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
