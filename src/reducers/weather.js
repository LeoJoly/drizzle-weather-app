// == Actions
import {
  GET_WEATHER_SUCCESS,
  HANDLE_GEOLOC_SUCCESS,
} from '../store/actions';

const initialState = {
  label: '',
  position: {},
  current: {},
  daily: [],
  hourly: [],
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return {
        ...oldState,
        current: action.current,
        daily: action.daily,
        hourly: action.hourly,
      };

    case HANDLE_GEOLOC_SUCCESS:
      return {
        ...oldState,
        label: action.label,
        position: action.position,
      };

    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;