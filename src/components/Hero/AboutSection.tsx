import { useLanguage } from '~/contexts/LanguageContext'
import { PROFILE } from '~/core/constants/profile'
import { SECTIONS } from '~/core/constants/sections'
import { Section } from '~/core/ui/Section'
import { Text } from '~/core/ui/Text'

export const AboutSection = () => {
  const { t } = useLanguage()

  return (
    <Section id="about" title={t(SECTIONS[0].label)}>
      <div className="flex items-start gap-5">
        <img
          src={PROFILE.photoUrl}
          alt={PROFILE.name}
          width={112}
          height={112}
          className="size-28 shrink-0 rounded-full border border-border object-cover"
        />
        <div>
          <Text variant="subtitle" className="mb-1">{PROFILE.name}</Text>


          <Text variant="muted">{t(PROFILE.role)}</Text>
        </div>
      </div>

      <Text variant="body" className="mt-6">{t(PROFILE.summary)}</Text>
    </Section>
  )
}
