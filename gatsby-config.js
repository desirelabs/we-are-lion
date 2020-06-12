/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `We Are Lion`,
    siteUrl: "https://we-are-lion.fr",
    description:
      "Agence Lion votre partenaire pour la création de votre business en ligne."
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`
      }
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-typescript",
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://we-are-lion.fr",
        sitemap: "https://we-are-lion.fr/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    }
  ]
};
