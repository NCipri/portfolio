import { ArrowUpRight } from 'lucide-react'

import { useLanguage } from '~/contexts/LanguageContext'
import { UI } from '~/core/i18n/ui.strings'
import { Badge } from '~/core/ui/Badge'
import { Text } from '~/core/ui/Text'
import type { Project } from '~/features/projects/project.types'

type ProjectCardProps = { project: Project }

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useLanguage()
  const { title, description, stack, links, imageUrl, placeholder } = project

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition hover:-translate-y-0.5 hover:border-accent">
      {imageUrl && <img src={imageUrl} alt="" className="aspect-video w-full object-cover" />}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <Text as="h3" variant="heading">{title}</Text>
        </div>
        {placeholder && (
          <Text as="span" variant="caption" className="font-medium text-accent">{t(UI.placeholder)}</Text>
        )}
        <Text variant="muted">{t(description)}</Text>
        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {stack.map((tech) => (
            <li key={tech}>
              <Badge className="px-2 py-0.5 text-xs">{tech}</Badge>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-3 pt-1">
          {links.map(({ label, url }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent"
              >
                {label}
                <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
