import React from 'react';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { DEFAULT_OPTIONS } from './constants';
import { PageContext } from './context/PageContext';
import translations from '../translations';

export const wrapRootElement = ({ element }, pluginOptions) => {
  const options = { ...DEFAULT_OPTIONS, ...pluginOptions };

  i18n.init({
    resources: translations,
    fallbackLng: options.defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>;
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
  i18n.changeLanguage(props.pageContext.lang);

  return <PageContext.Provider value={props.pageContext}>{element}</PageContext.Provider>;
};
