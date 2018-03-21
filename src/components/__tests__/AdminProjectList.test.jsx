// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Unwrapped as UnwrappedAdminProjectList } from '../AdminProjectList'

const properties = {
  dispatch: jest.fn(),
  projects: {
    completed: true,
    data: [],
    message: 'fake message',
    error: false
  },
  handleCreateProject: jest.fn()
}

describe('<AdminPostList />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedAdminProjectList {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should render Loader if there is not data', () => {
    properties.projects.completed = false
    const component = shallow(<UnwrappedAdminProjectList {...properties} />)
    expect(component.find('Loader').length).toEqual(1)  
  })

  it('should render the list if there is data', () => {
    properties.projects.completed = true
    const component = shallow(<UnwrappedAdminProjectList {...properties} />)
    expect(component.find('Loader').length).toEqual(0)
    expect(component.find('.app-content-grid').length).toEqual(1)      
  })

})