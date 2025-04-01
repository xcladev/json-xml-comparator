import 'server-only'
import { type Locale } from './settings'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (lang: Locale) => dictionaries[lang]() 