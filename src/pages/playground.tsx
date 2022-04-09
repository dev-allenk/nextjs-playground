import styled from 'styled-components'
import RippleButton from '@components/Button/RippleButton'
import DotPositioner from '@components/DotPositioner'
import { DOTS } from '@components/DotPositioner/data'

export default function PlaygroundPage() {
  return (
    <>
      <Section style={{ height: '120vh' }}>
        <Container>
          <RippleButton>click me</RippleButton>
        </Container>
      </Section>
      <Section style={{ height: '100vh' }}>
        <Container>
          <DotPositioner dots={DOTS} animate={['bang!', 'floating']} />
        </Container>
      </Section>
    </>
  )
}

const Section = styled.section``

const Container = styled.div`
  position: relative;
  width: 100rem;
  margin: 0 auto;
  padding: 2rem 0;
`
