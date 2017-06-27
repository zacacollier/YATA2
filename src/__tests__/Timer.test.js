import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import ConnectApp, { App } from '../App';
import ConnectTimer, { Timer } from '../Timer';
import * as A from '../actions';
import store from '../store';

function setup(Component = Timer) {
  const state = store.getState();

  const props = {
    start: state.start,
    startTimer: A.startTimer,
    stopTimer: A.stopTimer,
  }
  const wrapper = mount(<Timer { ...props } />)
  return {
    props,
    wrapper
  }
}

describe('Timer test: ', () => {
  it('renders without exploding', () => {
    const { props, wrapper } = setup();
    expect(wrapper.find('button'))
  })

  it('has startTimer and stopTimer mapped to props', () => {
    let { wrapper, props } = setup(ConnectTimer);
    const { startTimer, stopTimer } = wrapper.props()
    expect(startTimer()).toEqual(A.startTimer());
    expect(stopTimer()).toEqual(A.stopTimer());
  })
})
