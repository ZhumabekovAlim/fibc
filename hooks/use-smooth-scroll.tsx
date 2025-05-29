"use client"

import { useCallback } from "react"

export function useSmoothScroll(offset = 80) {
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const elementPosition = element.offsetTop - offset
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    },
    [offset],
  )

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return { scrollToSection, scrollToTop }
}
