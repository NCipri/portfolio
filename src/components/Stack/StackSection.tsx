import { useLanguage } from '~/contexts/LanguageContext'
import { SECTIONS } from '~/core/constants/sections'
import { Badge } from '~/core/ui/Badge'
import { Section } from '~/core/ui/Section'
import { Text } from '~/core/ui/Text'
import { STACK_GROUPS } from '~/features/stack/stack.data'

export const StackSection = () => {
  const { t } = useLanguage()

  return (
    <Section id="stack" title={t(SECTIONS[1].label)}>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 xl:grid-cols-5">
        {STACK_GROUPS.map(({ title, items }) => (
          <div key={title.en}>
            <Text as="h3" variant="label" className="mb-3">{t(title)}</Text>

            <ul className="flex flex-col items-start gap-2">
              {items.map((item) => (
                <li key={item}>
                  <Badge interactive>{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
