// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Unwrapped as UnwrappedAdminProjectView } from '../AdminProjectView'

const properties = {
  dispatch: jest.fn(),
  item: {
    data: {},
    message: 'Just a fake message',
    error: false,
    completed: true
  },
  authenticate: { 
    completed: true,
    data: 'token',
    message: '',
    error: false
  },
  match: { params: { id: '1'}}
}

function setup() {
  const props = properties

  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <UnwrappedAdminProjectView {...props} />
    </MemoryRouter>
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<AdminProjectView />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedAdminProjectView {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should render Redirect if user is not authenticate', () => {
    properties.authenticate.data = ''
    const component = shallow(<UnwrappedAdminProjectView {...properties} />)
    expect(component.find('Redirect').length).toEqual(1)
  })

  it('should render Loader if no data', () => {
    properties.item.completed = false
    properties.authenticate.data = 'test'
    const component = shallow(<UnwrappedAdminProjectView {...properties} />)
    expect(component.find('Redirect').length).toEqual(0)
    expect(component.find('Loader').length).toEqual(1)
  })

  it('should render Project data if there is data', () => {
    properties.item.completed = true
    properties.item.data = { test: true }
    const component = shallow(<UnwrappedAdminProjectView {...properties} />)
    expect(component.find('Redirect').length).toEqual(0)
    expect(component.find('Loader').length).toEqual(0)
    expect(component.find('AdminProjectItem').length).toEqual(1)
  })

  it('should call updateProject and dispatch updateProjectData action', () => {
    const { enzymeWrapper, props } = setup()  
    const item = enzymeWrapper.find('AdminProjectItem')
    const currentCalls = props.dispatch.mock.calls.length
    item.props().handleProject({}, '')
    expect(props.dispatch.mock.calls.length).toBe(currentCalls)
    item.props().handleProject({test: true}, '1')
    expect(props.dispatch.mock.calls.length).toBe(currentCalls + 1)
  })
})