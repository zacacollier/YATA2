import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import ConnectTimer, { Timer } from './Timer';
import store from './store';

jest.mock("./index.js", () => "root");

function setup() {
  const state = store.getState();

  const props = {
    start: state.start,
    startTimer: jest.fn(),
    stopTimer: jest.fn(),
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
})
