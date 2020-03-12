import * as React from "react";
import { Header, Navigation } from "./Header";
import { Logo } from "./Logo";
import { Menu } from "../Menu";
import styled from "styled-components";
import { FooterMenu } from "../FooterMenu";
import { Footer } from "../Footer";

export const Container = styled.div<{ fluid?: boolean }>`
  width: 100%;
  max-width: ${({ fluid }) => (fluid ? "100%" : "1170px")};
  ${({ fluid }) => (fluid ? "margin: 0 15px" : "margin: 0 auto")};
  position: relative;
`;

export const Col = styled.div<{
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}>`
  position: relative;
  max-height: 100%;
  padding: 0 15px;
  min-width: 100%;
`;

export const Row = styled.div<{ valign?: boolean }>`
  max-width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  ${Col} {
    ${({ valign }) => valign && "display: flex"};
    ${({ valign }) => valign && "align-items: center"};
  }
`;

const Main = styled.main`
  padding: 0 20px;
  position: relative;
`;

export const Layout = ({
  children,
  isClear
}: {
  children: any;
  isClear: any;
}) => {
  return (
    <Main>
      <Header isClear={isClear}>
        <Navigation>
          <Logo src="/img/logo-we-are-lion.svg" height="70" />
          <Menu isClear={isClear} />
        </Navigation>
      </Header>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, { key: i })
      )}
      <Footer>
        <Container>
          <Row>
            <Col col={4}>left</Col>
            <Col col={4}>center</Col>
            <Col col={4}>right</Col>
          </Row>
        </Container>
      </Footer>
    </Main>
  );
};
