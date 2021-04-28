import React from "react";
import * as S from "./style";

export default function RippleButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return <S.Button>{children}</S.Button>;
}
