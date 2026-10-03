import { useLanguage } from '~/contexts/LanguageContext'
import { Text } from '~/core/ui/Text'
import type { ExperienceEntry } from '~/features/experience/experience.types'

type ExperienceItemProps = { entry: ExperienceEntry }

export const ExperienceItem = ({ entry }: ExperienceItemProps) => {
  const { t } = useLanguage()
  const { title, organization, location, period, bullets } = entry

  return (
    <li className="relative border-l border-border pb-8 pl-6 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-background"
      />
      <Text variant="caption" className="font-mono text-accent">{t(period)}</Text>
      <Text as="h4" variant="heading" className="mt-1">{t(title)}</Text>
      <Text variant="muted">
        {organization}
        {location && ` · ${t(location)}`}
      </Text>
      {bullets && (
        <ul className="mt-3 list-disc space-y-1.5 pl-4 text-base leading-relaxed marker:text-accent">
          {bullets.map((bullet) => (
            <li key={bullet.en}>{t(bullet)}</li>
          ))}
        </ul>
      )}
    </li>
  )
}
