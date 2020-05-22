import styled from "styled-components";

export const Header = styled.header<{ isClear: boolean }>`
  max-height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 60px;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  background-color: ${({ isClear }) => (isClear ? "transparent" : "#fafafa")};
  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;

export const Navigation = styled.nav`
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  width: 100%;
  margin: 5px auto;
`;
