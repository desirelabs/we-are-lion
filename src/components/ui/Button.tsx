import styled, { css } from "styled-components";

const large = css`
  width: 100%;
  height: 48px;
  border-radius: 24px;
  font-size: 16px;
`;

const small = css`
  width: 180px;
  height: 36px;
  border-radius: 18px;
  font-size: 12px;
`;

const primary = css`
  background-color: ${({ theme }) => theme && theme.atoms.colors.primary};
  border: ${({ theme }) => theme && `2px solid ${theme.atoms.colors.primary}`};
  color: ${({ theme }) => theme && theme.atoms.colors.white};
`;

const secondary = css`
  background-color: ${({ theme }) => theme && theme.atoms.colors.white};
  border: ${({ theme }) => theme && `2px solid ${theme.atoms.colors.primary}`};
  color: ${({ theme }) => theme && theme.atoms.colors.dark};
`;

export const Button = styled.button<{
  size?: "small" | "large";
  variant?: "primary" | "secondary";
}>`
  width: 260px;
  height: 36px;
  border-radius: 18px;
  font-size: 12px;
  ${({ size }) => size && size === "large" && large};
  ${({ size }) => size && size === "small" && small};

  background-color: ${({ theme }) => theme && theme.atoms.colors.primary};
  border: ${({ theme }) => theme && `2px solid ${theme.atoms.colors.primary}`};
  color: ${({ theme }) => theme && theme.atoms.colors.white};
  ${({ variant }) => variant && variant === "primary" && primary};
  ${({ variant }) => variant && variant === "secondary" && secondary};

  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  cursor: pointer;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border: none;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  &:before {
    transition: all 0.3s ease-in-out;
    content: "";
    display: block;
    opacity: 0;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    &:before {
      content: "";
      opacity: 0.1;
    }
  }
`;
