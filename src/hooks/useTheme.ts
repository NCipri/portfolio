import { useEffect } from 'react'

import { useLocalStorageState } from '~/hooks/useLocalStorageState'

export type Theme = 'light' | 'dark'

const DEFAULT_THEME: Theme = 'dark'

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorageState<Theme>('theme', () => DEFAULT_THEME)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
