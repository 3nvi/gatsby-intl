import * as React from 'react';
import { GatsbyLinkProps } from 'gatsby';

interface PageContext {
  supportedLanguages: string[];
  siteUrl: string;
  originalPath: string;
  lang: string;
  matchPath?: string;
}

export * from 'react-i18next';

export declare function usePageContext(): PageContext;

export declare const Link: React.ForwardRefRenderFunction<HTMLAnchorElement, GatsbyLinkProps<any>>;
