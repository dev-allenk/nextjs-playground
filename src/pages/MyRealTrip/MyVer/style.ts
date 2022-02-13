import Picture from '@components/Picture'
import styled from 'styled-components'

export const MyRealTrip = styled.div``

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const BackgroundImage = styled(Picture)`
  && {
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100vh - 56px);
    transition: opacity 100ms linear, transform 100ms linear;
    transform-origin: 65% 50%;
  }
`

export const Video = styled.video`
  width: 100%;
  height: calc(100vh - 56px);
  transition: opacity 100ms linear;
`
