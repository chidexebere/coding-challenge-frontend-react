import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { AppContext } from '../state/context';
import { initialState } from '../state/state';

describe('<SearchBar />', () => {
  it('should search product by title or name from listed product', () => {
    const searchValue = 'product 1';
    const dispatch = () => undefined;
    const state = { ...initialState, searchValue };

    render(
      <AppContext.Provider value={{ state, dispatch }}>
        <SearchBar />
      </AppContext.Provider>,
    );

    const inputElement = screen.getByPlaceholderText(
      /Search by product name/i,
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: searchValue },
    });
    expect(inputElement.value).toBe('product 1');
  });
});
