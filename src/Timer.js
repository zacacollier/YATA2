// @flow
import React from 'react';
import { connect } from 'react-redux';
import * as A from './actions';

export const Timer = ({
  // State-to-Props
  start,
  // Dispatch-to-Props
  startTimer, stopTimer,
} : {
  // flow
  start: string,
  startTimer: Function, stopTimer: Function,
}) =>
  <div className="App-header">
    <h1>{start}</h1>
    <button className='Timer-startTimer' onClick={startTimer}>Start</button>
    <button className='Timer-stopTimer' onClick={stopTimer}>Stop</button>
  </div>
;

export default connect(
  state => ({
    start: state.start
  }),
  {
    startTimer: A.startTimer,
    stopTimer: A.stopTimer,
  }
)(Timer)
