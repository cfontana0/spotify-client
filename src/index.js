import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';
import './styles/home.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import Home from './containers/home';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
