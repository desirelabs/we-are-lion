import styled from "styled-components";

export const Portfolio = styled.div`
  min-height: 980px;
  display: grid;
  grid-template-columns: 1.4fr 1.1fr 1.1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: "grid-item-1 grid-item-2 grid-item-3 grid-item-4" "grid-item-1 grid-item-2 grid-item-5 grid-item-6" "grid-item-1 grid-item-7 grid-item-9 grid-item-9" "grid-item-1 grid-item-8 grid-item-9 grid-item-9";
`;

export const PortfolioItem1 = styled.div.attrs({ className: "grid-item-1" })`
  position: relative;
  grid-area: grid-item-1;
`;

export const PortfolioItem2 = styled.div.attrs({ className: "grid-item-2" })`
  position: relative;
  grid-area: grid-item-2;
`;

export const PortfolioItem3 = styled.div.attrs({ className: "grid-item-3" })`
  position: relative;
  grid-area: grid-item-3;
`;

export const PortfolioItem4 = styled.div.attrs({ className: "grid-item-4" })`
  position: relative;
  grid-area: grid-item-4;
`;

export const PortfolioItem5 = styled.div.attrs({ className: "grid-item-5" })`
  position: relative;
  grid-area: grid-item-5;
`;

export const PortfolioItem6 = styled.div.attrs({ className: "grid-item-6" })`
  position: relative;
  grid-area: grid-item-6;
`;

export const PortfolioItem7 = styled.div.attrs({ className: "grid-item-7" })`
  position: relative;
  grid-area: grid-item-7;
`;

export const PortfolioItem8 = styled.div.attrs({ className: "grid-item-8" })`
  position: relative;
  grid-area: grid-item-8;
`;

export const PortfolioItem9 = styled.div.attrs({ className: "grid-item-9" })`
  position: relative;
  grid-area: grid-item-9;
`;
