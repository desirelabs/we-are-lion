import styled from "styled-components";

export const Footer = styled.footer`
  max-width: 1170px;
  margin: 0 auto;
  a {
    color: ${({ theme }) => theme && theme.atoms.colors.primary};
    text-decoration: none;
  }
`;
