import styled from "styled-components";
import theme from "../theme";

export const Header = styled.header<{ isClear?: boolean }>`
  max-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${theme.atoms.layout.desktop.containerWidth};
  margin: 15px auto;
`;
