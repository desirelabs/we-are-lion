import styled from "styled-components"

export const NavItem = styled.span`
  padding: 0 9px;
  color: #c4c4c4;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 63px;
  text-transform: uppercase;
  transition: color 0.25s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.atoms.colors.primary};
    cursor: pointer;
  }
`

export const FooterNavigation = ""

export const Navigation = styled.nav<{
  dark?: boolean
  orientation: "vertical" | "horizontal"
}>`
  display: flex;
  justify-content: space-between;
  flex-flow: ${({ orientation }) =>
    orientation === "horizontal" ? "row nowrap" : "column nowrap"};
  align-items: ${({ orientation }) =>
    orientation === "horizontal" ? "center" : "left"};
  min-height: 60px;
  max-width: ${({ theme }) => theme.atoms.layout.desktop.containerWidth};
  position: sticky;
  ${NavItem} {
    color: ${props =>
      props.dark
        ? props.theme.atoms.colors.dark
        : props.theme.atoms.colors.grey};
    &:hover {
      color: ${({ theme }) => theme.atoms.colors.primary};
      cursor: pointer;
    }
  }
`
