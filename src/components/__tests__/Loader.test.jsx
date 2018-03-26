// @flow

import React from 'react'
import { shallow } from 'enzyme'
import Loader from '../Loader'

describe('<Loader />', () => {
  it('should render itself', () => {
    const msg = 'Just a test message'
    const component = shallow(<Loader msg={msg} />)
    expect(component).toMatchSnapshot()
  })
  
})