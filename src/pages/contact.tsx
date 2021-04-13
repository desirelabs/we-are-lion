import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Layout } from "../components/ui/Layout";
import { ContactForm } from "../components/ContactForm";
import { Slide, Left, Right } from "../components/Slide";
import { H1, H3Light } from "../components/ui/Headings";
import { Text } from "../components/ui/Text";

const Phone = styled.a`
  color: ${props => props.theme.atoms.colors.primary};
  text-decoration: none;
  font-weight: bold;
`;

export default ({ data }) => {
  const {
    htmlTitle,
    description
  } = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <>
      <Helmet>
        <title>
          {data.site.siteMetadata.title} - {htmlTitle}
        </title>
        <meta name="description" content={description}></meta>
      </Helmet>
      <Layout isClear={false}>
        <Slide>
          <Left align="center">
            <H1>Contact</H1>
            <H3Light>
              Le plus court chemin vers la réalisation de vos objectifs passe
              par ici&nbsp;!
            </H3Light>
            <Text>
              Vous avez un projet, nous avons les moyens de le réaliser.
              Utilisez le formulaire ci-après, ou bien téléphonez-nous pour en
              parler directement.
              <br />
              <Phone href="tel:0698054772">06 98 05 47 72</Phone>
            </Text>
          </Left>
          <Right>
            <ContactForm />
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
        frontmatter: { categories: { eq: "page" }, slug: { eq: "contact" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            htmlTitle
            description
          }
          excerpt(pruneLength: 300, format: HTML)
        }
      }
    }
  }
`;
