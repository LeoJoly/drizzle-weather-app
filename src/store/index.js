// == Package imports
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// == Local imports
// reducer
import rootReducer from '../reducers';

// == Store
const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
