// == Package imports
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Local imports
// components
import Header from '../Header';
import WeatherCard from './WeatherCard';
// actions
import { changeLoading, handleGeoloc } from '../../store/actions';
// utils
import { dateCalculator } from '../../utils';

const Weather = ({ daily, handleGetData, isLoading, label, position }) => {
  const [ forecasts, setForecasts ] = useState([]);
  const [ current, setCurrent ] = useState({});

  // get weather data from API
  useEffect(() => {
    handleGetData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // process data
  useEffect(() => {
    // add date to data
    const newForecasts = daily.map((day, index) => {
      const date = dateCalculator(index);
      day.date = date;
      return day;
    });

    setForecasts(newForecasts);
    setCurrent(newForecasts[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daily]);

  return (
    <>
    <Header />
    <main className="weather">

      {/* Display loader when data is loading */}
      {isLoading && (
        <div>Chargement...</div>
      )}

      {/* Display data when loaded */}
      {!isLoading && (
        <div className="weather__container">
          <section className="weather__container__header">
            <h1 className="weather__container__header__title">{label}</h1>
            <p className="weather__container__header__position">
              | {position.lat}, {position.lng} |
            </p>
          </section>
          <section className="weather__container__daily">
            <ul className="weather__container__daily__forecasts">
              {forecasts.map((day)=> {
                return <li key={day.date} onClick={() => {setCurrent(day)}}><WeatherCard key={day.dt} day={day} /></li>
              })}
            </ul>
          </section>
        </div>
      )}
    </main>
    </>
  );
};

// == Prop-Types
Weather.propTypes = {
  daily: PropTypes.array.isRequired,
  handleGetData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  position: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
};

// == Container
const mapStateToProps = (state) => ({
  daily: state.weather.daily,
  isLoading: state.weather.isLoading,
  label: state.weather.label,
  position: state.weather.position,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleGetData: () => {
    dispatch(changeLoading());
    dispatch(handleGeoloc(ownProps.match.params.slug));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Weather);

export default withRouter(container);