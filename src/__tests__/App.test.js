import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';

import ConnectApp, { App } from '../App';
import ConnectTimer, { Timer } from '../Timer';
import store from '../store';

function setup() {
  const state = store.getState();

  const props = {
    start: state.start,
    startTimer: jest.fn(),
    stopTimer: jest.fn(),
  }
  const wrapper = <Provider store={store}><App><Timer {...props}/></App></Provider>
  return {
    props,
    wrapper
  }
}


it('renders without crashing', () => {
  const div = document.createElement('div');
  const { props, wrapper } = setup();
  ReactDOM.render(wrapper, div);
});
