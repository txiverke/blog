// flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Unwrapped as UnwrappedAdminPostView } from '../AdminPostView'

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
    data: '',
    message: '',
    error: false
  },
  match: { params: { id: '1'}}
}

function setup() {
  const props = properties

  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <UnwrappedAdminPostView {...props} />
    </MemoryRouter>
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<AdminPostView />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedAdminPostView {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should render Loader if no data', () => {
    properties.item.completed = false
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('Loader').length).toEqual(1)
  })

  it('should render AdminProjectItem if there is data', () => {
    properties.item.completed = true
    properties.item.data = { test: true }
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('Loader').length).toEqual(0)
    expect(enzymeWrapper.find('AdminPostItem').length).toEqual(1)
  })

  it('should call updateProject and dispatch updateProjectData action', () => {
    const { enzymeWrapper, props } = setup()  
    const item = enzymeWrapper.find('AdminPostItem')
    const currentCalls = props.dispatch.mock.calls.length
    item.props().handlePost({}, '')
    expect(props.dispatch.mock.calls.length).toBe(currentCalls)
    item.props().handlePost({test: true}, '1')
    expect(props.dispatch.mock.calls.length).toBe(currentCalls + 1)
  })
})