// == Package imports
import React from 'react';
import { connect } from 'react-redux';
import { HiSearchCircle } from "react-icons/hi";
import PropTypes from 'prop-types';

// == Local imports
import logoBright from '../../assets/logos/drizzle-logo_bright.svg';
// action
import { searchInit, searchToggle } from '../../store/actions';
// utils
import { toggleSearch } from '../../utils';

// == Component
const Home = ({ searchState, handleSearchInit, handleSearchToggle }) => (
  <main className="home">
    <div className="home__container">
      <div className="home__container__intro">
        <p className="home__container__intro__wlcm">Welcome to...</p>
        <div className="home__container__intro__logo">
          <img src={logoBright} alt="Drizzle logo" />
        </div>
        <p className="home__container__intro__desc">The cool weather app. It's fun, accurate and easy to use. Just start by choosing a location.</p>
      </div>
      <button
        className="home__container__btn"
        onClick={() => {toggleSearch(searchState.init, searchState.clicked, handleSearchInit, handleSearchToggle)}}
      >
        <p>Search place</p>
        <HiSearchCircle className="home__container__btn__icon" />
      </button>
    </div>
  </main>
);

// == PropTypes
Home.propTypes = {
  searchState: PropTypes.object.isRequired,
  handleSearchInit: PropTypes.func.isRequired,
  handleSearchToggle: PropTypes.func.isRequired
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

const container = connect(mapStateToProps, mapDispatchToProps)(Home);

export default container;