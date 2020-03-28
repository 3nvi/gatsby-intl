import '@testing-library/jest-dom';
import React from 'react';
import faker from 'faker';
import { render } from '@testing-library/react';
import { wrapRootElement } from '../gatsby-ssr';
import { useTranslation } from '../index';

describe('gatsby-ssr', () => {
  describe('wrapRootElement', () => {
    it('correctly wraps root element with translation provider', () => {
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

      const { getByText } = render(wrapRootElement({ element: <Component /> }, pluginOpts));
      expect(getByText(translationValue)).toBeTruthy();
    });
  });
});
