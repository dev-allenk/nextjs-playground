import styled, { keyframes } from 'styled-components'
import RippleButton from '@components/Button/RippleButton'
import DotPositioner from '@components/DotPositioner'
import { DOTS } from '@components/DotPositioner/data'

const arr = Array.from({ length: 25 })
const fallenPetals = Array.from({ length: 30 })
const random = (num: number) => Math.floor(Math.random() * num)

export default function PlaygroundPage() {
  return (
    <>
      <Section style={{ height: '10rem' }}>
        <Container>
          <RippleButton>click me</RippleButton>
        </Container>
      </Section>
      <Section style={{ height: '100vh' }}>
        <Container style={{ height: '100rem' }}>
          <div>cherry-blossom</div>
          <div style={{ position: 'relative', height: '500px;' }}>
            {arr.map((_) => (
              <Blossom
                style={{ left: random(100) + 'rem', transform: `scale(${Math.random() + 0.5})` }}
              >
                <Sway
                  style={{
                    animationDelay: random(10) + 's',
                  }}
                >
                  <RotateY
                    style={{
                      animationDelay: random(10) + 's',
                    }}
                  >
                    <Falling
                      style={{
                        animationDelay: random(10) + 's',
                        animationDuration: 5 + random(5) + 's',
                      }}
                    >
                      <Petal style={{ transform: `rotate(${random(90)}deg)` }} />
                    </Falling>
                  </RotateY>
                </Sway>
              </Blossom>
            ))}
          </div>
          <FallenPetals>
            {fallenPetals.map((_) => (
              <Blossom
                style={{
                  top: random(10) + 'rem',
                  left: random(100) + 'rem',
                  transform: `rotate(${random(180)}deg) scale(${Math.random() + 0.5})`,
                }}
              >
                <Petal />
              </Blossom>
            ))}
          </FallenPetals>
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

const falling = keyframes`
  0% {
    transform: translate3d(0,0,0);
  }
  60% {
    transform: translate3d(0,300px,0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0,500px,0);
    opacity: 0;
  }
`

const sway = keyframes`
  0% {
    transform: translate(0, 0) rotate(0);
  }
  50% {
    transform: translate(50px, 0) rotate(0);
  }
  100% {
    transform: translate(0, 0) rotate(0);
  }
`

const rotateY = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`

const Sway = styled.div`
  animation: ${sway} 5s infinite;
`

const RotateY = styled.div`
  animation: ${rotateY} 5s infinite;
`

const Falling = styled.div`
  animation: ${falling} 5s linear infinite;
`

const Blossom = styled.div`
  position: absolute;
  top: 0;
`

const FallenPetals = styled.div`
  position: relative;
  height: 100px;
`

const Petal = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 0% 100% 0% 100% / 0% 100% 0% 100%;
  background: #ffb7c5;
  transform: rotateZ(45deg);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fcc;
    border-radius: 0% 100% 0% 100% / 0% 100% 0% 100%;
    transform-origin: 100% 100%;
    transform: rotate(15deg);
  }
`
