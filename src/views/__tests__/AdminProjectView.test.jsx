// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { Unwrapped as UnwrappedAdminProjectView } from '../AdminProjectView'

function setup() {
  const props = {
    dispatch: jest.fn(),
    item: {
      data: {},
      message: 'Just a fake message',
      error: false,
      completed: true
    },
    authenticate: { 
      completed: true,
      data: '',
      message: '',
      error: false
    },
    match: { params: { id: '1'}}
  }

  const enzymeWrapper = mount(<UnwrappedAdminProjectView {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('<AdminProjectView />', () => {
  it('should render itself', () => {
    const dispatch = jest.fn()
    const item = {
      data: {},
      message: 'Just a fake message',
      error: false,
      completed: true
    }
    const authenticate = { 
      completed: true,
      data: '',
      message: '',
      error: false
    }
    const match = { params: { id: '1'}}
    const component = shallow(<UnwrappedAdminProjectView 
      dispatch={dispatch}
      item={item}
      authenticate={authenticate}
      match={match}
    />)

    expect(component).toMatchSnapshot()
  })

  it('should render itself', () => {
    const dispatch = jest.fn()
    const item = {
      data: {},
      message: 'Just a fake message',
      error: false,
      completed: false
    }
    const authenticate = { 
      completed: true,
      data: '',
      message: '',
      error: false
    }
    const match = { params: { id: '1'}}
    const component = shallow(<UnwrappedAdminProjectView 
      dispatch={dispatch}
      item={item}
      authenticate={authenticate}
      match={match}
    />)

    expect(component.find('Loader').length).toEqual(1)
  })

})