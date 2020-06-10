import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/ui/Layout";
import { Title } from "../components/ui/Title";
import { ReadMore } from "../components/ui/ReadMore";
import * as Post from "../components/ui/Post";
import { PostsNavigation } from "../components/ui/PostsNavigation";

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMar  kdownRemark.edges;
    return (
      <Layout isClear={false}>
        <Post.Posts>
          <Title>Blog</Title>
          {posts.map(({ node }) => {
            const { frontmatter, excerpt } = node;
            const { title, date, par } = frontmatter;
            return (
              <Post.Wrapper key={node.fields.slug}>
                <Post.Title>
                  <Link to={`${node.fields.slug}`}>{title}</Link>
                </Post.Title>
                <Post.Meta>
                  Écrit par {par} - {date}
                </Post.Meta>
                <Post.Content
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                ></Post.Content>
                <ReadMore to={`${node.fields.slug}`}>
                  Lire la suite &raquo;
                </ReadMore>
              </Post.Wrapper>
            );
          })}
          <PostsNavigation pageContext={this.props.pageContext} />
        </Post.Posts>
      </Layout>
    );
  }
}
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
          }
          excerpt(pruneLength: 300, format: HTML)
        }
      }
    }
  }
`;
