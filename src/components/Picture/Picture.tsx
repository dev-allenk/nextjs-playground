import { useState } from 'react'
import { forwardRef } from 'react'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'

interface PictureProps {
  alt?: string
  style?: React.CSSProperties
  className?: string
  src: string
  height?: number | string
  noLazyLoad?: boolean
}

/**
 * src 에서 확장자를 webp로 바꿔서 로드하는 컴포넌트.
 * webp 이미지가 없는 경우 src prop의 이미지로 fallback 합니다.
 * @noLazyLoad - swiper 내부에서 사용할 때 필요
 */
const Picture = forwardRef<HTMLPictureElement, PictureProps>(function Picture(
  { alt, style, className, src, height, noLazyLoad }: PictureProps,
  ref
) {
  const [error, setError] = useState(false)
  const webpSrc = src.replace(/(^\S+)\.(jpg|jpeg|png|gif|bmp)$/i, '$1.webp')

  if (noLazyLoad) {
    return (
      <picture ref={ref} onError={() => setError(true)}>
        {!error && <source type="image/webp" srcSet={webpSrc} />}
        <StyledImage style={style} className={className} src={src} height={height} alt={alt} />
      </picture>
    )
  }

  return (
    <LazyLoad height={height} offset={300} once>
      <picture ref={ref} onError={() => setError(true)}>
        {!error && <source type="image/webp" srcSet={webpSrc} />}
        <StyledImage style={style} className={className} src={src} height={height} />
      </picture>
    </LazyLoad>
  )
})

export default Picture

const StyledImage = styled.img`
  display: block;
  width: 100%;
  object-fit: contain;
`
