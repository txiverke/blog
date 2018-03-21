// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import AdminList from '../AdminList'

const properties = {
  type: 'posts',
  data: [
    {
      _id: '1',
      title: 'just a fake title'
    }
  ],
  handleRemove: jest.fn()
}

function setup() {
  const props = properties

  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <AdminList {...props} />
    </MemoryRouter>
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<AdminList />', () => {
  it('should render itself', () => {
    const component = shallow(<AdminList {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should call handleRemove prop', () => {
    const { enzymeWrapper, props } = setup()
    expect(props.handleRemove.mock.calls.length).toEqual(0)
    enzymeWrapper.find('button').simulate('click')
    expect(props.handleRemove.mock.calls.length).toEqual(1)
  })

  it('should render the no data message', () => {
    properties.data = []
    const component = shallow(<AdminList {...properties} />)
    expect(component.find('h3.txt').text()).toEqual('No posts created.')
  })
})