// eslint-disable-next-line no-unused-vars
const gatsbyConfig = ({ i18nextConfig, ...intlPluginOpts }) => ({
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: '@3nvi/gatsby-plugin-intl',
      options: intlPluginOpts,
    },
  ],
});

export default gatsbyConfig;
