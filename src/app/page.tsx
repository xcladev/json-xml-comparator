import Comparator from "@/components/Comparator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comparador de JSON y XML
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compara fácilmente tus archivos JSON o XML y visualiza las
            diferencias de forma clara y precisa.
          </p>
        </div>
        <Comparator />
      </div>
    </main>
  );
}
