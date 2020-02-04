import styled from "styled-components";

export const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "grid-item-1 grid-item-2 grid-item-3" "grid-item-1 grid-item-4 grid-item-5" "grid-item-6 grid-item-7 grid-item-7";
`;

export const GridBG = styled.div<{
  style: "COLORED" | "DARK" | "LIGHT";
}>`
  position: absolute;
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
