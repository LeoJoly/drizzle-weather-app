// == Package imports
import React from 'react';

const WeatherCard = ({ day }) => (
  <article className="weatherCard">
    {day.pressure}
  </article>
);

export default WeatherCard;