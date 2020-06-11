import styled from "styled-components";

export const Posts = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Wrapper = styled.div`
  margin-top: 3rem;
`;

export const Title = styled.h2`
  font-family: Bitter, serif;
  font-size: 2rem;
  /* For Link styling purpose */
  a {
    color: ${({ theme }) => theme && theme.atoms.colors.primary};
    text-decoration: none;
  }
`;

export const Meta = styled.small`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme && theme.atoms.colors.grey300};
`;

export const Content = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 1.125rem;
  img {
    max-width: 100%;
    height: auto;
    margin: 0.5rem 0;
  }
  a {
    color: ${({ theme }) => theme && theme.atoms.colors.primary};
    font-weight: bold;
    text-decoration: none;
  }
`;
