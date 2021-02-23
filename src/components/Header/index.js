// -- Package imports
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiSearchCircle } from "react-icons/hi";

// == Local imports
// logo
import logoBright from '../../assets/logos/drizzle-logo_bright.svg';
// action
import { searchInit, searchToggle } from '../../store/actions';
// utils
import { toggleSearch } from '../../utils';

// == Component
const Header = ({ searchState, handleSearchInit, handleSearchToggle}) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container__logo">
          <Link to="/">
            <img src={logoBright} alt="Drizzle logo" />
          </Link>
        </div>
        <button
          onClick={() => {toggleSearch(searchState.init, searchState.clicked, handleSearchInit, handleSearchToggle)}}
          className="header__container__btn"
        >
          <p>Search place</p>
          <HiSearchCircle className="header__container__btn__icon" />
        </button>
      </div>
    </header>
  );
};

// == Container
const mapStateToProps = (state) => ({
  searchState: state.search.searchState,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchInit: () => {
    dispatch(searchInit());
  },

  handleSearchToggle: () => {
    dispatch(searchToggle());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Header);

export default container;