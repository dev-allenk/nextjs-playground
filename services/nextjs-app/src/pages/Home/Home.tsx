import Link from 'next/link'
import * as S from './style'

export default function Home() {
  return (
    <S.Home>
      <S.Container>
        <S.Box>
          <div></div>
          <Link href="/한글주소/테스트">
            <S.Button>한글주소 테스트</S.Button>
          </Link>
        </S.Box>
        <S.Box>
          <div></div>
          <Link href="/playground">
            <S.Button>playground page</S.Button>
          </Link>
        </S.Box>
        <S.Box>
          <div></div>
          <Link href="/myrealtrip-career/my-ver">
            <S.Button>career.myrealtrip clone my-ver.</S.Button>
          </Link>
        </S.Box>
        <S.Box>
          <div></div>
          <Link href="/react-spring">
            <S.Button>react-spring test page</S.Button>
          </Link>
        </S.Box>
      </S.Container>
    </S.Home>
  )
}
