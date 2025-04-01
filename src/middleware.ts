import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { locales, defaultLocale, type Locale } from './i18n/settings'

function getLang(request: NextRequest): Locale {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  return match(languages, locales, defaultLocale) as Locale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLang = locales.every(
    (lang) => !pathname.startsWith(`/${lang}/`) && pathname !== `/${lang}`
  )

  if (pathnameIsMissingLang) {
    const lang = getLang(request)
    return NextResponse.redirect(
      new URL(`/${lang}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
} 