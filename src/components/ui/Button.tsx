import styled, { css } from "styled-components";

const large = css`
  width: 280px;
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

/**
 * TODO: hover effect
 */
const primary = css`
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme && theme.atoms.colors.primary},
    ${({ theme }) => theme && theme.atoms.colors.primary}
  );
  background-color: ${({ theme }) => theme && theme.atoms.colors.primary};
  border: ${({ theme }) => theme && `2px solid ${theme.atoms.colors.primary}`};
  color: ${({ theme }) => theme && theme.atoms.colors.white};
`;

/**
 * TODO: hover effect
 */
const secondary = css`
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme && theme.atoms.colors.white},
    ${({ theme }) => theme && theme.atoms.colors.white}
  );
  background-color: white;
  border: ${({ theme }) => theme && `2px solid ${theme.atoms.colors.primary}`};
  color: ${({ theme }) => theme && theme.atoms.colors.primary};
`;

const base = css`
  width: 260px;
  height: 36px;
  border-radius: 18px;
  font-size: 12px;
  border: none;
  background-color: ${({ theme }) => theme && theme.atoms.colors.secondary};
  background-image: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme && theme.atoms.colors.primary}
  );
  outline: 2px solid transparent;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: ${({ theme }) => theme && theme.atoms.colors.white};
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  cursor: pointer;
  transition: all 0.125s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme && theme.atoms.colors.primary};
  }
`;

export const Button = styled.button<{
  size?: "small" | "large";
  variant?: "primary" | "secondary";
  fluid?: boolean;
}>`
  ${base};
  ${({ size }) => size && size === "large" && large};
  ${({ size }) => size && size === "small" && small};
  ${({ variant }) => variant && variant === "primary" && primary};
  ${({ variant }) => variant && variant === "secondary" && secondary};
  ${({ fluid }) => fluid && "width: 100%"};
`;
