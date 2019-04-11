import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import home from './home';

const rootReducer = combineReducers({
  routing,
  form,
  home,
});

export default rootReducer;
