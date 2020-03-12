import * as React from "react";
import { Col, Container, Row } from "../ui/Layout";
import * as Section from "../ui/Section";
import { Illustration } from "../ui/Illustration";
import { Button } from "../ui/Button";

export const HomeSlide1 = () => (
  <Container fluid>
    <Row valign>
      <Col col={1} />
      <Col col={4}>
        <Section.Wrapper>
          <Section.HeroTitle>Lion</Section.HeroTitle>
          <Section.HeroTitle2>une agence web</Section.HeroTitle2>
          <Section.HeroTitle3>une expertise totale</Section.HeroTitle3>
          <Button>Contactez-nous</Button>
        </Section.Wrapper>
      </Col>
      <Col col={1} />
      <Col col={4}>
        <Illustration src="/img/start-up.svg" width="100%" />
      </Col>
      <Col col={2} />
    </Row>
  </Container>
);
