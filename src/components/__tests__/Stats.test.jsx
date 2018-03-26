// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { Unwrapped as UnwrappedStats } from '../Stats'

const properties = {
  dispatch: jest.fn(),
  statistic: {
    completed: true,
    data: {},
    message: 'test message',
    error: false
  },
  authenticate: {
    completed: true,
    data: 'token',
    message: 'test message',
    error: false
  },
  DIC: {}
}

describe('<Stats />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedStats {...properties} />)
    expect(component).toMatchSnapshot()
  })
})