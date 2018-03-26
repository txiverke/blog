// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Unwrapped as UnwrappedSearch } from '../Search'

const properties = {
  tags: ['test'],
  handleTagClick: jest.fn(),
  handleResetClick: jest.fn(),
  scroll: false
}

function setup() {
  const props = properties

  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']} > 
      <UnwrappedSearch {...props} /> 
    </MemoryRouter>
  )

  return {
    props,
    enzymeWrapper
  }

}

describe('<Search />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedSearch {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should change the className when scroll is true', () => {
    properties.scroll = true
    const component = shallow(<UnwrappedSearch {...properties} />)
    expect(component.find('.app-sarch-bg').length).toEqual(0)
    expect(component.find('.app-search-bg-opaque').length).toEqual(1)
  })

  it('should call handleResetClick prop', () => {
    const { enzymeWrapper, props } = setup()
    expect(props.handleResetClick.mock.calls.length).toEqual(0)
    enzymeWrapper.find('.app-search-loupe').simulate('click')
    expect(props.handleResetClick.mock.calls.length).toEqual(1)
  })

  it('should call handleTagClick prop', () => {
    const { enzymeWrapper, props } = setup()
    expect(props.handleTagClick.mock.calls.length).toEqual(0)
    enzymeWrapper.find('Tag').props().handleClick()
    expect(props.handleTagClick.mock.calls.length).toEqual(1)
  })
})