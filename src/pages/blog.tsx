import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/ui/Layout";
import { Title } from "../components/ui/Title";
import * as Post from "../components/ui/Post";

export default ({ data }) => {
  return (
    <Layout isClear={false}>
      <Post.Posts>
        <Title>Blog</Title>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const { id, frontmatter, html } = node;
          const { title, date, par } = frontmatter;
          return (
            <Post.Wrapper key={id}>
              <Post.Title>{title}</Post.Title>
              <Post.Meta>
                Écrit par {par} - {date}
              </Post.Meta>
              <Post.Content
                dangerouslySetInnerHTML={{ __html: html }}
              ></Post.Content>
            </Post.Wrapper>
          );
        })}
      </Post.Posts>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      limit: 10
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
            par
            categories
          }
          excerpt(pruneLength: 300, format: HTML)
          html
        }
      }
    }
  }
`;
