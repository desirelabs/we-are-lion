import styled from "styled-components";

export const GridBG = styled.div<{
  colored: "COLORED" | "DARK" | "LIGHT" | "WHITE";
}>`
  display: flex;
  ${({ colored }) =>
    colored === "DARK" &&
    `background-color: ${({ theme }) => theme.atoms.colors.grey}`};
  ${({ colored }) =>
    colored === "LIGHT" &&
    `background-color: ${({ theme }) => theme.atoms.colors.lightGrey}`};
  ${({ colored }) =>
    colored === "COLORED" &&
    `background-image: linear-gradient(
      to left,
      ${({ theme }) => theme.atoms.colors.secondary} 0%,
      ${({ theme }) => theme.atoms.colors.primary} 100%
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
