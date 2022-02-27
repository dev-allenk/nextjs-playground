import { flexCenter } from '@styles/styleUtils'
import styled from 'styled-components'

export const VisionArea = styled.section`
  position: relative;
  z-index: 1;

  margin-bottom: 14rem;
`

export const Container = styled.div`
  ${flexCenter};
  flex-direction: column;
`

export const VideoContainer = styled.div`
  border-radius: 3rem;
  margin-top: 4rem;
  overflow: hidden;
`
