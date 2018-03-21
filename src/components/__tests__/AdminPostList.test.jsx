// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { Unwrapped as UnwrappedAdminPostList } from '../AdminPostList'

const properties = {
  dispatch: jest.fn(),
  posts: {
    completed: true,
    data: [],
    message: 'fake message',
    error: false
  },
  handleClickCreate: jest.fn()
}

describe('<AdminPostList />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedAdminPostList {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should render Loader if there is not data', () => {
    properties.posts.completed = false
    const component = shallow(<UnwrappedAdminPostList {...properties} />)
    expect(component.find('Loader').length).toEqual(1)  
  })

  it('should render the list if there is data', () => {
    properties.posts.completed = true
    const component = shallow(<UnwrappedAdminPostList {...properties} />)
    expect(component.find('Loader').length).toEqual(0)
    expect(component.find('.app-content-grid').length).toEqual(1)      
  })

})