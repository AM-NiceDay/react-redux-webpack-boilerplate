import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import effects from 'redux-effects';
import fetch from 'redux-effects-fetch';
import routes from './routes';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(effects, fetch));

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('app'));
