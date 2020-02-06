import styled from "styled-components";
import theme from "../theme";

export const Grid = styled.div`
  min-height: calc(490px * 3);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "grid-item-1 grid-item-2 grid-item-3" "grid-item-1 grid-item-4 grid-item-5" "grid-item-6 grid-item-7 grid-item-7";
`;

export const GridBG = styled.div<{
  colored: "COLORED" | "DARK" | "LIGHT" | "WHITE";
}>`
  display: flex;
  position: absolute;
  ${({ colored }) =>
    colored === "DARK" && `background-color: ${theme.atoms.colors.grey}`};
  ${({ colored }) =>
    colored === "LIGHT" && `background-color: ${theme.atoms.colors.lightGrey}`};
  ${({ colored }) =>
    colored === "COLORED" &&
    `background-image: linear-gradient(
      to left,
      ${theme.atoms.colors.secondary} 0%,
      ${theme.atoms.colors.primary} 100%
    );`};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  & > * {
    max-width: 80%;
    margin: auto;
  }
`;

export const GridItem1 = styled.div.attrs({ className: "grid-item-1" })`
  position: relative;
  grid-area: grid-item-1;
`;

export const GridItem7 = styled.div.attrs({ className: "grid-item-7" })`
  position: relative;
  grid-area: grid-item-7;
`;

export const GridItem2 = styled.div.attrs({ className: "grid-item-2" })`
  position: relative;
  grid-area: grid-item-2;
`;

export const GridItem3 = styled.div.attrs({ className: "grid-item-3" })`
  position: relative;
  grid-area: grid-item-3;
`;

export const GridItem4 = styled.div.attrs({ className: "grid-item-4" })`
  position: relative;
  grid-area: grid-item-4;
`;

export const GridItem5 = styled.div.attrs({ className: "grid-item-5" })`
  position: relative;
  grid-area: grid-item-5;
`;

export const GridItem6 = styled.div.attrs({ className: "grid-item-6" })`
  position: relative;
  grid-area: grid-item-6;
`;
