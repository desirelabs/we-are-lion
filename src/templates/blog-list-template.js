import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { Layout } from "../components/ui/Layout";
import { Title } from "../components/ui/Title";
import { StyledLink } from "../components/ui/StyledLink";
import * as Post from "../components/ui/Post";
import { PostsNavigation } from "../components/ui/PostsNavigation";
import { H2 } from "../components/ui/Headings";

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const siteName = this.props.data.site.siteMetadata.title;
    return (
      <>
        <Helmet>
          <title>{siteName} - Le blog</title>
          <meta
            name="description"
            content="Articles, veille, conseils sur la création de site et boutiques en ligne."
          ></meta>
        </Helmet>
        <Layout isClear={false}>
          <Post.Posts>
            <Title>Blog</Title>
            {posts.map(({ node }) => {
              const { frontmatter, excerpt } = node;
              const { title, date, par } = frontmatter;
              return (
                <Post.Wrapper key={node.fields.slug}>
                  <H2>
                    <StyledLink to={`${node.fields.slug}`}>{title}</StyledLink>
                  </H2>
                  <Post.Meta>
                    Écrit par {par} - {date}
                  </Post.Meta>
                  <Post.Content
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                  ></Post.Content>
                  <StyledLink to={`${node.fields.slug}`}>
                    Lire la suite &raquo;
                  </StyledLink>
                </Post.Wrapper>
              );
            })}
            <PostsNavigation pageContext={this.props.pageContext} />
          </Post.Posts>
        </Layout>
      </>
    );
  }
}
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { categories: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
            par
            categories
            htmlTitle
            description
          }
          excerpt(pruneLength: 300, format: HTML)
        }
      }
    }
  }
`;
