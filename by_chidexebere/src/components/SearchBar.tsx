import React, { ComponentProps } from 'react';

interface SearchBarProps extends ComponentProps<'input'> {
  handleSearch?: (event: React.SyntheticEvent) => void;
  value?: string | number;
}

const SearchBar = ({ handleSearch, value }: SearchBarProps): JSX.Element => (
  <form>
    <label htmlFor="header-search"></label>
    <input
      type="text"
      id="header-search"
      placeholder="Search by product name"
      value={value}
      onChange={handleSearch}
    />
  </form>
);

export default SearchBar;
