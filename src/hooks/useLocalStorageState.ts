import { useEffect, useState } from 'react'

export const useLocalStorageState = <T>(key: string, getInitial: () => T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = window.localStorage.getItem(key)
      if (stored !== null) return JSON.parse(stored) as T
    } catch {
      // storage blocked or invalid JSON: fall back to the initial value
    }
    return getInitial()
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // ignore: persistence is a convenience only
    }
  }, [key, value])

  return [value, setValue] as const
}
