import Comparator from "@/components/Comparator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold">Comparador de JSON y XML</h1>
      <p className="text-gray-600">
        Pega tus archivos JSON o XML para comparar.
      </p>
      <Comparator />
    </main>
  );
}
