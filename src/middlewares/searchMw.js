// == Package imports
import axios from 'axios';

// == Local imports
// actions
import { AUTOCOMPLETE } from '../store/actions';
import { autocompleteSuccess } from '../store/actions';
// keys
const hereKey = process.env.REACT_APP_HERE_KEY;

const searchMw = store => next => action => {
  switch (action.type) {

    case AUTOCOMPLETE: {
      const { search: { searchInput }} = store.getState();

      const config = {
        method: 'get',
        url: `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${searchInput.replace(/ /g, '+')}&apiKey=${hereKey}`,
      };

      axios(config)
        .then(response => {
          store.dispatch(autocompleteSuccess(response.data.items));
        }).catch(error => {
          console.error(error);
        });

      break;
    };

    default: next(action);
  };
};

export default searchMw;