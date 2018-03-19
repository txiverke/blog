// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Unwrapped as UnwrappedProjectView } from '../ProjectView'

const properties = {
  dispatch: jest.fn(),
  match: {
    params: { 
      id: '' 
    }
  },
  projects: {
    completed: true,
    data: [],
    message: 'fake project message',
    error: false
  }
}

function setup() {
  const props = properties

  const enzymeWrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <UnwrappedProjectView {...props} />
    </MemoryRouter>
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<ProjectView />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedProjectView {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should render Loader if no data', () => {
    const component = shallow(<UnwrappedProjectView {...properties} />)
    expect(component.find('Loader').length).toEqual(1)
  })

  it('should load data calling dispatch', () => {
    const { enzymeWrapper, props } = setup()  
    const currentCalls = props.dispatch.mock.calls.length
    expect(currentCalls).toBeGreaterThan(0)
  })

  it('should render component if there is data', () => {
    properties.match.params.id='fake-slug-5aa94148c37e4894ab853a3b'
    properties.projects.data= [
      {
        created: "2018-03-14T15:35:36.142Z",
        _id: "5aa94148c37e4894ab853a3b",
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
    const { enzymeWrapper, props } = setup()  
    expect(enzymeWrapper.find('.app-article-full').length).toEqual(1)
    expect(enzymeWrapper.find('h1').text()).toEqual(properties.projects.data[0].title)
  })

  it('should not render the Project if the id does not match', () => {
    properties.match.params.id='fake-slug-5aa94148c37e4894ab853ddda3b'
    properties.projects.data= [
      {
        created: "2018-03-14T15:35:36.142Z",
        _id: "5aa94148c37e4894ab853a3b",
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
    const { enzymeWrapper, props } = setup()  
    expect(enzymeWrapper.find('.app-article-full').length).toEqual(0)
    expect(enzymeWrapper.find('Loader').length).toEqual(1)
  })
})