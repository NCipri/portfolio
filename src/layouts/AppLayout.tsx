import type { ReactNode } from 'react'

import { Header } from '~/components/Header/Header'
import { Sidebar } from '~/components/Sidebar/Sidebar'
import { SECTIONS } from '~/core/constants/sections'
import { cn } from '~/core/utils/cn'
import { useActiveSection } from '~/hooks/useActiveSection'
import { useLocalStorageState } from '~/hooks/useLocalStorageState'
import { useTheme } from '~/hooks/useTheme'

const SECTION_IDS = SECTIONS.map(({ id }) => id)
const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const { theme, toggleTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useLocalStorageState('sidebar-open', isDesktop)
  const activeSection = useActiveSection(SECTION_IDS)

  // on mobile the sidebar is a drawer: close it after choosing a section
  const closeOnMobile = () => {
    if (!isDesktop()) setSidebarOpen(false)
  }

  return (
    <>
      <Header
        theme={theme}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((open) => !open)}
        onToggleTheme={toggleTheme}
      />
      <Sidebar open={sidebarOpen} activeSection={activeSection} onNavigate={closeOnMobile} />
      <main
        className={cn(
          'px-6 pt-16 transition-[padding] duration-200',
          sidebarOpen ? 'lg:pl-64' : 'lg:pl-20',
        )}
      >
        <div className="mx-auto w-[80vw] max-w-full">{children}</div>
      </main>
    </>
  )
}
