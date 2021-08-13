import React, { ComponentProps } from 'react';

interface SearchBarProps extends ComponentProps<'input'> {
  handleSearch?: (event: React.SyntheticEvent) => void;
  searchValue?: string | number;
}

const SearchBar = ({
  handleSearch,
  searchValue,
}: SearchBarProps): JSX.Element => (
  <form>
    <label htmlFor="header-search"></label>
    <input
      type="text"
      id="header-search"
      placeholder="Search by product name"
      value={searchValue}
      onChange={handleSearch}
    />
  </form>
);

export default SearchBar;
