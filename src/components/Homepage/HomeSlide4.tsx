import * as React from "react";
import { Col, Container, Row } from "../ui/Layout";
import * as Section from "../ui/Section";
import { Illustration } from "../ui/Illustration";

export const HomeSlide4 = () => (
  <Container fluid>
    <Row valign>
      <Col col={1} />
      <Col col={4}>
        <Section.Wrapper>
          <Section.Title>Search Engine Optimization (SEO)</Section.Title>
          <Section.Intro>
            Être trouvé sur les moteurs de recherche est un enjeu primordial
            pour générer trafic et ROI*.
          </Section.Intro>
          <Section.Content>
            Nous mettons en oeuvre nos savoir-faire pour amener vos prospects à
            vous trouver sur les principaux moteurs de recherche. Nous
            optimisons les tunnels de conversion et vous donnons les outils
            permettant d’identifier les attentes de votre audience.
          </Section.Content>
        </Section.Wrapper>
      </Col>
      <Col col={1} />
      <Col col={4}>
        <Illustration src="/img/seo-optimization.svg" width="100%" />
      </Col>
      <Col col={2} />
    </Row>
  </Container>
);
