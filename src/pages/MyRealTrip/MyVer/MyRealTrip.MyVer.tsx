import IntroArea from './IntroArea'
import * as S from './style'
import VisionArea from './VisionArea'
import LazyLoad from 'react-lazyload'
import Opportunity from './Opportunity'

export default function MyRealTripMyVer() {
  return (
    <S.MyRealTrip>
      <IntroArea />
      <VisionArea />
      <Opportunity />
      <div style={{ height: '300vh' }}></div>
    </S.MyRealTrip>
  )
}
