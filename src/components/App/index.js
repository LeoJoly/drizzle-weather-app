// == Package imports
import React from 'react';
import { Route } from 'react-router-dom';

// == Local imports
// components
// import Header from '../Header';
import Home from '../Home';
import SearchBar from '../SearchBar';
import Weather from '../Weather';
import Footer from '../Footer';

const App = () => {
  return (
    <div className="app">
      <SearchBar />

      <Route exact path="/weather/:slug">
        <Weather />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>

      <Footer />
    </div>
  );
};

export default App;
