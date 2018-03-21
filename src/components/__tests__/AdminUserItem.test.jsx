// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Unwrapped as UnwrappedAdminUserItem } from '../AdminUserItem'

const properties = {
  dispatch: jest.fn(),
  user: {
    completed: true,
    data: {},
    message: 'fake message',
    error: false
  },
  handleClick: jest.fn()
}

function setup() {
  const props = properties

  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <UnwrappedAdminUserItem {...props} />
    </MemoryRouter>
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<AdminUserItem />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedAdminUserItem {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should render Loader if there is no data', () => {
    properties.user.completed = false
    const component = shallow(<UnwrappedAdminUserItem {...properties} />)
    expect(component.find('Loader').length).toEqual(1)
  })

  it('should render the form if there is data', () => {
    properties.user.completed = true
    const component = shallow(<UnwrappedAdminUserItem {...properties} />)
    expect(component.find('Loader').length).toEqual(0)
    expect(component.find('.app-grid').length).toEqual(1)
  })

  it('should sent the form onSubmit', () => {
    const { enzymeWrapper, props } = setup()
    const mockedEvent = { preventDefault: function(){}}
    expect(props.handleClick.mock.calls.length).toEqual(0)
    enzymeWrapper.find('form').simulate('submit', mockedEvent)
    expect(props.handleClick.mock.calls.length).toEqual(1)
  })
})