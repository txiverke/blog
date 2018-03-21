// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import AdminPostItem from '../AdminPostItem'

let properties = {
  label: 'test label',
  handlePost: jest.fn(),
  data: {}
}

function setup () {
  const props = properties

  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <AdminPostItem {...props} />
    </MemoryRouter>
  ) 

  return {
    props,
    enzymeWrapper
  }
}

describe('<AdminPostItem />', () => {
  it('should render itself', () => {
    const component = shallow(<AdminPostItem {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should not render the toogle button if there is data', () => {
    properties.data = { test: true }
    const component = shallow(<AdminPostItem {...properties} />)
    expect(component.find('header > .btn').length).toEqual(0)
  })

  it('should sent the data onSubmit the form', () => {
    const { enzymeWrapper, props } = setup()
    expect(props.handlePost.mock.calls.length).toEqual(0)
    enzymeWrapper.find('form').simulate('submit')
    expect(props.handlePost.mock.calls.length).toEqual(1)
  })

})