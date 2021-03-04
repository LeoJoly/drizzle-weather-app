// == Package imports
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Local imports
// logo
import logoBright from '../../assets/logos/drizzle-logo_bright.svg';
// animations
import { closingWindow, openingWindow } from './searchBarAnimations';
// actions
import { autocomplete, changeField, closeSearch, searchInit, searchToggle, suggest } from '../../store/actions';
// utils
import { toggleSearch } from '../../utils';

// == Component
const SearchBar = ({ autocompleteList, handleChangeField, handleCloseSearch, handleSearchInit, handleSearchToggle, handleSuggestion, history, searchInput, searchState }) => {
  // refs
  let searchWindow = useRef(null);
  let revealWindow = useRef(null);
  let revealWindowBG = useRef(null);

  // tarck page change
  useEffect(() => {
    history.listen(() => {
      handleCloseSearch();
    });
  });

  // open and close
  useEffect(() => {
    if (searchState.clicked === false) {
      // colse search window
      closingWindow(revealWindow, revealWindowBG, searchWindow);
    } else if (searchState.clicked === true || (searchState.clicked === true && searchState.init === null)) {
      // open search window
      openingWindow(revealWindowBG, revealWindow, searchWindow);
    }
  }, [searchState]);
  
  // track field
  const handleOnChange = (e) => {
    handleChangeField(e.target.value, e.target.name);
  };

  // Request auto-suggestion
  const suggestClicked = (place) => {
    handleSuggestion(place);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Je suis bien là');
  };

  return (
    <div className="searchBar" ref={el => (searchWindow = el)}>
      <div ref={el => (revealWindowBG = el)} className="searchBar__secondBackground" />
      <div ref={el => (revealWindow = el)} className="searchBar__main">
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
            <form onSubmit={handleSubmit} className="searchBar__main__container__bar__form">
              <input
                className="searchBar__main__container__bar__form__input"
                onChange={handleOnChange}
                name="searchInput"
                type="text"
                autoComplete="off"
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

// == PropTypes
SearchBar.propTypes = {
  autocompleteList: PropTypes.array.isRequired,
  handleChangeField: PropTypes.func.isRequired,
  handleCloseSearch: PropTypes.func.isRequired,
  handleSearchInit: PropTypes.func.isRequired,
  handleSearchToggle: PropTypes.func.isRequired,
  handleSuggestion: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  searchInput: PropTypes.string.isRequired,
  searchState: PropTypes.object.isRequired
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

  handleCloseSearch: () => {
    dispatch(closeSearch());
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

export default withRouter(container);