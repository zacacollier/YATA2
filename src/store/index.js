import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import rootEpic from '../epics';

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
export default createStore(
  reducers,
  withMiddleware
)
