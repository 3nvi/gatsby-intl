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

Due to the fact that the starter is in a lerna monorepo (and not in a separate standalone repo), installation requires running the additional `npm run bootstrap` command:

```
git clone https://github.com/3nvi/gatsby-intl intl-site
cd intl-site/packages/gatsby-starter-intl
npm i
npm run start
```

## Known Issues
At the moment of writing, Netlify has a bug where if more than one `Accept-Language`s are sent, then the language redirects don’t work. You can track the related issue [here](https://community.netlify.com/t/language-based-redirect-only-works-when-1-browser-language-set/4252/6).

To verify that redirects **do work** when a single `Accept-Language` value is sent, you can issue a request with just one language:

```
curl -H 'Accept-Language: de' -L -v -s https://YOUR_SITE.netlify.com 1> /dev/null
```

and expect the redirects to work

## License

MIT
