// == Package imports
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// == Local imports
// reducer
import rootReducer from '../reducers';
// middlewares
import searchMw from '../middlewares/searchMw';

// == Store
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(searchMw),
  ),
);

export default store;
