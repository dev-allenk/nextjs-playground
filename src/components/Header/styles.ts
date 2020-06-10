import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1em;
  /* TODO: width에서 padding* 2 빼기 */
  width: 100vw;
  height: 56px;
`;

export const Logo = styled.span`
  width: 35px;
  height: 35px;
  margin-left: 0.5em;

  font-family: "Noto Serif", serif;
  font-size: 1.75rem;
  line-height: 37px;
  text-align: center;

  background: #000;
  color: #fff;
`;

export const Menus = styled.div`
  display: flex;
  align-items: center;
`;
