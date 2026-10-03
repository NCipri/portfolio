import { useLanguage } from '~/contexts/LanguageContext'
import { LOCALES } from '~/core/i18n/i18n.types'
import { UI } from '~/core/i18n/ui.strings'
import { cn } from '~/core/utils/cn'

export const LanguageSwitch = () => {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t(UI.language)}
      className="flex rounded-md border border-border p-0.5"
    >
      {LOCALES.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          aria-pressed={locale === option}
          className={cn(
            'h-8 rounded px-2 text-xs font-semibold uppercase text-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent',
            locale === option && 'bg-accent text-accent-foreground hover:text-accent-foreground',
          )}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
