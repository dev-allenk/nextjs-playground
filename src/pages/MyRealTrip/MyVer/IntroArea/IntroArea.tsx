import React from 'react'

import { IMAGE_BASE_PATH } from '@constants/urls'
import useIntersectRatio, { getThresholdBy } from '@hooks/useIntersectRatio'
import * as S from './style'

const MY_REAL_TRIP_IMAGE_PATH = `${IMAGE_BASE_PATH}/myrealtrip-career`
const VIDEO_URL = 'https://career.myrealtrip.com/release/static/media/flight.f049c58c.mp4'

const threshold = getThresholdBy(2)
const SCALE_VALUE = 3.5

export default function IntroArea() {
  const { setTarget, intersectRatio } = useIntersectRatio({ threshold })

  const opacity = intersectRatio
  const transform = `scale(${SCALE_VALUE - intersectRatio * (SCALE_VALUE - 1)})`
  const zIndex = intersectRatio === 0 ? -1 : 0

  return (
    <S.IntroArea style={{ zIndex }}>
      <S.Container ref={setTarget}>
        <S.Video style={{ opacity }} src={VIDEO_URL} autoPlay loop muted />
        <S.ImageContainer style={{ opacity, transform }}>
          <S.ImageWrapper style={{ opacity, transform }}>
            <S.BackgroundImage
              style={{ opacity, transform }}
              src={`${MY_REAL_TRIP_IMAGE_PATH}/intro/bg-window.png`}
              noLazyLoad
            />
          </S.ImageWrapper>
        </S.ImageContainer>
      </S.Container>
    </S.IntroArea>
  )
}
