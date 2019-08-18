module.exports = {
  siteMetadata: {
    title: `Dicionário Astrológico`,
    description: `Dicionário de termos astrológicos`,
    author: `@astroregulus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dicionário Astrológico`,
        short_name: `Dicionário Astrológico`,
        start_url: `/`,
        background_color: `#021D49`,
        theme_color: `#021D49`,
        display: `minimal-ui`,
        icon: `src/images/dicionario_logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
