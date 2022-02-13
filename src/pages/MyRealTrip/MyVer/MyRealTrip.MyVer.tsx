import { IMAGE_BASE_PATH } from '@constants/urls'
import useIntersectRatio, { getThresholdBy } from '@hooks/useIntersectRatio'
import * as S from './style'

const MY_REAL_TRIP_IMAGE_PATH = `${IMAGE_BASE_PATH}/myrealtrip-career`
const VIDEO_URL = 'https://career.myrealtrip.com/release/static/media/flight.f049c58c.mp4'

const threshold = getThresholdBy(5)

export default function MyRealTripMyVer() {
  const { setTarget, intersectRatio } = useIntersectRatio({ threshold })

  return (
    <S.MyRealTrip>
      <S.Container ref={setTarget}>
        <S.Video style={{ opacity: intersectRatio }} src={VIDEO_URL} autoPlay loop muted />
        <S.BackgroundImage
          style={{ opacity: intersectRatio, transform: `scale(${1 + (1 - intersectRatio)})` }}
          src={`${MY_REAL_TRIP_IMAGE_PATH}/intro/bg-window.png`}
        />
      </S.Container>
      <div style={{ height: '100vh' }}></div>
    </S.MyRealTrip>
  )
}
