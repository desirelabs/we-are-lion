import React from "react";
import styled from "styled-components";

export const Description = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 26.04px;
  text-align: center;
  color: #fff;
`;

export const Title = styled.h3`
  margin: 0;
  text-align: center;
  font-family: Montserrat, sans-serif;
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

const Figure = styled.div<{ image: string }>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  ${({ image }) => image && `background-image: url(${image})`};
  background-size: cover;
  background-position: center;
  transition: all 0.25s ease-in-out;
  overflow: hidden;
  &:after {
    content: "";
    transition: all 0.25s ease-in-out;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      to left,
      ${({ theme }) => theme.atoms.colors.lightGrey} 0%,
      ${({ theme }) => theme.atoms.colors.lightGrey} 100%
    );
  }
`;

export const Wrapper = styled.div<{ passThrough?: boolean; higher?: boolean }>`
  position: relative;
  cursor: pointer;
  padding: 20px;
  display: flex;
  overflow: hidden;
  img {
    position: absolute;
  }
  ${Content} {
    display: block;
  }
  &:hover {
    ${Figure} {
      transform: scale(1.2);
      &:after {
        content: "";
        opacity: 0;
      }
    }
  }
  &:before {
    content: "";
    padding-bottom: ${({ higher }) => (higher ? "200%" : "100%")};
  }
  &:after {
    ${({ passThrough }) => passThrough && `content: ""`};
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      to left,
      ${({ theme }) => theme.atoms.colors.secondary} 0%,
      ${({ theme }) => theme.atoms.colors.primary} 100%
    );
  }
`;

export const PortfolioProject = ({
  title,
  description,
  figure,
  passThrough,
  higher
}: {
  title?: string;
  description?: string;
  figure: string;
  passThrough?: boolean;
  higher?: boolean;
}) => (
  <Wrapper passThrough={passThrough} higher={higher}>
    <Figure image={figure} />
    {title && description && (
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    )}
  </Wrapper>
);
