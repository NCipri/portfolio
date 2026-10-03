import type { ReactNode } from 'react'

import { cn } from '~/core/utils/cn'

type BadgeProps = { children: ReactNode; className?: string; interactive?: boolean }

export const Badge = ({ children, className, interactive = false }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm',
      interactive &&
        'cursor-default transition duration-200 hover:-translate-y-1 hover:scale-105 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100',
      className,
    )}
  >
    {children}
  </span>
)
