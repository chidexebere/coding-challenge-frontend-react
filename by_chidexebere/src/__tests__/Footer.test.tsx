import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../layout/Footer';

describe('<Footer /> when rendered with `hasMoreProduct` prop', () => {
  it('should display Load More button only when more product exist', () => {
    render(<Footer />);

    expect(
      screen.getByRole('button', { name: /Load More/i }),
    ).toBeInTheDocument();
  });
});
