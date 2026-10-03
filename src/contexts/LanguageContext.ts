import { createContext, useContext } from 'react'

import type { Locale, Localized } from '~/core/i18n/i18n.types'

export type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (text: Localized) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return context
}
