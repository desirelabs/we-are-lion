import styled from "styled-components"
import theme from "../theme"

export const Header = styled.header<{ isClear?: boolean }>`
  max-height: 75px;
  width: 100%;
  position: fixed;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`

export const Navigation = styled.nav`
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${theme.atoms.layout.desktop.containerWidth};
  width: 100%;
  margin: 15px auto;
`
