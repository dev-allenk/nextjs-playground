import React from 'react'
import * as S from './styles'
import TextButton from '@components/Button/TextButton'
import Link from 'next/link'

export default function Header() {
  return (
    <S.Header>
      <Link href={'/'}>
        <S.Logo>M</S.Logo>
      </Link>
      <S.Menus>
        <ion-icon name="search-outline"></ion-icon>
        <TextButton>Login</TextButton>
      </S.Menus>
    </S.Header>
  )
}
