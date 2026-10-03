import type { ReactNode } from 'react'

import { Text } from '~/core/ui/Text'

type SectionProps = { id: string; title: string; children: ReactNode }

export const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 py-6">
    <Text as="h2" variant="title" id={`${id}-title`} className="mb-2">
      {title}
    </Text>
  
    {children}
  </section>
)
