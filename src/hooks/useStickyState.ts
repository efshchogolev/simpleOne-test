import { useEffect, useState, useRef } from 'react'

function useStickyState(): {
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
        threshold: 0,
        rootMargin: '-147px 0px 0px 0px',
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
