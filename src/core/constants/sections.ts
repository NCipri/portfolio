import { Briefcase, Code2, FolderGit2, User, type LucideIcon } from 'lucide-react'

import type { Localized } from '~/core/i18n/i18n.types'

export type SectionId = 'about' | 'stack' | 'projects' | 'experience'

export type SectionItem = { id: SectionId; label: Localized; icon: LucideIcon }

export const SECTIONS: SectionItem[] = [
  { id: 'about', label: { en: 'About', pt: 'Sobre' }, icon: User },
  { id: 'stack', label: { en: 'Stack', pt: 'Stack' }, icon: Code2 },
  { id: 'projects', label: { en: 'Projects', pt: 'Projetos' }, icon: FolderGit2 },
  { id: 'experience', label: { en: 'Experience', pt: 'Experiência' }, icon: Briefcase },
]
