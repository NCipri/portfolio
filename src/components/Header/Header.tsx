import { Mail, Menu, Moon, Phone, Sun } from 'lucide-react'

import { PROFILE } from '~/core/constants/profile'
import { useLanguage } from '~/contexts/LanguageContext'
import { UI } from '~/core/i18n/ui.strings'
import { GithubIcon, LinkedinIcon } from '~/core/ui/BrandIcons'
import { LanguageSwitch } from '~/core/ui/LanguageSwitch'
import type { Theme } from '~/hooks/useTheme'

type HeaderProps = {
  theme: Theme
  sidebarOpen: boolean
  onToggleSidebar: () => void
  onToggleTheme: () => void
}

const contactLinks = [
  { label: 'Phone', href: `tel:${PROFILE.phone.replace(/[^+\d]/g, '')}`, icon: Phone },
  { label: 'Email', href: `mailto:${PROFILE.email}`, icon: Mail },
  { label: 'LinkedIn', href: PROFILE.linkedinUrl, icon: LinkedinIcon },
  { label: 'GitHub', href: PROFILE.githubUrl, icon: GithubIcon },
]

const iconButton =
  'inline-flex size-9 items-center justify-center rounded-md hover:bg-border focus-visible:outline-2 focus-visible:outline-accent'

export const Header = ({ theme, sidebarOpen, onToggleSidebar, onToggleTheme }: HeaderProps) => {
  const { t } = useLanguage()

  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/90 px-4 backdrop-blur">
      <button
        type="button"
        className={iconButton}
        onClick={onToggleSidebar}
        aria-label={t(sidebarOpen ? UI.closeSidebar : UI.openSidebar)}
        aria-expanded={sidebarOpen}
        aria-controls="sidebar"
      >
        <Menu className="size-5" />
      </button>

      <nav aria-label={t(UI.contact)} className="ml-auto flex items-center gap-3">
        {contactLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className="inline-flex h-9 items-center gap-2 rounded-md px-2 text-sm text-muted hover:bg-border hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
            {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
            aria-label={label}
            title={label}
          >
            <Icon className="size-4" />
            <span className="hidden xl:inline">{label}</span>
          </a>
        ))}
        <button
          type="button"
          className={iconButton}
          onClick={onToggleTheme}
          aria-label={t(theme === 'dark' ? UI.lightTheme : UI.darkTheme)}
        >
          {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </button>
        <LanguageSwitch />
      </nav>
    </header>
  )
}
