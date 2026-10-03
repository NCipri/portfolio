import type { Localized } from '~/core/i18n/i18n.types'

export type ExperienceEntry = {
  id: string
  title: Localized
  organization: string
  location?: Localized
  period: Localized
  bullets?: Localized[]
}
