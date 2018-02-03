import React from 'react'
import Tag from '../Tag'
import { shallow } from 'enzyme'

describe('<Tag />', () => {
  it('should render itself', () => {
    const component = shallow(<Tag label="testing" />)
    expect(component).toMatchSnapshot()
  })
})