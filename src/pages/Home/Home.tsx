import Link from 'next/link'
import * as S from './style'

export default function Home() {
  return (
    <S.Home>
      <S.Container>
        <S.Box>
          <div></div>
          <Link href="/ripple-button">
            <S.Button>ripple button page</S.Button>
          </Link>
        </S.Box>
        <S.Box>
          <div></div>
          <Link href="/myrealtrip-career/my-ver">
            <S.Button>career.myrealtrip clone my-ver.</S.Button>
          </Link>
        </S.Box>
      </S.Container>
    </S.Home>
  )
}
