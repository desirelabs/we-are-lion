import React from "react";
import { GridBG } from "./ui/GridBG";
import { TextBlock } from "./ui/TextBlock";
import { Title } from "./ui/Title";
import { Col, Container, Row } from "./ui/Layout";

export const AboutSection = () => {
  return (
    <Container fluid>
      <Row>
        <Col col={4}>
          <GridBG colored="LIGHT">
            <TextBlock text="Notre philosophie" colored={true} />
          </GridBG>
        </Col>
        <Col col={8}>
          <Row>
            <Col col={6}>
              <GridBG colored="WHITE">
                <blockquote>
                  "Chaque profession possède ses propres problématiques.
                  Produire une application ne doit pas en être une
                  supplémentaire."
                </blockquote>
              </GridBG>
            </Col>
            <Col col={6}>
              <GridBG colored="LIGHT" />
            </Col>
          </Row>
          <Row>
            <Col col={6}>
              <GridBG colored="COLORED">
                <Title>
                  we use the best
                  <br />
                  web tools
                </Title>
              </GridBG>
            </Col>
            <Col col={6}>
              <GridBG colored="WHITE">
                <blockquote>
                  "Nous sommes convaincus qu’une expérience visuelle vaut plus
                  que mille mots. Nous plaçons la création visuelle et
                  l’expérience utilisateur au premier plan de nos réalisations.
                  La technique sert de fondations à celle-ci."
                </blockquote>
              </GridBG>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
