import * as React from "react";
import { Col, Container, Row } from "../ui/Layout";
import * as Section from "../ui/Section";
import { Illustration } from "../ui/Illustration";

export const HomeSlide2 = () => (
  <Container fluid={true}>
    <Row valign>
      <Col col={1} />
      <Col col={4}>
        <Section.Wrapper>
          <Section.Title>Design</Section.Title>
          <Section.Intro>
            On n’a souvent qu’une chance de faire bonne impression.
          </Section.Intro>
          <Section.Content>
            Nous aimons les visiteurs et c’est la raison pour laquelle nous
            travaillons à créer les expériences les plus agréables et
            accessibles possibles afin que vos visiteurs reviennent et parlent
            de vous.
          </Section.Content>
        </Section.Wrapper>
      </Col>
      <Col col={1} />
      <Col col={4}>
        <Illustration src="/img/strategy.svg" width="100%" />
      </Col>
      <Col col={2} />
    </Row>
  </Container>
);
