export const DEFAULT_OPTIONS = {
  // the locales that your gatsby app supports
  supportedLanguages: ['en'],

  // the default language for your gatsby app
  defaultLanguage: 'en',

  // the domain (url) in which your web app is hosted in
  siteUrl: process.env.URL || 'localhost:8080',

  // the (optional) path in which your web app redirects in case of a 404
  notFoundPage: '/404/',

  // a list of paths, whose pages should not be processed by this plugin (i.e. delegate to whatever
  // gatsby would do by default)
  excludedPages: ['/404.html'],

  // Whether to delete the original pages at the original URLs or keep them
  deleteOriginalPages: process.env.NODE_ENV === 'production',
};
