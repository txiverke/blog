// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { Unwrapped as UnwrappedAdmin} from '../Admin'

describe('<Admin />', () => {
  it('should render itself', () => {
    const authenticate = { data: true }
    const language = { current: 'eng' }
    const component = shallow(<UnwrappedAdmin authenticate={authenticate} language={language} />)
    expect(component).toMatchSnapshot()
    expect(component.find('.app-view').length).toEqual(1)
  })

  it('should render Redirect is user is not authenticate', () => {
    const authenticate = { data: false }
    const language = { current: 'eng' }
    const component = shallow(<UnwrappedAdmin authenticate={authenticate} language={language} />)
    expect(component.find('.app-view').length).toEqual(0)
    expect(component.find('Redirect').length).toEqual(1)
  })
})