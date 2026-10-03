import type { Localized } from '~/core/i18n/i18n.types'

// UI chrome strings. Content strings live next to their data (profile, projects, stack).
export const UI = {
  openSidebar: { en: 'Open sidebar', pt: 'Abrir menu lateral' },
  closeSidebar: { en: 'Close sidebar', pt: 'Fechar menu lateral' },
  contact: { en: 'Contact', pt: 'Contato' },
  sections: { en: 'Sections', pt: 'Seções' },
  lightTheme: { en: 'Switch to light theme', pt: 'Mudar para tema claro' },
  darkTheme: { en: 'Switch to dark theme', pt: 'Mudar para tema escuro' },
  language: { en: 'Language', pt: 'Idioma' },
  placeholder: { en: 'Placeholder', pt: 'Exemplo' },
  workExperience: { en: 'Work', pt: 'Trabalho' },
  academicExperience: { en: 'Academic', pt: 'Acadêmica' },
  projectsSoon: { en: 'Projects coming soon.', pt: 'Projetos em breve.' },
} satisfies Record<string, Localized>
