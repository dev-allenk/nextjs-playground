import React, { useRef, useState } from "react";
import * as S from "./style";

interface RippleButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick?: React.MouseEventHandler;
  rippleColor?: string;
}

interface Coord {
  x: number;
  y: number;
  hash: string | number;
}

export default function RippleButton({
  rippleColor,
  children,
  onClick,
}: RippleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRippling] = useState([] as Coord[]);

  const ripple = {
    start: (coord: Coord) => setRippling((s) => [...s, coord]),
    end: (hash: string | number) =>
      setRippling((s) => s.filter((coord) => coord.hash !== hash)),
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const clientRect = buttonRef.current.getBoundingClientRect();

    ripple.start({
      x: e.clientX - clientRect.left,
      y: e.clientY - clientRect.top,
      hash: Date.now(),
    });

    onClick?.(e);
  };

  return (
    <S.Button ref={buttonRef} onClick={handleClick}>
      {ripples.map((coord) => (
        <S.Ripple
          key={coord.hash}
          rippleColor={rippleColor}
          style={{ top: coord.y, left: coord.x }}
          onAnimationEnd={() => ripple.end(coord.hash)}
        />
      ))}
      {children}
    </S.Button>
  );
}
