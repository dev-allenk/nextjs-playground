import { IMAGE_BASE_PATH } from '@constants/urls'
import * as S from './style'

const MY_REAL_TRIP_IMAGE_PATH = `${IMAGE_BASE_PATH}/myrealtrip-career`

export default function MyRealTripMyVer() {
  return (
    <S.MyRealTrip>
      <S.Container>
        <S.BackgroundImage src={`${MY_REAL_TRIP_IMAGE_PATH}/intro/bg-window.png`} />
      </S.Container>
    </S.MyRealTrip>
  )
}
