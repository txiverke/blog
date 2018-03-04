import React from 'react'
import { Unwrapped as UnwrappedNotFound } from '../NotFound'
import { shallow } from 'enzyme'

describe('<NotFound />', () => {
  it('should render itself', () => {
    const language = { current: 'eng' }
    const location = { pathname: 'test-path' }
    const component = shallow(<UnwrappedNotFound language={language} location={location} />)
    expect(component).toMatchSnapshot()
  })
})