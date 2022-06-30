import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test('Renders a heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/fakeco form/i);
  expect(linkElement).toBeInTheDocument();
});
