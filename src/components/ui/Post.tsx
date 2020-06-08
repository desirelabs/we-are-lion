import styled from "styled-components";

export const Posts = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Wrapper = styled.div``;

export const Title = styled.h2`
  font-family: Bitter, serif;
  font-size: 2rem;
`;

export const Meta = styled.small`
  color: ${({ theme }) => theme && theme.atoms.colors.grey};
`;

export const Content = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 1.125rem;
  img {
    max-width: 100%;
    height: auto;
  }
  a {
    color: ${({ theme }) => theme && theme.atoms.colors.primary};
    font-weight: bold;
    text-decoration: none;
  }
`;
