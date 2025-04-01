export const locales = ['en', 'es'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale = 'en' as const

export const defaultNS = 'common'

export function getOptions(lang = defaultLocale, ns = defaultNS) {
  return {
    supportedLangs: locales,
    defaultLocale,
    lang,
    defaultNS,
    ns
  }
} 