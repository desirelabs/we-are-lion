import styled from "styled-components";
import theme from "../theme";

export const Description = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 300;
  line-height: 26.04px;
  text-align: center;
  color: #fff;
`;

export const Title = styled.h3`
  margin: 0;
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 34.06px;
  text-transform: uppercase;
  color: #fff;
`;

export const Content = styled.div`
  margin: auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  display: flex;
  img {
    position: absolute;
  }
  ${Content} {
    display: none;
  }
  &:hover {
    ${Content} {
      display: block;
    }
    &:after {
      content: "";
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
    }
  }
`;
