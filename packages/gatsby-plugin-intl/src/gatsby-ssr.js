import React from 'react';
import { Helmet } from 'react-helmet';
import { DEFAULT_OPTIONS } from './constants';

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapPageElement = ({ element, props }, pluginOptions) => {
  const { lang, originalPath, siteUrl, supportedLanguages } = props.pageContext;
  const { excludedPages } = { ...DEFAULT_OPTIONS, ...pluginOptions };

  if (excludedPages.includes(props.location.pathname)) {
    return element;
  }

  return (
    <React.Fragment>
      <Helmet htmlAttributes={{ lang }}>
        <meta property="og:locale" content={lang} />
        <link rel="canonical" href={`${siteUrl}/${lang}${originalPath}`} />
        <link rel="alternate" href={`${siteUrl}${originalPath}`} hrefLang="x-default" />
        {supportedLanguages.map(supportedLang => (
          <link
            rel="alternate"
            href={`${siteUrl}/${supportedLang}${originalPath}`}
            hrefLang={supportedLang}
            key={supportedLang}
          />
        ))}
      </Helmet>
      {element}
    </React.Fragment>
  );
};
