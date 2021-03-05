// == Package imports
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Local imports
// components
import Header from '../Header';
// actions
import { handleGeoloc } from '../../store/actions';

const Weather = ({ handleGetData }) => {
  // get weather data from API
  useEffect(() => {
    handleGetData();
  })
  return (
    <>
    <Header />
    <main className="weather">
      Je suis le composant weather !
    </main>
    </>
  );
};

// == Prop-Types
Weather.propTypes = {
  handleGetData: PropTypes.func.isRequired,
};

// == Container
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleGetData: () => {
    dispatch(handleGeoloc(ownProps.match.params.slug));
  },
});

const container = connect(null, mapDispatchToProps)(Weather);

export default withRouter(container);