import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';

const enhancer = compose(
  applyMiddleware(thunk),
  persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/)),
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
