// @flow

import React from 'react'
import Footer from '../Footer'
import { shallow } from 'enzyme'

xdescribe('<Footer />', () => {
  it('should render itself', () => {
    const year = 'Wed Mar 21 2018 17:56:00 GMT-0400 (EDT)'
    const component = shallow(<Footer year={year} />)
    expect(component).toMatchSnapshot()
  })
})