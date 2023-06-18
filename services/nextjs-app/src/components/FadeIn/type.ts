import { UseIntersectProps } from '@hooks/useIntersect'

export interface FadeInProps extends UseIntersectProps {
  duration?: number
  children: React.ReactElement<React.HTMLProps<HTMLDivElement>>
  onIntersect?: (intersecting: boolean) => void
}
