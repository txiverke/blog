// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import AdminProjectItem from '../AdminProjectItem'

let properties = {
  label: 'test label',
  handleProject: jest.fn(),
  data: {}
}

function setup () {
  const props = properties

  const handleChange = jest.fn()

  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <AdminProjectItem {...props} />
    </MemoryRouter>
  ) 

  return {
    props,
    handleChange,
    enzymeWrapper
  }
}

describe('<AdminProjectItem />', () => {
  it('should render itself', () => {
    const component = shallow(<AdminProjectItem {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should render the toogle button if no data', () => {
    const component = shallow(<AdminProjectItem {...properties} />)
    expect(component.find('header > .btn').length).toEqual(1)
  })

  it('should not render the toogle button if there is data', () => {
    properties.data = { test: true }
    const component = shallow(<AdminProjectItem {...properties} />)
    expect(component.find('header > .btn').length).toEqual(0)
  })

  it('should sent the data onSubmit the form', () => {
    const { enzymeWrapper, props } = setup()
    expect(props.handleProject.mock.calls.length).toEqual(0)
    enzymeWrapper.find('form').simulate('submit')
    expect(props.handleProject.mock.calls.length).toEqual(1)
  })

})