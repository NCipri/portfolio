export const LOCALES = ['en', 'pt'] as const

export type Locale = (typeof LOCALES)[number]

export type Localized = Record<Locale, string>

export const DEFAULT_LOCALE: Locale = 'en'
