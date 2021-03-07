// == Package imports
import React from 'react';
import dayjs from 'dayjs';

// == Local imports
import { iconPaser } from '../../utils';

const WeatherCard = ({ day, current }) => {
  const cardCss = day.date === current.date
    ? 'weatherCard current'
    : 'weatherCard'
  
  return (
    <article className={cardCss}>
      <p className="weatherCard__date">{dayjs(day.date).format('ddd. D MMM.')}</p>
      <div className="weatherCard__icon">{iconPaser(day.weather[0].icon)}</div>
      <p className="weatherCard__temp">{day.temp.day}°C</p>
    </article>
  )
};

export default WeatherCard;
