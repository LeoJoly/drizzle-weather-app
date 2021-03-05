// == Actions
import {
  HANDLE_GEOLOC_SUCCESS,
} from '../store/actions';

const initialState = {
  position: {},
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_GEOLOC_SUCCESS:
      return {
        ...oldState,
        position: action.position,
      };

    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;