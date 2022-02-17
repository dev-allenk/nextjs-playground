import { useState, useEffect, useRef } from 'react'

export interface UseIntersectProps extends IntersectionObserverInit {
  once?: boolean
}

export default function useIntersect({
  threshold = 1,
  root,
  rootMargin,
  once = true,
}: UseIntersectProps = {}) {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const [isIntersecting, setIntersect] = useState(false)
  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    if (!target) return
    if ('IntersectionObserver' in window) {
      const callback: IntersectionObserverCallback = ([entry]) => {
        if (entry.isIntersecting) {
          setIntersect(true)
          if (once) observer.current?.unobserve(target)
        } else {
          setIntersect(false)
        }
      }

      observer.current = new IntersectionObserver(callback, { threshold, root, rootMargin })

      observer.current.observe(target)
    } else {
      setIntersect(true)
    }

    return () => observer.current?.disconnect()
  }, [target, threshold, root, rootMargin, once])

  return { target, setTarget, isIntersecting }
}
