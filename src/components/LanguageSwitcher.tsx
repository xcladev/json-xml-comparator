'use client';

import { useRouter, usePathname } from 'next/navigation';
import { locales, type Locale } from '@/i18n/settings';
import { useTransition } from 'react';

type Props = {
  lang: Locale;
};

export default function LanguageSwitcher({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (newLang: Locale) => {
    startTransition(() => {
      const basePath = pathname.split('/').slice(3).join('/');
      const newPath = `/${newLang}/${basePath}`;
      router.replace(newPath);
    });
  };

  return (
    <div className="flex items-center gap-3">
      <select
        value={lang}
        onChange={(e) => changeLanguage(e.target.value as Locale)}
        className={`bg-gray-900/80 text-white text-sm py-1.5 pl-3 pr-8 rounded border border-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none ${
          isPending ? 'opacity-50 cursor-wait' : 'hover:bg-gray-800'
        }`}
        disabled={isPending}
      >
        {locales.map((lang) => (
          <option key={lang} value={lang} className="bg-gray-900">
            {lang === 'en' ? 'English' : 'Español'}
          </option>
        ))}
      </select>
      <span className="text-sm text-gray-400">Language</span>
    </div>
  );
} 