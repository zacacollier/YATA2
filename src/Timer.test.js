import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import Timer from './Timer';
import { store } from './index';

jest.mock("./index.js", () => "index");

describe('Timer test: ', () => {
  it('should render', () => {
    const wrapper = <Timer store={store} />
    expect(wrapper);
  })
})
