import styled from "styled-components";
import { Button as MaterialButton } from "@material-ui/core";

export const Button = styled(MaterialButton)`
  width: 260px;
  height: 48px;
  border-radius: 24px;
  background-image: linear-gradient(
      to top,
      ${({ theme }) => theme && theme.atoms.colors.secondary},
      ${({ theme }) => theme && theme.atoms.colors.primary}
    ),
    linear-gradient(to bottom, #c4c4c4, #c4c4c4);
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: ${({ theme }) => theme && theme.atoms.colors.white};
  cursor: pointer;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border: none;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
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
