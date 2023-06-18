import styled, { css, keyframes } from 'styled-components'
import { flexCenter } from '@styles/styleUtils'

export const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  ${flexCenter};

  width: 100%;
  height: 25.2rem;
`

const floating = keyframes`
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-4px);
	}
	100% {
		transform: translatey(0px);
	}
`

export const Dot = styled.div<{ feelsLikeFloating: boolean }>`
  position: absolute;
  transition: transform 350ms ease-out;

  div {
    position: absolute;
    border-radius: 100rem;

    ${({ feelsLikeFloating }) =>
      feelsLikeFloating &&
      css`
        animation: ${floating} 2s infinite;
      `}
  }
`
