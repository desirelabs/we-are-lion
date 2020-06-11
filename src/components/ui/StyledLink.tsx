import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ReadMoreWrapper = styled.span`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme && theme.atoms.colors.primary};
  }
`;

export const StyledLink = ({ to, children }) => (
  <ReadMoreWrapper>
    <Link to={to}>{children}</Link>
  </ReadMoreWrapper>
);
