import React from "react";
import * as S from "./styles";
import RippleButton from "@components/Button/RippleButton";
import TextButton from "@components/Button/TextButton";

export default function Header() {
  return (
    <S.Header>
      <S.Logo>M</S.Logo>
      <RippleButton>Click me</RippleButton>
      <S.Menus>
        <ion-icon name="search-outline"></ion-icon>
        <TextButton>Login</TextButton>
      </S.Menus>
    </S.Header>
  );
}
