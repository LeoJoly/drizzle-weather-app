// == Package imports
import React from 'react';
import { Route } from 'react-router-dom';

// == Local imports
// components
import Header from '../Header';
import Home from '../Home';
import SearchBar from '../SearchBar';

const App = () => {
  return (
    <div className="app">
      <SearchBar />
      <Header />

      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
};

export default App;
