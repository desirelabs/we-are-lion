import styled from "styled-components";
import theme from "../theme";

export const Hero = styled.div<{ image: string }>`
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-image: url(${props => props.image});
  background-position: center center;
  background-attachment: scroll;
  background-position-y: -230px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const HeroText = styled.div`
  width: 534px;
  min-height: 59px;
  background-image: linear-gradient(
    to left,
    ${theme.atoms.colors.secondary} 0%,
    ${theme.atoms.colors.primary} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${theme.atoms.colors.primary};
  font-family: "Montserrat";
  font-size: 81px;
  font-weight: 600;
  line-height: 104px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 64px;
`;

export const HeroSubText = styled.div`
  width: 534px;
  height: 62px;
  background-image: linear-gradient(
    to left,
    ${theme.atoms.colors.secondary} 0%,
    ${theme.atoms.colors.primary} 100%
  );
  font-family: "Montserrat";
  color: ${theme.atoms.colors.white};
  font-size: 30px;
  font-weight: 200;
  line-height: 62px;
  text-transform: uppercase;
  text-align: center;
`;
