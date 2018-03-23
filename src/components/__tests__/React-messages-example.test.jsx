// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import ReactMessagesExample from '../React-messages-example'

function setup() {
  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <ReactMessagesExample />
    </MemoryRouter>
  )

  return {
    enzymeWrapper
  }
}

describe('<ReactMessagesExample />', () => {
  it('should render itself', () => {
    const component = shallow(<ReactMessagesExample />)
    expect(component).toMatchSnapshot()
  })

  it('should render the default data', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('M').props().message).toEqual('Just an initial message')
    expect(enzymeWrapper.find('M').props().icon).toEqual('heart')
  })

  it('should add a new message', () => {
    const { enzymeWrapper } = setup()
    const testMessage = 'test message'
    const input = enzymeWrapper.find('.app-form-input-with-button')
    const button = enzymeWrapper.find('button')
    const mockedEvent = {
      target: {
        value: testMessage
      }
    }
    input.simulate('change', mockedEvent)
    button.simulate('click')
    expect(enzymeWrapper.find('M').props().message).toEqual(testMessage)
  })

  it('should add a new icon', () => {
    const { enzymeWrapper } = setup()
    const testIcon = 'test'
    const select = enzymeWrapper.find('.app-select')
    const button = enzymeWrapper.find('button')
    const mockedEvent = {
      target: {
        value: testIcon
      }
    }
    select.simulate('change', mockedEvent)
    button.simulate('click')
    expect(enzymeWrapper.find('M').props().icon).toEqual(testIcon)
  })

  it('should add a new time range', () => {
    const { enzymeWrapper } = setup()
    const testRange = '10'
    const range = enzymeWrapper.find('.app-range')
    const button = enzymeWrapper.find('button')
    const mockedEvent = {
      target: {
        value: testRange
      }
    }
    range.simulate('change', mockedEvent)
    button.simulate('click')
    expect(enzymeWrapper.find('M').props().duration).toEqual(10000)
  })

  it('should render an error', () => {
    const { enzymeWrapper } = setup()
    const testError = true
    const error = enzymeWrapper.find('#isError')
    const button = enzymeWrapper.find('button')
    const mockedEvent = {
      target: {
        value: testError
      }
    }
    error.simulate('change', mockedEvent)
    button.simulate('click')
    expect(enzymeWrapper.find('M').props().error).toEqual(testError)
  })

})