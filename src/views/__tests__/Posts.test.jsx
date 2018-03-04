import React from 'react'
import { Unwrapped as UnwrappedPosts } from '../Posts'
import { shallow, render } from 'enzyme'

describe('<Posts />', () => {
  it('should render itself', () => {
    const posts = {
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
    }
    const tags = ['']
    const language = { current: 'eng' }
    const component = shallow(<UnwrappedPosts posts={posts} tags={tags} language={language} />)
    expect(component).toMatchSnapshot()
  })

})