import { useLanguage } from '~/contexts/LanguageContext'
import { SECTIONS, type SectionId } from '~/core/constants/sections'
import { UI } from '~/core/i18n/ui.strings'
import { cn } from '~/core/utils/cn'

type SidebarProps = {
  open: boolean
  activeSection: SectionId
  onNavigate: () => void
}

export const Sidebar = ({ open, activeSection, onNavigate }: SidebarProps) => {
  const { t } = useLanguage()

  return (
    <aside
      id="sidebar"
      className={cn(
        'fixed bottom-0 left-0 top-16 z-20 overflow-hidden border-r border-border bg-background transition-[width,transform] duration-200',
        // mobile: slide in as a drawer; desktop: collapse to an icon rail
        open ? 'w-60 translate-x-0' : '-translate-x-full w-60 lg:w-16 lg:translate-x-0',
      )}
    >
      <nav aria-label={t(UI.sections)} className="flex flex-col gap-1 p-2">
        {SECTIONS.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={onNavigate}
            aria-current={activeSection === id ? 'true' : undefined}
            title={t(label)}
            className={cn(
              'flex h-10 items-center gap-3 rounded-md px-3 text-sm text-muted hover:bg-border hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent',
              activeSection === id && 'bg-border font-medium text-foreground',
            )}
          >
            <Icon className="size-5 shrink-0" />
            
            <span className={cn('whitespace-nowrap', !open && 'lg:hidden')}>{t(label)}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}
