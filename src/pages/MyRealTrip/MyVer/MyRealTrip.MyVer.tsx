import IntroArea from './IntroArea'
import * as S from './style'
import VisionArea from './VisionArea'

export default function MyRealTripMyVer() {
  return (
    <S.MyRealTrip>
      <IntroArea />
      <VisionArea />
      <div style={{ height: '300vh' }}></div>
    </S.MyRealTrip>
  )
}
