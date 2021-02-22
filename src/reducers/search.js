// == Actions
import {
  AUTOCOMPLETE_SUCCESS,
  CHANGE_FIELD,
  SUGGEST
} from '../store/actions';

const initialState = {
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
      }

    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;