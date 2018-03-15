// @flow

import React from 'react'
import { shallow } from 'enzyme'
import RoutesAsync from '../RoutesAsync'

describe('<RoutesAsync />', () => {
  it('should render itself', () => {
    const fakeComponent = () => <div>Just a fake component</div> 
    const fakePromise = { default: fakeComponent }
    const component = shallow(<RoutesAsync loadingPromise={fakePromise} />)
    expect(component).toMatchSnapshot()
  })
})