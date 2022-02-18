import React, { useEffect } from 'react'
import useIntersect from '@hooks/useIntersect'
import type { FadeInProps } from './type'

/**
 * @duration animation-duration in ms
 */
export default function FadeIn({
  children,
  duration = 500,
  root,
  rootMargin,
  threshold = 0.4,
  once = true,
  onIntersect,
}: FadeInProps) {
  const { setTarget, isIntersecting } = useIntersect({ root, rootMargin, threshold, once })

  const child = React.Children.only(children)
  const newChild = React.cloneElement(child, {
    ref: setTarget,
    style: { ...child.props.style, animationDuration: `${duration}ms` },
    className: isIntersecting ? 'toss-fade-in' : 'toss-b4-fade-in',
  })

  useEffect(() => {
    onIntersect?.(isIntersecting)
  }, [isIntersecting])

  return <>{newChild}</>
}
