import React from 'react';
import SearchBar from '../components/SearchBar';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <h1 className="header__title">Concular Market Place</h1>
      <div className="header__search">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
