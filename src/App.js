// @flow
import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const App = ({
  start,
  startTimer, stopTimer,
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
  dispatch => ({
    startTimer: () => dispatch({ type: 'timer/START' }),
    stopTimer: () => dispatch({ type: 'timer/STOP' }),
  })
)(App)
