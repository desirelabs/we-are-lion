import styled from "styled-components";

export const SectionTitle = styled.h2`
  width: 225px;
  height: 28.5px;
  font-family: Bitter, serif;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme && theme.atoms.colors.black};
`;

export const Title = styled.h2`
  font-family: Bitter, serif;
  font-size: 38px;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
  letter-spacing: 6.08px;
  color: ${({ theme }) => theme && theme.atoms.colors.black};
  margin: auto;
  &:before {
    content: "";
    display: block;
    width: 30px;
    height: 4px;
    margin-bottom: 30px;
    background-color: #fff;
  }
`;
