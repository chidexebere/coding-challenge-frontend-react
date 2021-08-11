import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('<App />', () => {
  test('should display a heading, a search box, a list of product on the market place web page and a button', async () => {
    //
  });

  test('should display a product image, title or name for each product', async () => {
    //
  });

  test('should display the first 10 product, with the ability to paginate (10 product per page) by clicking on Load more button', async () => {
    //
  });

  test('should display Load More button only when more product exist', async () => {
    //
  });

  test('should display loading state until the list is available', async () => {
    //
  });

  test('should search product by title or name from listed product', async () => {
    //
  });

  test('should display an empty state if there are no search results', async () => {
    //
  });
});
