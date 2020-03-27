import {
  wrapPageElement as wrapPageElementSSR,
  wrapRootElement as wrapRootElementSSR,
} from '../gatsby-ssr';
import {
  wrapPageElement as wrapPageElementBrowser,
  wrapRootElement as wrapRootElementBrowser,
} from '../gatsby-browser';

describe('gatsby-browser', () => {
  it('exports the same hooks as SSR', () => {
    expect(wrapPageElementBrowser).toEqual(wrapPageElementSSR);
    expect(wrapRootElementBrowser).toEqual(wrapRootElementSSR);
  });
});
