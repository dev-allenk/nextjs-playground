import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1em;
  width: 100vw;
  height: 56px;
`;

export const Logo = styled.span`
  width: 35px;
  height: 35px;
  margin-left: 0.5em;

  font-size: 2rem;
  line-height: 37px;
  text-align: center;

  background: #000;
  color: #fff;
`;

export const Menus = styled.div`
  display: flex;
  align-items: center;
`;
