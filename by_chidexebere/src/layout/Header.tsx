import React from 'react';
import SearchBar from '../components/SearchBar';

interface HeaderProps {
  handleSearch?: (event: React.SyntheticEvent) => void;
  searchValue?: string | number;
}

const Header = ({ handleSearch, searchValue }: HeaderProps): JSX.Element => {
  return (
    <header className="">
      <h1>Concular Market Place</h1>
      <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
    </header>
  );
};

export default Header;
