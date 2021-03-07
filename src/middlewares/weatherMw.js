// == Package imports
import axios from 'axios';

// == Local imports
// actions
import { HANDLE_GEOLOC } from '../store/actions';
import { getWeatherSuccess, handleGeolocSuccess } from '../store/actions';
// keys
const hereKey = process.env.REACT_APP_HERE_KEY;
const weatherKey = process.env.REACT_APP_WEATHER_KEY;

const weatherMw = store => next => action => {
  switch (action.type) {
    case HANDLE_GEOLOC: {
      const config = {
        method: 'get',
        url: `https://geocode.search.hereapi.com/v1/geocode?q=${action.slug}&apiKey=${hereKey}`,
      };

      // get goecode position
      axios(config)
        .then(response => {
          const position = response.data.items[0].position;
          const label = response.data.items[0].address.label
          store.dispatch(handleGeolocSuccess(position, label));
          
          const config = {
            method: 'get',
            url: `https://api.openweathermap.org/data/2.5/onecall?lat=${position.lat}&lon=${position.lng}&units=metric&exclude=minutely&appid=${weatherKey}`
          };

          // get forecast
          axios(config)
            .then(res => {
              store.dispatch(getWeatherSuccess(res.data.current, res.data.daily, res.data.hourly));
            })
        }).catch(error => {
          console.error(error);
        });

      break;
    };

    default: next(action);
  };
};

export default weatherMw;