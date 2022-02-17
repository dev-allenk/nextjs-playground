import Picture from '@components/Picture'
import styled, { css } from 'styled-components'

export const MyRealTrip = styled.div`
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; ;
`

export const BackgroundImage = styled(Picture)`
  && {
    height: 100vh;
    max-height: 102.4rem;
    transition: opacity 100ms linear, transform 100ms linear;
    transform-origin: 75% 50%;
  }
`

const backgroundBoxCommon = css`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transition: transform 100ms linear;
  transform-origin: center;
`

// Add Vertical Boxes
export const ImageContainer = styled.div`
  ${backgroundBoxCommon};
  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 0;
    background: #141922;

    width: 100%;
    height: calc(50vh - (min(100vh, 102.4rem) / 2) + 1px);
  }
  ::before {
    top: 0;
  }
  ::after {
    bottom: 0;
  }
`

// Add Horizontal Boxes
export const ImageWrapper = styled.div`
  ${backgroundBoxCommon};
  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    background: #141922;

    width: calc(50vw - (144 / 102.4 * min(100vh, 102.4rem) / 2) + 1px);
    height: 100%;
  }
  ::before {
    left: 0;
  }
  ::after {
    right: 0;
  }
`

export const Video = styled.video`
  width: 100%;
  height: 100vh;
  transition: opacity 100ms linear;
`
