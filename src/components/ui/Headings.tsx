import styled from "styled-components";

export const H1 = styled.h1`
  font-family: Bitter;
  font-size: 42px;
  font-weight: bold;
  margin: 15px 0;
  color: ${({ theme }) => theme && theme.atoms.colors.dark};
`;

export const H2 = styled.h2`
  font-family: Bitter;
  font-size: 32px;
  font-weight: bold;
  margin: 15px 0;
  color: ${({ theme }) => theme && theme.atoms.colors.dark};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme && theme.atoms.colors.primary};
  }
`;

export const H3 = styled.h3`
  font-family: Bitter;
  font-size: 26px;
  font-weight: bold;
  margin: 15px 0;
  color: ${({ theme }) => theme && theme.atoms.colors.dark};
`;

export const H3Light = styled.h3`
  font-family: Bitter;
  font-size: 26px;
  font-weight: normal;
  margin: 15px 0;
  color: ${({ theme }) => theme && theme.atoms.colors.dark};
`;
