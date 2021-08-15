import React from 'react';
import SearchBar from '../components/SearchBar';

interface HeaderProps {
  searchValue?: string | number;
  handleSearch?: (event: React.SyntheticEvent) => void;
  clearSearchInput: () => void;
}

const Header = ({
  searchValue,
  handleSearch,
  clearSearchInput,
}: HeaderProps): JSX.Element => {
  return (
    <header className="header">
      <h1 className="header__title">Concular Market Place</h1>
      <div className="header__search">
        <SearchBar
          searchValue={searchValue}
          handleSearch={handleSearch}
          clearSearchInput={clearSearchInput}
        />
      </div>
    </header>
  );
};

export default Header;
