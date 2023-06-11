import { useEffect } from 'react'

const useSaveScrollPosition = () => {
  useEffect(() => {
    // When the component mounts, check if there is a saved scroll position
    const scrollPosition = localStorage.getItem('scrollPosition')
    if (scrollPosition) {
      window.scrollTo({
        top: Number(scrollPosition),
        behavior: 'smooth',
      })
    }

    const saveScrollPosition = () => {
      localStorage.setItem('scrollPosition', window.scrollY)
    }

    // When the visibility changes, save the current scroll position
    document.addEventListener('scroll', saveScrollPosition)

    // cleanup
    return () => {
      document.removeEventListener('scroll', saveScrollPosition)
    }
  }, [])

  return null
}

export default useSaveScrollPosition
