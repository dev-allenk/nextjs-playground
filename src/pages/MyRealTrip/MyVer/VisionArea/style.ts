import { flexCenter } from '@styles/styleUtils'
import styled from 'styled-components'

export const VisionArea = styled.section`
  position: relative;
  z-index: 1;
`

export const Container = styled.div`
  ${flexCenter};
  flex-direction: column;

  width: 100rem;
  margin: 0 auto;
  padding: 14rem 0;
`

export const Title = styled.h1`
  margin: 0;

  font-size: 5.2rem;
  font-weight: 700;
`

export const Contents = styled.p`
  font-size: 2rem;
`

export const VideoContainer = styled.div`
  border-radius: 3rem;
  margin-top: 4rem;
  overflow: hidden;
`
