// @flow

import React from 'react'
import { shallow } from 'enzyme'
import PostList from '../PostList'

const created = new Date('2018-03-14').toLocaleDateString()

const properties = {
  list: [
    {
      created,
      _id: "5aa9aa3d8bc34eabc8c7e043",
      title: "tesing is nicesss",
      content: "just testing the react components",
      tags: "rest",
      link: "localhost:3000/404",
      background: "e17f8d88376301da04b72153a29303631521068605128.jpeg",
      __v: 0
    },
    {
      created,
      _id: "5aa9aa3d8bc34eabc8c7e044",
      title: "tesing is nicesss",
      content: "just testing the react components",
      tags: "rest",
      link: "localhost:3000/404",
      background: "e17f8d88376301da04b72153a29303631521068605128.jpeg",
      __v: 0
    }
  ],
  DIC: {
    NO_POSTS_MSG: 'No post message test',
    POSTED_AT: 'Posted at test'
  }
}

describe('<PostList />', () => {
  it('should render itself', () => {
    const component = shallow(<PostList {...properties} />)
    expect(component).toMatchSnapshot()
  })

  it('should render the right number of posts', () => {
    const component = shallow(<PostList {...properties} />)
    expect(component.find('article').length).toEqual(2)
  })

  it('should render the no data message when there is not data', () => {
    properties.list.splice(0)
    const component = shallow(<PostList {...properties} />)
    expect(component.find('article').length).toEqual(0)
    expect(component.find('.txt').length).toEqual(1)
    expect(component.find('.txt').text()).toEqual(properties.DIC.NO_POSTS_MSG)
  })
})