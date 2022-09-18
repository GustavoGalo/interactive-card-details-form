import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { PageWrapper } from './components';

test('renders learn react link', () => {
  render(
    <PageWrapper>
      <App />
    </PageWrapper>,
  );
  const linkElement = screen.getByText(/CARDHOLDER NAME/i);
  expect(linkElement).toBeInTheDocument();
});
