import React from 'react';
import Helmet from 'react-helmet';
import { usePageContext } from '../context/PageContext';

const SeoIntl = () => {
  const { lang, originalPath, siteUrl, supportedLanguages } = usePageContext();

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          property: `og:locale`,
          content: lang,
        },
      ]}
      link={[
        {
          rel: 'canonical',
          href: `${siteUrl}/${lang}${originalPath}`,
        },
        {
          rel: 'alternate',
          hrefLang: 'x-default',
          href: `${siteUrl}${originalPath}`,
        },
        ...supportedLanguages.map(supportedLang => ({
          rel: 'alternate',
          hrefLang: supportedLang,
          href: `${siteUrl}/${supportedLang}${originalPath}`,
        })),
      ]}
    />
  );
};
export default SeoIntl;
