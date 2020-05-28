import styled from "styled-components";

export const Banner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme && theme.atoms.colors.dark};
  color: #fff;
  text-align: center;
`;
