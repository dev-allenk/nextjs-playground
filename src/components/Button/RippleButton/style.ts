import styled, { css, keyframes } from "styled-components";

const ripple = keyframes`
	0%   { transform: translate(-100%, -100%) }
	80%  { transform: translate(-100%, -100%) scale(50); }
	100% { transform: translate(-100%, -100%) scale(50); opacity: 0; }
`;

export const Button = styled.button`
  position: relative;
  padding: 2rem 4rem;

  color: #fff;
  border: 1px solid #fff;
  background-color: #000;
  overflow: hidden;
`;

export const Ripple = styled.span`
  position: absolute;

  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: #ff1ead;
  transform: translate(-100%, -100%);
  opacity: 1;

  animation: ${ripple} 500ms ease-out forwards;
`;
