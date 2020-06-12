const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
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
              html
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create individual pages
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { id, frontmatter, html } = node;
    const { title, date, par } = frontmatter;
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        defaultDescription: result.data.site.siteMetadata.description,
        siteName: result.data.site.siteMetadata.title,
        slug: node.fields.slug,
        title,
        date,
        par,
        html
      }
    });
  });

  // Create blog-list pages
  const posts = result.data.allMarkdownRemark.edges;
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@fullpage/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};
