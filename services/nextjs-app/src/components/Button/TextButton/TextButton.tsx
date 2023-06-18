import React from "react";
import * as S from "./styles";

export default function TextButton({
  children,
}: React.HTMLProps<HTMLButtonElement>) {
  return <S.Button>{children}</S.Button>;
}
