// @flow

import React from 'react'
import { shallow } from 'enzyme'
import Background from '../Background'

jest.useFakeTimers()

describe('<Background />', () => {
  it('should render itself', () => {
    const title = 'Just a fake title'
    const component = shallow(<Background title={title} />)
    expect(component).toMatchSnapshot()
    expect(component.find('img').props().alt).toEqual(`Background of ${title}`)
    expect(setTimeout).toHaveBeenCalledTimes(1);
  })
})