import React from 'react'
import * as S from './style'
import * as CS from '../style'
import FadeIn from '@components/FadeIn'

export default function Opportunity() {
  return (
    <S.Opportunity>
      <CS.GuideLine1060>
        <FadeIn>
          <CS.Title>
            여행이 멈춘 세상에서,
            <br />
            위기를 기회로 만들었습니다
          </CS.Title>
        </FadeIn>
        <FadeIn>
          <CS.Paragraph>
            모두에게 어려운 시간이었지만, 우리에겐 판을 바꿀 기회가 되었습니다.
            <br /> 여행이 멈춘 상황에서도 마이리얼트립은 새로운 기회와 성장을 만들어냈습니다.
          </CS.Paragraph>
        </FadeIn>
      </CS.GuideLine1060>
    </S.Opportunity>
  )
}
