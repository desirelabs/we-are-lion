import styled from "styled-components";
import theme from "../theme";

export const Header = styled.header<{ isClear?: boolean }>`
  max-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${theme.atoms.layout.desktop.containerWidth};
  width: 100%;
  margin: 15px auto;
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
`;
