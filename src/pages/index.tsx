import React from "react";
import { useState } from "react";
import { Layout } from "../components/ui/Layout";
import * as Section from "../components/ui/Section";
import { Slide, Left, Right } from "../components/Slide";
import { Illustration } from "../components/ui/Illustration";
import { Button } from "../components/ui/Button";
import { Text } from "../components/ui/Text";
import { Link, graphql } from "gatsby";
import { H2, H3Light } from "../components/ui/Headings";
import { Helmet } from "react-helmet";

export default ({ data }) => {
  const {
    htmlTitle,
    description
  } = data.allMarkdownRemark.edges[0].node.frontmatter;
  const [isClear, setClear] = useState(false);
  return (
    <>
      <Helmet>
        <title>
          {data.site.siteMetadata.title} - {htmlTitle}
        </title>
        <meta name="description" content={description}></meta>
      </Helmet>
      <Layout isClear={isClear}>
        <Slide>
          <Left align="center">
            <Section.HeroTitle>Lion</Section.HeroTitle>
            <Section.HeroTitle2>une agence web</Section.HeroTitle2>
            <Section.HeroTitle3>une expertise totale</Section.HeroTitle3>
            <Link to="/contact">
              <Button size="large">Contactez-nous</Button>
            </Link>
          </Left>
          <Right>
            <Illustration
              src="/img/start-up.svg"
              width="100%"
              alt="Personnages figurants un lancement de produit digital"
            />
          </Right>
        </Slide>
        <Slide>
          <Left>
            <H2>Design</H2>
            <H3Light>
              On n’a souvent qu’une chance de faire bonne impression.
            </H3Light>
            <Text>
              Nous aimons les visiteurs et c’est la raison pour laquelle nous
              travaillons à créer les expériences les plus agréables et
              accessibles possibles afin que vos visiteurs reviennent et parlent
              de vous.
            </Text>
          </Left>
          <Right>
            <Illustration
              src="/img/strategy.svg"
              width="100%"
              alt="Personnages vectoriels en train de planifier"
            />
          </Right>
        </Slide>
        <Slide>
          <Left>
            <H2>Développement</H2>
            <H3Light>
              Un beau design sans fondations techniques n’est que pure
              décoration.
            </H3Light>
            <Text>
              Relever les défis posés par les problématiques métiers ne peut pas
              se faire sans de solides fondations techniques. C’est pourquoi,
              nous travaillons avec des outils modernes et adaptés aux
              problématiques actuelles de maintenance et de “scalabilité”.
            </Text>
            <Text>Chez Lion, nous aimons les outils open source ❤️</Text>
          </Left>
          <Right>
            <Illustration
              src="/img/programming.svg"
              width="100%"
              alt="Personnages vectoriels en train d'écrire du code informatique"
            />
          </Right>
        </Slide>
        <Slide>
          <Left>
            <H2>Search Engine Optimization (SEO)</H2>
            <H3Light>
              Être trouvé sur les moteurs de recherche est un enjeu primordial
              pour générer trafic et ROI*.
            </H3Light>
            <Text>
              Nous mettons en oeuvre nos savoir-faire pour amener vos prospects
              à vous trouver sur les principaux moteurs de recherche. Nous
              optimisons les tunnels de conversion et vous donnons les outils
              permettant d’identifier les attentes de votre audience.
            </Text>
          </Left>
          <Right>
            <Illustration
              src="/img/seo-optimization.svg"
              width="100%"
              alt="Personnages en train d'analyser des résultats"
            />
          </Right>
        </Slide>
        <Slide>
          <Left>
            <H2>Conseil et accompagnement</H2>
            <H3Light>
              La création d’une application mobile ou web ne doit pas devenir
              une problématique supplémentaire.
            </H3Light>
            <Text>
              En tant qu’interlocuteur exclusif, il est de notre devoir de vous
              donner toutes les clés pour comprendre et réussir votre projet
              web. Nous dispensons notamment des formations dont le but est de
              vous sensibiliser ou de vous rendre autonome avec l’outil de
              publication que nous mettons à votre disposition.
            </Text>
          </Left>
          <Right>
            <Illustration
              src="/img/consulting.svg"
              width="100%"
              alt="Personnages en train de participer à une formation"
            />
          </Right>
        </Slide>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { categories: { eq: "page" }, slug: { eq: "home" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            htmlTitle
            description
            slug
          }
          excerpt(pruneLength: 300, format: HTML)
        }
      }
    }
  }
`;
