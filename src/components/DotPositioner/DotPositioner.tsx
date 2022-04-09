import useIntersect from '@hooks/useIntersect'
import * as S from './style'

interface Props {
  dots: {
    x: number
    y: number
    color: string
    size?: number
  }[]
  unit?: string //px로 할 경우 screen size에 따라 위치를 유동적으로 조절할 수 없으므로 rem 사용
  animate?: Animate[]
  className?: string
}

type Animate = 'bang!' | 'floating'

/**
 * 좌표 데이터에 맞게 위치를 잡고 애니메이션 효과를 줍니다.
 * 사용 시 dot size가 소수점이 되지 않도록 주의하세요. 소수점이 되면 점이 찌그러지거나 잘려보입니다.
 * scale 사용 지양
 */
export default function DotPositioner({ className, dots, unit = 'rem', animate = [] }: Props) {
  const { setTarget, isIntersecting: timeToBang } = useIntersect({ threshold: 0.5 })
  const wantToBang = animate.includes('bang!')
  const dontWantToBang = !wantToBang

  const feelsLikeFloating = animate.includes('floating')

  const getTransform = (x: number, y: number) => {
    if (wantToBang && timeToBang) {
      return `translate(${x}${unit}, ${y}${unit})`
    }

    if (dontWantToBang) {
      return `translate(${x}${unit}, ${y}${unit})`
    }

    return 'translate(0,0)'
  }

  return (
    <S.Layer ref={setTarget} className={className}>
      {dots.map(({ x, y, color, size = 7 }, index) => {
        const transform = getTransform(x, y)
        return (
          <S.Dot
            key={index}
            style={{
              width: `${size}px`, //rem으로 할 경우 소수점 픽셀 때문에 dot circle이 찌부짜부되므로 px사용
              height: `${size}px`,
              transform,
            }}
            feelsLikeFloating={feelsLikeFloating}
          >
            <div
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                animationDelay: `${index * 150}ms`,
              }}
            />
          </S.Dot>
        )
      })}
    </S.Layer>
  )
}
