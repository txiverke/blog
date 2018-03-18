// flow

import React from 'react'
import { shallow } from 'enzyme'
import { Unwrapped as UnwrappedAdminPostView } from '../AdminPostView'

describe('<AdminPostView />', () => {
  it('should render itself', () => {
    const dispatch = jest.fn()
    const item = {
      message: 'Just a fake message',
      error: false,
      completed: true
    }
    const authenticate = {}
    const match = { params: { id: '1'}}
    const component = shallow(<UnwrappedAdminPostView 
      dispatch={dispatch}
      item={item}
      authenticate={authenticate}
      match={match}
    />)
    expect(component).toMatchSnapshot()
  })

  it('should render Loader until data is loaded', () => {
    const dispatch = jest.fn()
    const item = {
      message: 'Just a fake message',
      error: false,
      completed: false
    }
    const authenticate = {}
    const match = { params: { id: '1'}}
    const component = shallow(<UnwrappedAdminPostView 
      dispatch={dispatch}
      item={item}
      authenticate={authenticate}
      match={match}
    />)
    expect(component.find('Loader').length).toEqual(1)
  })
})