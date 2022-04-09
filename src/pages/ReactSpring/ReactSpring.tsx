import React from 'react'
import { useSpring, animated, to } from 'react-spring'
import styled from 'styled-components'

export default function ReactSpring() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2000,
    loop: { reverse: true },
  })

  return (
    <Container>
      <Wrapper>
        <animated.div style={props}>I will fade in and out</animated.div>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100rem;
  margin: 0 auto;
`

const Wrapper = styled.div`
  padding: 10rem 0;

  font-size: 10rem;
`
