import * as React from "react";
import { Col, Container, Row } from "../ui/Layout";
import * as Section from "../ui/Section";
import { Illustration } from "../ui/Illustration";

export const HomeSlide5 = () => (
  <Container fluid>
    <Row valign>
      <Col col={1} />
      <Col col={4}>
        <Section.Wrapper>
          <Section.Title>Conseil et accompagnement</Section.Title>
          <Section.Intro>
            La création d’une application mobile ou web ne doit pas devenir une
            problématique supplémentaire.
          </Section.Intro>
          <Section.Content>
            En tant qu’interlocuteur exclusif, il est de notre devoir de vous
            donner toutes les clés pour comprendre et réussir votre projet web.
            Nous dispensons notamment des formations dont le but est de vous
            sensibiliser ou de vous rendre autonome avec l’outil de publication
            que nous mettons à votre disposition.
          </Section.Content>
        </Section.Wrapper>
      </Col>
      <Col col={1} />
      <Col col={4}>
        <Illustration src="/img/consulting.svg" width="100%" />
      </Col>
      <Col col={2} />
    </Row>
  </Container>
);
