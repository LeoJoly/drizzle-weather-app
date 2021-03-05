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

const Weather = ({ handleGetData, label }) => {
  // get weather data from API
  useEffect(() => {
    handleGetData();
  })
  return (
    <>
    <Header />
    <main className="weather">
      <h1>{label}</h1>
    </main>
    </>
  );
};

// == Prop-Types
Weather.propTypes = {
  handleGetData: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

// == Container
const mapStateToProps = (state) => ({
  label: state.weather.label,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleGetData: () => {
    dispatch(handleGeoloc(ownProps.match.params.slug));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Weather);

export default withRouter(container);