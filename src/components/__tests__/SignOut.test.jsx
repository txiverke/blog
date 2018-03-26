// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import SignOut from '../SignOut'

const properties = {
  label: 'test',
  handleClick: jest.fn()
}

function setup() {
  const props = properties

  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <SignOut {...props} />
    </MemoryRouter>
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<SignOut />', () => {
  it('should render itself', () => {
    const component = shallow(<SignOut {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should call handleClick prop', () => {
    const { enzymeWrapper, props } = setup()
    expect(props.handleClick.mock.calls.length).toEqual(0)
    enzymeWrapper.find('Link').simulate('click')
    expect(props.handleClick.mock.calls.length).toEqual(1)
  })
})