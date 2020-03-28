import faker from 'faker';
import { onCreatePage, onPreBuild } from '../gatsby-node';

const createMockPage = (path, context = {}) => ({
  path,
  context,
  component: 'Test',
  componentChunkName: 'Test',
  pluginCreatorId: '@3nvi/gatsby-plugin-intl',
});

describe('onCreatePage', () => {
  let pagePath;
  let createPage;
  let deletePage;
  let createRedirect;

  beforeEach(() => {
    pagePath = `/${faker.lorem.slug()}`;
    createPage = jest.fn();
    deletePage = jest.fn();
    createRedirect = jest.fn();
  });

  afterEach(() => {
    createPage.mockReset();
    deletePage.mockReset();
    createRedirect.mockReset();
  });

  it('correctly ignores excluded pages', async () => {
    const page = createMockPage(pagePath);
    const pluginOpts = { excludedPages: [pagePath] };

    await onCreatePage({ page, actions: { createPage, deletePage, createRedirect } }, pluginOpts);

    expect(createPage).not.toHaveBeenCalled();
    expect(deletePage).not.toHaveBeenCalled();
    expect(createRedirect).not.toHaveBeenCalled();
  });

  it('deletes the original pages & creates localized pages with proper context', async () => {
    const supportedLanguages = Array.from({ length: faker.random.number(5) }, faker.random.locale);
    const page = createMockPage(pagePath, { key: faker.random.word() });
    const pluginOpts = { supportedLanguages, siteUrl: faker.internet.url() };

    await onCreatePage({ page, actions: { createPage, deletePage, createRedirect } }, pluginOpts);

    expect(deletePage).toHaveBeenCalledTimes(1);
    expect(deletePage).toHaveBeenCalledWith(page);

    expect(createPage).toHaveBeenCalledTimes(supportedLanguages.length);
    supportedLanguages.forEach((lang, index) => {
      expect(createPage).toHaveBeenNthCalledWith(index + 1, {
        ...page,
        path: `/${supportedLanguages[index]}${page.path}`,
        context: {
          ...page.context,
          supportedLanguages,
          siteUrl: pluginOpts.siteUrl,
          originalPath: page.path,
          lang,
        },
      });
    });
  });

  it('creates proper redirect for each page', async () => {
    const supportedLanguages = Array.from({ length: faker.random.number(5) }, faker.random.locale);
    const page = createMockPage(pagePath);
    const pluginOpts = { supportedLanguages, defaultLanguage: supportedLanguages[1] };

    await onCreatePage({ page, actions: { createPage, deletePage, createRedirect } }, pluginOpts);

    expect(createRedirect).toHaveBeenCalledTimes(supportedLanguages.length + 1);
    supportedLanguages.forEach((lang, index) => {
      expect(createRedirect).toHaveBeenNthCalledWith(index + 1, {
        fromPath: page.path,
        toPath: `/${supportedLanguages[index]}${page.path}`,
        Language: lang,
        isPermanent: false,
        redirectInBrowser: false,
        statusCode: pluginOpts.notFoundPage ? 404 : 301,
      });
    });

    expect(createRedirect).toHaveBeenLastCalledWith({
      fromPath: page.path,
      toPath: `/${pluginOpts.defaultLanguage}${page.path}`,
      isPermanent: false,
      redirectInBrowser: false,
      statusCode: pluginOpts.notFoundPage ? 404 : 301,
    });
  });

  it('properly handles 404 status codes for not found pages', async () => {
    const pluginOpts = { notFoundPage: pagePath };
    const page = createMockPage(pagePath);

    await onCreatePage({ page, actions: { createPage, deletePage, createRedirect } }, pluginOpts);

    expect(createRedirect.mock.calls[0][0]).toMatchObject({ statusCode: 404 });
  });

  it('properly handles browser redirects for development purposes', async () => {
    const OLD_NODE_ENV = process.env.NODE_ENV;
    const page = createMockPage(pagePath);

    process.env.NODE_ENV = 'development';
    await onCreatePage({ page, actions: { createPage, deletePage, createRedirect } }, {});

    expect(createRedirect.mock.calls[0][0]).toMatchObject({ redirectInBrowser: true });

    process.env.NODE_ENV = OLD_NODE_ENV;
  });
});

describe('onPreBuild', () => {
  let pagePath;
  let createRedirect;

  beforeEach(() => {
    pagePath = `/${faker.lorem.slug()}`;
    createRedirect = jest.fn();
  });

  afterEach(() => {
    createRedirect.mockReset();
  });

  it("doesn't do anything if not-found page is not defined", async () => {
    const pluginOpts = { notFoundPage: null };
    await onPreBuild({ actions: { createRedirect } }, pluginOpts);

    expect(createRedirect).not.toHaveBeenCalled();
  });

  it('creates a single global redirect if not-found page exists', async () => {
    const pluginOpts = { notFoundPage: pagePath };

    await onPreBuild({ actions: { createRedirect } }, pluginOpts);

    expect(createRedirect).toHaveBeenCalledTimes(1);
    expect(createRedirect).toHaveBeenCalledWith({
      fromPath: '/*',
      toPath: pagePath,
      isPermanent: false,
      redirectInBrowser: false,
      statusCode: 302,
    });
  });
});
