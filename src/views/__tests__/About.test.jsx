import React from 'react'
import { Unwrapped as UnwrappedAbout } from '../About'
import { shallow } from 'enzyme'

describe('<About />', () => {
  it('should render itself', () => {
    const user = { 
      completed: true,
      data: {
        bio: 'test bio',
        firstname: 'test firstname',
        lastname: 'test lastname',
        job: 'test job',
        bio: 'test bio'
      } 
    }
    const language = { current: 'eng' }
    const component = shallow(<UnwrappedAbout user={user} language={language} />)
    expect(component).toMatchSnapshot()
  })

  it('should render loader if data is not completed', () => {
    const user = { 
      completed: false,
      data: {
        bio: 'test bio',
        firstname: 'test firstname',
        lastname: 'test lastname',
        job: 'test job',
        bio: 'test bio'
      } 
    }
    const language = { current: 'eng' }
    const component = shallow(<UnwrappedAbout user={user} language={language} />)
    expect(component.find('Loader').length).toEqual(1)
  })
})