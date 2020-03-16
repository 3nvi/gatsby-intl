import { DEFAULT_OPTIONS as GATSBY_PLUGIN_INTL_DEFAULT_OPTIONS } from '@3nvi/gatsby-plugin-intl/constants';

export const DEFAULT_OPTIONS = {
  ...GATSBY_PLUGIN_INTL_DEFAULT_OPTIONS,
  i18nextConfig: {
    resources: undefined,
    fallbackLng: GATSBY_PLUGIN_INTL_DEFAULT_OPTIONS.defaultLanguage,
    interpolation: {
      escapeValue: false, // react already protects us from xss
    },
  },
};
