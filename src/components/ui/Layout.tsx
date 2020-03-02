import * as React from "react"
import { Header, Navigation } from "./Header"
import { Logo } from "./Logo"
import { Menu } from "../Menu"
import { useLayoutEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Footer } from "../Footer"

const Wrapper = styled.div<{ spacing: number }>`
  ${({ spacing }) => `padding-top: ${spacing}px`}
`

export const Container = styled.div<{ fluid?: boolean }>`
  width: 100%;
  max-width: ${({ fluid }) => (fluid ? "100%" : "1170px")};
  ${({ fluid }) => !fluid && "margin: 0 auto"};
  position: relative;
`

export const Row = styled.div`
  max-width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

export const Col = styled.div<{
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}>`
  position: relative;
  max-height: 100%;
  min-width: ${({ col }) => (100 / 12) * col}%;
  //max-width: ${({ col }) => (100 / 12) * col}%;
`

export const Layout: ({
  children,
  isClear,
}: {
  children: any
  isClear?: boolean
}) => any = ({ children, isClear }) => {
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useLayoutEffect(() => {
    headerRef &&
      headerRef.current &&
      setHeaderHeight(headerRef.current.getBoundingClientRect().height)
  }, [headerRef])

  return (
    <Wrapper spacing={headerHeight}>
      {/*<ThemeProvider theme={theme}>*/}
      <Header ref={headerRef}>
        <Navigation>
          <Logo src="/img/logo-we-are-lion.svg" height="70" />
          <Menu dark />
        </Navigation>
      </Header>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, { key: i, spacing: headerHeight })
      )}
      <Footer>
        <Container>
          <Row>
            <Col col={4}>
              <Menu orientation="vertical" />
            </Col>
            <Col col={4}>center</Col>
            <Col col={4}>right</Col>
          </Row>
        </Container>
      </Footer>
      {/*</ThemeProvider>*/}
    </Wrapper>
  )
}
