import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';
import { server } from '../mocks/server';
import { rest } from 'msw';
import App from '../App';

const waitForLoading = () => {
  return waitForElementToBeRemoved(() =>
    screen.getByRole('alert', { name: 'loading' }),
  );
};

const errorMessage = `"Something went wrong, we could not get product listPlease check your internet connection ..."`;

describe('<App />', () => {
  it('should display a heading, a search box, and a Load More button', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toHaveTextContent(
      'Concular Market Place',
    );
    expect(
      screen.getByPlaceholderText('Search by product name'),
    ).toBeInTheDocument();

    expect(screen.getByRole('button')).toHaveTextContent('Load More');
  });

  it('should display loading state until the list is available', () => {
    render(<App />);
    expect(screen.getByRole('alert', { name: 'loading' })).toBeInTheDocument();
  });

  it('should display a list of 10 products on initial render', async () => {
    render(<App />);

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(10);
  });

  it('should displays error message when fetching a list of products is unsuccessful', async () => {
    // Return an error response from the API when we try to call this endpoint
    server.use(
      rest.post(
        `https://asterix-dev.concular.com/material-service/marketplace/mp`,
        (req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({ message: `Internal Server Error` }),
          );
        },
      ),
    );

    render(<App />);
    await waitForLoading();

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();

    // Expect the error to display once loading has completed
    expect(
      screen.getByRole('alert', { name: /error/i }).textContent,
    ).toMatchInlineSnapshot(errorMessage);
  });

  it('should display search result if found', async () => {
    render(<App />);
    await waitForLoading();

    const input = screen.getByPlaceholderText('Search by product name');
    fireEvent.change(input, { target: { value: 'Product 2' } });
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(1);
    expect(listItems[0]).toHaveTextContent('Product 2');
  });

  it('should display an empty state if there are no search results', async () => {
    render(<App />);
    await waitForLoading();

    const input = screen.getByPlaceholderText('Search by product name');
    fireEvent.change(input, { target: { value: 'wxy' } });
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    expect(
      screen.getByRole('alert', { name: /no-result/i }).textContent,
    ).toMatchInlineSnapshot(`"No result found for 'wxy' Product"`);
  });
});
