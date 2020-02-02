import styled from "styled-components";
import theme from "../theme";

export const Navigation = styled.nav`
  max-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.a`
  padding: 0 9px;
  color: #c4c4c4;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 600;
  line-height: 63px;
  text-transform: uppercase;
  transition: color 0.25s ease-in-out;
  &:hover {
    color: ${theme.atoms.colors.primary};
    cursor: pointer;
  }
`;
