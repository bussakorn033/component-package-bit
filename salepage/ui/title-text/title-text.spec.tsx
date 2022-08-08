import React from 'react';
import { render } from '@testing-library/react';
import { BasicTitleText } from './title-text.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTitleText />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
