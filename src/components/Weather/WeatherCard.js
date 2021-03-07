// == Package imports
import React from 'react';
import dayjs from 'dayjs';

const WeatherCard = ({ day, index }) => {
  // calculate date
  const startDate = Date.now();
  const currentDate = new Date(startDate);
  currentDate.setDate(currentDate.getDate() + index);

  day.date = currentDate;

  return (
    <article className="weatherCard">
      <p className="weatherCard__date">{dayjs(day.date).format('ddd. D MMM.')}</p>
    </article>
  )
};

export default WeatherCard;

//dayjs(day.dt).format('ddd')