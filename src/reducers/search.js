// == Actions
import {
  AUTOCOMPLETE_SUCCESS,
  CHANGE_FIELD,
  SUGGEST,
  TOGGLE,
} from '../store/actions';

const initialState = {
  searchState: false,
  searchInput: '',
  autocompleteList: [],
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case AUTOCOMPLETE_SUCCESS:
      return {
        ...oldState,
        autocompleteList: action.list,
      }
    
    case CHANGE_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };

    case SUGGEST:
      return {
        ...oldState,
        searchInput: action.place,
        autocompleteList: [],
      };

    case TOGGLE:
      return {
        ...oldState,
        searchState: !oldState.searchState,
      };

    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;