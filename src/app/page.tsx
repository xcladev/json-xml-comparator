import Comparator from "@/components/Comparator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
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
        </header>
        <section aria-label="file-comparison-tool">
          <Comparator />
        </section>
      </div>
    </main>
  );
}
