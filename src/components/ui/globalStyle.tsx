import { createGlobalStyle } from "styled-components"
import theme from "../theme"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: ${theme.atoms.layout.desktop.margin};
    font-family: Montserrat;
  }
`
