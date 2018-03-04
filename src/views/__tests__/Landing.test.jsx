import React from 'react'
import { Unwrapped as UnwrappedLanding } from '../Landing'
import { shallow } from 'enzyme'

describe('<Landing />', () => {
  it('should render itself', () => {
    const language = { current: 'eng' }
    const component = shallow(<UnwrappedLanding language={language} />)
    expect(component).toMatchSnapshot()
  })
})