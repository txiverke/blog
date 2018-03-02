import React from 'react'
import Footer from '../Footer'
import { shallow } from 'enzyme'

describe('<Footer />', () => {
  it('should render itself', () => {
    const year = new Date()
    const component = shallow(<Footer year={year} />)
    expect(component).toMatchSnapshot()
  })
})