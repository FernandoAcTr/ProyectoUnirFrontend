import { useEffect } from 'react'

type ScrollCallback = (isScrolled: boolean) => void

export const useScrollDown = (onScroll: ScrollCallback, threshold: number = 100) => {
  useEffect(() => {
    console.log('useScrollDown')
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
