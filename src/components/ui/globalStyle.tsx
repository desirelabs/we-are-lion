import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: ${({ theme }) => theme.atoms.layout.desktop.margin};
    font-family: Montserrat, sans-serif;
  }
`
