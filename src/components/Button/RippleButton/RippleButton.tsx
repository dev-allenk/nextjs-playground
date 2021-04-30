import React, { useState } from "react";
import * as S from "./style";

export default function RippleButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isRippling, setRippling] = useState(false);

  const handleClick = () => {
    setRippling(true);
    setTimeout(() => setRippling(false), 1500);
  };

  return (
    <S.Button onClick={handleClick}>
      {isRippling && <S.Ripple />}
      {children}
    </S.Button>
  );
}
