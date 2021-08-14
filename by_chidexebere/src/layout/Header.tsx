import React from 'react';
import SearchBar from '../components/SearchBar';

interface HeaderProps {
  handleSearch?: (event: React.SyntheticEvent) => void;
  searchValue?: string | number;
}

const Header = ({ handleSearch, searchValue }: HeaderProps): JSX.Element => {
  return (
    <header className="header">
      <h1 className="header__title">Concular Market Place</h1>
      <div className="header__search">
        <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
      </div>
    </header>
  );
};

export default Header;
