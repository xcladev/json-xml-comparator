import Comparator from "@/components/Comparator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Comparador de JSON y XML
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Compara fácilmente tus archivos JSON o XML y visualiza las
            diferencias de forma clara y precisa.
          </p>
        </div>
        <Comparator />
      </div>
    </main>
  );
}
