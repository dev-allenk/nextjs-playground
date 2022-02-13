import { useState, useEffect, useRef } from 'react'

export default function useIntersectRatio({
  threshold = 1,
  root,
  rootMargin,
}: IntersectionObserverInit = {}) {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const [intersectRatio, setRatio] = useState(0)
  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    if (!target) return
    if ('IntersectionObserver' in window) {
      observer.current = new IntersectionObserver(
        ([entry]) => {
          setRatio(entry.intersectionRatio)
        },
        { threshold, root, rootMargin }
      )

      observer.current.observe(target)
    } else {
      setRatio(1)
    }

    return () => observer.current?.disconnect()
  }, [target, threshold, root, rootMargin])

  return { target, setTarget, intersectRatio }
}

// n %마다 intersect event를 발생시키기 위한 threshold를 리턴합니다.
// getThreshold(10) -> [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
export function getThresholdBy(percent: number) {
  return Array(100 / percent + 1)
    .fill(null)
    .map((_, index) => index * 0.01 * percent)
}
