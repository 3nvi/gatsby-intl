import '@testing-library/jest-dom';
import React from 'react';
import faker from 'faker';
import { render } from '@testing-library/react';
import { waitFor, screen } from '@testing-library/dom';
import { wrapRootElement } from '../gatsby-ssr';
import { useTranslation } from '../index'; // eslint-disable-line

describe('gatsby-ssr', () => {
  describe('wrapRootElement', () => {
    it('correctly wraps root element with translation provider', async () => {
      const supportedLanguages = Array.from(
        { length: faker.random.number(5) },
        faker.random.locale
      );
      const defaultLanguage = faker.random.arrayElement(supportedLanguages);
      const translationKey = faker.lorem.word();
      const translationValue = faker.lorem.word();

      const pluginOpts = {
        supportedLanguages,
        defaultLanguage,
        i18nextConfig: {
          react: {
            useSuspense: false,
          },
          resources: {
            [defaultLanguage]: {
              translation: {
                [translationKey]: translationValue,
              },
            },
          },
        },
      };

      const Component = () => {
        const { t } = useTranslation();
        return <div>{t(translationKey)}</div>;
      };

      render(wrapRootElement({ element: <Component /> }, pluginOpts));
      await waitFor(() => expect(screen.getByText(translationValue)).toBeTruthy());
    });
  });
});
