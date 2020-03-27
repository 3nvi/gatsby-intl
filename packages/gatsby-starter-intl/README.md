# `gatsby-starter-intl`

A gatsby starter showcasing how to easily handle the internalization of a website. It utilizes
`@3nvi/gatsby-theme-intl` under the hood in order to automate all mundane processes of:

- creating the necessary localized URLs
- adding proper SEO support on all pages
- handling translations
- changing languages while retaining the page the user's at

Moreover, it:

- utilizes the netlify plugin in order to create proper `_headers` and `_redirects` files.
- utilizes the sitemap plugin in order to create a sitemap for the website.

For more information on what happens under the hood check out [gatby-theme-intl](https://github.com/3nvi/gatsby-intl/tree/master/packages/gatsby-theme-intl),
as well as this project's [gatsby-config.js](https://github.com/3nvi/gatsby-intl/blob/master/packages/gatsby-starter-intl/gatsby-config.js)

## Installation

```
gatsby new intl-site https://github.com/3nvi/gatsby-intl/packages/gatsby-starter-intl
cd intl-site
npm run develop
```

## License

MIT
