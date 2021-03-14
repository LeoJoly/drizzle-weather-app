// == Package imports
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// == Local imports
// reducer
import rootReducer from '../reducers';
// middlewares
import searchMw from '../middlewares/searchMw';
import weatherMw from '../middlewares/weatherMw';

// == Store
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(searchMw),
    applyMiddleware(weatherMw),
  ),
);

export default store;
