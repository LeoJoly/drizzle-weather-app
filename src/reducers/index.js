// == Package Imports
import { combineReducers } from 'redux';

// == Local imports
import searchReducer from './search';
import weatherReducer from './weather';

// == Reducer
export default combineReducers({
  search: searchReducer,
  weather: weatherReducer,
});