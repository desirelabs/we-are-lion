import styled from "styled-components"

export const Header = styled.header`
  max-height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
`

export const Navigation = styled.nav`
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  margin: 5px auto;
`
