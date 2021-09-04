import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

const mockHandleSearch = jest.fn();

describe('<SearchBar />', () => {
  it('should search product by title or name from listed product', () => {
    render(
      <SearchBar searchValue={`product 1`} handleSearch={mockHandleSearch} />,
    );

    const inputElement = screen.getByPlaceholderText(
      /Search by product name/i,
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: 'product 1' },
    });
    expect(inputElement.value).toBe('product 1');
  });
});
