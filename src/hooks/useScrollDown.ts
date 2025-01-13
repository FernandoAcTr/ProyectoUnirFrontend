import { useEffect } from 'react'

type ScrollCallback = (isScrolled: boolean) => void

export const useScrollDown = (onScroll: ScrollCallback, threshold: number = 100) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      onScroll(scrollPosition > threshold)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}
