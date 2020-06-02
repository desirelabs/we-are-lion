import styled from "styled-components";

export const Text = styled.p<{ decorated?: boolean }>`
  color: #3e3e3e;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 300;
  &:before {
    ${({ decorated }) => decorated && `content: ""`};
    display: block;
    width: 30px;
    height: 4px;
    margin-bottom: 30px;
    background-color: ${({ theme }) => theme.atoms.colors.primary};
  }
`;
