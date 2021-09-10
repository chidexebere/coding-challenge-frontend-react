import React from 'react';
import './styles/App.scss';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';
import AppContextProvider from './state/context';

function App(): JSX.Element {
  return (
    <div className="App">
      <AppContextProvider>
        <Header />
        <Main />
        <Footer />
      </AppContextProvider>
    </div>
  );
}

export default App;
