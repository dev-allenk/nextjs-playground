import FadeIn from '@components/FadeIn'
import React from 'react'
import * as S from './style'
import * as CS from '../style'

export default function VisionArea() {
  return (
    <S.VisionArea>
      <CS.GuideLine1060>
        <S.Container>
          <FadeIn>
            <CS.Title>지금, 마이리얼트립은</CS.Title>
          </FadeIn>
          <FadeIn>
            <CS.Paragraph>
              여행 산업에 찾아온 위기와 마이리얼트립에 있었던 변화들, 그리고 마이리얼트립의 비전을
              소개합니다.
            </CS.Paragraph>
          </FadeIn>
        </S.Container>
        <FadeIn>
          <S.VideoContainer>
            <iframe
              width="1060"
              height="560"
              src="https://www.youtube.com/embed/cBF-Rl6cEQE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.VideoContainer>
        </FadeIn>
      </CS.GuideLine1060>
    </S.VisionArea>
  )
}
