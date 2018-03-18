// @flow

import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Unwrapped as UnwrappedAbout } from '../About'
import { shallow } from 'enzyme'

const properties = {
  user: { 
    completed: true,
    data: {
      bio: 'test bio',
      firstname: 'test firstname',
      lastname: 'test lastname',
      job: 'test job',
      bio: 'test bio'
    },
    error: false,
    message: 'Just a fake message'
  },
  dispatch: jest.fn(),
  location: {},
  language: { current: 'eng'}
}

describe('<About />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedAbout {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should render loader if data is not completed', () => {
    properties.user.completed = false
    const component = shallow(<UnwrappedAbout {...properties} />)    
    expect(component.find('Loader').length).toEqual(1)
  })

  it('should call renderMsg and update the btn state', () => {
    properties.user.completed = true
    const component = shallow(<UnwrappedAbout {...properties} />)
    expect(component.find('.icon-cloud-download').length).toEqual(1)
    expect(component.find('.icon-like').length).toEqual(0)
    expect(component.find('a.btn-centered').text()).toEqual('Download Résumé')
    component.find('a.btn-centered').simulate('click')
    expect(component.find('.icon-cloud-download').length).toEqual(0)
    expect(component.find('.icon-like').length).toEqual(1)
    expect(component.find('a.btn-centered').text()).toEqual('Résumé downloaded')
  })
})