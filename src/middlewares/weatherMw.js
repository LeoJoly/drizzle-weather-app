// == Package imports
import axios from 'axios';

// == Local imports
// actions
import { HANDLE_GEOLOC } from '../store/actions';
import { handleGeolocSuccess } from '../store/actions';
// keys
import { hereKey } from './apiKeys';

const weatherMw = store => next => action => {
  switch (action.type) {
    case HANDLE_GEOLOC: {
      const config = {
        method: 'get',
        url: `https://geocode.search.hereapi.com/v1/geocode?q=${action.slug}&apiKey=${hereKey}`,
      };

      axios(config)
        .then(response => {
          store.dispatch(handleGeolocSuccess(response.data.items[0].position));
          console.log(response.data.items[0].position);
        }).catch(error => {
          console.error(error);
        });

      break;
    };

    default: next(action);
  };
};

export default weatherMw;