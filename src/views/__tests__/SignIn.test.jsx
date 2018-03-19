// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { Unwrapped as UnwrappedSignIn } from '../SignIn'

const properties = {
  authenticate: {
    completed: true,
    data: 'token',
    message: 'authenticate fake message',
    error: false
  },
  dispatch: jest.fn()
}

describe('<SignIn />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedSignIn {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should Redirect if user is authenticate', () => {
    const component = shallow(<UnwrappedSignIn {...properties} />)
    expect(component.find('Redirect').length).toEqual(1)
  })

  it('should Redirect if user is authenticate', () => {
    properties.authenticate.data = ''
    const component = shallow(<UnwrappedSignIn {...properties} />)
    expect(component.find('.app-view').length).toEqual(1)
  })
})