// == Package imports
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

// == Local imports
// components
import Header from '../Header';
import WeatherCard from './WeatherCard';
// actions
import { changeLoading, handleGeoloc } from '../../store/actions';
// utils
import { dateCalculator, iconPaser } from '../../utils';

const Weather = ({ daily, handleGetData, isLoading, label, position, slug }) => {
  const [ forecasts, setForecasts ] = useState([]);
  const [ current, setCurrent ] = useState(null);

  // get weather data from API
  useEffect(() => {
    handleGetData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

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
                return <li key={day.date} onClick={() => {setCurrent(day)}}><WeatherCard key={day.dt} day={day} current={current} /></li>
              })}
            </ul>
          </section>

          {current && (
            <section className="weather__container__forecast">
              <div className="weather__container__forecast__times">
                <h2 className="weather__container__forecast__times__date">{dayjs(current.date).format('dddd DD MMMM YYYY')}</h2>
                <div className="weather__container__forecast__times__sun">
                  <p>Sunrise <span>{dayjs(current.sunrise).format('hh:mm')}</span></p>
                  <p>Sunset <span>{dayjs(current.sunset).format('hh:mm')}</span></p>
                </div>
              </div>
              <div className="weather__container__forecast__info">
                <div className="weather__container__forecast__info__main">
                  <div className="weather__container__forecast__info__main__icon">
                    {iconPaser(current.weather[0].icon)}
                  </div>
                  <p className="weather__container__forecast__info__main__description">{current.weather[0].description}</p>
                  <div className="weather__container__forecast__info__main__temps">
                    <h3 className="weather__container__forecast__info__main__temps__title">
                      Temperature
                    </h3>
                    <div className="weather__container__forecast__info__main__temps__el">
                      <p>Max <span>{current.temp.max}°C</span></p>
                      <p>Min <span>{current.temp.min}°C</span></p>
                      <p>Feel <span>{current.feels_like.day}°C</span></p>
                    </div>
                  </div>
                </div>
                <div className="weather__container__forecast__info__details">
                  <div className="weather__container__forecast__info__details__top">
                    <div className="weather__container__forecast__info__details__top__el">
                      <h3>Humidity</h3>
                      <span>{current.humidity}%</span>
                      <p>Expressed as a percentage of the maximum amount of water vapor the air can hold at the same temperature.</p>
                    </div>
                    <div className="weather__container__forecast__info__details__top__el">
                      <h3>Pressure</h3>
                      <span>{current.pressure} hPa</span>
                      <p>Falling air pressure indicates that bad weather is coming, while rising air pressure indicates good weather.</p>
                    </div>
                  </div>
                  <div className="weather__container__forecast__info__details__bottom">
                    <div className="weather__container__forecast__info__details__bottom__el">
                      <h3>Wind</h3>
                      <span>{current.wind_speed} Km/h</span>
                      <p>Well, I'm pretty sure you know what "wind" means. If it indicates more than 0Km/h there will be some wind.</p>
                    </div>
                    <div className="weather__container__forecast__info__details__bottom__el">
                      <h3>UV index</h3>
                      <span>{current.uvi}</span>
                      <p>UV Index measures UV levels on a scale from 0 to 11+. Sun protection is recommended when UV levels are 3 or higher.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
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
const mapStateToProps = (state, ownProps) => ({
  daily: state.weather.daily,
  isLoading: state.weather.isLoading,
  label: state.weather.label,
  position: state.weather.position,
  slug: ownProps.match.params.slug,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleGetData: () => {
    dispatch(changeLoading());
    dispatch(handleGeoloc(ownProps.match.params.slug));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Weather);

export default withRouter(container);