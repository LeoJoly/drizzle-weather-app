// == Actions
import {
  AUTOCOMPLETE_SUCCESS,
  CHANGE_FIELD,
  SEARCH_INIT,
  SEARCH_TOGGLE,
  SUGGEST,
} from '../store/actions';

const initialState = {
  searchState: {
    init: false,
    clicked: null,
  },
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

    case SEARCH_INIT:
      return {
        ...oldState,
        searchState: {
          init: null,
          clicked: true,
        },
      };

    case SEARCH_TOGGLE:
      return {
        ...oldState,
        searchState: {
          ...oldState.searchState,
          clicked: !oldState.searchState.clicked,
        },
      };

    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;