// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './App';
import rootEpic from './epics';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

type State = {
  +start: number,
}

const initialState: State = {
  start: 0,
}

const reducers = (state: State = initialState, action: Object): State => {
  switch(action.type) {
    case 'timer/TICK_UP':
      return { ...state, start: state.start + 1 }
    default:
      return state;
  }
}

const withMiddleware = applyMiddleware(logger, createEpicMiddleware(rootEpic));
export const store = createStore(
  reducers,
  withMiddleware
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
