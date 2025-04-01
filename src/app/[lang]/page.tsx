import Comparator from "@/components/Comparator";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/settings";

export default async function Home({
  params
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-12">
        <header className="absolute top-4 right-8">
          <LanguageSwitcher lang={lang} />
        </header>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            {dict.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>
        <section aria-label="Comparator tool">
          <Comparator />
        </section>
      </div>
    </main>
  );
} 