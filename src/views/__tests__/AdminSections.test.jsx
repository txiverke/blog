// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { Unwrapped as UnwrappedAdminSections } from '../AdminSections'

const properties = {
  authenticate: { 
    completed: true,
    data: '',
    message: '',
    error: false
  },
  location: {
    pathname: '/'
  }
}

describe('<AdminSections />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedAdminSections {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should redirect if user is not authenticate', () => {
    const component = shallow(<UnwrappedAdminSections {...properties} />)
    expect(component.find('Redirect').length).toEqual(1)
  })

  it('should render the component if data is defined', () => {
    properties.authenticate.data = 'test'
    properties.location.pathname = 'about-me' 
    const component = shallow(<UnwrappedAdminSections {...properties} />)
    expect(component.find('.app-view').length).toEqual(1)
  })
})