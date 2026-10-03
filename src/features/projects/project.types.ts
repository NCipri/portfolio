import type { Localized } from '~/core/i18n/i18n.types'

export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  id: string
  title: string
  description: Localized
  stack: string[]
  links: ProjectLink[]
  liveUrl?: string
  imageUrl?: string
  placeholder?: boolean
}
