import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import effects from 'redux-effects';
import fetch from 'redux-effects-fetch';
import routes from './routes';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(
  effects,
  fetch,
  routerMiddleware(browserHistory)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={ history } routes={ routes } />
  </Provider>,
  document.getElementById('app'));
