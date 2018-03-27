// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Unwrapped as UnwrappedProjects} from '../Projects'

const properties = {
  projects: {
    completed: true,
    data: [],
    message: 'fake project message',
    error: false
  },
  dispatch: jest.fn()
}

function setup() {
  const props = properties

  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <UnwrappedProjects {...props} />
    </MemoryRouter>
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<Projects />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedProjects {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should load data calling dispatch', () => {
    const { enzymeWrapper, props } = setup()  
    const currentCalls = props.dispatch.mock.calls.length
    expect(currentCalls).toBeGreaterThan(0)
  })

  it('should render Loading if no data', () => {
    const component = shallow(<UnwrappedProjects {...properties} />)
    expect(component.find('Loader').length).toEqual(1)
  })

  it('should render component if there is data', () => {
    properties.projects.data = [
      {
        created: "2018-03-14T15:35:36.142Z",
        _id: "5aa",
        title: "react-messages",
        subtitle: "A component to create messages.",
        summary: "'react-messages' is a simple react component which allows you to create messages and configre their look and feel.",
        content: "Here you can test the component and the different options that you can configure.",
        link: "https://www.npmjs.com/package/react-messages",
        background: "89e0fe2351b94644a1edb0e28adb76031521041736137.jpeg",
        __v: 0,
        extra: "React-messages-example",
      }
    ]
    const { enzymeWrapper } = setup()  
    expect(enzymeWrapper.find('Redirect').length).toEqual(1)
  })

})