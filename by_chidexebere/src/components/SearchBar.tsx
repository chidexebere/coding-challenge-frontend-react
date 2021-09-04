import React, { ComponentProps } from 'react';

interface SearchBarProps extends ComponentProps<'form'> {
  searchValue?: string | number;
  handleSearch?: (event: React.SyntheticEvent) => void;
  clearSearchInput?: () => void;
}

const SearchBar = ({
  searchValue,
  handleSearch,
  clearSearchInput,
}: SearchBarProps): JSX.Element => (
  <form className="search" role="form">
    <span className="search__icon">
      <svg
        className="icon"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        ></path>
      </svg>
    </span>
    <label htmlFor="header-search"></label>
    <input
      className="search__input"
      type="text"
      id="header-search"
      placeholder="Search by product name"
      value={searchValue}
      onChange={handleSearch}
    />
    {searchValue !== '' && (
      <span className="search__close" onClick={clearSearchInput}>
        <svg
          className="icon"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
    )}
  </form>
);

export default SearchBar;
