# `gatsby-plugin-intl`

Helps with i18n by creating pages for all your supported locales. This is a low level plugin that
[gatsby-theme-intl](https://github.com/3nvi/gatsby-intl/tree/master/packages/gatsby-theme-intl) depends upon. You should
be using it only if you already have a methodology for handling translations.

## Features

In short, this plugin:

- Creates a page for each of your locales and exposes them through different URLs
- Creates all the necessary SEO tags for each of your new localized pages
- Creates proper redirects based on Language headers, as well as the default/fallback language

This plugin scans all your pages (those under `/pages` and the ones created dynamically
through the `createPage` API) and creates localized versions for each one, depending on your supported locales.
While there, it also **automatically** creates the proper SEO tags (depending on the page), so you don't
have to worry about implementing the SEO manually

## What it doesn't do

This plugin doesn't handle translations, but delegates that to the developer. If you want an easy way to
handle translations while using this plugin, please visit [gatsby-theme-intl](https://github.com/3nvi/gatsby-intl/tree/master/packages/gatsby-theme-intl) for an
all-in-one solution.

## Examples

Let's say you have a single page under `pages/about.js` and your supported locales are `en` and `fr` (with
`en` being the default one). This plugin will create the following:

- A french variation of about with proper SEO tags accessible under `/fr/about`
- An english variation of about with proper SEO tags accessible under `/en/about`
- Proper redirect definitions based on your `accept-language` header
- Default redirect definitions from `/about` to `/en/about/` when `accept-language` is not present

As stated, translation is delegated to the user. Use [gatsby-theme-intl](https://github.com/3nvi/gatsby-intl/tree/master/packages/gatsby-theme-intl) for
if you want a package that includes translations.

## Quick Start

This plugin depends on `react-helmet` as a peer dependency

```
npm i react-helmet gatsby-plugin-react-helmet @3nvi/gatsby-plugin-intl
```

and in your `gatsby-config.js`:

```
{
    // ... rest of your config
    plugins: [
        // ... other plugins
        `gatsby-plugin-react-helmet`,
        `@3nvi/gatsby-plugin-intl`
    ]
}

```

## Configuration

The plugin accepts the following **optional options**:

- `supportedLanguages`: An array of locales that your application supports. Defaults to `['en']`.
- `defaultLanguage`: The default/fallback locale of your application. Defaults to `en`.
- `siteUrl`: The URL of your site that's used when creating SEO tags. Defaults to the environment variable
  `URL` (which platforms like Netlify automatically populate) or to `localhost:8000` if the environment variable is not present.
- `exludedPages`: A list page paths that the plugin should ignore. Defaults to `/404.html`.
- `notFoundPage`: The URL for a custom 404 page. Defaults to `/404/`.
- `deleteOriginalPages`: A boolean denoting whether to delete the original non-localized pages or retain them at
  their original paths. Defaults to `false` for production builds and `true` for development ones.

## License

MIT
