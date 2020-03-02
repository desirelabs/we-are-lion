import styled from "styled-components"

export const SectionTitle = styled.h2`
  font-family: Bitter, serif;
  font-weight: 700;
  text-align: center;
  margin: 4rem auto;
  font-size: 3rem;
`

export const Title = styled.h2`
  font-family: Montserrat, sans-serif;
  font-size: 38px;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
  letter-spacing: 6.08px;
  color: #fff;
  margin: auto;
  &:before {
    content: "";
    display: block;
    width: 30px;
    height: 4px;
    margin-bottom: 30px;
    background-color: #fff;
  }
`
