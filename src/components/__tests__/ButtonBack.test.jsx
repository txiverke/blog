// @flow

import React from 'react'
import { shallow } from 'enzyme'
import ButtonBack from '../ButtonBack'

describe('<ButtonBack />', () => {
  it('should render itself', () => {
    const component = shallow(<ButtonBack />)
    expect(component).toMatchSnapshot()
  })

  it('should render the optional props', () => {
    const label = 'test label'
    const route = '/test'
    const component = shallow(<ButtonBack label={label} route={route} />)
    expect(component).toMatchSnapshot()
  })
})