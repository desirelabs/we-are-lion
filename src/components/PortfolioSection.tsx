import { GridBG } from "./ui/GridBG";
import { TextBlock } from "./ui/TextBlock";
import * as Project from "./ui/Project";
import React from "react";
import { Col, Container, Row } from "./ui/Layout";

export const PortfolioSection = () => (
  <Container fluid>
    <Row>
      <Col col={4}>
        <GridBG colored="WHITE">
          <TextBlock text="Nos projets" colored={true} />
        </GridBG>
      </Col>
      <Col col={8}>
        <Row>
          <Col col={4}>
            <Project.PortfolioProject
              higher={true}
              title="Geoffrey Couët"
              description="Geoffrey Couët est une étoile montante du cinéma français. En 2014 un virage est amorcé dans sa carrière et il décide de me confier la création de son site personnel."
              figure="/img/portfolio/gcouet/gcouet-homepage.png"
              passThrough={true}
            />
          </Col>
          <Col col={8}>
            <Row>
              <Col col={6}>
                <Project.PortfolioProject
                  figure="/img/portfolio/gcouet/gcouet-parcours.png"
                  passThrough={false}
                />
              </Col>

              <Col col={6}>
                <Project.PortfolioProject
                  figure="/img/portfolio/gcouet/gcouet-portfolio.png"
                  passThrough={false}
                />
              </Col>
            </Row>
            <Row>
              <Col col={6}>
                <Project.PortfolioProject
                  figure="/img/portfolio/gcouet/gcouet-portfolio-detail.png"
                  passThrough={false}
                />
              </Col>

              <Col col={6}>
                <Project.PortfolioProject
                  figure="/img/portfolio/gcouet/gcouet-portfolio-filtre.png"
                  passThrough={false}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col col={4}>
            <Row>
              <Col col={12}>
                <Project.PortfolioProject
                  figure="/img/portfolio/atsouhaits/ats-portfolio.png"
                  passThrough={false}
                />
              </Col>
            </Row>
            <Row>
              <Col col={12}>
                <Project.PortfolioProject
                  figure="/img/portfolio/atsouhaits/ats-homepage-full.png"
                  passThrough={false}
                />
              </Col>
            </Row>
          </Col>
          <Col col={8}>
            <Project.PortfolioProject
              higher={true}
              title="ATSouhaits"
              description="Aude Touati est décoratrice événementielle. Après plusieurs années d'exercice elle fait appel à mes services pour la refonte complète de son site. Un vent de fraicheur dans un style classy est adopté, le succès est au rendez-vous."
              figure="/img/portfolio/atsouhaits/ats-presentation.png"
              passThrough={true}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);
