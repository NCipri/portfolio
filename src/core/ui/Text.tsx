import type { ElementType, ReactNode } from 'react'

import { cn } from '~/core/utils/cn'

const VARIANTS = {
  title: 'text-3xl font-semibold tracking-tight',
  subtitle: 'text-xl font-medium',
  heading: 'text-lg font-semibold',
  body: 'text-lg leading-relaxed',
  text: 'text-base leading-relaxed',
  muted: 'text-base leading-relaxed text-muted',
  label: 'text-sm font-medium text-muted',
  caption: 'text-sm',
} as const

type TextVariant = keyof typeof VARIANTS

type TextProps = {
  variant?: TextVariant
  as?: ElementType
  id?: string
  className?: string
  children: ReactNode
}

export const Text = ({ variant = 'text', as: Tag = 'p', className, children, ...props }: TextProps) => (
  <Tag className={cn(VARIANTS[variant], className)} {...props}>
    {children}
  </Tag>
)
