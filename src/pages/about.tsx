import React from "react";
import { Layout } from "../components/ui/Layout";
import { H1 } from "../components/ui/Headings";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

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
        <H1>A propos</H1>
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
        frontmatter: { categories: { eq: "page" }, slug: { eq: "about" } }
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
