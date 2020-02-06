import styled from "styled-components";
import theme from "../theme";

export const Description = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 300;
  line-height: 26.04px;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to left,
    ${theme.atoms.colors.secondary} 0%,
    ${theme.atoms.colors.primary} 100%
  );
`;

export const Project = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  ${Content} {
    display: none;
  }
  &:hover {
    ${Content} {
      display: block;
    }
  }
`;
