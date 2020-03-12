import styled from "styled-components";

export const Wrapper = styled.section``;

export const HeroTitle = styled.h1`
  font-family: Bitter, serif;
  font-size: 74px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 0;
  color: ${({ theme }) => theme && theme.atoms.colors.grey};
`;

export const HeroTitle2 = styled.h2`
  font-family: Bitter, serif;
  font-size: 54px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 0;
  color: ${({ theme }) => theme && theme.atoms.colors.grey};
`;

export const HeroTitle3 = styled.h3`
  font-family: Bitter, serif;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 16px 0 30px;
  color: ${({ theme }) => theme && theme.atoms.colors.grey};
`;

export const Title = styled.h2`
  font-family: Bitter, serif;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme && theme.atoms.colors.grey};
`;

export const Intro = styled.p`
  font-family: Bitter, serif;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  color: ${({ theme }) => theme && theme.atoms.colors.grey};
`;

export const Content = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: normal;
  color: ${({ theme }) => theme && theme.atoms.colors.grey};
`;
