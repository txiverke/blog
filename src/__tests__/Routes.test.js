// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import Routes from '../Routes'

describe('<Routes />', () => {
  it('should render itself', () => {
    const component = shallow(<Routes />)
    expect(component).toMatchSnapshot()
  })
})