// @flow

import React from 'React'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Unwrapped as UnwrappedHeader } from '../Header'

const properties = {
  dispatch: jest.fn(),
  authenticate: {
    completed: true,
    data: 'token',
    message: 'fake message',
    error: false
  },
  language: { current: 'eng' },
  scroll: true
}

function setup() {
  const props = properties

  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <UnwrappedHeader {...props} />
    </MemoryRouter>
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<Header />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedHeader {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should dispatch updateAppLanguage action', () => {
    properties.authenticate.data = ''
    const { enzymeWrapper, props } = setup()
    expect(props.dispatch.mock.calls.length).toEqual(0)
    enzymeWrapper.find('.app-header-nav-lang').simulate('click')
    expect(props.dispatch.mock.calls.length).toEqual(1)
  })
})