import styled from "styled-components";
import { TextAlignment } from "../../interfaces";

export const Text = styled.p<{ decorated?: boolean; align?: TextAlignment }>`
  color: #3e3e3e;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 300;
  ${({ align }) => align && `text-align: ${align}`};
  &:before {
    ${({ decorated }) => decorated && `content: ""`};
    display: block;
    width: 30px;
    height: 4px;
    margin-bottom: 30px;
    background-color: ${({ theme }) => theme.atoms.colors.primary};
  }
`;
