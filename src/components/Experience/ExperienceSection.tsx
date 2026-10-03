import { ExperienceItem } from '~/components/Experience/ExperienceItem'
import { useLanguage } from '~/contexts/LanguageContext'
import { SECTIONS } from '~/core/constants/sections'
import type { Localized } from '~/core/i18n/i18n.types'
import { UI } from '~/core/i18n/ui.strings'
import { Section } from '~/core/ui/Section'
import { Text } from '~/core/ui/Text'
import { ACADEMIC_EXPERIENCE, WORK_EXPERIENCE } from '~/features/experience/experience.data'
import type { ExperienceEntry } from '~/features/experience/experience.types'

type ExperienceColumnProps = { title: Localized; entries: ExperienceEntry[] }

const ExperienceColumn = ({ title, entries }: ExperienceColumnProps) => {
  const { t } = useLanguage()

  return (
    <div>
      <Text as="h3" variant="label" className="mb-6 uppercase tracking-wider">{t(title)}</Text>

      <ol>
        {entries.map((entry) => (
          <ExperienceItem key={entry.id} entry={entry} />
        ))}
      </ol>
    </div>
  )
}

export const ExperienceSection = () => {
  const { t } = useLanguage()
  const section = SECTIONS.find(({ id }) => id === 'experience')

  return (
    <Section id="experience" title={t(section!.label)}>
      <div className="grid gap-12 md:grid-cols-2">
        <ExperienceColumn title={UI.workExperience} entries={WORK_EXPERIENCE} />
        
        <ExperienceColumn title={UI.academicExperience} entries={ACADEMIC_EXPERIENCE} />
      </div>
    </Section>
  )
}
