// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import SignInForm from '../SignInForm'

const properties = {
  authenticate: {
    completed: true,
    data: 'test',
    message: 'test message',
    error: false
  },
  handleClick: jest.fn()
}

function setup() {
  const props = properties

  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <SignInForm {...props} />
    </MemoryRouter>
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<SignInForm />', () => {
  it('should render itself', () => {
    const component = shallow(<SignInForm {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should call handleClick prop', () => {
    const { enzymeWrapper, props } = setup()
    expect(props.handleClick.mock.calls.length).toEqual(0)
    enzymeWrapper.find('form').simulate('submit')
    expect(props.handleClick.mock.calls.length).toEqual(1)
  }) 
})