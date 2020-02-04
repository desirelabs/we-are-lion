import styled, { css } from "styled-components";
import theme from "../theme";

export const TextBlockText = styled.h3``;

const gardientText = css`
  background-image: linear-gradient(
    to left,
    ${theme.atoms.colors.secondary} 0%,
    ${theme.atoms.colors.primary} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${theme.atoms.colors.primary};
`;

export const TextBlockWrapper = styled.div<{ colored: boolean }>`
  width: 244px;
  height: 174px;
  position: relative;
  ${({ colored }) =>
    colored
      ? `background-image: linear-gradient(
    to left,
    ${theme.atoms.colors.secondary} 0%,
    ${theme.atoms.colors.primary} 100%
  )`
      : "backgound-color: transparent"};
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 6px;
    left: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background-color: #fff;
  }

  ${TextBlockText} {
    position: absolute;
    right: 15px;
    font-family: "Montserrat";
    font-size: 40px;
    font-weight: 800;
    line-height: 34px;
    text-transform: uppercase;
    text-align: right;
    ${({ colored }) =>
      colored
        ? css`
            background-image: linear-gradient(
              to left,
              ${theme.atoms.colors.secondary} 0%,
              ${theme.atoms.colors.primary} 100%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: ${theme.atoms.colors.primary};
          `
        : css`
            color: ${theme.atoms.colors.white};
          `};
  }
`;

export const TextBlock = ({ text, colored = false }) => (
  <TextBlockWrapper colored={colored}>
    <TextBlockText>
      {text.split(" ").map((chunk, i) => (
        <>
          {chunk}
          <br />
        </>
      ))}
    </TextBlockText>
  </TextBlockWrapper>
);
