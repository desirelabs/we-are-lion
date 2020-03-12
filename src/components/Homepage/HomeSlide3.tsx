import * as React from "react";
import { Col, Container, Row } from "../ui/Layout";
import * as Section from "../ui/Section";
import { Illustration } from "../ui/Illustration";

export const HomeSlide3 = () => (
  <Container fluid>
    <Row valign>
      <Col col={1} />
      <Col col={4}>
        <Section.Wrapper>
          <Section.Title>Développement</Section.Title>
          <Section.Intro>
            Un beau design sans fondations techniques n’est que pure décoration.
          </Section.Intro>
          <Section.Content>
            Relever les défis posés par les problématiques métiers ne peut pas
            se faire sans de solides fondations techniques. C’est pourquoi, nous
            travaillons avec des outils modernes et adaptés aux problématiques
            actuelles de maintenance et de “scalabilité”.
          </Section.Content>
          <Section.Content>
            Chez Lion, nous aimons les outils open source ❤️
          </Section.Content>
        </Section.Wrapper>
      </Col>
      <Col col={1} />
      <Col col={4}>
        <Illustration src="/img/programming.svg" width="100%" />
      </Col>
      <Col col={2} />
    </Row>
  </Container>
);
