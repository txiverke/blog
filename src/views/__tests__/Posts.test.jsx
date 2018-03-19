// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { Unwrapped as UnwrappedPosts } from '../Posts'

const properties = {
  dispatch: jest.fn(),
  posts: {
    completed: true,
    data: [{ 
      created: "2018-02-16T00:25:46.636Z",
      _id: "5a86250a6e51f10ae32d5bc1",
      title: "Just a new post",
      content: "Just a new postJust a new postJust a new post",
      tags: "Just a new post",
      link: "https://google.com",
      background: "69372c7db575f3e1483e66bbe30d55b91518781651399.jpeg",
      __v: 0,
      }],
    message: 'string',
    error: false
  },
  tags: {
    completed: true,
    data: ['test'],
    message: 'tag fake message',
    error: false
  },
  language: { current: 'eng'}
}

describe('<Posts />', () => {
  it('should render itself', () => {
    const component = shallow(<UnwrappedPosts {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should render Loader is data is not completed', () => {
    properties.posts.completed = false
    const component = shallow(<UnwrappedPosts {...properties} />)
    expect(component.find('Loader').length).toEqual(1)
  })

  it('should render the right number of Items', () => {
    properties.posts.completed = true
    const items = properties.posts.data.length
    const component = shallow(<UnwrappedPosts {...properties} />)
    expect(component.find('PostList').length).toEqual(1)
  })

})