import styled from "styled-components";

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

export const Navigation = styled.nav<{
  isClear: boolean;
  column?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  flex-flow: ${({ column }) => (column ? "column nowrap" : "row nowrap")};
  align-items: center;
  min-height: 60px;
  max-width: ${({ theme }) => theme.atoms.layout.desktop.containerWidth};
  position: sticky;
`;
