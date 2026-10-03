import type { Localized } from '~/core/i18n/i18n.types'

export type StackGroup = { title: Localized; items: string[] }

export const STACK_GROUPS: StackGroup[] = [
  {
    title: { en: 'Back-End', pt: 'Back-End' },
    items: ['Ruby on Rails', 'RESTful APIs', 'PostgreSQL', 'MySQL', 'RSpec'],
  },
  {
    title: { en: 'Front-End', pt: 'Front-End' },
    items: ['React & Native', 'TypeScript', 'JavaScript', 'Astro', 'Vite', 'Tailwind CSS'],
  },
  {
    title: { en: 'DevOps & Tools', pt: 'DevOps e Ferramentas' },
    items: ['Docker', 'Git', 'GitHub (CI/CD)', 'Linux', 'Postman'],
  },
  { title: { en: 'Learning now', pt: 'Estudando agora' }, items: ['Go', 'RAG', 'AWS'] },
  {
    title: { en: 'Familiar with', pt: 'Familiaridade com' },
    items: ['Python', 'Java', 'C#', 'VHDL'],
  },
]
