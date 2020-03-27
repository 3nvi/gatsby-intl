import '@testing-library/jest-dom';
import React from 'react';
import faker from 'faker';
import { PageContext } from '../../src/page-context';
import { render } from '@testing-library/react';
import { Link } from '../index';

describe('Link', () => {
  it('properly links to correct page based on lang', () => {
    const lang = faker.random.locale();
    const path = `/${faker.lorem.slug()}`;

    render(
      <PageContext.Provider value={{ lang }}>
        <Link to={path} />
      </PageContext.Provider>
    );

    expect(document.querySelector(`a[href="/${lang}${path}"]`)).toBeTruthy();
  });
});
