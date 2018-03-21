// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import withWindow from '../withWindow'

const Component = () => <div className="test">Just a test component</div>

describe('<withWindow />', () => {
  it ('should render itself', () => {
    const component = withWindow(Component)
    const wrapper = shallow(<component />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the component', () => {
    const component = withWindow(Component)
    const wrapper = shallow(<component />)
    expect(wrapper.html()).toBeTruthy()
  });
})