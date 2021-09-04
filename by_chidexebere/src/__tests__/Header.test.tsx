import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../layout/Header';

describe('<App />', () => {
  it('should display a header title - Concular Market Place', () => {
    render(<Header />);

    expect(screen.getByRole('heading')).toHaveTextContent(
      'Concular Market Place',
    );
  });
});
