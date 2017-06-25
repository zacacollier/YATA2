// @flow
import { combineEpics } from 'redux-observable';
import Rx from 'rxjs';

const start = action$ =>
    action$.ofType('timer/START')
    .mergeMap(action =>
      Rx.Observable.timer(0, 1000)
        .map(() => ({ type: 'timer/TICK_UP' }))
        .takeUntil(action$.ofType('timer/STOP'))
      )

const rootEpic = combineEpics(
  start,
);

export default rootEpic;
