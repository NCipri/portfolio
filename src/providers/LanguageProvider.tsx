import { useEffect, useMemo, type ReactNode } from 'react'

import { LanguageContext } from '~/contexts/LanguageContext'
import { DEFAULT_LOCALE, LOCALES, type Locale, type Localized } from '~/core/i18n/i18n.types'
import { useLocalStorageState } from '~/hooks/useLocalStorageState'

const isLocale = (value: unknown): value is Locale => LOCALES.includes(value as Locale)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [stored, setLocale] = useLocalStorageState<Locale>('locale', () => DEFAULT_LOCALE)
  const locale = isLocale(stored) ? stored : DEFAULT_LOCALE

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en'
  }, [locale])

  const value = useMemo(
    () => ({ locale, setLocale, t: (text: Localized) => text[locale] }),
    [locale, setLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
