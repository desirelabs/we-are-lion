import styled from "styled-components"

export const Hero = styled.div<{ image?: string; spacing?: number }>`
  width: 100%;
  height: ${({ spacing }) =>
    spacing ? `calc(100vh - ${spacing}px)` : "100vh"};
  z-index: -1;
  ${({ image }) => image && `background-image: url(${image})`};
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export const HeroText = styled.div`
  width: 534px;
  min-height: 59px;
  background-image: linear-gradient(
    to left,
    ${({ theme }) => theme.atoms.colors.secondary} 0%,
    ${({ theme }) => theme.atoms.colors.primary} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${({ theme }) => theme.atoms.colors.primary};
  font-family: Montserrat, sans-serif;
  font-size: 81px;
  font-weight: 900;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const HeroSubText = styled.div`
  width: 534px;
  min-height: 62px;
  background-image: linear-gradient(
    to left,
    ${({ theme }) => theme.atoms.colors.secondary} 0%,
    ${({ theme }) => theme.atoms.colors.primary} 100%
  );
  font-family: Montserrat, sans-serif;
  color: ${({ theme }) => theme.atoms.colors.white};
  font-size: 30px;
  font-weight: 200;
  line-height: 62px;
  text-transform: uppercase;
  text-align: center;
`
