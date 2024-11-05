import { useEffect, useState, useRef } from 'react'

function useStickyState(rootMargin: string): {
  ref: React.RefObject<HTMLDivElement>
  isSticky: boolean
} {
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      {
        threshold: 1,
        rootMargin: rootMargin,
      },
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, isSticky }
}

export default useStickyState
