import { wrapPageElement as wrapPageElementSSR } from '../gatsby-ssr';
import { wrapPageElement as wrapPageElementBrowser } from '../gatsby-browser';

describe('gatsby-browser', () => {
  it('exports the same hook as SSR', () => {
    expect(wrapPageElementBrowser).toEqual(wrapPageElementSSR);
  });
});
