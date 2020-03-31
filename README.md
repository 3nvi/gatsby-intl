# Gatsby Intl

A collection of packages to help you with internalization needs in a Gatsby app. It contains the following:

## [`gatsby-starter-intl`](https://github.com/3nvi/gatsby-intl/tree/master/packages/gatsby-starter-intl)

A starter for when you need something that has everything setup and it just works. It's configured
for deployment through Netlify, while being optimized for SEO (locale-wise).

## [`gatsby-theme-intl`](https://github.com/3nvi/gatsby-intl/tree/master/packages/gatsby-theme-intl)

A gatsby theme that handles translations & automatic page generations, while making no styling decisions.
This is the best way to integrate i18n for the first time into an existing gatsby app.

## [`gatsby-plugin-intl`](https://github.com/3nvi/gatsby-intl/tree/master/packages/gatsby-plugin-intl)

A low-level gatsby plugin that only handles SEO & automatic localized page generation, while delegating
translations to the developer. This is ideal to use if you already have a way of doing the translations and you
just want to handle the SEO tags & the automatic page generation for each locale.

## Additional Context

If you want to understand more about how things are orchestrated and what's happening under the hood, please refer to the related [Medium Blog Post](https://itnext.io/techniques-approaches-for-multi-language-gatsby-apps-8ba13ff433c5) which analyzes the motivation, thought process and approach behind these packages.
