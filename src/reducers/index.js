// == Package Imports
import { combineReducers } from 'redux';

// == Local imports
import searchReducer from './search';

// == Reducer
export default combineReducers({
  search: searchReducer,
});