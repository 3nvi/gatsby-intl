import React from 'react';
import i18next from 'i18next';
import merge from 'lodash.merge';
import { I18nextProvider } from 'react-i18next';
import { DEFAULT_OPTIONS } from './constants';
import { PageContext } from './page-context';

export const wrapRootElement = ({ element }, pluginOptions) => {
  const { i18nextConfig, defaultLanguage } = merge({}, DEFAULT_OPTIONS, pluginOptions);
  if (!i18nextConfig.resources) {
    throw new Error(
      'You must specify where to load translations from through the `resources` field of `i18nextConfig`'
    );
  }
  i18nextConfig.fallbackLng = defaultLanguage;

  i18next.init(i18nextConfig);

  return <I18nextProvider i18n={i18next}>{element}</I18nextProvider>;
};

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapPageElement = ({ element, props }) => {
  // Can't wrap this in a React effect, since it won't work correctly. This changes
  // the context value (which causes React to re-render the page component).
  // Endless re-rendering from this circular dependency is prevented by the fact that Gatsby
  // doesn't call `wrapPageElement` more than once. If we didn't use Gatsby, `react-i18next` has
  // a helpful `useSSR` hook which uses an `isInitialized` boolean check to avoid calling the
  // `i18n.changeLanguage` more than once (i.e. not causing an endless circular dependency). See
  // more here:
  // https://github.com/i18next/react-i18next/blob/master/src/useSSR.js
  // -----
  // We know that this props will exist here because of @3nvi/gatsby-plugin-intl
  i18next.changeLanguage(props.pageContext.lang);

  return <PageContext.Provider value={props.pageContext}>{element}</PageContext.Provider>;
};
