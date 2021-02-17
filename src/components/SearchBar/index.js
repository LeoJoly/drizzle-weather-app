import React from 'react';

const SearchBar = () => {
  return (
    <div className="searchBar">
      <form>
        <input
          type="text"
          placeholder="City name"
        />
        <button type="submit">Rechercher</button>
      </form>
    </div>
  );
};

export default SearchBar;