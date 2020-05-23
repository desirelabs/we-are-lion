import styled, { css } from "styled-components";
import { MenuLink } from "../Menu";

export const NavItem = styled.span`
  padding: 0 9px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-transform: uppercase;
  color: ${({ theme }) => theme.atoms.colors.grey};
  &:hover {
    color: ${({ theme }) => theme.atoms.colors.primary};
    cursor: pointer;
  }
`;

const mobileMenuOpened = css`
  width: 800px;
  height: 1200px;
`;

const mobileMenuClosed = css`
  width: 5px;
  height: 5px;
  overflow: hidden;
  border-radius: 50%;
  a {
    display: none;
  }
`;

export const MenuWrapper = styled.nav<{
  isClear: boolean;
  column?: boolean;
  toggle: boolean;
}>`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;
  min-height: 60px;
  max-width: ${({ theme }) => theme.atoms.layout.desktop.containerWidth};
  position: sticky;
  background-color: transparent;
  a {
    text-decoration: none;
  }
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    max-height: 100vh;
    justify-content: center;
    flex-flow: column nowrap;
    align-items: center;
    max-width: 100%;
    display: ${({ toggle }) => (toggle ? "flex" : "none")};
    background-color: ${props => props.theme.atoms.colors.primary};
    a {
      padding: 30px;
      span {
        font-weight: 700;
        font-size: 18px;
        color: ${({ theme }) => theme.atoms.colors.white};
        &:hover {
          color: ${({ theme }) => theme.atoms.colors.grey};
        }
      }
    }
  }
`;
