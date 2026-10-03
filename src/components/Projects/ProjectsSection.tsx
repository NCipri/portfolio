import { ProjectCard } from '~/components/Projects/ProjectCard'
import { useLanguage } from '~/contexts/LanguageContext'
import { SECTIONS } from '~/core/constants/sections'
import { UI } from '~/core/i18n/ui.strings'
import { Section } from '~/core/ui/Section'
import { Text } from '~/core/ui/Text'
import { PROJECTS } from '~/features/projects/projects.data'

export const ProjectsSection = () => {
  const { t } = useLanguage()

  return (
    <Section id="projects" title={t(SECTIONS[2].label)}>
      {PROJECTS.length === 0 ? (
        <Text variant="muted">{t(UI.projectsSoon)}</Text>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
