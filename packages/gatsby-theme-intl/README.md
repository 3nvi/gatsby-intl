# `gatsby-theme-intl`

Helps with i18n by creating pages & handling translations for all your supported locales.

## Features

In short, this does everything [gatsby-plugin-intl](https://github.com/3nvi/gatsby-intl/tree/master/packages/gatsby-plugin-intl) does, while exposing  
React Components to help you handle translations and other internalization chores. It:

- Creates a page for each of your locales and exposes them through different URLs
- Sets the locale for this page and exposes it through `React.Context` to any component within the page
- Creates all the necessary SEO tags for each of your new localized pages
- Creates proper redirects based on Language headers, as well as the default/fallback language

At its core, this plugin exposes the following:

### `usePageContext`

Returns information about the current page.

```jsx harmony
import { usePageContext } from '@3nvi/gatsby-theme-intl';

const Component = () => {
  const {
    // The language of the current page (i.e. `en`)
    lang,
    // The original path of the page before it became localized (i.e. `/about`)
    originalPath,
    // The supported languages of your application (i.e. `['en']`)
    supportedLanguages,
    //The URL of your current site (i.e `http://localhost:8000`)
    siteUrl,
  } = usePageContext();

  return <div />;
};
```

### `useTranslation`

Returns a helper function for translations. This package uses & configures [i18next](https://github.com/i18next/i18next)
under the hood, so you can read more there about how to configure your translations.

```jsx harmony
import { useTranslation } from '@3nvi/gatsby-theme-intl';

const Component = () => {
  const { t } = useTranslation();

  return <div>{t('greeting')}</div>;
};
```

### `Link`

A wrapper around gatsby-link, that accepts the original path and converts it to a intl-aware link, depending on the currently
active language.

```jsx harmony
import { Link } from '@3nvi/gatsby-theme-intl';

const Component = () => {
  return <Link to="/about">About</Link>; // destination gets automatically converted to `/{activeLanguage}/about`
};
```

In addition to these, the package configures & forwards all React components present in
the [react-i18next](https://github.com/i18next/react-i18next/) package.

## Quick Start

This plugin composes [gatsby-plugin-intl](https://github.com/3nvi/gatsby-intl/tree/master/packages/gatsby-plugin-intl):

```
npm i @3nvi/gatsby-theme-intl
```

and in your `gatsby-config.js`:

```js
{
  // ... rest of your config
  plugins: [
    // ... other plugins
    {
      resolve: `@3nvi/gatsby-theme-intl`,
      options: {
        // ...
      },
    },
  ];
}
```

## Configuration

The plugin accepts all **optional options** present in [gatsby-plugin-intl](https://github.com/3nvi/gatsby-intl/tree/master/packages/gatsby-plugin-intl). Additionally,
it accepts the following:

- `i18nextConfig`: Configuration options for the `i18next` instance that this theme uses under the hood. The available
  options can be found in the [official docs](https://www.i18next.com/overview/configuration-options).

  This package already adds a sane default configuration for i18next, which is automatically merged with
  the one you provide. The minimum **required** configuration option from your part is the `resources` option.

Example configuration:

```js
const translations = require('./i18n.json');

{
  // ... rest of your config
  plugins: [
    // ... other plugins
    {
      resolve: `@3nvi/gatsby-theme-intl`,
      options: {
        supportedLanguages: ['en', 'fr']
        i18nextConfig: {
          resources: translations,
        },
      },
    },
  ];
}
```

# Client-Only Routes

For implementing client-only routes gatsby recommends using its dedicated [gatsby-plugin-create-client-paths](https://www.gatsbyjs.org/packages/gatsby-plugin-create-client-paths/). This
can work in tandem with `gatsby-theme-intl` by simply:

1. Including `gatsby-plugin-create-client-paths` before `gastby-theme-intl`:

```js
const translations = require('./i18n.json');

{
  // ... rest of your config
  plugins: [
    // ... other plugins
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `@3nvi/gatsby-theme-intl`,
      options: {
        supportedLanguages: ['en', 'fr']
        i18nextConfig: {
          resources: translations,
        },
      },
    },
  ];
}
```

2. Making sure that the [Router component's `basePath`](https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/#configuring-and-handling-client-only-routes-on-a-server)
   matches the value of the `matchPath` which is part of `usePageContext`. This is set by `gatsby-plugin-create-client-paths` for client-only pages. For example, using
   the previous config (where all `/app/*` paths were client-only), we would do:

```jsx harmony
// app.js
const App = () => {
  const { matchPath } = usePageContext();

  return (
    <Router basepath={matchPath}>
      <ComponentOne path="/client-only-route-1" />
      <ComponentTwo path="/client-only-route-2" />
    </Router>
  );
};
```

## Usage Examples

Visit the related [gatsby starter](https://github.com/3nvi/gatsby-intl/tree/master/packages/gatsby-starter-intl) to
see a full example of how this plugin can be used

## License

MIT
