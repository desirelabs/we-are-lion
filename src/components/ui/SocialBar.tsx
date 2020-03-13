import styled from "styled-components";

export const SocialBar = styled.div`
  height: 84px;
  width: 100%;
  background-color: #030edc;
  background-image: linear-gradient(
    to left,
    ${({ theme }) => theme.atoms.colors.secondary} 0%,
    ${({ theme }) => theme.atoms.colors.primary} 100%
  );
  position: absolute;
  bottom: 0;
  left: 0;
`;
