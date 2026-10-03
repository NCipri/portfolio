import { useEffect, useState } from 'react'

import type { SectionId } from '~/core/constants/sections'

export const useActiveSection = (ids: SectionId[]) => {
  const [active, setActive] = useState<SectionId>(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(visible.target.id as SectionId)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}
