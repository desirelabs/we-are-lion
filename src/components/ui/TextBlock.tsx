import * as React from "react"
import styled from "styled-components"

export const TextBlockText = styled.h3``

export const TextBlockWrapper = styled.div<{ colored: boolean }>`
  width: 244px;
  min-height: 174px;
  position: relative;
  padding: 15px;
  ${({ colored }) =>
    colored
      ? `background-image: linear-gradient(
    to left,
    ${({ theme }) => theme.atoms.colors.secondary} 0%,
    ${({ theme }) => theme.atoms.colors.primary} 100%
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
    position: relative;
    font-family: Bitter, serif;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: right;
    margin: 0;
    ${({ colored }) =>
      colored
        ? `background-image: linear-gradient(
      to left,
      ${({ theme }) => theme.atoms.colors.secondary} 0%,
      ${({ theme }) => theme.atoms.colors.primary} 100%
    )`
        : null};
    ${({ colored }) => (colored ? "background-clip: text" : null)};
    ${({ colored }) => (colored ? "-webkit-background-clip: text" : null)};
    ${({ colored }) =>
      colored ? "-webkit-text-fill-color: transparent" : null};
    ${({ colored }) =>
      colored
        ? `color: ${({ theme }) => theme.atoms.colors.primary}`
        : `color: ${({ theme }) => theme.atoms.colors.dark}`};
  }
`

export const TextBlock = ({ text, colored = false }) => (
  <TextBlockWrapper colored={colored}>
    <TextBlockText>
      {text.split(" ").map((chunk, i) => (
        <span key={i}>
          {chunk}
          <br />
        </span>
      ))}
    </TextBlockText>
  </TextBlockWrapper>
)
