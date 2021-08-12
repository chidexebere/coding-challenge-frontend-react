import React from 'react';
import SearchBar from '../components/SearchBar';

const Header = (): JSX.Element => {
  return (
    <header className="">
      <h1>Concular Market Place</h1>
      <SearchBar />
    </header>
  );
};

export default Header;
