import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  test('should display a heading, a search box, a list of product on the market place web page and a button', () => {
    render(<App />);

    expect(screen.getByText(/Concular Market Place/i)).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
