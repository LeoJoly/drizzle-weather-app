// == Package imports
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// == Local imports
// logo
import logoBright from '../../assets/logos/drizzle-logo_bright.svg';
// actions
import { autocomplete, changeField, searchInit, searchToggle, suggest } from '../../store/actions';
// utils
import { toggleSearch } from '../../utils';

// == Component
const SearchBar = ({ autocompleteList, handleChangeField, handleSearchInit, handleSearchToggle, handleSuggestion, searchInput, searchState }) => {
  // track field
  const handleOnChange = (e) => {
    handleChangeField(e.target.value, e.target.name);
  };

  // Request auto-suggestion
  const suggestClicked = (place) => {
    handleSuggestion(place);
  };

  console.log(searchState);

  return (
    <div className="searchBar">
      <div className="searchBar__secondBackground" />
      <div className="searchBar__main">
        <div className="searchBar__main__header">
          <div className="searchBar__main__header__container">
            <div className="searchBar__main__header__container__logo">
              <Link to="/">
                <img src={logoBright} alt="Drizzle logo" />
              </Link>
            </div>
            <button
              onClick={() => {toggleSearch(searchState.init, searchState.clicked, handleSearchInit, handleSearchToggle)}}
              className="searchBar__main__header__container__btn"
            >Close</button>
          </div>
        </div>
        <div className="searchBar__main__container">
          <div className="searchBar__main__container__bar">
            <form className="searchBar__main__container__bar__form">
              <input
                className="searchBar__main__container__bar__form__input"
                onChange={handleOnChange}
                name="searchInput"
                type="text"
                placeholder="City name"
                value={searchInput}
              />
              <button className="searchBar__main__container__bar__form__btn" type="submit">Search</button>
            </form>
            {!!autocompleteList.length && (
              <ul className="searchBar__main__container__bar__props">
                {autocompleteList.map(place => {
                  return <li className="searchBar__main__container__bar__props__el" onClick={() => {suggestClicked(place.title)}} key={place.id}>{place.title}</li>
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// == Container
const mapStateToProps = (state) => ({
  autocompleteList: state.search.autocompleteList,
  searchInput: state.search.searchInput,
  searchState: state.search.searchState,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeField: (value, name) => {
    dispatch(changeField(value, name));
    dispatch(autocomplete());
  },

  handleSuggestion: (place) => {
    dispatch(suggest(place));
  },

  handleSearchInit: () => {
    dispatch(searchInit());
  },

  handleSearchToggle: () => {
    dispatch(searchToggle());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default container;