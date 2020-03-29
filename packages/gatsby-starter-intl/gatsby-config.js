const resources = require("./i18n.json")

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Intl`,
    description: `Kick off your next, great Gatsby i18n project with this starter. It extends gatsby-starter-default.`,
    author: `@3nvi`,
    siteUrl: process.env.URL || "localhost:8000",
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
        name: `gatsby-starter-intl`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `@3nvi/gatsby-theme-intl`,
      options: {
        supportedLanguages: ["en", "el"],
        defaultLanguage: "en",
        i18nextConfig: {
          resources,
        },
      },
    },
    `gatsby-plugin-netlify`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
