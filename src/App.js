// @flow
import React from 'react';
import { connect } from 'react-redux';
import * as A from './actions';
import './App.css';

const App = ({
  start,
  startTimer, stopTimer,
} : {
  start: string,
  startTimer: Function, stopTimer: Function,
}) =>
  <div className="App">
    <div className="App-header">
      <h1>{start}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  </div>

export default connect(
  state => ({
    start: state.start
  }),
  {
    startTimer: A.startTimer,
    stopTimer: A.stopTimer,
  }
)(App)
