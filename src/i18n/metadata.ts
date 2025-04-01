import { type Locale } from './settings';

export const metadata = {
  en: {
    title: 'JSON-XML Comparator',
    description: 'Compare JSON and XML files easily',
    keywords: 'JSON, XML, comparison, diff, tool, online, free',
    openGraph: {
      title: 'JSON-XML Comparator',
      description: 'Compare JSON and XML files easily',
      type: 'website',
      locale: 'en_US',
    },
  },
  es: {
    title: 'Comparador JSON-XML',
    description: 'Compara archivos JSON y XML fácilmente',
    keywords: 'JSON, XML, comparación, diferencias, herramienta, online, gratis',
    openGraph: {
      title: 'Comparador JSON-XML',
      description: 'Compara archivos JSON y XML fácilmente',
      type: 'website',
      locale: 'es_ES',
    },
  },
} as const;

export type Metadata = typeof metadata; 