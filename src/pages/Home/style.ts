import RippleButton from '@components/Button/RippleButton'
import styled from 'styled-components'

export const Home = styled.div``

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 30rem);
  grid-template-rows: 30rem;
  column-gap: 4rem;

  width: 1000px;
  margin: 0 auto;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Button = styled(RippleButton)`
  && {
    height: 3rem;
  }
`
