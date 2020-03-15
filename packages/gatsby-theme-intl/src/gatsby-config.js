const gatsbyConfig = ({
  supportedLanguages,
  defaultLanguage,
  siteUrl,
  notFoundPage,
  excludedPages,
}) => ({
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        supportedLanguages,
        defaultLanguage,
        siteUrl,
        notFoundPage,
        excludedPages,
      },
    },
  ],
});

export default gatsbyConfig;
